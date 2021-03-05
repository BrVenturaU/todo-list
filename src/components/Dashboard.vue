<template>
    <div class="container">
        <div class="row mb-4">
            <b-col cols="12" sm="8" md="9">
                <h1>Tus tareas</h1>
            </b-col>
            <b-col cols="12" sm="4" md="3" >
                <b-button  v-b-modal="'modal-crear'" class="mx-auto">Crear Tarea</b-button>

                <b-modal id="modal-crear" ref="modal-crear" hide-footer title="Crear Tarea" size="lg">
                    <CreateTask @createdTask="hideModal('modal-crear')" />
                </b-modal>
            </b-col>
        </div>

        <div class="row">
            <b-col cols="12" sm="6" md="4" class="mb-5"
                v-for="tarea of tareas" :key="tarea.id">
                <b-card no-body class="overflow-hidden shadow" style="max-width: 540px;">
                    <b-row no-gutters>
                        <b-col md="12">
                            <b-card-body :title="tarea.titulo">
                                <b-card-text>
                                    {{tarea.descripcion}}
                                </b-card-text>
                                <b-button variant="primary" class="mr-2" v-b-modal="`modal-show-${tarea.id}`">
                                    <b-icon icon="eye"></b-icon>
                                </b-button>

                                <b-button variant="warning" class="text-white mr-2" v-b-modal="`modal-edit-${tarea.id}`">
                                    <b-icon icon="pencil"></b-icon>
                                </b-button>
                                
                                <b-button variant="success" v-if="!tarea.estado"
                                    @click="checkTask(tarea)">
                                    <b-icon icon="check-circle"></b-icon>
                                </b-button>
                                <b-modal :id="`modal-edit-${tarea.id}`" :ref="`modal-edit-${tarea.id}`" hide-footer :title="`Editar a: ${tarea.titulo}`" size="lg">
                                    <EditTask />
                                </b-modal>
                                <b-modal :id="`modal-show-${tarea.id}`" :ref="`modal-show-${tarea.id}`" hide-footer :title="`Tarea: ${tarea.titulo}`" size="lg">
                                    <ShowTask />
                                </b-modal>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </div>
    </div>
</template>

<script>
import {taskCollection} from '@/firebase/firebase'
import CreateTask from './CreateTask.vue'
import EditTask from './EditTask.vue'
import ShowTask from './ShowTask.vue'
export default {
    name:'Dashboard',
    components:{
        CreateTask, 
        EditTask,
        ShowTask
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
        async hideModal(ref){
            this.$refs[ref].hide();
            await this.getTasks();
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