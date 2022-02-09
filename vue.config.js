/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-11 17:40:56
 * @LastEditTime: 2021-12-02 16:17:40
 * @LastEditors: MArio
 */
module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName:"豚悦资源搜索器-虎年特供版",
                copyright:"Copyright @ 2020 Mario-er",
                // options placed here will be merged with default configuration and passed to electron-builder
                win: {
                    icon: 'build/icons/icon.ico'
                  },
                  nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                  },
            }
        }
    },
}