const _vec = new Apex.Vector3();

/**
 *@author jhui
 *@description 简单模拟天体运动组件
 *@date 2023-04-09 21:19:01
 */
export class SurroundMotion extends Apex.Behaviour {

    private _tr: Apex.Transform;

    //环绕目标
    private _targetTr: Apex.Transform;
    //环绕旋转轴
    private _surroundAxis: Apex.Vector3;
    //环绕旋转速度
    private _surroundSpeed: number;
    //环绕半径
    private _surroundRadius: number;
    //自转速度
    private _rotateSpeed: Apex.Vector3;
    //自转欧拉角
    private _euler: Apex.Euler;

    public get targetTr(): Apex.Transform {

        return this._targetTr || null;

    }

    public set targetTr(value: Apex.Transform) {

        this._targetTr = value;
        this._fixedPosition();

    }

    public get surroundAxis(): Apex.Vector3 {

        return this._surroundAxis;

    }

    public set surroundAxis(value: Apex.Vector3) {

        if (this._surroundAxis !== value) {

            this._surroundAxis.copyFrom(value);

        }

        this._fixedPosition();

    }

    public get surroundSpeed(): number {

        return this._surroundSpeed;

    }

    public set surroundSpeed(value: number) {

        this._surroundSpeed = value;

    }

    public get surroundRadius(): number {

        return this._surroundRadius;

    }

    public set surroundRadius(value: number) {

        this._surroundRadius = value;
        this._fixedPosition();

    }

    public get rotateSpeed(): Apex.Vector3 {

        return this._rotateSpeed;

    }

    public set rotateSpeed(value: Apex.Vector3) {

        if (this._rotateSpeed !== value) {

            this._rotateSpeed.copyFrom(value);

        }

    }

    protected onAwake(): void {

        this._tr = this.gameobject.transform;

        this._surroundAxis = new Apex.Vector3(0, 1, 0);
        this._surroundSpeed = 1;
        this._surroundRadius = 1;
        this._rotateSpeed = new Apex.Vector3(1, 1, 1);
        this._euler = new Apex.Euler();

    }

    onUpdate(dt: number): void {

        this._surround(dt);
        this._rotate(dt);

    }

    //公转
    private _surround(dt: number): void {

        if (this._targetTr) {

            this._tr.applyRotateAround(this._targetTr.position, this._surroundAxis, this._surroundSpeed * dt, true);

        }

    }

    //自转
    private _rotate(dt: number): void {

        this._euler.set(this._rotateSpeed.x * dt, this._rotateSpeed.y * dt, this._rotateSpeed.z * dt);
        this._tr.applyRotateByEuler(this._euler);

    }

    //安放到环绕目标所在轨道
    private _fixedPosition(): void {

        if (!this._targetTr) {

            return;

        }

        _vec.copyFrom(this._surroundAxis);
        //做细微偏移，同时偏移两个轴并且偏移量不一致的原因：避免偏移后的向量与原向量重合
        _vec.x += 0.1;
        _vec.y += 0.2;
        Apex.Vector3.cross(this._surroundAxis, _vec, _vec);
        Apex.Vector3.cross(this._surroundAxis, _vec, _vec);
        _vec.normalize().mulScalar(this._surroundRadius).add(this._targetTr.position);
        this._tr.position = _vec;

    }

}