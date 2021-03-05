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
                        <b-form-input v-model="titulo" placeholder="Titulo de la tarea"></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Descripción:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-textarea v-model="descripcion" placeholder="Descripción"
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

<!--script>
export default {
    name:''
}
</script-->

<script>


export default {
  name: 'EditTask',
  props: {
  },
  data () {
      return {
        titulo: '',
        descripcion: '',
        estado: false ,
        options: [
          { status:  true , name: 'Activa' },
          { status:  false, name: 'Inactiva' }
        ]
      }
    },
  methods:{
   
      agregarDato(){
                    this.arreglo.push({
                       id:this.id++, nombre: this.nombre, descripcion: this.descripcion
                    });
                },
      actualizar(registro_id){
        //rellenar los campos
        this.idActualizar= registro_id;
        this.nuevoNombre=this.arreglo[registro_id].nombre;
        this.nuevaDescripcion=this.arreglo[registro_id].descripcion;
        this.actualizarF=true;
      },
      guardarActualizacion(registro_id){
        this.actualizarF=false;
        this.arreglo[registro_id].nombre= this.nuevoNombre,
        this.arreglo[registro_id].descripcion= this.nuevaDescripcion
      },
     eliminar(registro_id){
       //borrar elemento de la lista
        this.arreglo.splice(registro_id, 1);
     }

},

}
</script>

<style scoped>

</style>