<template>
  <div class="login">
    <top-bar :title="actionText" />
    <div class="content-container">
      <login-card
        v-if="isActionLogin"
        data-aos="fade-down-right"
        @login-action="doLogin"
      ></login-card>

      <login-form v-if="isDoingLogin" data-aos="flip-left"></login-form>

      <login-card
        v-if="isActionSign"
        :bg-color="getSignUpCardBgColor"
        card-type="sign"
        @login-action="doLogin"
        data-aos="fade-down-left"
      ></login-card>

      <sign-form v-if="isDoingSignUp" data-aos="flip-left"></sign-form>

      <div class="footer" v-if="showFooter">
        <van-tag
          round
          type="primary"
          class="back-btn"
          @click="backToLoginIndex"
          :color="btnColor"
          >Back</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import TopBar from "@/components/login/top-bar.vue";
import LoginCard from "@/components/login/login-card.vue";
import LoginForm from "@/components/login/login-form.vue";
import SignForm from "@/components/login/sign-form.vue";

const actionType = ref("");

function doLogin(action: string) {
  console.log(action);
  actionType.value = action;
}

function backToLoginIndex() {
  actionType.value = "";
}

const isActionLogin = computed(() => {
  return actionType.value === "login" || actionType.value === "";
});

const isActionSign = computed(() => {
  return actionType.value === "sign" || actionType.value === "";
});

const actionText = computed(() => {
  return actionType.value === "login" ? "LOGIN" : "SIGN UP";
});

const isDoingLogin = computed(() => {
  return actionType.value === "login";
});

const isDoingSignUp = computed(() => {
  return actionType.value === "sign";
});

const btnColor = computed(() => {
  return "#3b4356";
});

const getSignUpCardBgColor = computed(() => {
  return isDoingSignUp.value ? "#D0CECF" : "#3B4356";
});

const showFooter = computed(() => {
  return isDoingLogin.value || isDoingSignUp.value;
});
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

    .back-btn {
      position: absolute;
      width: 100px;
      bottom: 25%;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      height: 25px;
      width: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    .footer {
      width: 100%;
      height: 5%;
      background-color: #3b4356;
      z-index: 99;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
