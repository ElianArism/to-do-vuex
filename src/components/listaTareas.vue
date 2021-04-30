<template>
  <table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>

  <tbody v-for="t of tareas" :key="t.id">
    <tr>
      <td>{{t.texto}}</td>
      <td>{{t.descripcion}}</td>
      <td>{{t.categorias.join(', ')}}</td>
      <td>{{t.estado}}</td>
      <td>{{t.numero}}</td>
      <td>
          <button class="btn btn-danger" @click="deleteTarea(t.id)">Eliminar</button>
          
            <router-link 
              class="btn mx-1 btn-success" 
              :to="{name: 'Editar', params: {id: t.id} }"
            >
              Editar
            </router-link> 
         
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>

// Vuex 
import {mapState, mapActions} from 'vuex'

export default {
    name: 'ListaTareas', 
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTarea'])
    }
}
</script>

<style>

</style>