<template>
  <div class="mt-5">
    <h1>OCORRÊNCIAS</h1>
    <hr>
    
    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarocorrencia" class="btn btn-success ">Cadastrar Ocorrência</router-link>
    </div>
    

    <table class="table table-striped table-hover mt-3 mx-auto text-center col-11 shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th>ID</th>
          <th>Data </th>
          <th>Local</th>
          <th>Técnico</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="ocorrencia in ocorrencias"
        :key="ocorrencia.id" 
        >
          <td>{{ocorrencia.id}}</td>
          <td>{{ocorrencia.dataOcorrencia | dataconvert}}</td>
          <td>{{ocorrencia.local}}</td>
          <td>{{ocorrencia.tecnicoId | nome}}</td>
          <td>{{ocorrencia.descricao}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
thead{
  background-color: #0B1337;
  color: white;
  }

h1{
  color: #132268;
  margin-left: 50px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

h4, h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.btn-success{
  background-color: #04725e;
}

</style>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.listarOcorrencias();
  },
  methods: {
    ...mapActions(['listarOcorrencias']),
  },
  computed: {
    ...mapState({
      ocorrencias: state => state.ocorrencias,
    })
  },
  filters: {
    nome(value) {
      if (value == 1) {
        return  'Natália';

      }else if(value == 2){
        return  'Joalison';
      }
      else return "Não informado";
    },
        dataconvert(value){
        var str = value;
        var res = str.split(" ");
        res = res[0]
        return res;
    },
  }

}
</script>