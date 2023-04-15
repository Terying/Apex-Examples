# Apex
一款基于WebGL2开发的Web3D引擎，主要用于在浏览器端做三维可视化，目前只支持WebGL2，后期会慢慢实现对WebGPU的支持。
引擎参考了Unity的组件开发模式：即以节点和组件为核心，组件需要附加到节点上才能实现自身功能，同样的节点需要组合各种组件以拓展自身，
每个节点默认都会有一个Transfrom组件（必须持有，并且无法删除），记录着该节点的空间变换信息，只有Tranform组件的节点称为"空节点"。
# 功能模块
- 输入
- 渲染
- 脚本
- 事件
- 资源
- 动画 // TODO
- 音频 // TODO
- 物理 // TODO
- 粒子 // TODO
- ...

## 输入模块
目前只支持键盘和鼠标，后面会实现对各种输入源的支持：
- 触摸屏
- 陀螺仪
- VR/AR
- ...
  
可通过InputManager来调用对应的API:
- InputManager.getKey()
- InputManager.getKeyDown()
- InputManager.getKeyUp()
- InputManager.getMouseKey()
- InputManager.getMouseKeyDown()
- InputManager.getMouseKeyUp()
- ...

## 渲染模块
- 渲染管线
- 相机
- 光照
- 网格
- 纹理
- 材质系统
- 着色器
- 渲染排序
- 天空盒
- HDR
- 屏幕后处理
- PBR工作流
- 半透明物体渲染 // TODO
- 阴影 // TODO
- ...

## 脚本模块
## 事件模块
## 资源模块

## 