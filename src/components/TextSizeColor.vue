<script setup lang="ts">

</script>

<template>
  <div id="text-size-color" dark:text-fc class="[&>p]:inline-block [&>p]:mx-3 [&>p]:p-3" text-right>
    <h3>
      Text Size Color
    </h3>
    <p text-sm hover:scale-200>
      sm text
    </p>
    <p text-lg>
      lg text
    </p>
    <p text-xl text="bk/30 hover:bk/50 dark:fc dark:hover:pink-400">
      xl text
    </p>
    <p text-3xl text-shadow-lg>
      3xl text
    </p>
    <p text-16px>
      16px text
    </p>
    <p text-9xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-purple-500 hover:to-pink-500 bg-clip-text>
      9xl text
    </p>
  </div>
  <div line-clamp-2 w="1/3" dark:text-fc>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</template>
