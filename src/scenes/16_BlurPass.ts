//高斯模糊
export function BlurPass(): Apex.Scene {

    let scene = new Apex.Scene("BlurPass");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    camera.postprocessor = new Apex.Postprocessor(camera, [new Apex.BlurPass(10, 10, 2)]); // 高斯模糊
    scene.addChild(cameraGo);

    return scene;

}