<script setup lang="ts">

</script>

<template>
  <h3 id="grid" text="blue-500 dark:blue">
    Grid Layout
  </h3>
  <div w-90 h-90 grid grid-rows-5 grid-cols-5 gap-10px border="~ gray">
    <div bg-blue row="start-1 end-1" col="start-1 span-5">
      header
    </div>
    <div bg-green row="start-2 span-3" col="start-1 end-2">
      nav
    </div>
    <div bg-yellow row="start-2 end-5" col="start-2 span-4">
      body
    </div>
    <div bg-pink row="start-5 span-1" col="start-1 span-5">
      footer
    </div>
  </div>
</template>
