import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 
  {
    path: '/token',
    component: () => import('../modules/inscripcion/pages/GenerarToken.vue')
  },
  {
    path: '/guardar',
    component: () => import('../modules/inscripcion/pages/GuardarEstudiante.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
