<script setup lang="ts">
import { ref } from "vue";

const name = ref("大西瓜");
</script>
<template>
  <div class="name">{{ name }}哈哈哈哈</div>
</template>
<style scoped less>
.name {
  font-size: 24px;
}
</style>
