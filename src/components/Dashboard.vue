<template>
    <div class="container">
        <div class="row mb-4">
            <b-col cols="12" sm="8" md="9">
                <h1>Tus tareas</h1>
            </b-col>
            <b-col cols="12" sm="4" md="3" >
                <b-button  v-b-modal="'modal-crear'" class="mx-auto">Crear Tarea</b-button>

                <b-modal id="modal-crear" ref="modal-crear" hide-footer title="Crear Tarea" size="lg">
                    <CreateTask @createdTask="createdTask" />
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
                                <b-button href="#" variant="primary">Go somewhere</b-button>
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
export default {
    name:'Dashboard',
    components:{
        CreateTask
    },
    data() {
        return {
            tareas: []
        }
    },
    created(){
        this.getTasks();
    },
    computed:{
    },
    methods: {
        async createdTask(){
            this.$refs['modal-crear'].hide();
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