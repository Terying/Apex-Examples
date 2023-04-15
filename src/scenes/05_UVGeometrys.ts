//各种几何体UV展示
export async function UVGeometrys(): Promise<Apex.Scene> {

    //加载资源
    let uvGridTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/uv_grid_opengl.jpg", Apex.Const.ASSET_TYPE.TEXTURE);

    let scene = new Apex.Scene("UVGeometrys");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.addComponent<Apex.Wander>(Apex.Wander); // 场景漫游组件（鼠标右键旋转视角，WASDQE移动）
    cameraGo.transform.position = new Apex.Vector3(0, 2, 6);
    cameraGo.transform.applyRotateX(-20 * Math.PI / 180);
    scene.addChild(cameraGo);

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
    let material = new Apex.UnlitMaterial({ mainTexture: uvGridTexture });
    for (let i = 0, il = gameobjects.length; i < il; i++) {

        gameobject = gameobjects[i];
        gameobject.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
        gameobject.transform.position = new Apex.Vector3(Math.cos(i / il * Math.PI * 2) * radius, 0, Math.sin(i / il * Math.PI * 2) * radius);

        scene.addChild(gameobject);

    }

    return scene;

}