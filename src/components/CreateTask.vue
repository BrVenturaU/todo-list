<template>
    <div class="container">
        <section>
          <b-card-group>
              <b-card title="CREAR TAREA">
                <b-form>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Titulo tarea:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input v-model="name" placeholder="Titulo de la tarea"></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Descripción:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-textarea v-model="description" placeholder="Descripción"
                        rows="3" max-rows="6"></b-form-textarea>
                      </b-col>
                  </b-row>
                  <b-row class="mt-4">
                    <b-col sm="10">
                        <b-button type="button" variant="primary" @click="addTask()">Crear tarea</b-button>
                      </b-col>
                  </b-row>
                </b-form>
              </b-card>
          </b-card-group>
      </section>
    </div>
</template>

<script>
//Importar firebase a mi componente
import * as fb from '@/firebase/firebase' 

export default {
    name:'CreateTask',
    props: [],
    data () {
      return {
          //propiedades:
          //name --> titulo  ; description --> descripcion  ; selected --> estado
        name: '',
        description: ''
      }
    },
    //agrega metodo para crear documentos en firestore
    methods: {
      async addTask(){
        try {
            await fb.taskCollection.doc().set({
            titulo: this.name,
            descripcion: this.description,
            estado: false
          });
          this.$emit('createdTask', true);
        } catch (error) {
          alert("No se ha podido crear su tarea.")
          console.log(error.message);
        }
      }
    }
}
</script>

<style scoped>

</style>