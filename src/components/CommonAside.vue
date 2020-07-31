<template>
  <el-menu
    :collapse="isCollapse"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.id"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-'+ item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="item in hasChildren" :key="item.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subitem.path"
          v-for="(subitem,subindex) in item.children"
          :key="subindex"
          @click="clickMenu(subitem)"
        >{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({name : item.name})
      this.$store.commit("selectMenu", item);
    }
  },
  data() {
    return {
      asideMenu: [
        {
          id: 1,
          name: "home",
          path: "/",
          label: "首页",
          icon: "s-home"
        },
        {
          id: 2,
          name: "video",
          path: "/video",
          label: "视频管理",
          icon: "video-play"
        },
        {
          id: 3,
          name: "user",
          path: "/user",
          label: "用户管理",
          icon: "user"
        },
        {
          id: 4,
          name: "other",
          label: "其他",
          icon: "user",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "演示页面1",
              icon: "setting"
            },
            {
              path: "/page2",
              name: "page2",
              label: "演示页面2",
              icon: "setting"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>