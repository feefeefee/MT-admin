<script setup lang="ts">
import { ref } from 'vue'

const name = ref('大西瓜')
</script>
<template>
    <div class="name">{{ name }}哈哈哈222哈</div>
</template>
<style scoped less>
.name {
    position: relative;
    font-size: 24px;
}
</style>
