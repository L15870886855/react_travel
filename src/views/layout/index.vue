<template>
  <el-container>
    <el-aside width="260px" class="menu">
      <div class="menu-logo">
        <img src="@/assets/logo.png" />
        <span>毕业设计师生双选系统</span>
      </div>
      <!-- <el-scrollbar class="menu-list"> </el-scrollbar> -->
      <SiderBar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header-top">
          <ul class="nav">
            <li class="nav-item" @click="handleLogOut">
              <el-icon :size="16"><SwitchButton /></el-icon>
            </li>
          </ul>
        </div>
        <div class="header-tab"></div>
      </el-header>
      <el-main>
        <div class="qf-main">
          <!-- 给路由中children来显示的 -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { SwitchButton } from "@element-plus/icons-vue";
import SiderBar from "./components/sideBar.vue";
import router from "@/router";

const handleLogOut = () => {
  router.push({ path: "/login" });
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.menu {
  background-color: #344058;
  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.8);
    img {
      max-width: 25px;
      margin-right: 8px;
    }
  }
  &-list {
    height: calc(100vh - 50px);
  }
  // :deep(.el-sub-menu__title) {
  //   width: 260px;
  // }
}

.header {
  &-top {
    height: 50px;
    border-bottom: 1px solid #f6f6f6;
  }
  .nav {
    height: 100%;
    &-item {
      height: 50px;
      width: min-content;
      float: right;
      cursor: pointer;
      padding: 0 20px;
      line-height: 50px;
      border-left: 1px #f6f6f6 solid;
    }
  }
}

.el-header {
  padding: 0;
}
</style>
