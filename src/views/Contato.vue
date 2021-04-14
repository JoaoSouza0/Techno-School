<template>
  <div>
    <transition>
      <div v-if='api'>
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for='(item, index) in api.contato' :key='index'>
            <p> <b> {{ index }} </b>: {{ item }}</p>
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
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  },
};
</script>

<style>
</style>
