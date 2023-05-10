<template>
  <a class="music" href="https://music.bgts.be">
    <figure>
    <img src="~/assets/apple-music.png" alt="">
  </figure>
  <span>@geetsww</span>
  </a>
</template>

<style>
.music{
  background-color: #ffffff;
  grid-column-start: 2 span;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap:20px;
}
.music figure{
  width: 75px;
  height: 75px;
}
.music figure img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media (max-width:809px) {
  .music{

    flex-direction: column;
  }
}
@media (max-width:460px) {
  .music{
    grid-column-start: auto;
    aspect-ratio: 1/1;
  }
}
</style>