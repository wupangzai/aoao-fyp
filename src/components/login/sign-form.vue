<template>
  <div class="login-form">
    <van-cell-group inset>
      <van-field v-model="account" label="Account" placeholder="请输入账号" />
      <van-field v-model="password" label="Password" placeholder="请输入密码" />
      <van-button class="login-btn" :color="props.btnColor"
        >SignUp For Free
      </van-button>
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface Props {
  btnColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  btnColor: "#DFDDDE",
});

const account = ref("");

const password = ref("");
</script>

<style lang="less" scoped>
.login-form {
  width: 70%;
  // height: 40%;
  margin-top: -25%;
  z-index: 9;

  .login-btn {
    font-weight: 600;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #2a3344 !important;
    width: 100%;
  }
}
</style>
