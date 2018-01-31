/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://ra9sjxdc.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
        requestUrl: `${host}/app/`
    }
};

module.exports = config;
