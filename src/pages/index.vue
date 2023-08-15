<template>
  <q-page padding>
    <brew-dogs-table />
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useMeta({ title: "Brew Dogs" });
</script>
