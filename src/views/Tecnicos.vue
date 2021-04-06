<template>
  <div class="mt-5">
    <h1>TÉCNICOS</h1>

    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarOcorrencia" class="btn btn-success"
        >Cadastrar Técnico</router-link
      >
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
  },
  filters: {
    fouv(value) {
      if (value == false) {
        return "Não funciona";
      } else if (value == true) {
        return "Funciona";
      } else return "Não informado";
    },
    vazio(value) {
      if (value == null) {
        return "Não informado";
      } else return value;
    },
  },
};
</script>
