<template>
  <div class="mt-5">
    <h1>PERIFÉRICOS</h1>
    <hr>    
    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarperiferico" class="btn btn-success">Cadastrar Periférico</router-link>
    </div>
    

    <table class="table table-striped table-hover mt-3 mx-auto text-center col-11 shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Disponível</th>
          <th>Alterar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="periferico in perifericos"
        :key="periferico.id" 
        >
          <td>{{periferico.id}}</td>
          <td>{{periferico.tipoPeriferico}}</td>
          <td>{{periferico.quantidade | vazio}}</td>
          <td :class="{ funciona : periferico.disponivel, naodisponivel : !periferico.funciona}">{{periferico.disponivel | fouv}}</td>
          <td><router-link :to="{name: 'AlterarPeriferico', params: { id: periferico.id } }"  class='bx bx-edit-alt'></router-link></td>
          <td><router-link :to="{name: 'RemoverPeriferico', params: { id: periferico.id } }"  class='bx bxs-trash'></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.listarPerifericos();
  },
  methods: {
    ...mapActions(['listarPerifericos'])
  },
  computed: {
    ...mapState({
      perifericos: state => state.perifericos
    })
  },
filters: {
  //verifica se é verdadeiro ou falso
    fouv(value) {
      if (value == false) {
        return  'Indisponível';

      }else if(value == true){
        return  'Disponível';
      }
      else return "Não informado";
    },

    // se estiver vazio, no campo aparence como nao informado
    vazio(value){
        if(value == null){
            return 'Não informado';
        }else return value
    }
  }
}
</script>