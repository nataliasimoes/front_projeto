<template>
  <div class="mt-5">
    <h1>Cadastro de Ocorrência</h1>
    <FormOc @submit="cadastrar">
      <template v-slot:button>
        Cadastrar
      </template>
    </FormOc>
  </div>
</template>

<script>
import FormOc from '../components/FormOc';
import { mapActions } from 'vuex'
export default {
  components: {
    FormOc
  },
  methods: {
    ...mapActions(['cadastrarOcorrencia']),
    async cadastrar(objeto) {
      await this.cadastrarOcorrencia(objeto);
      this.$router.push('/ocorrencias');
    }
  }
}
</script>