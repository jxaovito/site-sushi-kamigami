<script setup>
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0)
})

</script>

<template>
  <div class="bg-head relative">
    <Header/>
  <div class="">
    <span class="presentationSubtitle">DÊ UMA OLHADA NOS NOSSOS</span>
    <h1 class="presentationTitle">PRINCIPAIS PRODUTOS</h1>
  </div>

  <div class="grid grid-cols-2 2xl:mb-[-10rem]">
    <div class="mt-20">
      <img class="sushi" src="../img/sushipresentation1.jpg" alt="" />
      <img class="sushi1" src="../img/salmao.jpg" alt="" />
      <img class="sushi2" src="../img/sushipresentation3.jpg" alt="" />
    </div>

    <div class="products grid grid-rows-4">
      <div class="grid grid-cols-2 xl:w-2/3">
        <h3 class="font-montserrat font-bold text-blue-500 2xl:w-50">
          MAKI ROLLS
        </h3>
        <p>
          Um pequeno segmento cortado de um longo rolo de arroz e vários outros
          ingredientes embrulhados em uma folha de alga marinha.
        </p>
      </div>
      <div class="grid grid-cols-2 xl:w-2/3">
        <h3 class="font-montserrat font-bold text-blue-500">GUNKAN</h3>
        <p>
          Este estilo de sushi é chamado de rolo de navio de guerra gunkan-maki,
          já que o envoltório apertado do nori lembra navios de guerra.
        </p>
      </div>
      <div class="grid grid-cols-2 xl:w-2/3">
        <h3 class="font-montserrat font-bold text-blue-500">SASHIMI</h3>
        <p>
          Sashimi é uma iguaria japonesa que consiste em peixe bem fresco
          cortado em pedaços finos.
        </p>
      </div>
      <div class="grid grid-cols-2 xl:w-2/3">
        <h3 class="font-montserrat font-bold text-blue-500">NIGIRI</h3>
        <p>
          Sushi composto por uma pequena bola de arroz com um toque de wasabi e
          coberto com peixe cru ou outros frutos do mar.
        </p>
      </div>
      <a href="https://www.instagram.com/sushikamigami/" class="btn btn-primary">Cardápio</a>
    </div>
  </div>

  <div
    class="xl:mt-[-13rem] xl:mb-[-1rem] 2xl:mt-[0rem] 2xl:ml-[6rem] orderContainer"
  >
    <span class="orderSubtitle xl:ml-[16rem]">ENCOMENDE AGORA</span>
    <h1 class="orderTitle xl:ml-[9rem] xl:mt-[-0.5rem]">O SEU PEDIDO</h1>
  </div>
  <div class="infos bigsashimidiv">
    <div class="grid grid-cols-2">
      <h3 class="font-montserrat font-bold text-blue-500 xl:pl-[3rem]">
        HORÁRIOS
      </h3>
      <p>
        Buffet de sushi, de Terça a Domingo das 18:30hrs às 23:30hrs, 
        Almoço caseiro, de Segunda a Sábado das 11:00hrs às 14:00hrs 
      </p>
    </div>
    <div class="grid grid-cols-2">
      <h3 class="font-montserrat font-bold text-blue-500">REDES SOCIAIS</h3>
      <p>Instagram: @sushikamigami <br />Twitter: @sushikamigami</p>
    </div>
    <div class="grid grid-cols-2">
      <h3 class="font-montserrat font-bold text-blue-500">CONTATO</h3>
      <p>
        Whatsapp: (47) 98814-0193
        <br/>
        Telefone: (47) 98814-0193
      </p>
    </div>
    <div class="grid grid-cols-2">
      <h3 class="font-montserrat font-bold text-blue-500">ENDEREÇO</h3>
      <p>
        Kamigami Sushi Bar, Av. Cel. Procópio Gomes, 918 - Bucarein, Joinville -
        SC, 89202-422
      </p>
    </div>
  </div>
  <div class="2xl:w-full xl:w-full">
  </div>

 <Footer/>
</div>
</template>


<script>
import Header from "../components/headerComponent.vue"
import Footer from "../components/footerComponent.vue"

</script>