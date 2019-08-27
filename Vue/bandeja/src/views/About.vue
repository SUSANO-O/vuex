<template>
  <div class="hello">
    <ul>
      <tr v-for='peliculas of filteredItems' :key='peliculas.id'> <td>{{peliculas.nombre}} -{{peliculas.director}}-{{peliculas.clasificacion}}</td>
             <button @click="addsItem(peliculas.id)">filter </button>


      </tr> 
      
    </ul>
  </div>
</template>

<script>
 import axios from "axios";
  const baseURL = "http://localhost:3000/peliculas"
  import { mapActions } from 'vuex'

export default { 
   
  data(){
    return {
      pelicula:[],
      selected: [],
      id: '',
    }
  },
  mounted() {
    //this.state.selected = this.pelicula;
  },
  async created(){
      this.id = '';
      console.log('created', this.$store.state.peliculasAbout.length)
      try{
        if(this.$store.state.peliculasAbout.length){
          this.pelicula = this.$store.state.peliculasAbout;
        }
      }catch(e){
        console.error(e)
      }   
  },
  
  methods: {
    ...mapActions([
      'addHome'
    ]),
    addsItem(id){ 

      this.id= id;
      //return this.selected.filter( o => o.id !== id);
    // console.log(this.selected);
       const newi= this.pelicula.find( o => o.id === this.id);
     
      this.addHome (newi )

    },
  },
  computed: {
    filteredItems() {
      //console.log('id:sel', this.id)
    
      //console.log(this.$store.state.peliculas)
      this.pelicula = this.pelicula.filter( o => o.id !== this.id)
      return this.pelicula;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
