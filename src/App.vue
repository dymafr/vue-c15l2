<template>
  <h1>{{ secondes }}</h1>
  <h1>{{ totalIdleTime }}</h1>
</template>

<script setup lang="ts">
import { useIdleTime } from './useIdleTime';

const { secondes, totalIdleTime } = useIdleTime();
</script>

<style lang="scss">
@import './assets/scss/base.scss';
</style>
