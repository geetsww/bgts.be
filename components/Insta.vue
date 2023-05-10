<template>
  <a href="https://instagram.com/geetsww" class="insta">
    <figure>
      <img src="~/assets/insta.svg" alt="">
    </figure>
  </a>
</template>

<style>
.insta{
  background-color: #fff0f3; 
  display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
  .insta figure{
    width: 50%;
  }
  @media (max-width: 460px) {
    .insta{

    aspect-ratio: 1/1;
    }
    .insta figure{
      height: 75px;
      width: 75px;
    }
  }
</style>
