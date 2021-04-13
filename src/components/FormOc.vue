<template>
  
  <form @submit.prevent="submit" class="col-6 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded">
    <div class="form-group">
      <label for="data">Data</label>
      <input type="date" name="data" v-model="form.dataOcorrencia" class="form-control" placeholder="xx/xx/xxxx">
    </div>

    <div class="form-group">
      <label for="local">Local</label>
      <input type="text" name="local" v-model="form.local" class="form-control">
    </div>

    <div class="form-group">
      <label for="tecnico">ID do Técnico</label>
      <input type="number" class="form-control" name="tecnico ID" v-model="form.tecnicoId">
    </div>

    <div class="form-group">
      <label for="descricao">Descrição</label>
      <textarea class="form-control" name="descricao" v-model="form.descricao"></textarea>
    </div>

    <button class="btn btn-success" type="submit">
      <slot name="button"></slot>
    </button>
  </form>
</template>

<style>
label{
  color: #132268;
  font-size: 20px;
}
</style>

<script>
export default {
  props: {
    id:Number,
    dataOcorrencia:Date,
    local:String,
    tecnicoId:Number,
    descricao:String,
  },
  data: function() {
    return {
      form: {
        id: null,
        dataOcorrencia: null,
        local: null,
        tecnicoId: null,
        descricao: null
      }
    };
  },
  created() {
    this.form = { };
    if (this.id) this.form.id = this.id;
    if (this.dataOcorrencia) this.form.dataOcorrencia = this.dataOcorrencia;
    if (this.local) this.form.local = this.local;
    if (this.tecnicoId) this.form.tecnicoId = this.tecnicoId;
    if (this.descricao) this.form.descricao = this.descricao;
  },
  methods: {
    submit() {
      this.$emit('submit',{...this.form});
    }
  }
}
</script>