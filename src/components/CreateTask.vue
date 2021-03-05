<template>
    <div class="container">
        <section>

          <b-card-group>

              <b-card title="CREAR TAREA">
                <b-form>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Titulo tarea:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-input placeholder="Titulo de la tarea"></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="my-1">
                      <b-col sm="2">
                        <label>Descripción:</label>
                      </b-col>
                      <b-col sm="10">
                        <b-form-textarea placeholder="Descripción"
                        rows="3" max-rows="6"></b-form-textarea>
                      </b-col>
                  </b-row>
                  <b-row class="my-1"> 
                    <b-col sm="2">
                          <label>Estado: </label>
                    </b-col>              
                    <b-col sm="10">
                          <b-form-radio-group
                            class="mb-9"
                            value-field="status"
                            text-field="name"
                          ></b-form-radio-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="10">
                        <b-button type="button" variant="primary">Crear tarea</b-button>
                      </b-col>
                  </b-row>
                </b-form>
              </b-card>
          </b-card-group>
              
      </section>
    </div>
</template>

<script>
export default {
    name:''
}
</script>

<style scoped>

</style>