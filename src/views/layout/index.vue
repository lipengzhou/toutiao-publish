<template>
  <el-container class="layout-container">
    <el-aside
      class="aside"
      width="200px"
    >Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.aside {
  background-color: #d3dce6;
}

.header {
  background-color: #b3c0d1;
}

.main {
  background-color: #e9eef3;
}
</style>
