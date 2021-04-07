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
          <td>{{ocorrencia.dataOcorrencia}}</td>
          <td>{{ocorrencia.local}}</td>
          <td>{{ocorrencia.tecnicoId}}</td>
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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
      tecnicos: state => state.tecnicos
    })
  },

}
</script>