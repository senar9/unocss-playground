<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    student: 'student',
    teacher: 'teacher',
  },
})
</script>

<template>
  <main scroll-smooth p-3>
    <header sticky top-0 backdrop-blur-md shadow z-10 flex items-center border="main dashed 2px">
      <nav dark:text-fc flex flex-row flex-nowrap overflow-x-auto m-3 class="[&>a]:p-3 [&>a]:rounded-lg [&>a]:mr-2 [&>a]:border-main [&>a]:border-1px">
        <a href="#text-size-color">text-size-color</a>
        <a href="#grid">grid</a>
        <a href="#flexbox">flexbox</a>
        <a href="#space">space</a>
      </nav>
      <label for="switch-theme">切换主题</label>
      <select v-model="mode" dark:text-hex-333 switch-theme outline-none border="~ main rounded" mx-3>
        <option value="" selected>
          默认
        </option>
        <option value="teacher">
          教师
        </option>
        <option value="student">
          学生
        </option>
      </select>
      <button cursor-pointer @click="toggleDark()">
        <div v-if="isDark" text="lg dark:fc" i-carbon-moon />
        <div v-else text="lg dark:fc" i-carbon-sun />
      </button>
    </header>
    <text-size-color />
    <grid />
    <flexbox />
    <space />
  </main>
</template>
