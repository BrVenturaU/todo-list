import {taskCollection} from '@/firebase/firebase'
export default{
    namespaced:true,
    state: {
        tasks:[]
    },
    mutations: {
        SET_USER_TASKS(state, tasks){
            state.tasks = tasks;
        }
    },
    actions: {
        async getTasks({commit}){
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
                commit('SET_USER_TASKS', tareas);
            } catch (error) {
                alert("No se pudo obtener los datos.")
                console.log(error.message);
            }
        },
        async updateTaskPool({dispatch}){
            await dispatch('getTasks');
        }
    }
}