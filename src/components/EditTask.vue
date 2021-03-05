<template>
    <div class="container">
        <!--div class="row">
            <b-col cols="12">
                <h1>Editar tarea # {{$route.params.id}}</h1>
            </b-col-->
           
               <b-form v-on:submit.prevent="agregarDato()"> 
      <b-row class="my-1">
              <b-col sm="3">
                  <label for="Titulo de la tarea">Titulo de la tarea</label>
              </b-col>
              <b-col sm="3">
     <b-form-input v-focus type="text" v-model="nombre" ></b-form-input>
              </b-col>
          </b-row>
     <b-row class="my-2">
              <b-col sm="3">
                  <label for="Descripción">Descripción</label>
              </b-col>
              <b-col sm="3">
     <b-form-input v-focus type="text" v-model="descripcion" ></b-form-input>
              </b-col>
          </b-row>
      
    <b-button variant="primary" v-on:click="agregarDato()">Agregar Dato</b-button>
        </b-form>
          
           <b-table-simple :class="[fondo]">
        <b-thead>
           <b-th>ID</b-th>
            <b-th>Titulo</b-th>
            <b-th>Descripción</b-th>
            

         
        </b-thead>
        <b-tbody>
            <b-tr v-for="(dato, index) in arreglo" :key="dato.id">
              <b-td>{{dato.id}}</b-td>
                <b-td>
                  <span v-if="actualizarF && idActualizar==index">
                      <input type="text" v-model="nuevoNombre" class="form-class"/>
                  </span>
                  <span v-else>
                      {{dato.nombre}}
                  </span>                    
                </b-td>
                  <b-td>
                  <span v-if="actualizarF && idActualizar==index">
                      <input type="text" v-model="nuevaDescripcion" class="form-class"/>
                  </span>
                  <span v-else>
                      {{dato.descripcion}}
                  </span>                    
                </b-td>
                             
                <b-td>
                    <span v-if="actualizarF &&  idActualizar==index">
                        <b-button variant="primary" @click="guardarActualizacion(index)">Guardar</b-button>
                    </span>
                    <span v-else>
                        <b-button variant="success" v-on:click="actualizar(index)">Actualizar</b-button>
                        <b-button variant="danger" v-on:click="eliminar(index)">Eliminar</b-button>
                    </span>
                </b-td>
            </b-tr>
        </b-tbody>
      </b-table-simple>
  </div>
 
</template>

<!--script>
export default {
    name:''
}
</script-->

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
    

                
        
                id:1,
                idActualizar:-1,
                nombre:'',
                descripcion:'',
                arreglo:[],
                estilo:{
                  color:'blue',
                  fontSize: '20px'
                },
                actualizarF:false
                
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