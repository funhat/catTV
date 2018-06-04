const formatTime = date => {
<<<<<<< HEAD
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const $get = (url, data) => {
    const p = new Promise((resolve, reject) => {
        wx.request({
                url,
                data,
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: { 'Content-Type': 'json' }, // 设置请求的 header
                success: resolve,
                fail: reject,
                complete: function() {
                    // complete
                }
            })
            //缺点
            //回调地狱  面试必问的面试题
            // wx.request({
            //     url,
            //     success: (data) => {
            //         wx.request({
            //             url2,
            //             success: (data) => {
            //                 wx.request({
            //                     url3,
            //                     success: (data) => {

        //                     }
        //                 })
        //             }
        //         })
        //     }
        // })
    });
    return p;
}
module.exports = {
    formatTime: formatTime,
    $get
}
=======
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
>>>>>>> f4cda07cd715ca2a99b1b2c508b213fb9726ddfd
