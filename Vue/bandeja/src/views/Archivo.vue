<template>
  <div class="hello">
      <h1>Archivo</h1>
    <ul>
      <tr v-for="peliculas of filteredItems" :key="peliculas.id">
        <td>{{peliculas.nombre}} -{{peliculas.director}}-{{peliculas.clasificacion}}</td>
        <button @click="addsItems(peliculas.id)" class="rm">remove</button>
      </tr>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      pelicula: [],
      //selected: [],
      id: ""
    };
  },
  mounted() {
    //t  his.state.selected = this.pelicula;
  },
  async created() {
    this.id = "";
    console.log("created", this.$store.state.peliculasArchivo.length);
    try {
      if (this.$store.state.peliculasArchivo.length) {
        this.pelicula = this.$store.state.peliculasArchivo;
      }
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions(["removeArchivo"]),
    addsItems(id) {
      this.id = id;
      //return this.selected.filter( o => o.id !== id);
      // console.log(this.selected);

      this.removeArchivo(this.pelicula.find(o => o.id === this.id));
    }
  },
  computed: {
    filteredItems() {
      //console.log('id:sel', this.id)

      //console.log(this.$store.state.peliculas)
      this.pelicula = this.pelicula.filter(o => o.id !== this.id);
      return this.pelicula;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
rm {
  background-color: aqua;
}
</style>
