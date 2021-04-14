<template>
  <div>
    <transition>
        <div v-if="api" class="conteudo">
      <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link
          class="btn-cursos"
           tag="button"
           to="/cursos">
            Cursos</router-link >

          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="(avaliacao, index) in api.avaliacoes" :key="index">
                <h3>{{ avaliacao.nome }}</h3>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/learning.png" alt="Pessoa voando por aprender" />
      </div>
    </transition>
    <div v-if="loading">
      <PageLoading></PageLoading>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

import fetchData from "../mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/Home");
  },
};
</script>

<style scoped>
.btn-cursos {
  border: none;
  background-color: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>

