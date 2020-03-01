# IDeeY发卡系统


## 简介
> IDeeY发卡系统，定位于个人业务，对接目前主流支持个人收款的接口，可用于个人出售一些虚拟商品，比如点卡/会员卡/激活码等。


## 技术栈
> ### 后端:
>> 采用 node.js + express + mongodb   （源码中的server目录）
> ###  管理后端:
>> 采用 vue + element （源码中的admin目录）
> ### 商品PC端：
>> 采用 vue + element (源码中的web目录)
> ### 商品移动端：
>> 采用 vue + vant-ui  (源码中的mobile目录)
___
___

## 后端环境搭建:
> 后端不是常见的php+mysql环境，是node.js + mongodb环境。
>> ### 简易node安装 (以下安装在centOS7.2上测试ok，更多环境请自行搜索搞定,也类似)，
>> [node安装参考教程](https://www.cnblogs.com/Logan626/p/11191894.html)
>>> 1. 用ssh登陆自己的主机，假定为root用户，登陆之后目录在 /root
>>> 2. 在node.js的官网，找到适用于centOS的文件,选LTS下面的Linux Binaries (x64)项目下的64位，右键点击复制连接 
>>> 3. 在主机上:  `wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz`

