<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else>
    <h2>{{ users }}</h2>
    <h2>{{ errors }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useFetchUsers } from './users.service';

const { users, isLoading, errors } = useFetchUsers();
</script>

<style lang="scss">
@import './assets/scss/base.scss';
</style>
