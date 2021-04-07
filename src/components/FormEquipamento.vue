<template>
  
  <form @submit.prevent="submit" class="col-6 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded">
    <div class="form-group">
      <label for="data">Tombo</label>
      <input type="text" name="data" v-model="form.tombo" class="form-control">
    </div>

    <div class="form-group">
      <label for="data">Tipo</label>
      <input type="text" name="data" v-model="form.tipoEquipamento" class="form-control">
    </div>

    <div class="form-group">
      <label for="local">Marca</label>
      <input type="text" name="local" v-model="form.marcaEquipamento" class="form-control">
    </div>

    <div class="form-group">
      <label for="tecnico">Local</label>
      <input type="text" class="form-control" name="local" v-model="form.local">
    </div>

    <div class="input-group">
      <label for="tecnico">Funciona?</label>
      <div class="input-group-prepend ml-3">
      <br>
      <div class="input-group-text mr-3">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="true" v-model="form.funciona">
        Funciona
      </div>
        <div class="input-group-text">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="false" v-model="form.funciona">
        Não Funciona
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
    tombo:Number,
    tipoEquipamento:String,
    marcaEquipamento:String,
    local:String,
    funciona:Boolean,
  },
  data: function() {
    return {
      form: {
        tombo: null,
        tipoEquipamento: null,
        marcaEquipamento: null,
        local: null,
        funciona: null
      }
    };
  },
  created() {
    this.form = { };
    if (this.tombo) this.form.tombo = this.tombo;
    if (this.tipoEquipamento) this.form.tipoEquipamento = this.tipoEquipamento;
    if (this.marcaEquipamento) this.form.marcaEquipamento = this.marcaEquipamento;
    if (this.tecnicoId) this.form.tecnicoId = this.tecnicoId;
    if (this.funciona)this.form.funciona = true;
  },
  methods: {
    submit() {
      this.$emit('submit',{...this.form});
    }
  }
}
</script>