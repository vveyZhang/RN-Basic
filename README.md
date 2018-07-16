#一 搭建环境
环境搭建参考官网：[React Native](https://reactnative.cn/docs/0.51/getting-started.html)

建议：
- 必须软件： `node` `react-native-cli` `Android Studio` `Java Development Kit [JDK] 1.8` 是必需安装软件，其他可不安装。

- 推荐软件中：安装 `Genymotion` `Gradle Daemon`（如果安装 `Gradle Daemon` 按照官网方式出错，可借鉴：[配置Daemon](https://blog.csdn.net/cl5417/article/details/55809002) ）
- 

>可能遇到的问题

使用 `Genymotion`连接模拟器
```
adb server version (39) doesn't match this client (40); 
```
- 原因：`android sdk `版本不同。
- 解决：在 `Genymotion`> `setting` 选择自定义 `android sdk ` 路径为 `Android Studio`安装 `android sdk `的路径。
- 

使用了`Gradle Daemon`,第一次运行项目
```
javax.net.ssl.SSLException: SSL peer shut down incorrectly
```
- 原因：因为需要下载 `Gradle` 由于网络或者解压问题导致失败。
- 解决：[查看](https://blog.csdn.net/sfq19881224/article/details/56012280?locationNum=2&fps=1)

react-native init 创建项目失败。
```
import type {CommandT} from './commands';
```

- 原因：react-native 版本问题。
- 解决：[issues#20130](https://github.com/facebook/react-native/issues/20130)

#二 项目结构
![结构](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/446a3f70dc551225d016bff39d35ffc4ee65748e2f70065271ada8c0280c7518b7f4d79bb019cbf25c08c30036af8edf?pictype=scale&from=30113&version=3.3.3.3&uin=759625328&fname=M%5B%7B75M8B%7B4BJQ2~1J%24M%25%7B8L.png&size=750)

####1 android和 ios (项目原生文件，需要配置、调用权限时用到)
####2 app(项目源码)
- ##### common —  公共文件可存放全局定义的配置。

- ##### components — 存放组件

- ##### images — 图片

- ##### models — 数据。
    `models`中model将统一在 `models/index.js`中导出：
    ```
    import App from './app'

    export default {
    App
    }
    ```
- ##### pages — 页面。
- ##### router — 导航
    我们按照页面功能将页面分为四大类：引导页，登录页，tab导航，其他页面。将tab导航和其他页面组成`MainNavigator`。其对应的位置分别在：`tabNavigator.js` ，`mainNavigator.js`。由引导页，登录页和`MainNavigator`组成 `AppNavigator`，如后面需要新增类似引导页的页面，也可将其配置在 `AppNavigator`中。
- ##### serveice — 服务
    我们规定将所有的`fetch`请求放在该文件下，结构与`models`或`pages`对应。
- ##### utils — 工具
    * dva —— 封装dva。
    * fetch —— 封装的fetch请求。
    * format —— 格式化工具。
    * models —— 处理model。
    * storage —— 本地存储。
    * tips —— 全局提示。
    * index —— 总入口和其他工具。
####3 index.js（入口文件）

#三 相关依赖工具
- [dva](https://github.com/dvajs/dva) 集成（redux-sagas）。
- [react-navigation](https://reactnavigation.org/) 导航。
- [lodash](https://lodash.com/docs/#now) 辅助工具。
- [moment](http://momentjs.cn/) 日期处理。
- [rc-form](https://www.npmjs.com/package/rc-form) 表单验证。
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) (未配置)。自定义配置icons[教程](https://juejin.im/post/5b17b5a6f265da6e2b226b10)