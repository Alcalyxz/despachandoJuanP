<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="white white--text text-center">
       

        <v-card-text class="black--text pt-0 text-center">
            <strong>¡Para estar más enterado de lo nuevo que tenemos siguenos en nuestras redes!</strong><br>
        </v-card-text>

        <v-card-text class="black--text pt-0 text-center">
         
         Despachando es una empresa formada por estudiantes de la UDEA que busca brindar soluciones logísticas tecnológicas a la administración de pedidos en cualquier restaurante, nuestra misión es optimizar tus procesos y ayudarte a tomar futuras decisiones con nuestro módulo de estadisticas. En términos costo-beneficio somos tu mejor opción.
        
        </v-card-text>

         <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>  

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Despachando.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer",
  data(){
      return{
          icons: ['mdi-facebook','mdi-instagram','mdi-twitter', 'mdi-pinterest']
      }
  }
};
</script>

<style scoped>
</style>