<template>
  <div class="mt-5">
    <h1>EQUIPAMENTOS</h1>
    
    <div class=" pagination justify-content-end mr-5">
      <router-link to="/cadastrarOcorrencia" class="btn btn-success">Cadastrar Equipamentos</router-link>
    </div>
    

    <table class="table table-striped table-hover mt-3 mx-auto text-center col-11 shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th>TOMBO</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>local</th>
          <th>Funciona</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="equipamento in equipamentos"
        :key="equipamento.id" 
        >
          <td>{{equipamento.tombo | vazio}}</td>
          <td>{{equipamento.tipoEquipamento}}</td>
          <td>{{equipamento.marcaEquipamento | vazio}}</td>
          <td>{{equipamento.local | vazio}}</td>
          <td>{{equipamento.funciona | fouv}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.listarEquipamentos();
  },
  methods: {
    ...mapActions(['listarEquipamentos'])
  },
  computed: {
    ...mapState({
      equipamentos: state => state.equipamentos
    })
  },
filters: {
    fouv(value) {
      if (value == false) {
        return  'Não funciona';

      }else if(value == true){
        return  'Funciona';
      }
      else return "Não informado";
    },
    vazio(value){
        if(value == null){
            return 'Não informado';
        }else return value
    }
  }
}
</script>