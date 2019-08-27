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
  name: 'HelloWorld',
   
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
      console.log('created')
      console.log(  'into home:', this.$store.state.peliculasHome.length)
      try{
        if(this.$store.state.peliculasHome.length === 0){
          console.log(  'into home:', this.$store.state.peliculasHome.length)

          const res = await axios.get(baseURL)
          this.pelicula = res.data;
          for (const item of this.pelicula){
            console.log(item)
            this.addHome (item )
          }
        }else{
          console.log('read')
          this.pelicula = this.$store.state.peliculasHome;
        }
      }catch(e){
        console.error(e)
      }   
  },
  
  methods: {
    ...mapActions([
      'addAbout','addHome'
    ]),
    addsItem(id){ 

      this.id= id;
      //return this.selected.filter( o => o.id !== id);
    // console.log(this.selected);
       const newi= this.pelicula.find( o => o.id === this.id);
     
      this.addAbout (newi )

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
