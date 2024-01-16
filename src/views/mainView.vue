<script setup>
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0)
})

</script>

<template>
  <div class="bg-head relative">
    <Header/>
    <Products/>
  <Orders/>

 <Footer/>
</div>
</template>


<script>
import Header from "../components/headerComponent.vue"
import Footer from "../components/footerComponent.vue"
import Orders from "../components/ordersComponent.vue"
import Products from "../components/productsComponent.vue"
</script>