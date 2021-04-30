<template>
    <form class="form" @submit.prevent="editarTarea(tarea)">
      <Input :tarea="tarea"/>
    </form>

</template>

<script>
// Vuex
import {mapState, mapActions} from 'vuex'

// Componentes 
import Input from '../components/Input'

export default {
    name: 'Editar', 
    components: {Input}, 
    data() {
        return {}
    },
    created() {
        this.setTarea(this.$route.params.id)
        console.log(this.tarea)
    }, 
    methods: {
        ...mapActions(['setTarea', 'editarTarea']), 
    },
    computed: {
        ...mapState(['tarea'])
    }
}
</script>
