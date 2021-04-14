import Vue from 'vue';
import VueRouter from 'vue-router';
import Contato from '../views/Contato.vue';
import Home from '../views/Home.vue';
import Cursos from '../views/Cursos.vue';
import Curso from '../views/Curso.vue';
import Aulas from '../views/Aulas.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'contato',
    path: '/contato',
    component: Contato,
  },
  {
    name: 'cursos',
    path: '/cursos',
    component: Cursos,
  },
  {
    name: 'curso',
    path: '/cursos/:curso',
    component: Curso,
    props: true,
    children: [
      {
        path: ':aula',
        name: 'aula',
        component: Aulas,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
