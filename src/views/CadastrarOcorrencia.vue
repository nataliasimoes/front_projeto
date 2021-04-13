<template>
  <div class="mt-5">
    <h1>CADASTRAR OCORRÊNCIA</h1>
    <FormOc @submit="cadastrar">
      <template v-slot:button>
        Cadastrar
      </template>
    </FormOc>
    <div class="text-center">
      <div v-for="tecnico in tecnicos " :key="tecnico.id">
        <h5>ID: {{tecnico.id}} - {{tecnico.nome}}</h5>
      </div>
    </div>

  </div>
</template>

<script>
import FormOc from '../components/FormOc';
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    FormOc
  },
  methods: {
    ...mapActions(['cadastrarOcorrencia', 'listarTecnicos']),
    async cadastrar(objeto) {
      await this.cadastrarOcorrencia(objeto);
      this.$router.push('/ocorrencias');
    }
  },
  created(){
    this.listarTecnicos();
  },
  computed:{
    ...mapState({
      tecnicos: state => state.tecnicos
    })
  }
}
</script>