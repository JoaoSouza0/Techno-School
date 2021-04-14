export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    async fetchData(url) {
      this.loading = true;
      this.api = null;
      const fetchContato = await fetch(`http://localhost:3000${url}`);
      const responseContato = await fetchContato.json();
      setTimeout(() => {
        this.loading = false;
        this.api = responseContato;
      }, 2000);
    },
  },
};
