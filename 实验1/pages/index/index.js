//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    src:'/image/2.png',
    name: 'Hello World'
  },
  getMyInfo:function(e){
      console.log('登录执行')
      wx.getUserProfile({
          desc: 'yonghudenglu ',
          success:(res)=>{
              let user=res.userInfo
              this.setData({
                src: user.avatarUrl,
                name: user.nickName
              })
          },
          fail(res){
              console.log('授权失败',res)
          }
  
        })
}
})