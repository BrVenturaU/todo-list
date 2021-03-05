<template>
    <div class="container">
        <div class="row">
            <b-col cols="12">
                <h1>Este es el contenido del usuario</h1>
            </b-col>
        </div>

        <div class="row">
            <b-col cols="12" sm="6" md="4" class="mb-4"
                v-for="tarea of tareas" :key="tarea.id">
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
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
export default {
    name:'Dashboard',
    data() {
        return {
            tareas: []
        }
    },
    created(){
        this.mostrarTareas()
    },
    methods: {
        async mostrarTareas(){
            let response = await taskCollection.get();
            response.forEach(doc => {
                this.tareas.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    descripcion: doc.data().descripcion,
                    estado: doc.data().estado
                });
            });
        }
    },
}
</script>

<style scoped>

</style>