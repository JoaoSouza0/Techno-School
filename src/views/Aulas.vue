<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition>
      <div v-if="api">
        <div>
          <h2>{{ api.nome }}</h2>
          <div class="video">
            <iframe
              :src="`https://www.youtube.com/embed/${api.youtube}`"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "aulas",
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
