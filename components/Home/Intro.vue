<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.png"
      alt="Peter Mangoro"
      class="ring-2 border  ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Peter Mangoro, I'm a Telecommunications engineer from Zimbabwe. I
      specialize in building web applications and sites using Javascript, React,
      Vue &amp; Node for frontend . php is my backend arsenal &amp; I mainly go
      for Laravel. I've procrastinated building this website for years but
      finally it's here, I've carved out my own little nook on the internet to
      share my silly experiments, nifty projects, and thoughts .
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a tutor at Rasa Pvt College, and by night (and weekends), I'm
      busy tinkering with some random tool or app that I am building.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Peter Mangoro",
  description:
    "I'm Peter, your friendly neighborhood software, product engineer and designer from Masvingo, Zimbabwe. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});
</script>
