<template>
  <q-table
    :columns="columns"
    :rows="rows"
    row-key="name"
    :loading="false"
    :rows-per-page-options="[5, 10, 20, 50, 100, 0]"
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="FullName" :props="props">
          <nuxt-link :to="localePath(`/users/${props.row.UserId}`)">
            {{ props.row.UserFirstName }} {{ props.row.UserLastName }}
          </nuxt-link>
        </q-td>

        <q-td key="CustomerName" :props="props">
          {{ props.row.CustomerName }}
        </q-td>

        <q-td key="UserEmail" :props="props">
          {{ props.row.UserEmail }}
        </q-td>

        <q-td key="UserType" :props="props">
          {{ props.row.UserType }}
        </q-td>

        <q-td key="UserStatus" :props="props">
          {{ props.row.UserStatus }}
        </q-td>

        <q-td key="action" :props="props">
          <div class="row no-wrap q-gutter-x-sm">
            <template
              v-if="
                props.row.UserStatus === 'Inactive' &&
                authUser?.UserType === 'Admin'
              "
            >
              <UserActiveBtn :user="props.row" :on-success="onSuccess" />
            </template>

            <template
              v-if="
                props.row.UserStatus === 'Active' &&
                authUser?.UserType === 'Admin'
              "
            >
              <UserInactiveBtn
                :user-id="props.row.UserId"
                :customer-id="props.row.CustomerId"
                :on-success="onSuccess"
              />
            </template>

            <template v-if="authUser?.UserType === 'Admin'">
              <UserReinviteBtn :userId="props.row.UserId" />
            </template>
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { useColumns } from "./useColumns";
import { useRows } from "./useRows";

const { columns } = useColumns();
const { rows } = useRows();
</script>
