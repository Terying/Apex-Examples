//后处理
export function BloomPass(): Apex.Scene {

    let scene = new Apex.Scene("BloomPass");
    let skyboxMaterial = new Apex.SkySphereMaterial();
    skyboxMaterial.exposure = 0.3; // 减低场景亮度以展示辉光效果
    scene.env.skybox.material = skyboxMaterial;

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let Wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    Wander.moveSpeed = 5;
    camera.postprocessor = new Apex.Postprocessor(camera, [new Apex.BloomPass(5, 5, 2, .5)]); // 辉光效果
    cameraGo.transform.position = new Apex.Vector3(0, 2, 6);
    cameraGo.transform.applyRotateX(-20 * Math.PI / 180);
    scene.addChild(cameraGo);

    //各种几何体
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
    let material = new Apex.UnlitMaterial();
    material.mainColor = new Apex.Color(0.8, 0.8, 0.8);
    for (let i = 0, il = gameobjects.length; i < il; i++) {

        gameobject = gameobjects[i];
        gameobject.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
        gameobject.transform.position = new Apex.Vector3(Math.cos(i / il * Math.PI * 2) * radius, 0, Math.sin(i / il * Math.PI * 2) * radius);

        scene.addChild(gameobject);

    }

    return scene;

}