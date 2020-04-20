<template>
  <div class="login-container">
    <!--
      el-form 表单组件
      每个表单项都必须使用 el-form-item 组件包裹
     -->

    <div class="login-head"></div>
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input
          v-model="user.mobile"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.code"
          placeholder="请输入验证码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onSubmit"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      checked: false // 是否同意协议的选中状态
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  .login-head {
    width: 300px;
    height: 57px;
    background: url("./logo_index.png") no-repeat;
    margin-bottom: 30px;
  }
  .login-form {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
