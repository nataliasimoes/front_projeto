import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnicos: [],
    equipamentos: [],
    perifericos:[],
    ocorrencias: []
  },
  
  mutations: {
    setTecnicos(state, listarTecnicos){
      state.tecnicos = listarTecnicos
    },

    setEquipamentos(state, listarEquipamentos){
      state.equipamentos = listarEquipamentos
    },

    setPerifericos(state, listarPerifericos){
      state.perifericos = listarPerifericos
    },

    setOcorrencias(state, listarOcorrencias){
      state.ocorrencias = listarOcorrencias.reverse()
    }
  },
  actions: {

    async listarTecnicos({commit}){
      const resposta = await Axios.get('http://localhost:3000/tecnico');
      commit('setTecnicos', resposta.data);
    },

    async listarEquipamentos({commit}){
      const resposta = await Axios.get('http://localhost:3000/equipamento')
      commit('setEquipamentos', resposta.data)
    }, 

    async listarPerifericos({commit}){
      const resposta = await Axios.get('http://localhost:3000/periferico');
      commit('setPerifericos', resposta.data);
    },

    async listarOcorrencias({commit}){
      const resposta = await Axios.get('http://localhost:3000/ocorrencia');
      commit('setOcorrencias', resposta.data)
    }
  },
  modules: {
  }
})
