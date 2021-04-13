<template>
  <div class="mt-5">
    <h1>CONSERTOS</h1>
    <hr>
    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarconserto" class="btn btn-success">Cadastrar Conserto</router-link>
    </div>
    

    <table class="table table-striped table-hover mt-3 mx-auto text-center col-11 shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th>ID</th>
          <th>Chegada</th>
          <th>Saída</th>
          <th>Tombo</th>
          <th>Tipo</th>
          <th>Local</th>
          <th>Status</th>         
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="conserto in consertos"
        :key="conserto.id" 
        >
          <td>{{conserto.id}}</td>
          <td>{{conserto.dataChegada | dataconvert}} </td>
          <td>{{conserto.dataSaida | vazio | dataconvert}}</td>
          <td>{{conserto.tombo}}</td>
          <td>{{conserto.tipo}}</td>
          <td>{{conserto.local}}</td>
          <td :class="{ consertado : conserto.status, consertando : !conserto.status}">{{conserto.status | cst}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.consertando{
color: rgb(255, 136, 0);

}
.consertado{
color: green
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.listarConserto();
  },
  methods: {
    ...mapActions(['listarConserto']),
    
  },
  computed: {
    ...mapState({
      consertos: state => state.consertos
    })
  },
filters: {
    dataconvert(value){
        var str = value;
        var res = str.split(" ");
        res = res[0]
        return res;
    },
    cst(value) {
      if (value == false) {
        return  'Em Conserto';

      }else if(value == true){
        return  'Consertado';
      }
      else return "Não informado";
    },
    vazio(value){
        if(value == null){
            return 'Ainda não foi devolvido';
        }else return value
    }
  }
}
</script>