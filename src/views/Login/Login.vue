<template>
  <div style="padding: 20px">
    <el-form  label-width="120">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button  @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
    login() {
      if (username === 'admin' && password === '123456'){
        alert('chenggou')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 50%;
  margin: auto;
  padding: 45px;
  height: 450px;
  background-color: #fff;
}
</style>
