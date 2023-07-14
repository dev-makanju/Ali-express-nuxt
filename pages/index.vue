<template>
   <main-layout>
      <div id="IndexPage" class="mt-4 max-w-[1200] mx-auto px-2">
         <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            <div v-if="products" v-for="product in products" :key="product">
               <ProductComponent :product="product"/>
            </div>
         </div>
      </div>
   </main-layout>
</template>

<script setup>

import MainLayout from "~/layouts/MainLayout.vue";

const products = [
   {
      id: 1,
      title: "Title 1",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 2,
      title: "Title 2",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 3,
      title: "Title 3",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 4,
      title: "Title 4",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 5,
      title: "Title 5",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 6,
      title: "Title 6",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 7,
      title: "Title 7",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 8,
      title: "Title 8",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 9,
      title: "Title 9",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   },
   {
      id: 10,
      title: "Title 10",
      description: "This is a description",
      url: 'https://picsum.photos/id/82/300/320',
      price: 9999
   }
]

</script>
