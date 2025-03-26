<template>
  <div class="login-form">
    <van-cell-group inset>
      <van-field v-model="account" label="Account" placeholder="请输入账号" />
      <van-field v-model="password" label="Password" placeholder="请输入密码" />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const account = ref("");

const password = ref("");
</script>

<style lang="less" scoped>
.login-form {
  width: 70%;
  height: 40%;
  margin-top: -25%;
  z-index: 9;
}
</style>
