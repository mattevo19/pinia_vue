<script setup lang="ts">
import { useCounterStore } from "./stores/counter"
import { useNamesStore } from "./stores/names"

const count = useCounterStore()
const name = useNamesStore()
</script>

<template>
  <div>
    {{ count.counter }}
    <p>Double count is {{ count.doubleCount }}</p>
    <p>Count {{ count.isEven }}</p>
    <button @click="count.increment()">Increment</button>
  </div>

  <div>
    <h1>{{ name.fullName }}</h1>
  </div>
</template>

<style></style>
