<script>
//import { RouterLink } from 'vue-router'
import GetStartedButton from './GetStartedButton.vue'

export default {
    emits: ['HideMenuSection'],
    components: {
        GetStartedButton
    },

    methods: {
        HideMenu() {
            this.$emit("HideMenuSection");
        }
    }
};
</script>


<template>
    <div class="absolute right-10 bg-blue-900 grid space-y-3 p-6 md:right-20 lg:hidden">
        <RouterLink v-on:click="HideMenu" class="font-bold hover:text-[#269992]  text-2xl" to="/">Home</RouterLink>
        <RouterLink v-on:click="HideMenu" class="font-bold hover:text-[#269992] text-2xl" to="/products">Products</RouterLink>
        <GetStartedButton v-on:click="HideMenu" />
    </div>
</template>