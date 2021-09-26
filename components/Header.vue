<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-indigo-600">
    <nav class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none"
      >
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="w-auto h-10"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a
            href="#"
            class="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
            >Sign in</a
          >
          <a
            href="#"
            class="inline-block px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
            >Sign up</a
          >
        </div>
      </div>
      <div class="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { name: 'Solutions', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Company', href: '#' },
      ],
    }
  },
}
</script>
