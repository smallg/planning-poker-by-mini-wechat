//index.js
const app = getApp()
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: ''
    },

    joinRoom: function () {
        wx.navigateTo({
            url: '../roomNumber/roomNumber'
        });
    },

    login: function () {
        var that = this;
        wx.openSetting({
            success: function (data) {
                if (data) {
                    if (data.authSetting["scope.userInfo"] == true) {
                        wx.getUserInfo({
                            withCredentials: false,
                            success: function (data) {
                                that.setData({
                                    userInfo: data.userInfo,
                                    hasUserInfo: true
                                });
                            }
                        });

                    }

                }
            },
            fail: function () {
                console.info("设置失败返回数据");
            }

        });
    },

    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    console.log('3', res)
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                    //save userinfo to database
                    wx.request({
                        url: config.service.requestUrl+'login',
                        data: res.userInfo,
                        method: 'POST',
                        header: {'content-type': 'application/json'},
                        success: function (res) {
                            console.log(res.data)
                        }
                    })
                }
            })
        }
    }
})
