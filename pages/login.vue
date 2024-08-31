<template>
  <LoginCard>
    <LoginForm />
  </LoginCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})
useHead({ title: "Вход" })
</script>
