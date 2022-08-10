<script setup lang="ts">

</script>

<template>
  <div id="flexbox">
    <p m-3 text="purple dark:purple-300">
      FlexBox
    </p>
    <div border="~ purple rounded" flex flex-col items-center justify-evenly>
      <p w-100px bg-pink-300 text-center>
        left
      </p>
      <p text="center dark:fc" w-full>
        center
      </p>
      <p w-100px bg-pink-300 text-center>
        right
      </p>
    </div>
  </div>
</template>
