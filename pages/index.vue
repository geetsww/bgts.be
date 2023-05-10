<script setup>
import { animate, stagger } from "motion"
useHead({
  title: 'Benjamin Geets'
})
onMounted(() => {
  setTimeout(()=>{
    animate(".grid > *", {
    scale: [1.5, 1],
    opacity: [0, 1]
  }, {
    duration: .5,
    delay: stagger(.2)
  })
  }, 300)
  animate('.aside',{
    x:[-50,0],
    opacity:[0,1]
  }, {
    duration:.3
  })
})
</script>

<template>
  <main class="main">
    <Aside />
    <div class="grid">
      <Loak />
      <Insta />
      <Albums/>
      <Music />
    </div>
  </main>
</template>
<style>
.main {
  display: flex;
  padding: 20px;
  gap: 20px;
}

.grid {
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(3, 200px);
  display: grid;
  gap: 20px;
}


.grid>* {
  opacity: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgb(234, 234, 234);
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

.grid>*>* {
  transition: transform 300ms;
}

.grid>*:hover>* {
  transform: scale(1.05);

}

@media (max-width: 1220px) {
  .grid {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(4, 200px);
  }
}

@media (max-width:1000px) {
  .grid {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(4, 200px);
  }
}

@media (max-width:800px) {
  .main {
    flex-direction: column;
  }

  .grid {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(4, 200px);
  }
}

@media (max-width:680px) {

  .grid {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(4, 200px);
  }
}

@media (max-width: 460px) {
  .grid {
    display: flex;
    flex-direction: column;
  }
}
</style>