Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','青岛市','崂山区'],
    id:1010,
    now:{
        temp:0,
        text:'未知',
        icon:'999',
        humidity:0,
        pressure:0,
        vis:0,
        windDir: '未知',
        windSpeed:0,
        windScale:0
    }
  },
  regionChange:function(e){
      this.setData({
          region:e.detail.value
      })
      this.getWeather();
  },
  getWeather:function(){
      var that=this;
      wx.request({
        url: 'https://geoapi.qweather.com/v2/city/lookup?',
        data:{
            location: that.data.region[2],
            adm: that.data.region[1],
            key:  '7b12701a5ece47c49d583006cdf7348c'
        },
        success:(res)=>{
            console.log(res.data);
            wx.request({
                url: 'https://devapi.qweather.com/v7/weather/now?',
                data:{
                    location: res.data.location[0].id,
                    key:  '7b12701a5ece47c49d583006cdf7348c'
                },     
             success:(res)=>{
                 console.log(res.data);
                 that.setData({
                     now:res.data.now
                 })
             }
            })
        }
    })   
},

  onload:function(options){
      this.getWeather();
  }
})