<template>
  <div class="container">
    <h1>hola harold</h1>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/peliculas";


export default {
  name: 'HelloWorld',

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
