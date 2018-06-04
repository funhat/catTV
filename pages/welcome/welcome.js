// pages/welcome/welcome.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        remind: "加载中",
        angle: 10,
        userInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        app.getUserInfo((userInfo) => {
            this.setData({
                userInfo
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        setTimeout(() => {
            this.setData({
                remind: "",
            })
        }, 300);
        setInterval(() => {
                let angle = this.data.angle + 10;
                this.setData({
                    angle: angle
                });
                console.log(this.data.angle);
            }, 50)
            // wx.onAccelerometerChange((res) => {
            //     let angle = (res.x * 300).toFixed(1);
            //     this.setData({
            //         angle: angle
            //     });
            //     // if (angle > 14) { angle = -30; } else if (angle < -14) { angle = -14; }
            //     // if (this.data.angle !== angle) {
            //     //     this.setData({
            //     //         angle: angle
            //     //     });
            //     // }

        // });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})