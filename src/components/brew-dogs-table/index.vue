<template>
  <q-table
    :columns="columns"
    :rows="rows"
    row-key="name"
    :loading="loading"
    :rows-per-page-options="[5, 10, 25, 0]"
    :pagination.sync="pagination"
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>

        <q-td key="tagline" :props="props">
          {{ props.row.tagline }}
        </q-td>

        <q-td
          key="description"
          :props="props"
          style="white-space: break-spaces"
        >
          {{ props.row.description }}
        </q-td>

        <q-td key="image_url" :props="props">
          <q-img
            :src="props.row.image_url"
            spinner-color="primary"
            style="height: 100px; max-width: 100px"
            fit="contain"
          />
        </q-td>

        <q-td key="abv" :props="props">
          {{ props.row.abv }}
        </q-td>

        <q-td key="ibu" :props="props">
          {{ props.row.ibu }}
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

const pagination = { rowsPerPage: 5, sortBy: "abv" };
</script>
