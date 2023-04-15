import { SurroundMotion } from "../components/SurroundMotion";

//立方渲染目标对象（配合CubeCamera使用）
export async function CubeRenderTarget(): Promise<Apex.Scene> {

    //资源加载
    let cubeMap = await Apex.Managers.Asset.loadAsync<Apex.CubeTexture>("./asset/texture/cube/park2.jpg", Apex.Const.ASSET_TYPE.CUBE_TEXTURE);

    let scene = new Apex.Scene("CubeRenderTarget");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: cubeMap });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    cameraGo.transform.position = new Apex.Vector3(0, 0, 3);
    scene.addChild(cameraGo);

    //平行光
    let lightGo = new Apex.GameObject("Parallel Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Parallel;
    light.color.set(2, 2, 2);
    lightGo.transform.lookAt(new Apex.Vector3(-1, -1, -0.3), new Apex.Vector3(0, 1, 0));
    scene.addChild(lightGo);

    //sphere
    let sphereMesh = Apex.Utils.Mesh.createUVSphere();
    let sphere = new Apex.GameObject("Sphere");
    let meshFilter = sphere.addComponent<Apex.MeshFilter>(Apex.MeshFilter);
    let meshRenderer = sphere.addComponent<Apex.MeshRenderer>(Apex.MeshRenderer);
    let cubeCamera = sphere.addComponent<Apex.CubeCamera>(Apex.CubeCamera);
    cubeCamera.renderTarget = new Apex.CubeRenderTarget({ width: 512, height: 512, autoUpdate: true });
    cubeCamera.cullingLayers = 2;
    meshFilter.mesh = sphereMesh;
    meshRenderer.material = new Apex.MapToCubeMaterial({ mainTexture: cubeCamera.renderTarget });
    sphere.layer = 2;
    scene.addChild(sphere);

    let material = new Apex.BlinnPhongMaterial();
    //cube1
    let cube1 = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CUBE, "Cube 1");
    let motion1 = cube1.addComponent<SurroundMotion>(SurroundMotion);
    motion1.surroundAxis = new Apex.Vector3(1, 1, 0).normalize();
    motion1.rotateSpeed = new Apex.Vector3(1, 1, 0);
    motion1.targetTr = sphere.transform;
    cube1.transform.scale = new Apex.Vector3(0.2, 0.2, 0.2);
    cube1.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
    scene.addChild(cube1);

    let cube2 = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CUBE, "Cube 2");
    let motion2 = cube2.addComponent<SurroundMotion>(SurroundMotion);
    motion2.surroundAxis = new Apex.Vector3(-1, 1, 0).normalize();
    motion2.rotateSpeed = new Apex.Vector3(1, 1, 0);
    motion2.targetTr = sphere.transform;
    cube2.transform.scale = new Apex.Vector3(0.2, 0.2, 0.2);
    cube2.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;
    scene.addChild(cube2);

    return scene;

}