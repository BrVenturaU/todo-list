<template>
    <div class="container">
        <b-col cols="15">
            <div class="row">
                <div class="col col-10">
               <!-- <div class="col col-md-9 col-sm-6 col-xs-25 mt-5">-->
                    <div class="input-group rounded mt-5">
                        <input 
                            type="search" 
                            class="form-control rounded" 
                            placeholder="Buscar" 
                            aria-label="Buscar"/>
                        <button class="input-group-text border-0" id="search-addon">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" 
                                fill="currentColor" 
                                class="bi bi-search" 
                                viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                               
                    </div>
                </div>
                <div class="col col-2 ">
                    <b-button  v-b-modal="'modal-crear'" class="mx-auto">Crear Tarea</b-button>

                    <b-modal id="modal-crear" ref="modal-crear" hide-footer title="Crear Tarea" size="lg">
                        <CreateTask @createdTask="hideModal('modal-crear')" />
                    </b-modal>
                </div>
            </div>
        </b-col>

        <div class="col-sm-15">
            <div class="card card-body shadow p-5 bg-white mb-4 mt-5" v-for="tarea of tareas" :key="tarea.id">
                <div class="row" >
                    <div class="col col-24 text-justify">
                        <h4 class="card-title">{{tarea.titulo}}</h4>
                        <p class="card-text"><strong>Descripción:</strong> {{tarea.descripcion}}</p><br>
                        <h6 v-if="tarea.estado">
                            Completa
                        </h6>
                    </div>
                    <div class="col col-2 mt-5">
                        <div class="btn-group" role="group">
                            <button
                                id="buttonSuccess"
                                type="button" 
                                class="btn btn-success"
                                v-if="!tarea.estado"
                                @click="checkTask(tarea)"
                                >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" height="16" 
                                    fill="currentColor" 
                                    class="bi bi-check2" 
                                    viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 
                                    10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </button>
                            <button 
                                id="buttonDanger"
                                type="button" 
                                class="btn btn-danger" 
                                @click="deleteTask(tarea.id)">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" height="20" 
                                    fill="currentColor" 
                                    class="bi bi-x" 
                                    viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 
                                    2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                            <b-button variant="warning" class="text-white mr-2"
                                v-b-modal="`modal-edit-${tarea.id}`">
                                    <b-icon icon="pencil"></b-icon>
                            </b-button>
                                
                            <b-modal :id="`modal-edit-${tarea.id}`" :ref="`modal-edit-${tarea.id}`"
                                hide-footer :title="`Editar a: ${tarea.titulo}`" size="lg">
                                    <EditTask :id="tarea.id" @updatedTask="hideModal(`modal-edit-${tarea.id}`)"  />
                            </b-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {taskCollection} from '@/firebase/firebase'
import CreateTask from './CreateTask.vue'
import EditTask from './EditTask.vue'
export default {
    name:'Dashboard',
    components:{
        CreateTask, 
        EditTask
    },
    data() {
        return {
            tareas: [],
            modalType: ''
        }
    },
    created(){
        this.getTasks();
    },
    computed:{
    },
    methods: {
        async deleteTask(id){
            try {
                await taskCollection.doc(id).delete();
                this.getTasks();
            } catch (error) {
                alert(`No se pudo eliminar la tarea.`)
                console.log(error.message);
            }
        },
        async checkTask(tarea){
            try {
                console.log(tarea)
                await taskCollection.doc(tarea.id).set({
                    titulo: tarea.titulo,
                    descripcion: tarea.descripcion,
                    estado: true
                });
                this.getTasks();
            } catch (error) {
                alert(`No se pudo actualizar a: ${tarea.titulo}`)
                console.log(error.message);
            }
        },
        showModal(ref){
            this.$refs[ref].show();
        },
        hideModal(ref){
            console.log(ref)
            this.$refs[ref].hide();
            this.getTasks();
        },
        async getTasks(){
            try {
                let response = await taskCollection.get();
                let tareas = []
                response.forEach(doc => {
                    tareas.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        descripcion: doc.data().descripcion,
                        estado: doc.data().estado
                    });
                });
                this.tareas = tareas;
            } catch (error) {
                alert("No se pudo obtener los datos.")
                console.log(error.message);
            }
        },
    },
}
</script>

<style scoped>

</style>