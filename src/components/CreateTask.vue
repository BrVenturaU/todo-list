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
                  <b-row class="my-1"> 
                    <b-col sm="2">
                          <label>Estado: </label>
                    </b-col>              
                    <b-col sm="10">
                          <b-form-radio-group
                            v-model="selected"
                            :options="options"
                            class="mb-9"
                            value-field="status"
                            text-field="name"
                          ></b-form-radio-group>
                    </b-col>
                  </b-row>
                  <b-row>
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
        description: '',
        //Insumos para mis radioButtoms
        selected: false ,
        options: [
          { status:  true , name: 'Activa' },
          { status:  false, name: 'Inactiva' }
        ]
      }
    },
    //agrega metodo para crear documentos en firestore
    methods: {
      addTask(){
        fb.taskCollection.doc().set({
          titulo: name,
          descripcion: this.description,
          estado: this.selected
        });
      }
    }
}
</script>

<style scoped>

</style>