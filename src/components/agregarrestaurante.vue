<template>
  <div class="divFormulario">
    <v-form ref="form" v-model="valid" lazy-validation class="formulario">
      <v-text-field
        v-model="name"
        :rules="[(v) => !!v || 'Item is required']"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="nit"
        :rules="[(v) => !!v || 'Item is required']"
        label="Nit"
        type="number"
        required
      ></v-text-field>

      <v-file-input v-model="imagen" :rules="[(v) => !!v || 'Item is required']" accept="image/*" label="Imagen Restaurante">  </v-file-input>

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

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="¿Aceptas los terminos?"
        required
      ></v-checkbox>

    <div class="overflow-hidden">
      <v-bottom-navigation>
        <v-btn @click="goBack">
          <span>Volver</span>
          <v-icon>mdi-keyboard-backspace</v-icon>
        </v-btn>

        <v-btn @click="validar" :disabled="!valid">
          <span>Restaurante</span>

          <v-icon>mdi-plus-box-multiple</v-icon>
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
import firebase from "firebase";
import servicios from "../services/despachandoServices";
export default {
  name: "agregarrestaurante",
  data: () => ({
    valid: true,
    name: "",
    imagen: null,
    nit: "",
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

      //Conexion con FireStorage para almacenar la imagen
      const ref = firebase.storage().ref();
      const nombree = new Date() + '-' + this.imagen.name;
      const metaData={
        contentType: this.imagen.type,
      }
      const task = ref.child(nombree).put(this.imagen,metaData);
      task 
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then( async url => {

        //Una vez tenemos el URL llamamos el método de añadir restaurante
        await servicios.addRestaurant(this.nit, this.name, this.direccion, this.tipo, this.telefono, this.$store.state.infoGoogle.id, url, this.openTime,this.closeTime,this.descri);
        this.$router.push('/principal').catch(()=>{});
      })
      
      this.$refs.form.validate();

      
    },
    reset() {
      this.$refs.form.reset();
    },
    goBack(){
        this.$router.push('/principal').catch(()=>{});
    }
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