<template>
  <div class="login">
    <top-bar />
    <div class="content-container">
      <login-card
        data-aos="fade-down-right"
        @login-action="doLogin"
      ></login-card>

      <login-form
        v-if="actionType === 'login'"
        data-aos="flip-left"
      ></login-form>

      <login-card
        v-if="actionType !== 'login'"
        :bg-color="'#3B4356'"
        card-type="sign"
        data-aos="fade-down-left"
      ></login-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TopBar from "@/components/login/top-bar.vue";
import LoginCard from "@/components/login/login-card.vue";
import LoginForm from "@/components/login/login-form.vue";

const actionType = ref("");

function doLogin() {
  console.log("object");
  actionType.value = "login";
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #d0cecf;
  .content-container {
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
    align-items: center;
  }
}
</style>
