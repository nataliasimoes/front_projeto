<template>
  <div>
    <h1>Alterar produto</h1>
    <FormPeriferico
    v-if="hasProduto"
    :id="prod.id"
    :nome="prod.nome"
    :descricao="prod.descricao"
    :preco="prod.preco"
    @submit="alterar"
    >
      <template v-slot:button>
        Alterar
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
  data:() => {
    return {
      periferico: {
      }
    }
  },
  methods: {
    ...mapActions(['alterarPeriferico']),
    async alterar(periferico) {
      await this.alterarPeriferico(periferico);
      this.$router.push('/');
    }
  },
  computed: {
    prod() {
      return this.get(this.$route.params.id);
    },
    hasProduto() {
      return this.prod != null;
    }
  },
  async created() {


  }
}
</script>