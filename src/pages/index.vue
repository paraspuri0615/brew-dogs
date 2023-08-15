<template>
  <q-page padding class="q-py-xl">
    <brew-dogs-table />
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useMeta({ title: "Brew Dogs" });
</script>
