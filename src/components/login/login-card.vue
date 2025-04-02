<template>
  <div class="login-card" :style="bgColor">
    <div class="card-container">
      <img :src="avatarRender" alt="" class="img" @click="doAction" />

      <div class="tips-content">
        <div class="tip-title">{{ tipTitle }}</div>
        <div>{{ tipDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import avatar from "@/assets/imgs/avatar.jpg";
import avatar2 from "@/assets/imgs/avatar2.jpg";

type CardType = "login" | "sign";
interface Props {
  title?: string;
  bgColor?: string;
  cardType?: CardType;
}

const props = withDefaults(defineProps<Props>(), {
  title: "SIGN UP",
  bgColor: "#D0CECF",
  cardType: "login",
});

const emits = defineEmits<{
  (e: "loginAction", action: CardType): void;
}>();

function doAction() {
  emits("loginAction", props.cardType);
}

const bgColor = computed(() => {
  return `background-color: ${props.bgColor}`;
});

const tipTitle = computed(() => {
  return props.cardType === "login" ? "Account Exist ?" : "Go Get One !";
});

const tipDesc = computed(() => {
  return props.cardType === "login"
    ? "Click Circle To Sign Up Now !"
    : "Click Circle To Get Brand New One !";
});

const avatarRender = computed(() => {
  return props.cardType === "login" ? avatar : avatar2;
});
</script>

<style lang="less" scoped>
.login-card {
  width: 100%;
  height: 50%;

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .tips-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & div {
        font-size: 12px;
        color: #a7a4a7;
        margin-bottom: 18px;
      }

      .tip-title {
        font-size: 13px;
        font-weight: 400;
        color: #8e8c8e;
      }
    }
  }

  .img {
    margin-top: 50px;
    margin-bottom: 14px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}
</style>
