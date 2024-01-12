<script setup>
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0)
})

</script>

<template>
  <div class="bg-head relative">
  <header class="top-0 z-50 w-full">
    <nav class="relative navbar">
      <div class="flex justify-between items-center p-3">
        <img
          src="../img/kamigami.png"
          class="xl:h-8 xl:pl-12 xl:mt-3"
          alt="KamiGami Logo"
        />
        <div class="flex items-center space-x-6 xl:mr-12 xl:mt-5 2xl:mt-7 xl:to-white">
          <a
            href="https://www.instagram.com/sushikamigami/"
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Nosso Cardápio</a
          >
          <a
            href="https://pedir.delivery/kamigami"
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Faça seu pedido</a
          >
          <a
            href="https://www.instagram.com/sushikamigami/"
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Sobre nós</a
          >
          <a
            href="https://www.instagram.com/sushikamigami/"
            class="font-montserrat font-light text-gray-500 dark:text-white hover:text-red-400"
            >Contato</a
          >
        </div>
      </div>
    </nav>
  </header>
  <div class="xl:pt-[6rem]">
    <span class="subtitle">VENHA EXPERIMENTAR A</span>
    <h1 class="mainTitle xl:mb-[-10rem]">ESPECIALIDADE DA CASA</h1>
    <img
      alt="Vue logo"
      class="logo xl:w-[35.5rem]"
      src="../img/fotoprincipalsemciruclo.png"
    />
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
      <a href="#" class="btn btn-primary">Cardápio</a>
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
    <!-- <img
      class="xl:mt-[-43rem] xl:ml-[50rem] 2xl:ml-[60.7rem] 2xl:mt-[-45rem]"
      src="../img/bigsashimi.png"
      srcset="../img/bigsashimi.png 100w, ../img/bigsashimi768.png  100w"
      sizes="(min-width: 1532px) 1532px, (min-width: 1280px) 1280px"
              
    /> -->
  </div>

  <div class="footer grid grid-cols-3 xl:mt-[13.5rem]">
    <div class="xl:ml-[5rem]">
      <img
        class="xl:w-[200px] xl:pt-[4rem] xl:pb-7"
        src="../img/kamigami.png"
        alt=""
      />
      <span class="font-lato text-gray-300"
        >Sushi Kami Gami © 2024 <br/>
        Todos os direitos reservados.
      </span>
    </div>
    <div>
      <h3
        class="font-montserrat xl:pl-12 xl:pt-[4.5rem] xl:mb-5 text-gray-200 font-extralight"
      >
      <a href="#">
        HOME
 
      </a>     </h3>
      <h3
        class="font-montserrat xl:pl-12 xl:mb-5 text-gray-200 font-extralight"
      >
      <a href="#">
        CARDÁPIO
      </a>
      </h3>
      <h3
        class="font-montserrat xl:pl-12 xl:mb-5 text-gray-200 font-extralight"
      >
      <a href="https://pedir.delivery/kamigami">
        FAÇA SEU PEDIDO
      </a>
      </h3>
  
      <h3
        class="font-montserrat xl:pl-12 xl:mb-5 text-gray-200 font-extralight"
      >
      <a href="https://www.instagram.com/sushikamigami/">
        CONTATO
      </a>
      </h3>
    </div>
    <div class="xl:mt-[4rem] xl:mr-10 2xl:mr-[7rem]">
      <v-icon name="fa-map-marker-alt" scale="1.2" fill="red" />
      <span class="font-lato text-gray-400 xl:pl-2"
        >Kamigami Sushi Bar, Av. Cel. Procópio Gomes, 918 - Bucarein, Joinville
        - SC, 89202-422</span
      ><br />
      <v-icon name="fa-regular-clock" scale="1.2" fill="red" /><span
        class="font-lato text-gray-400 xl:pl-2"
        >Terça a domingo: das 18h às 23h30 </span
      ><br />
      <v-icon name="bi-telephone" scale="1.2" fill="red" /><span
        class="font-lato text-gray-400 xl:pl-2"
      >
        (47) 98814-0193 </span
      ><br />
      <v-icon name="md-deliverydining-outlined" scale="1.2" fill="red" /><span
        class="font-lato text-gray-400 xl:pl-2"
        > (47) 3034-0983
      </span>
    </div>
  </div>
</div>
</template>
