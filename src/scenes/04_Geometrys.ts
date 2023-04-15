//各种几何体
export async function Geometrys(): Promise<Apex.Scene> {

    let scene = new Apex.Scene("Geometrys");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.addComponent<Apex.Wander>(Apex.Wander); // 场景漫游组件（鼠标右键旋转视角，WASDQE移动）
    cameraGo.transform.position = new Apex.Vector3(0, 2, 6);
    cameraGo.transform.applyRotateX(-20 * Math.PI / 180);
    scene.addChild(cameraGo);

    //平行光
    let lightGo = new Apex.GameObject("Parallel Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Parallel;
    lightGo.transform.lookAt(new Apex.Vector3(-1, -1, -0.3), new Apex.Vector3(0, 1, 0));
    scene.addChild(lightGo);

    //创建各种几何体
    let gameobjects = [
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CUBE, "Cube"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.SPHERE, "Sphere"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CONE, "Cone"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.TORUS_KNOT, "TorusKnot"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CYLINDER, "Cylinder"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CAPSULE, "Capsule"),
        Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.TORUS, "Torus")
    ];

    let radius = 3;
    let gameobject: Apex.GameObject;
    let material = new Apex.BlinnPhongMaterial();
    for (let i = 0, il = gameobjects.length; i < il; i++) {

        gameobject = gameobjects[i];
        gameobject.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
        gameobject.transform.position = new Apex.Vector3(Math.cos(i / il * Math.PI * 2) * radius, 0, Math.sin(i / il * Math.PI * 2) * radius);

        scene.addChild(gameobject);

    }

    return scene;

}