<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <div class="mensajeError" v-if="!this.$store.state.log">
      <img src="..\assets\images\pageNotFound.jpg" alt="" width="500px" />
      <h3>¡Por Favor Inicia Sesión!</h3>
    </div>

    <h1 v-if="this.$store.state.log" class="titulo">Mis restaurantes</h1>

    <v-row v-if="this.$store.state.log">
      <v-col>
        <div>
          <v-row>
            <v-col
              v-for="restaurant in restaurantes"
              v-bind:key="restaurant.nit"
              cols="15"
              class="mt-5"
            >
              <v-card class="mx-auto" width="344" height="570">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  @click="goMenu(restaurant)"
                  height="250"
                  v-bind:src="restaurant.foto"
                ></v-img>

                <v-card-title>{{ restaurant.nombre }}</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5</div>
                  </v-row>

                  <div class="my-4 subtitle-1">
                    $ • {{ restaurant.tipo_comida }}
                  </div>

                  <div>
                    {{ restaurant.descripcion }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                  <strong>Horarios Disponibles:</strong> 
                  <v-chip-group
                    column
                  >
                    <v-chip>{{ restaurant.hora_inicio }} AM </v-chip>
                    <v-chip>{{ restaurant.hola_cierre }} PM </v-chip>
                  </v-chip-group>

                  <div class="accionesRestaurante">
                    <div class="overflow-hidden">
                      <v-bottom-navigation>
                        <v-btn v:bind v-on:click="editar(restaurant)">
                          <span>Editar</span>

                          <v-icon>mdi-lead-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="goMenu(restaurant)">
                          <span>Ver Menú</span>
                          <v-icon>mdi-eye</v-icon>
                        </v-btn>

                        <v-btn
                          v:bind
                          v-on:click="deletes(restaurant.nit.toString())"
                        >
                          <span>Eliminar</span>

                          <v-icon>mdi-delete</v-icon>
                        </v-btn>

                        <v-btn @click="goNuevoPedido">
                          <span>Pedido</span>
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <p>
      <v-spacer></v-spacer>
    </p>
    <div
      class="overflow-hidden"
      id="agregarResturanteButton"
      v-if="this.$store.state.log"
    >
      <v-btn color="blue-grey" class="ma-2 white--text" @click="agregar">
        Agregar Restaurante
        <v-icon right dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import services from "../services/despachandoServices";

export default {
  name: "principal",
  data: () => ({
    nit: "",
  }),
  computed: {
    ...mapState(["restaurantes"]),
  },
  methods: {
    ...mapActions(["getRestaurantes"]),
    agregar() {
      this.$router.push("/agregarrestaurante").catch(() => {});
    },
    async deletes(nits) {
      await services.deleteRestaurant(nits);
      this.$router.push("/puente").catch(() => {});
    },
    editar(restaurante) {
      console.log(restaurante);
      this.$store.state.restauranteActual = restaurante;
      this.$router.push("/editarrestaurante").catch(() => {});
    },
    goMenu(restaurante) {
      this.$store.state.restauranteActual = restaurante;
      this.$router.push("/menus").catch(() => {});
    },
    goNuevoPedido(){
      console.log('Hola');
      this.$router.push("/crearpedido").catch(() => {});
    }
  },
  mounted() {
    this.getRestaurantes();
  },
};
</script>

<style scoped>
#botonesCard {
  margin-bottom: 1vw;
}

.accionesRestaurante {
  text-align: center;
}

.titulo {
  font-family: Poppins;
}
#añadirRestaurante {
  margin-top: 20%;
}

#agregarResturanteButton {
  display: flex;
  justify-content: space-around;
}

.mensajeError {
  padding: 0 1rem;
  min-width: 400px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 100px;
}
</style>
