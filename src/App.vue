<template>
  <div id="app">

  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/logoLN.png" alt="" class="img-fluid mt-5">
        <h1 class="text-light"><router-link to="/">T.I LAGOA NOVA</router-link></h1>
      </div>

      <nav class="nav-menu mt-5 text-center">
        <ul>
          <li class="active"><router-link to="/"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
          <li><router-link to="/ocorrencias"><i class="bx bx-list-ul"></i> <span>Ocorrências</span></router-link></li>
          <li><router-link to="/equipamentos" ><i class='bx bx-desktop'></i> <span> Equipamento</span></router-link></li>
          <li><router-link to="/consertos"><i class="bx bxs-wrench"></i> Consertos </router-link></li>
          <li><router-link to="/perifericos"><i class="bx bx-mouse-alt"></i> Periféricos </router-link></li>
          <li><router-link to="/tecnicos"><i class="bx bx-user"></i> Técnicos </router-link></li>
        </ul>
      </nav>
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header>


  <main id="main">
    <router-view/>
  </main>

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

