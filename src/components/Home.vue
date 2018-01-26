<template>
  <div class="home">
    <h2>Who am I</h2>
    <span> {{ whoami }} </span>
    <h2>What I want</h2>
    <span> {{ whatiwant }} </span>
  </div>
</template>

<script>
import data from '../data/me'
export default {
  data () {
    return {
      'whoami': data.whoami,
      'whatiwant': data.whatiwant
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
