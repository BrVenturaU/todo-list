<template>
    <div class="container">
        <div class="row">
            <b-col cols="12">
                <h1>Tarea #{{$route.params.id}}</h1>
            </b-col>
        </div>
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
                    <button type="button" class="btn btn-primary mt-5">Nueva tarea</button>
                </div>
            </div>
        </b-col>

        <div class="col-sm-15">
            <div class="card card-body shadow p-5 bg-white mb-4 mt-5">
                <div class="row">
                    <div class="col col-24 text-justify">
                        <h4 class="card-title">Primer titulo </h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content. </p><br>
                        <h6>
                            <label id="labelTask">Completa</label>
                            <label class="ml-5">ID: ******************************</label>
                        </h6>
                    </div>
                    <div class="col col-2 mt-5">
                        <div class="btn-group" role="group">
                            <button
                                id="buttonSuccess"
                                type="button" 
                                class="btn btn-success"
                                v-on:click="taskStatus('Tarea completa')">
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
                                v-on:click="taskStatus('Tarea Incompleta')">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-15">
            <div class="card card-body shadow p-5 bg-white mb-4 mt-5">
                <div class="row">
                    <div class="col col-24 text-justify">
                        <h4 class="card-title">Segundo titulo - Tarea </h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p><br>
                        <h6>
                            <!-- <input type="button" value="" v-model="labelTask"> -->
                            <label id="labelTask" >Completa</label>
                            <label class="buttonRes ml-5">ID: ******************************</label>
                        </h6>
                    </div>
                    <div class="col col-2 mt-5">
                        <div class="btn-group" role="group">
                            <!--  -->
                            <button
                                id="buttonSuccess"
                                type="button" 
                                class="btn btn-success"
                                v-on:click="taskStatus('Tarea completa')">
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
                                v-on:click="taskStatus('Tarea Incompleta')">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'ShowTask',
    button_Success: '#buttonSuccess',
    button_Sucess: '#buttonDanger',
    methods: {
        taskStatus: function (mensaje){ 
            alert(mensaje)
        }
    }
}

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
</script>

<style scoped>

</style>