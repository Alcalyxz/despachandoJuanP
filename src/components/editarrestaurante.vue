<template>
  <div class="divFormulario">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
      
        v-model="name"
        :rules="[(v) => !!v || 'Item is required']"
        label="Name"
        required
      ></v-text-field>


      <v-text-field
        v-model="direccion"
        :rules="[(v) => !!v || 'Item is required']"
        label="Dirección"
        required
      ></v-text-field>


      <v-text-field
        v-model="descri"
        :rules="[(v) => !!v || 'Item is required',]"
        label="Descripcion"
        required
      ></v-text-field>

      <v-text-field
        v-model="telefono"
        :rules="[(v) => !!v || 'Item is required']"
        label="Teléfono"
        type="number"
        required
      ></v-text-field>

      <v-select
        v-model="tipo"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Tipo"
        required
      ></v-select>

      
      <v-row>
        <v-col cols="11" sm="5">
          <v-menu
            ref="menuss"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="openTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="openTime"
                label="Apertura"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="openTime"
              full-width
              @click:minute="$refs.menuss.save(openTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="11" sm="5">
          <v-menu
            ref="menu"
            v-model="menu3"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="closeTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="closeTime"
                label="Cierre"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu3"
              v-model="closeTime"
              full-width
              @click:minute="$refs.menu.save(closeTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>

      <div class="overflow-hidden">
      <v-bottom-navigation>
        <v-btn @click="goBack">
          <span>Volver</span>
          <v-icon>mdi-keyboard-backspace</v-icon>
        </v-btn>

        <v-btn @click="validar" :disabled="!valid">
          <span>Guardar</span>

          <v-icon>mdi-content-save-all</v-icon>
        </v-btn>

        <v-btn @click="reset">
          <span>Limpiar</span>
          <v-icon>mdi-restore</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    </v-form>
  </div>
</template>

<script>

import servicios from "../services/despachandoServices";
export default {
  name: "agregarrestaurante",
  data: () => ({
    valid: true,
    name: "",
    url:"",
    direccion: "",
    openTime: null,
    closeTime: null,
    menu2: false,
    menu3: false,
    telefono: "",
    modal2: false,
    descri: "",
    requeridoRules: [(v) => !!v || "¡Campo Requerido!"],
    tipo: null,
    items: [
      "Comidas Rapidas",
      "Caseras",
      "Italiano",
      "Heladeria",
      "Panaderia",
      "Otro/a",
    ],
    checkbox: false,
  }),

  methods: {
    async validar() {

      await servicios.updateRestaurant(this.name, this.direccion, this.tipo,this.telefono,this.openTime,  this.closeTime , this.descri, this.$store.state.restauranteActual.nit);
      //this.$refs.form.validate();
      this.$router.push('/principal').catch(()=>{});
    },
    reset() {
      this.$refs.form.reset();
    },
    goBack(){
      this.$router.push('/principal').catch(()=>{});
    }
  },

  mounted() {
    this.name = this.$store.state.restauranteActual.nombre;
    this.descri = this.$store.state.restauranteActual.descripcion;
    this.closeTime= this.$store.state.restauranteActual.hola_cierre;
    this.openTime = this.$store.state.restauranteActual.hora_inicio;
    this.horario = this.$store.state.restauranteActual.horario;
    this.telefono = this.$store.state.restauranteActual.telefono;
    this.tipo = this.$store.state.restauranteActual.tipo_comida;
    this.direccion = this.$store.state.restauranteActual.ubicacion;
  },
};
</script>

<style scoped>

.divFormulario{
  padding: 0 1rem;
  min-width: 400px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

</style>