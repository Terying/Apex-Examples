import { SurroundMotion } from "../components/SurroundMotion";

const vs = `
    in vec3 a_Position;
    in vec3 a_Normal;
    out vec3 v_Normal;
    uniform mat4 u_MvpMatrix;
    void main(){
        gl_Position = u_MvpMatrix * vec4(a_Position, 1.0);
        v_Normal = a_Normal;
    }
`;

const fs = `
    in vec3 v_Normal;
    out vec4 fragColor;
    void main(){
        vec3 color = (v_Normal + 1.0) * 0.5;
        fragColor = vec4(color, 1.0);
    }
`;

//自定义材质
export function CustomMaterial(): Apex.Scene {

    let scene = new Apex.Scene("CustomMaterial");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.transform.position = new Apex.Vector3(0, 0, 3);
    scene.addChild(cameraGo);

    //创建NormalShader
    let shader = Apex.Managers.Shader.addShader(
        "NormalShader",
        new Set<string>([Apex.Const.ATTRIBUTE_MAP.a_Position, Apex.Const.ATTRIBUTE_MAP.a_Normal]),
        new Set<string>([Apex.Const.UNIFORM_MAP.u_MvpMatrix])
    );
    shader.addPass(vs, fs);
    let material = new NormalMaterial();

    //torusKnot
    let torusKnot = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.TORUS_KNOT, "TorusKnot");
    let motion = torusKnot.addComponent<SurroundMotion>(SurroundMotion);
    motion.rotateSpeed = new Apex.Vector3(0, 0, 1);
    torusKnot.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
    scene.addChild(torusKnot);

    return scene;

}

/**
 *@author jhui
 *@description 显示法线颜色材质
 *@date 2023-04-10 20:33:24
 */
class NormalMaterial extends Apex.Material {

    protected _initShader(): void {

        this._shader = Apex.Managers.Shader.findShader("NormalShader");

    }

}