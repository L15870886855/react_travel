<template>
  <section class="login">
    <header class="login-header">
      <img src="@/assets/logo.png" />
      <span>东莞城市学院毕业设计师生双选系统</span>
    </header>
    <main class="login-main">
      <div class="login-main_content">
        <h2>登录</h2>
        <el-form :model="state.form">
          <el-form-item v-for="item in formItems" :key="item.prop">
            <Prop :tag="item.mode || 'el-input'" :prop="item"></Prop>
          </el-form-item>
        </el-form>
        <p>忘记密码</p>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </div>
    </main>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import router from "@/router";

const formItems = [
  {
    label: "",
    prop: "school",
    mode: "el-select",
  },
  {
    label: "",
    prop: "userName",
    prefixIcon: User,
  },
  {
    label: "",
    prop: "passWord",
    prefixIcon: Lock,
  },
];

const state = reactive({
  form: {
    school: "",
    userName: "",
    passWord: "",
  },
});

const handleLogin = () => {
  router.push({ path: "/" });
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  &-header {
    height: 64px;
    display: flex;
    align-items: center;
    img {
      height: 32px;
    }
    span {
    }
  }
  &-main {
    position: relative;
    height: calc(100vh - 64px);
    background-image: url("@/assets/login-bg.png");
    background-size: 100% 100%;
    &_content {
      position: absolute;
      left: 152px;
      top: 132px;
      width: 260px;
      padding: 30px;
      background-color: #fff;
      h2 {
        margin-bottom: 18px;
      }
      p {
        text-align: right;
        font-size: 12px;
        color: red;
      }
      .el-button {
        width: 100%;
        margin: 18px 0;
      }
    }
  }
}

.el-form-item__content {
  .el-select {
    width: 100%;
  }
}
</style>
