<template>
  <el-menu
    active-text-color="#ffffffcc"
    background-color="#344058"
    class="el-menu-vertical-demo sider-bar"
    text-color="#ffffffcc"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu
      v-for="(item1, index) in constantRoutes"
      :index="index + ''"
      :key="item1.path"
      v-show="!item1.hidden"
    >
      <template #title>
        <el-icon><location /></el-icon>
        <span slot="title" v-text="item1.text"></span>
      </template>
      <el-menu-item
        index="1-1"
        v-for="item2 in item1.children"
        :key="item2.path"
        v-show="!item2.hidden"
      >
        <router-link
          :to="item1.path + item2.path"
          tag="div"
          exact-active-class="on"
          v-text="item2.text"
        />
      </el-menu-item>
    </el-sub-menu>
    <!-- <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { constantRoutes } from "@/router/index";
import { onMounted } from "vue";
onMounted(() => {
  console.log(constantRoutes);
});
</script>
<style lang="scss" scoped>
.el-menu {
  border: none;
}
.sider-bar {
  .on {
    color: #409eff;
  }
}
</style>