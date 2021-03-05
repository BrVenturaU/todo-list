import * as fb from '@/firebase/firebase'
import router from '@/router'
export default{
    namespaced:true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER_PROFILE(state, user){
            state.user = user;
        }
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
                // console.log(user);
                dispatch('getUserProfile', user.uid);
            } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        },
        async getUserProfile({commit}, uid){
            const user = await fb.usersCollection.doc(uid).get();
            commit('SET_USER_PROFILE', user.data());
            router.replace({name:'Dashboard'});
        },
        async logout({commit}){
            try {
                await fb.auth.signOut();
                
                commit('SET_USER_PROFILE', {});
                router.replace({name:'Login'});
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}