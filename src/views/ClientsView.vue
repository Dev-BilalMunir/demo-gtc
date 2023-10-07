<script setup>
import { ref } from "vue";
const clients = ref([
  {
    name: "Pakistan State Oil",
    image: "pso.png",
  },
  {
    name: "Asia Petroleum Limited",
    image: "asia.jpeg",
  },
  {
    name: "Attock Petroleum Limted",
    image: "attockp.png",
  },
  {
    name: "Attock Refinery Limited",
    image: "attockr.png",
  },
  {
    name: "Chevron Pakistan",
    image: "chevron.jpeg",
  },
  {
    name: "Petrcon Private Limited",
    image: "petracon.jpeg",
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="">
    <Carousel
      :value="clients"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
      class="mx-8"
    >
      <template #item="slotProps">
        <!-- <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 align-content-center justify-content-center"> -->
        <div class="m-2 text-center py-5 px-3">
          <div class="mb-3">
            <div class="">
              <!-- Content here -->
              <img
                :src="'layout/images/clients/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="img-fluid"
                style="width: 100px; height: 70px"
              />
            </div>
          </div>
          <!-- <div>
          <h4 class="mb-1">{{ slotProps.data.name }}</h4>
          
        </div> -->
        </div>
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  justify-content: center;
}
</style>
