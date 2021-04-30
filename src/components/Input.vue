<template>
    <!-- text -->
    <!-- .lazy bindea los datos cuando quita el focus del campo -->
    <input 
        type="text" 
        class="form-control my-2" 
        v-model.lazy="tarea.texto" 
        placeholder="Ingrese su nombre"
    >
    <!-- .trim limpia espacios al principio y final del campo -->
    <input 
        type="text" 
        class="form-control my-2" 
        v-model.trim="tarea.descripcion" 
        placeholder="Ingrese breve descripcion"
    >

    <!-- Checkboxes -->
    <div class="form-check form-check-inline">

        <input 
        type="checkbox" 
        class="form-check-input" 
        id="check-1" 
        v-model="tarea.categorias" 
        placeholder="Ingrese su nombre"
        value="JavaScript"
        >
        <label for="check-1" class="form-check-label" >JavaScript</label>

    </div>

    <div class="form-check form-check-inline">

        <input 
        type="checkbox" 
        class="form-check-input" 
        id="check-2" 
        v-model="tarea.categorias" 
        placeholder="Ingrese su nombre"
        value="Node.js"
        >
        <label for="check-2" class="form-check-label">Node JS</label>

    </div>

    <!-- Radio -->
    <div class="mt-2">
        <div class="form-check form-check-inline">
        <input 
            class="form-check-input"  
            type="radio" 
            id="radio-1"
            v-model="tarea.estado"
            value="urgente"
        >
        <label class="form-check-label" for="radio-1" >Urgente</label>
        </div>

        <div class="form-check form-check-inline">
        <input 
            class="form-check-input"  
            type="radio" 
            id="radio-2"
            v-model="tarea.estado"
            value="relax"
        >
        <label class="form-check-label" for="radio-2">Relax</label>
        </div>
    </div>

    <!-- number -->
    <div class="mt-2">
        <input
        class="form-control" 
        type="number" 
        v-model.number="tarea.numero"
        >
    </div>

    <!-- btn -->
    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="validarCamposDeTexto">Procesar</button>

</template>

<script>
export default {
    name: 'Input', 
    props: {
        tarea: Object
    },
    data() {
        return {
        }
    },
    computed: {
        validarCamposDeTexto() {
            if (
                this.tarea.texto.trim() === '' || this.tarea.descripcion.trim() === '' 
                || this.tarea.categorias.length < 1 || this.tarea.estado.trim() === ''
                || this.tarea.numero < 1) {
                return true //disabled true
            }
            return false //disabled false 
        }
    }

}
</script>

<style>

</style>