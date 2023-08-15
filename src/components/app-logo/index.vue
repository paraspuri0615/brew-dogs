<template>
  <div class="cursor-pointer" @click="navigateTo(appRoutes.home)">
    <h6 class="text-bold q-ma-none">Brew Dogs</h6>
  </div>
</template>

<script lang="ts" setup>
const { appRoutes } = useAppRoutes();
</script>
