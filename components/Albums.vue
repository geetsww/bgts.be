<script setup>
import { register } from 'swiper/element/bundle';
onMounted(()=>{
// register Swiper custom elements
register();
const swiperEl = document.querySelector('swiper-container');
})
</script>

<template>
<div class="albums">
  <swiper-container pagination="true">
  <swiper-slide>
    <a href="https://genius.com/albums/H-jeunecrack/3eme-cycle">
      <figure>
          <img src="~/assets/albums/h.jpg" alt="">
      </figure>
    </a>
  </swiper-slide>
  <swiper-slide>

    <a href="https://genius.com/albums/Sheldon/Ilot">
      <figure>
          <img src="~/assets/albums/sheldon.jpg" alt="">
      </figure>
    </a>
  </swiper-slide>
  <swiper-slide>

    <a href="https://genius.com/albums/Booba/Temps-mort">
      <figure>
          <img src="~/assets/albums/booba.jpg" alt="">
      </figure>
    </a>
  </swiper-slide>

</swiper-container>

</div>
</template>

<style>
  swiper-container{
    height: 100%;
  }
  @media (max-width:460px) {
      .albums{

        grid-column-start: span 2;
      grid-row-start: span 2;
    aspect-ratio: 1/1;
      }
  }
</style>