<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">TodoList</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{name:'Dashboard'}">Inicio</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item :to="{name:'CreateTask'}">Tarea</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                </b-nav-form>
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>{{user.nombre}}</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item @click="logout">Cerrar sesión</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'Navbar',
    computed:{
        ...mapState('users', ['user'])
    },
    methods:{
        ...mapActions('users', ['logout'])
    }
}
</script>

<style scoped>

</style>