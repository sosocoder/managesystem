<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="imgSrc" alt class="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      imgSrc: require("../assets/imgs/user.png")
    };
  },
  methods: {
    collapseMenu() {
      this.$store.commit("collapseMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.userImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 30px;
}
.l-content {
  display: flex;
  align-items: center;
}
.el-breadcrumb {
  margin-left: 20px;
}
</style>
<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}
</style>