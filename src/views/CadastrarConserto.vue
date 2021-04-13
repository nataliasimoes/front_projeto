<template>
  <div class="mt-5">
    <h1>Registro de Conserto</h1>
    <FormConserto @submit="cadastrar">
      <template v-slot:button>
        Cadastrar
      </template>
    </FormConserto>
  </div>
</template>

<script>
import FormConserto from '../components/FormConserto.vue';
import { mapActions } from 'vuex'
export default {
  components: {
    FormConserto
  },
  methods: {
    ...mapActions(['cadastrarConserto']),
    async cadastrar(objeto) {
      await this.cadastrarConserto(objeto);
      this.$router.push('/consertos');
    }
  }
}
</script>