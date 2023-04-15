//程序化天空盒
export async function ProceduralSkybox(): Promise<Apex.Scene> {

    let scene = new Apex.Scene("ProceduralSkybox");
    //简单程序化天空盒
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    scene.addChild(cameraGo);

    return scene;

}
