<template>
  <div id="imap-container">
    <div id="setMap">
      <a href="javascript:;" :class="{'curmap': item.isActive}" v-for="(item,index) in navData" :key="index" @click="handleMapNav(item, index)">
        {{item.text}}
      </a>
    </div>
    <div id="detailMap" ref="detailMap">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navData: [
          { text: '写字楼位置', isActive: true},
          { text: '实景街景', isActive: false},
          { text: '公交', isActive: false},
          { text: '地铁', isActive: false},
          { text: '餐厅', isActive: false},
        ],
        options: {
          x: 116.372719,
          y: 40.105765
        }
      };
    },
    methods: {
      handleMapNav(item, index) {
        this.navData.forEach((v) => {
          if (v.text === item.text) {
            v.isActive = true;
          } else {
            v.isActive = false;
          }
        });
        this.$refs.detailMap.innerHTML = '';
        switch (index) {
          case 0:
            // 写字楼位置
            this.options.x = 116.372719;
            this.options.y = 40.105765;
            this.initMap(this.options);
            break;
          case 1:
            // 实景街景
            const panorama = new BMap.Panorama('detailMap');
            panorama.setPosition(new BMap.Point(116.372719, 40.105765));
            panorama.addEventListener('position_changed', function(e) {
              panoramaCallBack(e);
            });
            panorama.addEventListener('pov_changed', function(e) {
              panoramaCallBack(e);
            });
            function panoramaCallBack(e) {
              return;
            }
            break;
          case 2:
            this.RangeMap('公交站');
            break;
          case 3:
            this.RangeMap('地铁');
            break;
          case 4:
            this.RangeMap('餐馆');
            break;
        }
      },
      initMap(options) {
        const map = new BMap.Map('detailMap'); // 创建地图实例
        const point = new BMap.Point(options.x, options.y); // 创建一个地理点坐标
        const marker = new BMap.Marker(point);  // 创建地图上一个图像标注
        map.addOverlay(marker);              // 将覆盖物(这里是标注)添加到地图中
        map.centerAndZoom(point, 12); // 设初始化地图
        const opts = {
          width : 200,     // 信息窗口宽度
          height: 100,     // 信息窗口高度
          title : 'TBD云集中心' , // 信息窗口标题
          enableMessage: true, // 设置允许信息窗发送短息
          message: '要入驻这里？ 请电话联系：[!--dianhua--]'
        };
        const infoWindow = new BMap.InfoWindow('北京市昌平区平西府西二路', opts);  // 创建信息窗口对象
        // 点击标注后发生的事件
        marker.addEventListener('click', function() {
          map.openInfoWindow(infoWindow, point); // 开启信息窗口
        });
      },
      RangeMap(text) {
        const map1 = new BMap.Map('detailMap'); // 创建Map实例
        const mPoint1 = new BMap.Point(116.372719, 40.105765); // 创建一个地理点坐标
        map1.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
        map1.centerAndZoom(mPoint1, 15); // 设初始化地图
        // 控件类：表示地图上的圆覆盖物
        // 参数1是Point, 参数2：圆半径，参数2：是可选参数
        const circle = new BMap.Circle(mPoint1, 1000, {
          fillColor: 'blue', // 圆形填充颜色
          strokeWeight: 1, // 圆形边线宽度
          fillOpacity: 0.3, // 圆形填充透明度
          strokeOpacity: 0.3 // 圆形边线透明度
        });
        map1.addOverlay(circle); // 将覆盖物(圆形)添加到地图上
        // 用于位置检索、周边检索和范围检索。
        // 参数1：location 检索区域(取值可以是Map | Point | String)
        // 参数2：可选参数
        const local =  new BMap.LocalSearch(map1, {
          // 结果呈现设置
          renderOptions: {
            map: map1, // 展现
            autoViewport: false // 检索结束后是否自动调整地图视野。此属性对LocalCity无效
          }
        });
        // 根据中西点、半径与检索词发起周边检索
        // 参数1：keyword关键词，参数2：Point, 参数3：检索半径
        local.searchNearby(text, mPoint1, 1000);
      }
    },
    mounted() {
      this.initMap(this.options);
      // 创建地图实例
      // const map = new BMap.Map('imap', {
        // enableBizAuthLogo: false // 商用授权挂件关闭
      // });
      // 设置中心点坐标
      // const point = new BMap.Point(116.404, 39.915);
      // 地图初始化，同时设置地图展示级别
      // map.centerAndZoom(point, 15);
      // 添加控件前，需要进行地图初始化
      // map.addControl(new BMap.NavigationControl());
      // 开启鼠标滚轮缩放
      // map.enableScrollWheelZoom(true);
      // window.setTimeout(function() {
          // 将地图平滑移动至新中心点
      //   map.panTo(new BMap.Point(116.409, 39.918));
      // }, 2000);
    }
  };
</script>

<style lang="scss" scoped>

#imap-container {
  text-align: left;
  width: 100%;
  position: relative;
  padding-top: 50px;
  overflow: hidden;
  #setMap {
    position: absolute;
    width: 100%;
    height: 50px;
    z-index: 1119911;
    bottom: 20px;
    left: 0;
    text-align: center;
    a {
      display: inline-block;
      width: 140px;
      height: 50px;
      line-height: 50px;
      background: #9b9b9b;
      text-align: center;
      margin: 0 10px;
      font-size: 20px;
      color: #fff;
      text-decoration: none;
    }
    a.curmap,
    a:hover {
      background: #e01f16;
      color: #fff;
    }
  }
  #detailMap {
    height: 550px;
    width: 100%;
  }
}
</style>