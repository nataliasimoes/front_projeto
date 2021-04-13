<template>
  
  <form @submit.prevent="submit" class="col-6 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded">

    <div class="form-group">
      <label for="data">Data de Chegada</label>
      <input type="date" name="data" v-model="form.dataChegada" class="form-control">
    </div>

    <div class="form-group">
      <label for="local">Data de Saída</label>
      <input type="date" name="local" v-model="form.dataSaida" class="form-control">
    </div>

    <div class="form-group">
      <label for="tecnico">Tombo</label>
      <input type="number" class="form-control" name="local" v-model="form.tombo">
    </div>

    <div class="form-group">
      <label for="tecnico">Tipo</label>
      <input type="text" class="form-control" name="local" v-model="form.tipo">
    </div>

    <div class="form-group">
      <label for="tecnico">Local</label>
      <input type="text" class="form-control" name="local" v-model="form.local">
    </div>

    <div class="input-group">
      <label for="tecnico">Status</label>
      <div class="input-group-prepend ml-3">
      <br>
      <div class="input-group-text mr-3">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="true" v-model="form.status">
        Em conserto
      </div>
        <div class="input-group-text">
        <input type="radio" class="mr-3" aria-label="Botão radio para acompanhar input text" value="false" v-model="form.status">
        Consertado
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
    dataChegada:Date,
    dataSaida:Date,
    local:String,
    tombo:String,
    tipo:String,
    status:Boolean,
  },
  data: function() {
    return {
      form: {
        id: null,
        dataChegada: null,
        dataSaida: null,
        local: null,
        tipo: null,
        tombo: null,
        status: null
      }
    };
  },
  created() {
    this.form = { };
    if (this.id) this.form.id = this.id;
    if (this.dataChegada) this.form.dataChegada = this.dataChegada;
    if (this.dataSaida) this.form.dataSaida = this.dataSaida;
    if (this.local) this.form.local = this.local;
    if (this.tipo) this.form.tipo = this.tipo;
    if (this.tombo) this.form.tombo = this.tombo;
    if (this.status)this.form.status = true;
  },
  methods: {
    submit() {
      this.$emit('submit',{...this.form});
    }
  }
}
</script>