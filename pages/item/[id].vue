<template>
   <MainLayout>
      <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
         <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[40%]">
               <img 
                  class="rounded-lg object-fit"
                  v-if="currentImage"
                  :src="currentImage"
               >

               <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                  <div v-for="image in images">
                     <img 
                        @mouseover="currentImage = image"
                        @click="currentImage = Image"
                        width="70"
                        class="rounded-md object-fit border-[3px] cursor-pointer"
                        :class="currentImage === image ? 'border-[#FF5353]' : ''"
                        :src="image">
                  </div>
               </div>
            </div>

            <div class="md:w-[60%] bg-white p-3 rounded-lg">

            </div>
         </div>
      </div>
   </MainLayout>
</template>

<script setup>

import MainLayout from "~/layouts/MainLayout.vue";

let currentImage = ref(null);

onMounted(() => {   
   watchEffect( () => {
      currentImage.value = "https://picsum.photos/id/77/800/800"
      images.value[0] = "https://picsum.photos/id/77/800/800";
   })
})

const images = ref([
   '',
   'https://picsum.photos/id/212/800/800',
   'https://picsum.photos/id/233/800/800',
   'https://picsum.photos/id/165/800/800',
   'https://picsum.photos/id/99/800/800',
   'https://picsum.photos/id/144/800/800',
])

</script>
