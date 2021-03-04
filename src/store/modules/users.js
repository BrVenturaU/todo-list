import * as fb from '@/firebase/firebase'
import router from '@/router'
export default{
    namespaced:true,
    state: {
    },
    mutations: {
    },
    actions: {
        async createUser({dispatch }, userData){
            try {
                console.log(dispatch)
                const {user} = await fb.auth.createUserWithEmailAndPassword(userData.email, userData.password);

                await fb.usersCollection.doc(user.uid).set({
                    nombre: userData.nombre,
                    email: userData.email
                });
                console.log(user);
                router.replace({name: 'Home'})
            } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        }
    }
}