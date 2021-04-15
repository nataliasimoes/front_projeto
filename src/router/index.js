import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ocorrencias from '../views/Ocorrencias.vue'
import Equipamento from '../views/Equipamento.vue'
import Perifericos from '../views/Perifericos.vue'
import Tecnicos from '../views/Tecnicos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ocorrencias',
    name: 'Ocorrencias',
    component: Ocorrencias
  },
  {
    path: '/equipamentos',
    name: 'Equipamentos',
    component: Equipamento
  },
  {
    path: '/perifericos',
    name: 'Perifericos',
    component: Perifericos
  },
  {
    path: '/tecnicos',
    name: 'Tecnicos',
    component: Tecnicos
  },
  {
    path: '/cadastrarocorrencia',
    name: 'CadastrarOcorrencia',
    component: () => import( '../views/CadastrarOcorrencia.vue')
  },
  {
    path: '/cadastrarequipamento',
    name: 'CadastrarEquipamento',
    component: () => import( '../views/CadastrarEquipamento.vue')
  },
  {
    path: '/cadastrarperiferico',
    name: 'CadastrarPeriferico',
    component: () => import( '../views/CadastrarPeriferico.vue')
  },
  {
    path: '/removerequipamento/:tombo',
    name: 'RemoverEquipamento',
    component: () => import( '../views/RemoverEquipamento.vue')
  },
  {
    path: '/removerperiferico/:id',
    name: 'RemoverPeriferico',
    component: () => import( '../views/RemoverPeriferico.vue')
  },
  {
    path: '/alterariferico/:id',
    name: 'AlterarPeriferico',
    component: () => import( '../views/AlterarPeriferico.vue')
  },
  {
    path: '/consertos',
    name: 'Consertos',
    component: () => import( '../views/Consertos.vue')
  },
  {
    path: '/cadastrarconserto',
    name: 'CadastrarConserto',
    component: () => import( '../views/CadastrarConserto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
