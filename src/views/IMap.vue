<template>
  <div id="imap">
    地图
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      // 创建地图实例
      const map = new BMap.Map('imap', {
        // enableBizAuthLogo: false // 商用授权挂件关闭
      });
      // 设置中心点坐标
      const point = new BMap.Point(116.404, 39.915);
      // 地图初始化，同时设置地图展示级别
      map.centerAndZoom(point, 15);
      // 添加控件前，需要进行地图初始化
      map.addControl(new BMap.NavigationControl());
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // window.setTimeout(function() {
      //   // 将地图平滑移动至新中心点
      //   map.panTo(new BMap.Point(116.409, 39.918));
      // }, 2000);
    }
  };
</script>

<style lang="scss" scoped>

#imap {
  text-align: left;
  height: 100%;
}
</style>