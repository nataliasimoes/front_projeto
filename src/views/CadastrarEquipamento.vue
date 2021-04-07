<template>
  <div class="mt-5">
    <h1>Cadastro de Equipamento</h1>
    <FormEquipamento @submit="cadastrar">
      <template v-slot:button>
        Cadastrar
      </template>
    </FormEquipamento>
  </div>
</template>

<script>
import FormEquipamento from '../components/FormEquipamento';
import { mapActions } from 'vuex'
export default {
  components: {
    FormEquipamento
  },
  methods: {
    ...mapActions(['cadastrarEquipamento']),
    async cadastrar(objeto) {
      await this.cadastrarEquipamento(objeto);
      this.$router.push('/equipamentos');
    }
  }
}
</script>