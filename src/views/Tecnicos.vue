<template>
  <div class="mt-5">
    <h1>TÉCNICOS</h1>
    <hr>
    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarOcorrencia" class="btn btn-success"
        >Cadastrar Técnico</router-link
      >
    </div>

    <div class="card-deck text-center col-9 mx-auto mt-5 " >
      <div class="card shadow p-3 mb-5 bg-white rounded sombra" v-for="tecnico in tecnicos" :key="tecnico.id">
        <img
          class="card-img-top mx-auto"
          src="assets/img/logo-1.png"
          alt="Imagem de capa do card"  style="width: 50%; "
        />
        <div class="card-body">
          <h3 class="card-title">{{tecnico.nome}}</h3>
          <h4 class="card-text">
            {{tecnico.telefone}}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.listarTecnicos();
  },
  methods: {
    ...mapActions(["listarTecnicos"]),
  },
  computed: {
    ...mapState({
      tecnicos: (state) => state.tecnicos,
    }),
  }
};
</script>
