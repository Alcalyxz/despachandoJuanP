<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="apellido"
        :rules="nameRules"
        label="Apellido"
        required
      ></v-text-field>


      <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="computedDateFormattedMomentjs"
            clearable
            label="Fecha de Nacimiento"  
            readonly
            v-bind="attrs"
            v-on="on"
            @click:clear="date = null"
          ></v-text-field>
        </template>
        <v-date-picker locale="es-CO" v-model="date" @change="menu1 = false"></v-date-picker>
      </v-menu>

      <v-text-field
          v-model="celular"
          :rules="celularRules"
          label="Teléfono"
          required
        ></v-text-field>


      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="¿Estás seguro?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>

    </v-form>
  </div>
</template>

<script>
import moment from "moment";
import servicios from "../services/despachandoServices";
import { format, parseISO } from "date-fns";
export default {
  name: "edituser",
  data: () => ({
    date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
    menu1: false,
    menu2: false,
    valid: true,
    celular: "",
    name: "",
    apellido: "",
    nameRules: [(v) => !!v || "is required"],
    celularRules:[
       (v) =>  /(^[0-9]*$)/.test(v) || "Numérico Por Favor",
       (v) => !!v || "Celular is required",
    ],
    select: null,
    checkbox: false,
  }),
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
    },
  },
  methods: {
    async validate() {
        console.log(this.$store.state.email, this.name, this.apellido, this.date, this.celular);
      await servicios.updateUser(this.$store.state.email, this.name, this.apellido, this.date, this.celular);
      this.$router.push('/home').catch(()=>{});
    },
    reset() {
      this.$refs.form.reset();
    },
    
  },
};
</script>

<style scoped>
</style>