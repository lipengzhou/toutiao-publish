<template>
  <div id="container" class="bmap"></div>
</template>

<script>
export default {
  name: 'BmapDemo',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    var map = new window.BMap.Map('container')
    var point = new window.BMap.Point(116.404, 39.915)
    map.centerAndZoom(point, 20)
  },
  methods: {}
}
</script>

<style scoped lang="less">
.bmap {
  width: 800px;
  height: 600px;
  border: 1px solid #000;
}
</style>
