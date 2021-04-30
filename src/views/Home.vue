<template>
  <form @submit.prevent="procesarForm" class="form">
    <Input :tarea="tarea" />
  </form>

  <hr>

  <ListaTareas />
</template>


<script>
// ShortId
const shortId = require('shortid')

// Vuex 
import {mapActions} from 'vuex'

// Componentes
import Input  from '../components/Input'
import ListaTareas  from '../components/listaTareas'

export default {
  name: 'Home',
  components: {
    Input, 
    ListaTareas
  }, 
  data() {
    return {
      tarea: {
        id: '',
        texto: '',
        descripcion: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']), 
    
    procesarForm() {
      // procesar id
      this.tarea.id = shortId.generate()
      
      // setear store 
      this.setTareas(this.tarea)
      
      // limpiar form
      this.tarea = {
        texto: '',
        descripcion: '',
        categorias: [],
        estado: '',
        numero: 0
      }
      
    }
  }, 
  
}
</script>
