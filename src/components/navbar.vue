<template>
  <div class="navbar">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
      rel="stylesheet"
    />
    <div>
      <p @click="goHome" class="logoTexto">Despachando.com</p>
    </div>

    <div>
      <button @click="misRestaurantes" class="botonNavBar">
        Mis restaurantes
      </button>
      <button class="botonNavBar">¿Qué hacemos?</button>
      <button class="botonNavBar">Contáctanos</button>

      <v-btn
        v-if="!this.$store.state.log"
        @click="ingresar"
        class="botonNavBarIngresar"
        small
        color="#f6d247"
        dark
      >
        Ingresar
      </v-btn>

      <v-btn
        v-if="this.$store.state.log"
        @click="salir"
        class="botonNavBarIngresar"
        small
        color="#f6d247"
        dark
      >
        Salir
      </v-btn>

    
      <!-- MENU USUARIO-->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
        v-if="this.$store.state.log"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="indigo" dark v-bind="attrs" v-on="on">
            Menu as Popover
          </v-btn> -->

          <v-btn  color="#f6d247" fab dark small v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  v-bind:src="this.$store.state.infoGoogle.foto"
                  alt="User"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{this.$store.state.infoGoogle.nombre}}</v-list-item-title>
                <v-list-item-subtitle>{{this.$store.state.email}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                
                <v-btn
                    class="mx-2"
                    id="botonesCard"
                    fab
                    dark
                    small
                    color="#f6d247"
                    
                    @click="editarUsuario"
                  >
                    <v-icon dark> mdi-pencil </v-icon>
                  </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>


          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
      menu: false,
      message: false,
      hints: true,
    }),
  methods: {
    ingresar() {
      this.$router.push("/login").catch(() => {});
    },
    goHome() {
      this.$router.push("/home").catch(() => {});
    },
    misRestaurantes() {
      this.$router.push("/principal").catch(() => {});
    },
    salir() {
      this.$store.state.email = "";
      this.$store.state.restaurantes = [];
      this.$store.state.log = false;
    },
    editarUsuario() {
      this.menu = false;
      this.$router.push("/edituser").catch(() => {});
    },
  },
};
</script>

<style scoped>
.botonNavBar {
  padding: 5px;
  font-weight: bold;
  margin: 0px 8px;
}
.botonNavBarIngresar {
  padding: 10px 20px;
  font-weight: bold;
  background: #f6d247;
  border-radius: 30px;
  margin: 0px 8px;
  width: 9vw;
}
.navbar {
  display: flex;
  justify-content: space-between;
  margin: 8px;
}
.logoTexto {
  font-family: "Dancing Script", cursive;
  font-size: 25px;
}
</style>