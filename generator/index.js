/*
 * @Descripttion: 负责注入或是修改项目中文件。
 * api.extendPackage : 负责给初始化项目中的 package.json 添加额外依赖并安装；
 * api.render : 负责将模板项目中提前定义好的目录和文件拷贝到初始化的项目中；
 * 1.拷贝目录的话，直接传地址字符串，render 函数会将你所传目录内的所有文件覆盖初始化项目中 src 目录下的文件（我的测试结果是限于两层目录）；
 * 2.拷贝文件的话，直接传入一个 object，其中 key 对应初始化项目中的目标位置，value 对应模板项目中的文件位置；
 * 3.当你需要创建一个以 . 开头的文件时，模板项目中需要用 _ 替代 .，这点官网有说明；
 * api.postProcessFiles : 负责具体处理模板项目中的文件
 * @version: 
 * @Author: guozhikun
 * @Date: 2019-12-04 10:57:38
 * @LastEditors: guozhikun
 * @LastEditTime: 2019-12-09 18:03:28
 */
module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
      dependencies: {
          "axios": "^0.18.0",
      },
      devDependencies: {
          "mockjs": "^1.0.1-beta3"
      }
    });
    //根据用户构建要求安装相关库
    // 安装 vuex
    /*if (options.vuex) {
      api.extendPackage({
        dependencies: {
          vuex: '^3.0.1'
        }
      });
      api.render('./vuex');
    };*/
  
    // 安装 element-ui 库
    if (options.elementUI) {
      api.extendPackage({
        devDependencies: {
          "element-ui": "^2.4.6"
        }
      });
    };
    
    // 删除 vue-cli3 默认目录
    api.render(files => {
      Object.keys(files)
        .filter(path => path.startsWith('src/') || path.startsWith('public/'))
        .forEach(path => delete files[path]);
    });
  
  
    //引入基础模板
    if (options.appType == 'system'){
      api.render('./system');
    }
  
     
    // 公共基础目录和文件
    api.render('./generator');
    
  
    // 配置文件
   /* api.render({
      './.eslintrc.js'     : './template/_eslintrc.js',
      './.gitignore'       : './template/_gitignore',
      './.postcssrc.js'    : './template/_postcssrc.js'
    });*/
  
  }