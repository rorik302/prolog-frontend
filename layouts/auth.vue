<template>
  <el-container class="auth-layout">
    <slot />
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--el-fill-color);
}
</style>
