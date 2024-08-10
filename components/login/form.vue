<template>
  <el-form class="login-form" label-position="top">
    <el-form-item label="Электронная почта">
      <el-input />
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input />
    </el-form-item>
    <el-button class="login-form__submit" type="primary">Войти</el-button>
  </el-form>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.login-form {
  &__submit {
    width: 100%;
  }
}
</style>
