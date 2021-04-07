<template>
  
  <form @submit.prevent="submit" class="col-6 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded">
    <div class="form-group">
      <label for="data">Tipo</label>
      <input type="text" name="data" v-model="form.tipoPeriferico" class="form-control">
    </div>

    <div class="form-group">
      <label for="local">Quantidade</label>
      <input type="number" name="local" v-model="form.quantidade" class="form-control">
    </div>

    <div class="input-group">
      <label for="tecnico">Disponível?</label>
      <div class="input-group-prepend ml-3">
      <br>
      <div class="input-group-text mr-3">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="true" v-model="form.disponivel"> Disponível
      </div>
        <div class="input-group-text">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="false" v-model="form.disponivel"> Indisponível
      </div>
      </div>
    </div>

    <button class="btn btn-success mt-3" type="submit">
      <slot name="button"></slot>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    id:Number,
    tipoPeriferico:String,
    quantidade:Number,
    disponivel:Boolean,
  },
  data: function() {
    return {
      form: {
        id: null,
        tipoPeriferico: null,
        quantidade: null,
        local: null,
        disponivel: null
      }
    };
  },
  created() {
    this.form = { };
    if (this.id) this.form.id = this.id;
    if (this.tipoPeriferico) this.form.tipoPeriferico = this.tipoPeriferico;
    if (this.quantidade) this.form.quantidade = this.quantidade;
    if (this.tecnicoId) this.form.tecnicoId = this.tecnicoId;
    if (this.disponivel)this.form.disponivel = this.disponivel;
  },
  methods: {
    submit() {
      this.$emit('submit',{...this.form});
    }
  }
}
</script>