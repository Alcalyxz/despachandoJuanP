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
      <p>Ya tienes una cuenta? <router-link to="/login">Login</router-link></p>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Estás de acuerdo?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>
      <p @click="openConfirm">Consulta Términos Y Condiciones</p>

      <v-btn class="mr-4" @click="submit">Registrarse </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>

    <v-dialog v-model="dialogTerminos" max-width="600px">
      <v-card>
    
        <div class="tyc">
          <table>
            <thead>
              <tr>
                <th>Terminos y condiciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INFORMACIÓN RELEVANTE</td>
              </tr>
              <tr>
                <td>
                  Es requisito necesario para la adquisición de los productos
                  que se ofrecen en este sitio, que lea y acepte los siguientes
                  Términos y Condiciones que a continuación se redactan. El uso
                  de nuestros servicios así como la compra de nuestros productos
                  implicará que usted ha leído y aceptado los Términos y
                  Condiciones de Uso en el presente documento. Todas los
                  productos que son ofrecidos por nuestro sitio web pudieran ser
                  creadas, cobradas, enviadas o presentadas por una página web
                  tercera y en tal caso estarían sujetas a sus propios Términos
                  y Condiciones. En algunos casos, para adquirir un producto,
                  será necesario el registro por parte del usuario, con ingreso
                  de datos personales fidedignos y definición de una contraseña.
                  El usuario puede elegir y cambiar la clave para su acceso de
                  administración de la cuenta en cualquier momento, en caso de
                  que se haya registrado y que sea necesario para la compra de
                  alguno de nuestros productos. no asume la responsabilidad en
                  caso de que entregue dicha clave a terceros. Todas las compras
                  y transacciones que se lleven a cabo por medio de este sitio
                  web, están sujetas a un proceso de confirmación y
                  verificación, el cual podría incluir la verificación del stock
                  y disponibilidad de producto, validación de la forma de pago,
                  validación de la factura (en caso de existir) y el
                  cumplimiento de las condiciones requeridas por el medio de
                  pago seleccionado. En algunos casos puede que se requiera una
                  verificación por medio de correo electrónico. Los precios de
                  los productos ofrecidos en esta Tienda Online es válido
                  solamente en las compras realizadas en este sitio web.
                </td>
              </tr>
              <tr>
                <td>LICENCIA</td>
              </tr>
              <tr>
                <td>
                  a través de su sitio web concede una licencia para que los
                  usuarios utilicen los productos que son vendidos en este sitio
                  web de acuerdo a los Términos y Condiciones que se describen
                  en este documento.
                </td>
              </tr>
              <tr>
                <td>USO NO AUTORIZADO</td>
              </tr>
              <tr>
                <td>
                  En caso de que aplique (para venta de software, templetes, u
                  otro producto de diseño y programación) usted no puede colocar
                  uno de nuestros productos, modificado o sin modificar, en un
                  CD, sitio web o ningún otro medio y ofrecerlos para la
                  redistribución o la reventa de ningún tipo.
                </td>
              </tr>
              <tr>
                <td>PROPIEDAD</td>
              </tr>
              <tr>
                <td>
                  Usted no puede declarar propiedad intelectual o exclusiva a
                  ninguno de nuestros productos, modificado o sin modificar.
                  Todos los productos son propiedad de los proveedores del
                  contenido. En caso de que no se especifique lo contrario,
                  nuestros productos se proporcionan sin ningún tipo de
                  garantía, expresa o implícita. En ningún esta compañía será
                  responsables de ningún daño incluyendo, pero no limitado a,
                  daños directos, indirectos, especiales, fortuitos o
                  consecuentes u otras pérdidas resultantes del uso o de la
                  imposibilidad de utilizar nuestros productos.
                </td>
              </tr>
              <tr>
                <td>POLÍTICA DE REEMBOLSO Y GARANTÍA</td>
              </tr>
              <tr>
                <td>
                  En el caso de productos que sean mercancías irrevocables
                  no-tangibles, no realizamos reembolsos después de que se envíe
                  el producto, usted tiene la responsabilidad de entender antes
                  de comprarlo. Le pedimos que lea cuidadosamente antes de
                  comprarlo. Hacemos solamente excepciones con esta regla cuando
                  la descripción no se ajusta al producto. Hay algunos productos
                  que pudieran tener garantía y posibilidad de reembolso pero
                  este será especificado al comprar el producto. En tales casos
                  la garantía solo cubrirá fallas de fábrica y sólo se hará
                  efectiva cuando el producto se haya usado correctamente. La
                  garantía no cubre averías o daños ocasionados por uso
                  indebido. Los términos de la garantía están asociados a fallas
                  de fabricación y funcionamiento en condiciones normales de los
                  productos y sólo se harán efectivos estos términos si el
                  equipo ha sido usado correctamente. Esto incluye: – De acuerdo
                  a las especificaciones técnicas indicadas para cada producto.
                  – En condiciones ambientales acorde con las especificaciones
                  indicadas por el fabricante. – En uso específico para la
                  función con que fue diseñado de fábrica. – En condiciones de
                  operación eléctricas acorde con las especificaciones y
                  tolerancias indicadas.
                </td>
              </tr>
              <tr>
                <td>COMPROBACIÓN ANTIFRAUDE</td>
              </tr>
              <tr>
                <td>
                  La compra del cliente puede ser aplazada para la comprobación
                  antifraude. También puede ser suspendida por más tiempo para
                  una investigación más rigurosa, para evitar transacciones
                  fraudulentas.
                </td>
              </tr>
              <tr>
                <td>PRIVACIDAD</td>
              </tr>
              <tr>
                <td>
                  Este garantiza que la información personal que usted envía
                  cuenta con la seguridad necesaria. Los datos ingresados por
                  usuario o en el caso de requerir una validación de los pedidos
                  no serán entregados a terceros, salvo que deba ser revelada en
                  cumplimiento a una orden judicial o requerimientos legales. La
                  suscripción a boletines de correos electrónicos publicitarios
                  es voluntaria y podría ser seleccionada al momento de crear su
                  cuenta. reserva los derechos de cambiar o de modificar estos
                  términos sin previo aviso. Estas terminos y condiciones se han
                  generado en terminosycondicionesdeusoejemplo.com.
                </td>
              </tr>
            </tbody>
          </table>
          <div class="titulotyc">
            <h1></h1>
          </div>
        </div>
        <v-btn class="mr-4" @click="openConfirm">Cerrar </v-btn>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import firebase from "firebase";

export default {
  password: "signup",
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
    checkbox: false,
    dialogTerminos: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Acepta los terminos para continuar!");
      return errors;
    },
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.user.uid);
          },
          (err) => {
            alert(err);
          }
        );
    },
    clear() {
      this.$v.$reset();
      this.password = "";
      this.email = "";
      this.checkbox = false;
    },
    openConfirm() {
      this.dialogTerminos = !this.dialogTerminos;
    },
  },
};
</script>

<style scoped>
.login {
  margin: 20%;
}
.logoTexto {
  font-family: "Dancing Script", cursive;
  text-align: center;
  font-size: 10vw;
}


</style>