<template>
  <div class="login">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
      rel="stylesheet"
    />

    <div>
      <p class="logoTexto">Despachando.com</p>
    </div>
    <form>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :counter="10"
        type="password"
        label="Contraseña"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <div>
        <v-row>
          <v-col>
            <v-btn class="botonIngresar" @click="submit"> Ingresar </v-btn>
          </v-col>

          <v-col>
            <p class="botonNecesitasCuenta">
              Necesitas una cuenta?
              <router-link to="/signup">Sign Up</router-link>
            </p>
          </v-col>
        </v-row>

        <v-progress-circular
          v-if="cargando"
          :width="3"
          color="red"
          indeterminate
        ></v-progress-circular>

        <v-row>
            <div class="loginGoogle">
              <img
                @click="loginGoogle"
                height="45px"
                src="../assets/images/loginGoogle.png"
                alt=""
              />
            </div>
        </v-row>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import firebase from "firebase";

import servicios from "../services/despachandoServices";

export default {
  password: "login",
  mixins: [validationMixin],

  validations: {
    password: { required, minLength: minLength(10) },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    password: "",
    email: "",
    cargando: false,
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("La contraseña debe tener más de 10 caracteres");
      !this.$v.password.required && errors.push("Contraseña es requerida.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Ingresa un email valido");
      !this.$v.email.required && errors.push("Email es requerido");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.user.Im);
          },
          (err) => {
            alert(err);
          }
        );
    },
    async loginGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
          /** @type {firebase.auth.OAuthCredential} */

          var user = result.user;

          console.log(user);

          this.cargando = !this.cargando;
          await servicios.emailExist(user.email, user.uid);

          this.$store.state.email = user.email;

          this.$store.state.infoGoogle.foto = user.photoURL;
          this.$store.state.infoGoogle.nombre = user.displayName;
          this.$store.state.infoGoogle.id = user.uid;

          //MACHIETAZOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!! para que alcance a cargar la data, no se me ocurrio ni chimba de más, si no le gusta coma mda pirobo
          await 2;

          //Llenar los Restaurantes de este usuario en el Store

          this.$store.state.log = true;
          this.$router.push("/principal").catch(() => {});
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;

          console.log(errorCode + errorMessage + email + credential);
          // ...
        });
    },
  },
};
</script>

<style scoped>
.login {
  padding: 0 1rem;
  min-width: 400px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.redes {
  margin: 1%;
  text-align: center;
}
.logoTexto {
  padding-bottom: 30px;
  font-family: "Dancing Script", cursive;
  text-align: center;
  font-size: 55px;
}
.botonNecesitasCuenta {
  margin-top: 15px;
  margin-left: 0;
}
.botonIngresar {
  margin-top: 20px;
}

.loginGoogle {
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
