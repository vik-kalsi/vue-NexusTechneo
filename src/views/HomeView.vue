<script>
import GetStartedButton from '../components/GetStartedButton.vue'

export default {
      components: {
        GetStartedButton
      } 
    };

</script>

<template>

  <div>
    <div class="grid justify-center space-x-8 pt-12 lg:hidden">
      <h1 class="text-[#269992] text-xl font-bold	w-64 md:text-3xl md:w-96">NEW GENERATION OF MODERN TECHNOLOGY</h1>
      <h2 class="text-[#269992] text-lg font-bold md:text-2xl">Check what we can offer</h2>
      <div class="pt-6">
        <GetStartedButton />
        <img class="pt-6 w-[280px] md:w-[450px]" src="../images/undraw_visionary_technology.png">
      </div>
    </div>

    <div class="lg:flex justify-center">
      <div class="lg:grid justify-center space-x-8 pt-12 hidden lg:block">
        <h1 class="text-[#269992] font-bold	w-64 text-3xl w-96">NEW GENERATION OF MODERN TECHNOLOGY</h1>
        <h2 class="text-[#269992] font-bold text-2xl pr-6">Check what we can offer</h2>
        <div class="pt-6">
          <GetStartedButton />
        </div>
      </div>

      <div class="hidden lg:block">
          <img class="pt-6 w-[500px]" src="../images/undraw_visionary_technology.png">
      </div>
    </div>

    <div class="grid justify-center pt-16 space-y-8 lg:flex lg:justify-evenly">
      <div>
        <h1 class="text-[#269992] font-bold	text-lg md:text-3xl">Who are we</h1>
        <p class="text-white w-72 md:w-96 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam alias, aspernatur at dicta nostrum fuga fugit voluptas sed ipsam!</p>
      </div>

      <div>
        <h1 class="text-[#269992] font-bold	text-lg md:text-3xl">How we are different from others</h1>
        <p class="text-white w-72 md:w-96 md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptatibus iure nisi, voluptatem reiciendis soluta tempora ex! Iusto, labore voluptatum animi in eum nemo perferendis.</p>
      </div>


      <div>
        <h1 class="text-[#269992] font-bold	text-lg md:text-3xl">Our Promises</h1>
        <p class="text-white w-72 md:w-96 md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa culpa vitae fuga, neque, voluptatem doloribus odio officia illo velit voluptatibus?</p>
      </div>
    </div>




    <footer class="pt-16 pb-6 grid justify-center">
      <p class="text-sm md:text-base lg:text-lg">© 2024 Nexus Techneo. All rights reserved</p>
    </footer>
  </div>
  
</template>
