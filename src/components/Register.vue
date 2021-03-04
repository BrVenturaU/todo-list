<template>
    <div class="container">
        <div class="row mb-3">
            <b-col cols="12" class="text-center">
                <h1>Crear Cuenta</h1>
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
                    <b-form>
                        <b-form-group
                            id="input-group-nombre"
                            label="Nombre:"
                            label-for="nombre"
                        >
                            <b-form-input
                            id="nombre"
                            type="text"
                            placeholder="Ingresa tu nombre..."
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-email"
                            label="Correo electrónico:"
                            label-for="email"
                        >
                            <b-form-input
                            id="email"
                            type="email"
                            placeholder="Ingresa tu correo electrónico..."
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
                            required
                            ></b-form-input>
                        </b-form-group>
                        <div class="text-center">
                            <b-button type="submit" variant="primary" class="mr-3">Crear</b-button>
                            <b-button type="reset" variant="danger">Cancelar</b-button>
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
    .person-fill--icon{
        width:120px;
        height:120px;
    }
</style>