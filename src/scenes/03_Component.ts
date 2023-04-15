//继承Behaviour以实现脚本生命周期
export async function Component(): Promise<Apex.Scene> {

    let scene = new Apex.Scene("Component");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.transform.position = new Apex.Vector3(0, 0, 3);
    scene.addChild(cameraGo);

    //点光源
    let lightGo = new Apex.GameObject("Point Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Point;
    light.range = 50;
    lightGo.transform.position = new Apex.Vector3(3, 3, 3);
    scene.addChild(lightGo);

    //TorusKnot
    let material = new Apex.BlinnPhongMaterial(); // BlinnPhong材质
    let torusKnot = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.TORUS_KNOT, "TorusKnot");
    torusKnot.addComponent<Rotating>(Rotating);
    torusKnot.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
    scene.addChild(torusKnot);

    return scene;

}

/**
 *@author jhui
 *@description 旋转控制组件
 *@date 2023-04-08 15:51:49
 */
class Rotating extends Apex.Behaviour {

    private _tr: Apex.Transform;

    private _rotateSpeed: number;

    protected onAwake(): void {

        this._tr = this._gameobject.transform;

    }

    protected onStart(): void {

        this._rotateSpeed = 1;

    }

    onUpdate(dt: number): void {

        this._tr.applyRotateZ(this._rotateSpeed * dt);

    }

}