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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
