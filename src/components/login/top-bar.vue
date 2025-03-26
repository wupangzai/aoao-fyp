<template>
  <div class="top-bar">
    <div :style="bgColor" class="title">{{ props.title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  title?: string;
  bgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "666666",
  bgColor: "#D0CECF",
});

const bgColor = computed(() => {
  return `background-color: ${props.bgColor}`;
});
</script>

<style lang="less" scoped>
.top-bar {
  height: 50px;

  .title {
    width: 100%;
    text-align: center;
    padding: 25px;
    font-weight: 600;
  }
}
</style>
