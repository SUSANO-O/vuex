<template>
  <div class="container">
    <h1 class="title">favoritos</h1>
    <ul>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">nombre</th>
              <th scope="col">director</th>
              <th scope="col">clasificacion</th>
          </tr>
        </thead>
          <tr v-for="peliculas of filteredItems" :key="peliculas.id">
            <td>{{peliculas.nombre}}</td>
            <td>{{peliculas.director}}</td>
            <td>{{peliculas.clasificacion}}</td>
             <td>
            <button @click="addsItem(peliculas.id)" id="button" class="btn btn-success">home</button>
             </td>
          </tr>
        </table>
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
    //this.state.selected = this.pelicula;
  },
  async created() {
    this.id = "";
    console.log("created", this.$store.state.peliculasAbout.length);
    try {
      if (this.$store.state.peliculasAbout.length) {
        this.pelicula = this.$store.state.peliculasAbout;
      }
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions(["addHome"]),
    addsItem(id) {
      this.id = id;
      //return this.selected.filter( o => o.id !== id);
      // console.log(this.selected);
      const newi = this.pelicula.find(o => o.id === this.id);
      this.addHome(newi);
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
.title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171c49;
  margin-bottom: 50px
}
#button {
  margin-top: 5px;
  margin-left: 20px;
}
</style>
