# miniprogran_request_demo
小程序网络请求封装

1、http.js是封装了promise,属于一级封装
2、httpUtil.js是对网络请求的进一步抽象，管理整个App的网络请求，属于二级封装
3、把http.js和httpUtil.js放到项目的util目录下
4、http.js目前只是最简化的情况，如head的传值等可根据需要增删
5、强调httpUtil.js中baseURL做全局必要性
6、附有部分调用test可参考使用
