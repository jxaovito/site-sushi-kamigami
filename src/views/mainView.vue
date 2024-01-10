<script setup>
// let previousPosition = document.querySelector('.navbar').height() * 2;

// window.addEventListener('scroll', function() {
//   const currentPosition = document.querySelector('.navbar').height() * 2;

//   if (previousPosition > currentPosition) {
//     // user has scrolled up
//     document.querySelector('.navbar').classList.add('show');
//   } else {
//     // user has scrolled down
//     document.querySelector('.navbar').classList.remove('show');
//   }

//   // update previous scroll position
//   previousPosition = currentPosition;
// });
</script>

<template>
  <header class="sticky top-0 z-50 w-full">
    <nav class="relative navbar">
      <div class="flex justify-between items-center p-4">
        <img
          src="../img/kamigami.png"
          class="h-9 ml-10 mt-8"
          alt="KamiGami Logo"
        />
        <div class="flex items-center space-x-6 rtl:space-x-reverse mr-10 mt-8">
          <a
            href=""
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Nosso Cardápio</a
          >
          <a
            href=""
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Faça seu pedido</a
          >
          <a
            href=""
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Sobre nós</a
          >
          <a
            href=""
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Contato</a
          >
        </div>
      </div>
    </nav>
  </header>
  <div class="">
    <span class="subtitle">VENHA EXPERIMENTAR A</span>
    <h1 class="mainTitle">ESPECIALIDADE DA CASA</h1>
    <img alt="Vue logo" class="logo" src="../img/sushis.png" />
  </div>

  <div class="">
    <span class="presentationSubtitle">GOSTARIA DE CONHECER OS NOSSOS</span>
    <h1 class="presentationTitle">INCRÍVEIS PRODUTOS?</h1>
  </div>

  <div class="grid grid-cols-2">
    <div class="mt-20">
      <img class="sushi" src="../img/sushipresentation1.jpg" alt="" />
      <img class="sushi1" src="../img/salmao.jpg" alt="" />
      <img class="sushi2" src="../img/sushipresentation3.jpg" alt="" />
    </div>

    <div class="products grid grid-rows-4">
      <!-- <ul class="products"> -->
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500">MAKI ROLLS</h3>
        <p>Um pequeno segmento cortado de um longo rolo de arroz e vários outros ingredientes embrulhados em uma folha de alga marinha.</p>
      </div>
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500">GUNKAN</h3>
        <p>Este estilo de sushi é chamado de rolo de navio de guerra gunkan-maki, já que o envoltório apertado do nori lembra navios de guerra.</p>
      </div>
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500">SASHIMI</h3>
        <p>
Sashimi é uma iguaria japonesa que consiste em peixe bem fresco cortado em pedaços finos.</p>
      </div>
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500">NIGIRI</h3>
        <p>Sushi composto por uma pequena bola de arroz com um toque de wasabi e coberto com peixe cru ou outros frutos do mar.</p>
      </div>
      <a href="#" class="btn btn-primary">Cardápio completo</a>
      <!-- </ul> -->
    </div>
  </div>

  <div>
    <img src="" alt="" />
    <span></span>
  </div>

  <h1 class="mt-10 presentationTitle">FAÇA SEU PEDIDO</h1>
  <div class="grid grid-cols-2">
    <span
      >Kamigami Sushi Bar, Av. Cel. Procópio Gomes, 918 - Bucarein, Joinville -
      SC, 89202-422</span
    >
    <img class="w-1/2" src="../img/sushipresentation1.jpg" alt="" />
  </div>
</template>
