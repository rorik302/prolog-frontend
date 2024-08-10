<template>
  <el-card class="login-card">
    <template #header>
      <span class="login-card__title">Войти</span>
    </template>
    <slot />
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.login-card {
  width: 25rem;

  &__title {
    font-weight: 500;
  }
}
</style>
