//PBR渲染
export async function PBRMaterial(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/footprint_court/footprint_court.hdr", Apex.Const.ASSET_TYPE.TEXTURE);

    let scene = new Apex.Scene("PBRMaterial");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    wander.moveSpeed = 10;
    camera.enabledHDR = true;
    camera.toneMapping = Apex.Const.TONE_MAPPING.ACES_FILMIC;
    cameraGo.transform.position = new Apex.Vector3(0, 0, 20);
    scene.addChild(cameraGo);

    //Sphere
    let mesh = Apex.Utils.Mesh.createUVSphere(1, 64, 64);
    let material: Apex.PBRMaterial;

    let rows = 7;
    let cols = 7;
    let space = 2.5;
    let position = new Apex.Vector3(-space * (cols - 1) * 0.5, -space * (rows - 1) * 0.5, 0);
    let sphere: Apex.GameObject;
    let meshFilter: Apex.MeshFilter;
    let meshRenderer: Apex.MeshRenderer;
    let metallic: number;
    for (let i = 0; i < rows; i++) {

        metallic = i / rows;
        for (let j = 0; j < cols; j++) {

            sphere = new Apex.GameObject(`sphere${i}-${j}`);
            meshFilter = sphere.addComponent<Apex.MeshFilter>(Apex.MeshFilter);
            meshRenderer = sphere.addComponent<Apex.MeshRenderer>(Apex.MeshRenderer);

            material = new Apex.PBRMaterial();
            material.albedo = new Apex.Color(0.5, 0, 0);
            material.metallic = metallic;
            material.roughness = Apex.Utils.Math.clamp(j / cols, 0.05, 1);
            material.ao = 1;

            meshFilter.mesh = mesh;
            meshRenderer.material = material;
            sphere.transform.position = position;

            position.x += space;

            scene.addChild(sphere);

        }

        position.x = -space * (cols - 1) * 0.5;
        position.y += space;

    }

    //灯光
    let lightPositions = [
        new Apex.Vector3(-10, -10, 10),
        new Apex.Vector3(10, -10, 10),
        new Apex.Vector3(10, 10, 10),
        new Apex.Vector3(-10, 10, 10)
    ]
    for (let i = 0, il = lightPositions.length; i < il; i++) {

        let lightObject = new Apex.GameObject("PointLight");
        let pointLight = lightObject.addComponent<Apex.Light>(Apex.Light);
        let meshFilter = lightObject.addComponent<Apex.MeshFilter>(Apex.MeshFilter);
        let meshRenderer = lightObject.addComponent<Apex.MeshRenderer>(Apex.MeshRenderer);

        pointLight.type = Apex.Const.LIGHT_TYPE.Point;
        pointLight.color = new Apex.Color(200, 200, 200);
        lightObject.transform.position = lightPositions[i];
        lightObject.transform.scale = new Apex.Vector3(0.3, 0.3, 0.3);

        meshFilter.mesh = mesh;
        meshRenderer.material = new Apex.UnlitMaterial();

        scene.addChild(lightObject);

    }

    return scene;

}