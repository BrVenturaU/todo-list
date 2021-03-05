<template>     
     <div class="container">
        <div class="row mb-3">
            <b-col cols="12" class="text-center">
                <h1>Iniciar Sesión</h1>
            </b-col>
        </div>

        <div class="row">
            <b-col cols="12" sm="8" md="6" class="mx-auto">
                <b-card
                    tag="article"
                    style=""
                    class="mx-auto p-4 shadow"
                >
                <b-icon icon="person-fill" class="rounded-circle bg-primary p-3 d-block mx-auto person-fill--icon" variant="light"></b-icon>
                    <b-form @submit.prevent="registrar">
                        <b-form-group
                            id="input-group-email"
                            label="Correo electrónico:"
                            label-for="email"
                        >
                            <b-form-input
                            id="email"
                            type="email"
                            placeholder="Ingresa tu correo electrónico..."
                            v-model="usuario"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-password"
                            label="Contraseña:"
                            label-for="password"
                        >
                            <b-form-input
                            id="password"
                            type="password"
                            placeholder="Ingresa tu contraseña..."
                            v-model="password"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <div class="text-center">
                            <b-button type="submit" variant="primary" class="mr-3">Iniciar Sesión</b-button>
                            <b-button variant="success" class="mr-3" @click="createAccount">Crear Cuenta</b-button>
                            <b-button type="reset" variant="danger">Cancelar</b-button>
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase' 
import {mapActions} from 'vuex'
export default {
    name: 'Login',
    data() {
        return{
            usuario:'',
            password: ''
        }
       
    },

    methods:{
        ...mapActions('users', ['getUserProfile']),
        createAccount(){
            this.$router.replace({name:'Register'})
        },
        registrar(){
            let vm = this
            firebase.auth().signInWithEmailAndPassword(vm.usuario, vm.password)
            .then(function(usuario){
                vm.getUserProfile(usuario.user.uid);
            })
            .catch(error => {
             console.log(error);
                if(error.code == "auth/invalid-email")
                    alert("El correo es invalido")
                else
                 alert(error.message);
            });
        }    
    }
}
</script>

<style scoped>

.person-fill--icon{
    width:120px;
    height:120px;
}
</style>