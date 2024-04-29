<script>
import { RouterLink, RouterView } from 'vue-router'
import GetStartedButton from './components/GetStartedButton.vue'
import MenuOptions from './components/MenuOptions.vue'

export default {
  components: {
        GetStartedButton,
        MenuOptions
      },

  data() {
    return {
      showMenuOptions: false
    }
  },

  methods: {
    ShowOrHideOptions() {
      this.showMenuOptions = !this.showMenuOptions
    }
  }

    };
</script>

<template>
  
  <div class="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white pt-4">
    <nav class="flex justify-between mx-4">
      <RouterLink class="text-[#269992] text-xl font-bold	md:text-3xl lg:text-4xl" to="/">Nexus Techneo</RouterLink >
      <svg v-on:click="ShowOrHideOptions" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer md:hidden" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      <svg v-on:click="ShowOrHideOptions" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer hidden fill-white md:block lg:hidden" height="40" viewBox="0 96 960 960" width="40"><path d="M133.795 798.538v-47.884h692.884v47.884H133.795Zm0-198.834v-47.883h692.884v47.883H133.795Zm0-198.358v-47.884h692.884v47.884H133.795Z"/></svg>

      <div class="hidden lg:block space-x-4">
        <RouterLink class="font-bold hover:outline outline-offset-4 hover:text-[#269992] hover:scale-125 text-2xl" to="/">Home</RouterLink>
        <RouterLink class="font-bold hover:outline outline-offset-4 hover:text-[#269992] hover:scale-125 text-2xl" to="/products">Products</RouterLink>
        <GetStartedButton />
      </div>

      <MenuOptions @HideMenuSection="ShowOrHideOptions" v-show="showMenuOptions" />
    </nav>

    <RouterView />
</div>
</template>