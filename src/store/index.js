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
    },

    addOcorrencia(state,ocorrencia) {
      state.ocorrencias.push({...ocorrencia}); //, id: state.animais.length+1
    },

    addEquipamento(state,equipamento) {
      state.equipamentos.push({...equipamento}); //, id: state.animais.length+1
    },

    addTecnico(state,tecnico) {
      state.tecnicos.push({...tecnico}); //, id: state.animais.length+1
    },

    addPeriferico(state,periferico) {
      state.perifericos.push({...periferico}); //, id: state.animais.length+1
    },
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
    },

    async cadastrarOcorrencia({commit}, ocorrencia){
      const resultado = await Axios.post('http://localhost:3000/ocorrencia', ocorrencia);
      commit('addOcorrencia', resultado.data)
    },

    async cadastrarEquipamento({commit}, equipamento){
      const resultado = await Axios.post('http://localhost:3000/equipamento', equipamento);
      commit('addEquipamento', resultado.data)
    },

    async cadastrarPeriferico({commit}, periferico){
      const resultado = await Axios.post('http://localhost:3000/periferico', periferico);
      commit('addPeriferico', resultado.data)
    },

    async cadastrarTecnico({commit}, tecnico){
      const resultado = await Axios.post('http://localhost:3000/tecnico', tecnico);
      commit('addTecnico', resultado.data)
    },
  },
  modules: {
  }
})
