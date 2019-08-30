<template>
  <div class="container">
    <ul>
      <h1 class="title">Hola clasifica tus peliculas</h1>

      <input type="text" class="container" v-model="search" placeholder="search" />
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">director</th>
            <th scope="col">clasificacion</th>
            <th scope="col">favorito</th>
            <th scope="col">archivo</th>
          </tr>
        </thead>
        <tr v-for="peliculas of filteredItems" :key="peliculas.id">
          <td>{{peliculas.nombre}}</td>
          <td>{{peliculas.director}}</td>
          <td>{{peliculas.clasificacion}}</td>

          <td>
            <button @click="addsItem(peliculas.id)" id="button" class="btn btn-primary">Favoritos</button>
          </td>
          <td>
            <button @click="addsItems(peliculas.id)" id="button" class="btn btn-warning">Archivar</button>
          </td>
        </tr>
      </table>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import _ from 'lodash';
const baseURL = "http://localhost:3000/peliculas";
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",

  data() {
    return {
      pelicula: [],
      search: "",
      id: ""
    };
  },
  mounted() {
    //this.state.selected = this.pelicula;
  },
  async created() {
    this.id = "";
    //console.log('created')
    //console.log(  'into home:', this.$store.state.peliculasHome.length)
    try {
      if (this.$store.state.peliculasHome.length === 0) {
        // console.log(  'into home:', this.$store.state.peliculasHome.length)

        const res = await axios.get(baseURL);
        this.pelicula = res.data;
        for (const item of this.pelicula) {
          //console.log(item)
          this.addHome(item);
        }
      } else {
        // console.log('read')
        this.pelicula = this.$store.state.peliculasHome;
      }
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    ...mapActions(["addAbout", "addHome", "addArchivo"]),
    addsItem(id) {
      this.id = id;
      //return this.selected.filter( o => o.id !== id);
      // console.log(this.selected);
      const newi = this.pelicula.find(o => o.id === this.id);
      this.addAbout(newi);
    },
    addsItems(id) {
      this.id = id;
      const file = this.pelicula.find(o => o.id === this.id);
      this.addArchivo(file);
    }
  },
  computed: {
    filteredItems() {
      //console.log('id:sel', this.id)
      //console.log(this.$store.state.peliculas)
      this.pelicula = this.pelicula.filter(o => o.id !== this.id);
      return this.pelicula;
    },
    filteredItems() {
      return this.pelicula.filter(peliculas => {
        console.log(peliculas.nombre, this.search)
        return (_.includes(peliculas.nombre.toLowerCase(),this.search.toLowerCase()));
      });
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
  margin-bottom: 50px;
}
#button {
  margin-top: 5px;
  margin-left: 20px;
}
</style>
