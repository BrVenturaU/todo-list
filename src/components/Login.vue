<template>
    <div class="container">
        <div class="row">
            <b-col cols="12">
                <h1>Inicio de Sesión</h1>
             <hr width=1200>
            </b-col>
            </div>
        <div class="row">
            <b-col cols="12">
             

                    <div>
                        <label for="correo">correo</label>
                        <input type="email" id="email" v-model="usuario" class="form-control"> 

                    </div>

                     <div>
                        <label for="pass">contraseña</label>
                        <input type="password" id="password" v-model="contraseña" class="form-control" > 

                    </div>

            </b-col> 

            
        </div>
        <br>
        <div>
                <button @click="registrar" class="btn btn-success">Registrase </button>
             </div> 
             
                 

     </div>
     
     
</template>

<script>

import firebase from 'firebase' 
export default {
    name: 'Login',
    data() {
        return{
        usuario:'',
        contraseña: ''
        }
       
    },

    methods:{
        registrar(){
            let vm = this
            firebase.auth().signInWithEmailAndPassword(this.usuario, this.contraseña)
            .then(function(){
                vm.$router.replace({name:'Home'})
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

</style>