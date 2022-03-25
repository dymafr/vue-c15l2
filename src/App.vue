<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else>
    <h2 v-for="user in users">{{ user.name }}</h2>
    <h2 v-if="errors">{{ errors }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useFetchUsers, generateUsers } from './users.service';

generateUsers();
const { users, isLoading, errors } = useFetchUsers();
</script>

<style lang="scss">
@import './assets/scss/base.scss';
</style>
