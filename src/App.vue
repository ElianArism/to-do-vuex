<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  data() {
    return {
    
    }
  },
  created() {
    this.cargarLocalStorage() 
  }, 
  methods: {
    ...mapActions(['cargarLocalStorage'])
    
  }
}
</script>
