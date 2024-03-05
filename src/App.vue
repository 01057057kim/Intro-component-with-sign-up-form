<script setup>
import Content from './components/Content.vue'
</script>

<template>
  <main class="font-poppins text-[16px] grid grid-cols-2 m-0 p-0 box-border min-w-[1440px] max-w-full mx-auto min-h-screen bg-[url('./src/assets/images/bg-intro-desktop.png')] object-cover  bg-RED">
    <section class="flex items-center justify-center h-screen w-full">
      <article class="w-[550px] h-[250px] ml-32">
        <h1 class="text-5xl font-bold text-white mb-10 w-[500px]">Learn to code by watching others</h1>
        <p class="w-[550px] text-white">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
          understanding how developers think is invaluable.
        </p>
      </article>
    </section>
    <section>
      <Content />
    </section>
  </main>
</template>

