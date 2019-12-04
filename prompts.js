/*
 * @Descripttion: 一个可以通过命令行对话为 generator 收集选项的文件
 * @version: 
 * @Author: guozhikun
 * @Date: 2019-12-04 10:46:37
 * @LastEditors: guozhikun
 * @LastEditTime: 2019-12-04 14:46:54
 */
module.exports = [
    {
        name: "appType",
        type: "list",
        message: `选择构建工程的类型(默认构建系统)`,
        choices: [
            {
                name: '构建系统',
                value: 'system'
            },
            {
                name: '构建门户',
                value: 'app'
            }
        ],
        default: 'system'
    },
    {
        name: "vuex",
        type: "confirm",
        message: `是否需要使用vuex ？`,
        default: false
    },
    {
        name: "elementUI",
        type: "confirm",
        message: `是否需要使用element-ui ？`,
        default: false
    },
    {
        name: "defaultTem",
        type: "confirm",
        message: `引入模板案例？`,
        default:true
    }
]