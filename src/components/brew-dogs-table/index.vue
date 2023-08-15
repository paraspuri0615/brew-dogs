<template>
  <q-table
    :columns="columns"
    :rows="rows"
    row-key="name"
    :loading="loading"
    :rows-per-page-options="[5, 10, 20, 50, 100, 0]"
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { useColumns } from "./useColumns";
import { useRows } from "./useRows";

const { columns } = useColumns();
const { rows, loading } = await useRows();
</script>
