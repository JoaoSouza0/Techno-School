<template>
  <div>
    <transition>
      <div v-if='api'>
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for='curso in api.cursos' :key='curso.id'>
            <router-link :to= "{ name:'curso', params: {curso: curso.id} }">
              <h2>
                {{ curso.nome }} - {{ curso.totalAulas }} |
                {{ curso.horas }} horas
              </h2>
            </router-link>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
    <div v-if='loading'>
      <PageLoading></PageLoading>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import fetchData from '../mixins/fetchData.js';

export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos');
  },
};
</script>

<style>
</style>
