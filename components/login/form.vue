<template>
  <el-form
    ref="formRef"
    class="login-form"
    label-position="top"
    :model="form.model"
    :rules="form.rules"
    @keydown.enter="form.submitForm(formRef)"
  >
    <el-form-item label="Электронная почта" prop="email" :error="form.errors.email">
      <el-input v-model="form.model.email" autofocus />
    </el-form-item>
    <el-form-item label="Пароль" prop="password" :error="form.errors.password">
      <el-input v-model="form.model.password" type="password" />
    </el-form-item>
    <el-button class="login-form__submit" type="primary" @click="form.submitForm(formRef)">Войти</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { useLoginForm } from "~/stores/login"

const form = useLoginForm()
const formRef = ref()
</script>

<style lang="scss">
.login-form {
  &__submit {
    width: 100%;
  }
}
</style>
