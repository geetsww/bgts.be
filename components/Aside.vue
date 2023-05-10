<template>
  <div class="aside">
    <figure class="aside__picture">
      <img src="~/assets/benjamin.jpg" alt="">
    </figure>
    <h1>Benjamin Geets</h1>
    <ul class="aside__description">
      <li id="developer">Développeur des ordis</li>
      <li id="rap">Ecouteur de rap</li>
      <li id="belgian">Belgique</li>
    </ul>
  </div>
</template>
  
<style>
.aside{
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap:16px;
}
.aside__picture{
  width: 150px;
  height: 150px;
  border-radius: 150px;
  overflow: hidden;
  transition:transform 300ms;
}
.aside__picture:hover{
  transform: rotate(10deg);
}
.aside__picture img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.aside h1{
  font-size: 1.5rem;
  font-weight: 600;
}
.aside__description{
  color: #454545;
}
#developer{
  cursor: url('~/assets/keyboard.png') 16 0, auto;
}
#rap{
  cursor: url('~/assets/music.png') 16 0, auto;

}
#belgian{
  cursor: url('~/assets/flag.png') 16 0, auto;
  
}
</style>