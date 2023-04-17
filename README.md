- [Apex](#apex)
- [文档](#文档)
- [API](#api)
- [案例](#案例)
  - [程序化天空盒](#程序化天空盒)
  - [立方纹理天空盒](#立方纹理天空盒)
  - [组件的创建](#组件的创建)
  - [创建各种几何体](#创建各种几何体)
  - [几何体的UV显示](#几何体的uv显示)
  - [自定义Mesh](#自定义mesh)
  - [数据纹理](#数据纹理)
  - [渲染目标](#渲染目标)
  - [立方渲染目标](#立方渲染目标)
  - [加载HDR图片](#加载hdr图片)
  - [PBR材质](#pbr材质)
  - [PBR材质的几何体](#pbr材质的几何体)
  - [PBR材质纹理](#pbr材质纹理)
  - [加载GLTF](#加载gltf)
  - [加载GLTF2](#加载gltf2)
  - [高斯模糊（后处理）](#高斯模糊后处理)
  - [辉光效果（后处理）](#辉光效果后处理)
  - [自定义材质](#自定义材质)
  - [自定义后处理（反相）](#自定义后处理反相)
  - [黄昏时刻](#黄昏时刻)

# Apex
基于WebGL2开发的Web3D小引擎，主要用于在浏览器端做三维可视化，目前只支持WebGL2，后期会慢慢实现对WebGPU的支持。<br>
引擎参考了Unity的组件开发模式：即以节点和组件为核心，组件需要附加到节点上才能实现自身功能，同样的节点需要组合各种组件以拓展自身。<br>

目前引擎还处于初级开发阶段，主要具备了基本的渲染功能，后期再慢慢迭代...<br>
文档和API手册很多都没有写，后面再慢慢补全了...

[来碗鸡汤补补](https://www.bilibili.com/video/BV1Hk4y1q7Rz/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=90b463e5b731974cd2c400373a55055a)

# 文档
[引擎文档](./doc/manual/Manual.MD)

# API
[引擎API](./doc/api/Api.MD)

# 案例
## 程序化天空盒
![](./doc/res/image/%E7%A8%8B%E5%BA%8F%E5%A4%A9%E7%A9%BA%E7%9B%92.png#pic_center)
## 立方纹理天空盒
![](./doc/res/image/立方纹理天空盒.png#pic_center)
## 组件的创建
## 创建各种几何体
![](./doc/res/image/各种几何体.png#pic_center)
## 几何体的UV显示
![](./doc/res/image/各种几何体UV展示.png#pic_center)
## 自定义Mesh
![](./doc/res/image/自定义Mesh.png#pic_center)
## 数据纹理
![](./doc/res/image/数据纹理.png#pic_center)
## 渲染目标
<video width = "1200" height = "800" controls = "controls" src = "./doc/res/video/渲染目标.mp4" type = "video/mp4"></video>

## 立方渲染目标
<video width = "1200" height = "800" controls = "controls" src = "./doc/res/video/立方渲染目标.mp4" type = "video/mp4"></video>

## 加载HDR图片
![](./doc/res/image/加载HDR文件.png#pic_center)
## PBR材质
![](./doc/res/image/PBR材质.png#pic_center)
## PBR材质的几何体
![](./doc/res/image/PBR几何体.png#pic_center)
## PBR材质纹理
![](./doc/res/image/PBR纹理.png#pic_center)
## 加载GLTF
![](./doc/res/image/加载GLTF模型.png#pic_center)
## 加载GLTF2
![](./doc/res/image/加载GLTF2模型.png#pic_center)
## 高斯模糊（后处理）
![](./doc/res/image/高斯模糊.png#pic_center)
## 辉光效果（后处理）
![](./doc/res/image/辉光效果.png#pic_center)
## 自定义材质
![](./doc/res/image/自定义材质.png#pic_center)
## 自定义后处理（反相）
![](./doc/res/image/后期效果（反相）.png#pic_center)
## 黄昏时刻
<video width = "1200" height = "800" controls = "controls" src = "./doc/res/video/黄昏时刻.mp4" type = "video/mp4"></video>