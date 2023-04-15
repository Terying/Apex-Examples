//PBR渲染
export async function PBRGeometrys(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/snow/test8_Ref.hdr", Apex.Const.ASSET_TYPE.TEXTURE);

    let scene = new Apex.Scene("PBRGeometrys");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    wander.moveSpeed = 5;
    camera.enabledHDR = true;
    cameraGo.transform.position = new Apex.Vector3(0, 2, 6);
    cameraGo.transform.applyRotateX(-20 * Math.PI / 180);
    scene.addChild(cameraGo);

    //平行光
    let lightGo = new Apex.GameObject("Parallel Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Parallel;
    light.color.set(2, 2, 2);
    lightGo.transform.lookAt(new Apex.Vector3(-1, -1, -0.3), new Apex.Vector3(0, 1, 0));
    scene.addChild(lightGo);

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
    for (let i = 0, il = gameobjects.length; i < il; i++) {

        gameobject = gameobjects[i];
        gameobject.transform.position = new Apex.Vector3(Math.cos(i / il * Math.PI * 2) * radius, 0, Math.sin(i / il * Math.PI * 2) * radius);

        scene.addChild(gameobject);

    }

    return scene;

}