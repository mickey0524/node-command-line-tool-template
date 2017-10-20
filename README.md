# node-command-line-tool-template
基于nodejs的命令行工具开发模版，提供三个功能，查询本机ip，查询当前工作目录，启动一个express服务器，其他功能可参照模版自行添加～

## 安装方法

由于只是一个模版，就不发布到npm库了，可以先__git clone git@github.com:mickey0524/node-command-line-tool-template__，然后cd到对应目录，__npm install . -g__全局安装到本机，然后在命令行输入mickey就能看到效果了

## cli

* mickey -h / mickey --help 查看帮助文档
* mickey -V / mickey --version 查看插件版本号
* mickey -i / mickey --ip 查看本机ip
* mickey -d / mickey --directory 查看文件目录
* mickey 启动一个express服务器

