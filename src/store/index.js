import { createStore } from 'vuex'

// router 
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      texto: '',
      descripcion: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargarLocalStorage(state, payload) {
      state.tareas = payload
    },
    setTareas(state, payload) {
      state.tareas = [payload, ...state.tareas]
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    setTarea(state, payload) {
      state.tarea = state.tareas.find(t => t.id === payload)
    },
    deleteTarea(state, payload) {
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
      if(state.tarea.id === payload) state.tarea = {id: '', texto: '', descripcion: '', categorias: [], estado: '', numero: 0}
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    editarTarea({tareas}, payload) {
      tareas = tareas.map(tarea => {
        if ( tarea.id === payload.id ) tarea = payload
      })
      localStorage.setItem('tareas', JSON.stringify(tareas))
      // redireccionar 
      router.push('/')
    }
  },
  actions: {
    cargarLocalStorage({commit}) {
      if(localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargarLocalStorage', tareas)
        return 
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea) {
      commit('setTareas', {...tarea})
    },
    deleteTarea({commit}, id) {
      commit('deleteTarea', id) 
    },
    editarTarea({commit}, tarea) {
      commit('editarTarea', {...tarea})
    },
    setTarea({commit}, id) {
      commit('setTarea', id)
    }
  },
  modules: {
  }
})
