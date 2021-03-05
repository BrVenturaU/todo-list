<template>
  <div class="container">
        <section>
          <b-card-group>
              <b-card title="ACTUALIZAR TAREA">
                <b-form>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Titulo tarea:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input v-model="tarea.titulo" placeholder="Titulo de la tarea"></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Descripción:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-textarea v-model="tarea.descripcion" placeholder="Descripción"
                        rows="3" max-rows="6"></b-form-textarea>
                      </b-col>
                  </b-row>
                  <b-row class="mt-4">
                    <b-col sm="10">
                        <b-button type="button" variant="primary" @click="updateTask()">Actualizar tarea</b-button>
                      </b-col>
                  </b-row>
                </b-form>
              </b-card>
          </b-card-group>
      </section>
    </div>
</template>

<!--script>
export default {
    name:''
}
</script-->

<script>

import {taskCollection} from '@/firebase/firebase'
export default {
  name: 'EditTask',
  props: {
    id: String
  },
  data () {
      return {
        tarea:{
          titulo: '',
          descripcion: '',
          estado: true
        }
      }
    },
    created(){
      let vm = this
      taskCollection.doc(this.id).get()
        .then(response => {
          let task = response.data();
          vm.tarea.titulo = task.titulo;
          vm.tarea.descripcion = task.descripcion;
          vm.tarea.estado = task.estado;
        })
        .catch(error => {
          console.log(error);
        })
    },
  methods:{
    async updateTask(){
      try {
        await taskCollection.doc(this.id).set(this.tarea);
        this.$emit('updatedTask', true)
      } catch (error) {
        alert("No se pudo actualizar la tarea.")
        console.log(error.message);
      }
    }
  },

}
</script>

<style scoped>

</style>