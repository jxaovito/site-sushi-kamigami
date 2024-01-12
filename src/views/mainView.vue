<script setup>
let previousPosition = document.querySelector('.navbar').height() * 2;

window.addEventListener('scroll', function() {
  const currentPosition = document.querySelector('.navbar').height() * 2;

  if (previousPosition > currentPosition) {
    // user has scrolled up
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  previousPosition = currentPosition;
});
</script>

<template>
  <header class="sticky top-0 z-50 w-full">
    <nav class="relative navbar">
      <div class="flex justify-between items-center p-3">
        <img
          src="../img/kamigami.png"
          class="xl:h-8 xl:ml-12 xl:mt-6"
          alt="KamiGami Logo"
        />
        <div class="flex items-center space-x-6 xl:mr-12 xl:mt-6 xl:to-white">
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
    <h1 class="mainTitle xl:mb-[-10rem]">ESPECIALIDADE DA CASA</h1>
    <img alt="Vue logo" class="logo xl:w-[35rem] xl:pt-[-20rem]" src="../img/fotoprincipalsemciruclo.png" />
  </div>

  <div class="">
    <span class="presentationSubtitle">DÊ UMA OLHADA NOS NOSSOS</span>
    <h1 class="presentationTitle">PRINCIPAIS PRODUTOS</h1>
  </div>

  <div class="grid grid-cols-2">
    <div class="mt-20">
      <img class="sushi" src="../img/sushipresentation1.jpg" alt="" />
      <img class="sushi1" src="../img/salmao.jpg" alt="" />
      <img class="sushi2" src="../img/sushipresentation3.jpg" alt="" />
    </div>

    <div class="products grid grid-rows-4">
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500 2xl:w-50">MAKI ROLLS</h3>
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
      <a href="#" class="btn btn-primary">Cardápio</a>
    </div>
  </div>

  <div class="xl:mt-[-13rem] xl:mb-[-1rem] 2xl:mt-[0rem] 2xl:ml-[6rem] orderContainer">
    <span class="orderSubtitle xl:ml-[16rem]">ENCOMENDE AGORA</span>
  <h1 class="orderTitle xl:ml-[9rem] xl:mt-[-0.5rem]">O SEU PEDIDO</h1>
  
</div>
    <div class="infos">
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500 xl:pl-[3rem] ">ENDEREÇO</h3>
        <p>Kamigami Sushi Bar, Av. Cel. Procópio Gomes, 918 - Bucarein, Joinville - SC, 89202-422</p>
      </div>
      <div class="grid grid-cols-2">
        <h3 class="font-montserrat font-bold text-blue-500">CONTATO</h3>
        <p>Whatsapp: (47) 988140193
          <br>Instagram: @sushikamigami
        </p>
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
     
     
    </div>
    <div class="w-full">
    <img class="xl:mt-[-43rem] xl:ml-[50rem] 2xl:ml-[60.7rem] 2xl:mt-[-45rem]" src="../img/bigsashimi.png" alt="" />
  </div>

</template>
