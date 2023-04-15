import { SurroundMotion } from "../components/SurroundMotion";

//数据纹理
export function DataTexture(): Apex.Scene {

    let scene = new Apex.Scene("DataTexture");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.transform.position = new Apex.Vector3(0, 0, 2);
    scene.addChild(cameraGo);

    //data texture
    let width = 128,
        height = 128,
        data = new Uint8Array(width * height * 4),
        r: number, g: number, b = 255,
        index = 0;
    for (let row = 0; row < height; row++) {

        g = row / height * 255;
        for (let col = 0; col < width; col++) {

            r = col / width * 255;
            data[index++] = r;
            data[index++] = g;
            data[index++] = b;
            data[index++] = 255;

        }

    }
    let bitmap = new Apex.BitMap(new Apex.TBuffer(data, data.length, false), width, height);
    let dataTexture = new Apex.Texture(bitmap);

    //quad
    let quad = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.QUAD, "Quad");
    let meshRenderer = quad.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer);
    let motion = quad.addComponent<SurroundMotion>(SurroundMotion);
    let material = new Apex.UnlitMaterial({ mainTexture: dataTexture });
    material.cullFace = Apex.Const.GL_CULL_FACE.NONE;
    meshRenderer.material = material;
    motion.rotateSpeed = new Apex.Vector3(0, 1, 0);
    scene.addChild(quad);

    return scene;

}