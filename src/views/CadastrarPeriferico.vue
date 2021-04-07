<template>
  <div class="mt-5">
    <h1>Cadastro de Periférico</h1>
    <FormPeriferico @submit="cadastrar">
      <template v-slot:button>
        Cadastrar
      </template>
    </FormPeriferico>
  </div>
</template>

<script>
import FormPeriferico from '../components/FormPeriferico';
import { mapActions } from 'vuex'
export default {
  components: {
    FormPeriferico
  },
  methods: {
    ...mapActions(['cadastrarPeriferico']),
    async cadastrar(objeto) {
      await this.cadastrarPeriferico(objeto);
      this.$router.push('/perifericos');
    }
  }
}
</script>