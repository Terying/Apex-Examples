import { ProceduralSkybox } from "./scenes/01_ProceduralSkybox";
import { CubeMapSkybox } from "./scenes/02_CubeMapSkybox";
import { Component } from "./scenes/03_Component";
import { Geometrys } from "./scenes/04_Geometrys";
import { UVGeometrys } from "./scenes/05_UVGeometrys";
import { CustomMesh } from "./scenes/06_CustomMesh";
import { DataTexture } from "./scenes/07_DataTexture";
import { RenderTarget } from "./scenes/08_RenderTarget";
import { CubeRenderTarget } from "./scenes/09_CubeRenderTarget";
import { LoadHDR } from "./scenes/10_LoadHDR";
import { PBRMaterial } from "./scenes/11_PBRMaterial";
import { PBRGeometrys } from "./scenes/12_PBRGeometrys";
import { PBRTexture } from "./scenes/13_PBRTexture";
import { LoadGLTF } from "./scenes/14_LoadGLTF";
import { LoadGLTF2 } from "./scenes/15_LoadGLTF2";
import { BlurPass } from "./scenes/16_BlurPass";
import { BloomPass } from "./scenes/17_BloomPass";
import { CustomMaterial } from "./scenes/18_CustomMaterial";
import { CustomPostprocessing } from "./scenes/19_CustomPostprocessing";
import { Driving } from "./scenes/20_Driving";


async function main() {

    let engine = new Apex.Engine({ width: 1200, height: 800 });
    document.body.append(engine.output);

    // let scene = await ProceduralSkybox();
    // let scene = await CubeMapSkybox();
    // let scene = await Component();
    // let scene = await Geometrys();
    // let scene = await UVGeometrys();
    // let scene = await CustomMesh();
    // let scene = await DataTexture();
    // let scene = await RenderTarget();
    // let scene = await CubeRenderTarget();
    // let scene = await LoadHDR();
    // let scene = await PBRMaterial();
    // let scene = await PBRGeometrys();
    // let scene = await PBRTexture();
    // let scene = await LoadGLTF();
    // let scene = await LoadGLTF2();
    // let scene = await BlurPass();
    // let scene = await BloomPass();
    // let scene = await CustomMaterial();
    // let scene = await CustomPostprocessing();
    let scene = await Driving();

    engine.launchScene(scene);

}

main();