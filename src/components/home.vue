<template>
  <div>

    
    <v-row>
      <v-col class="columnaInformacion">
        <h1>¿Muchos pedidos y no sabes gestionarlos?</h1>
        <h2>¡Llegaste donde es!</h2>
        <p>
          Te queremos ayudar a seguir creciendo haciendo que la gestión de tus
          pedidos a domicilio sea mas facil y rápida.
        </p>
        <v-btn color="#f6d247" dark> ¡Quiero saber más! </v-btn>
      </v-col>

      <v-col>
        <div class="imagenHome">
          <img src="../assets/images/mensajero.png" alt="" height="500px" />
        </div>
      </v-col>
    </v-row>
    <h1 class="tituloHome">
      Tu tranqui, ¡Nosotros nos <br />
      encargamos!
    </h1>
    <p class="textoHome">
      Olvidate de las tablas de excel, de las noches de fin de jornada
      organizando la información de tus pedidos, de información extraviada, te
      ayudaremos a tener la información de tus pedidos en un solo lugar y a
      generar tus reportes rápidamente.
    </p>
    <div>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="230" min-height="380">
            <v-img
              src="../assets/images/cardHome1.png"
              height="200px"
            ></v-img>
            <v-card-title>Regístrate</v-card-title>
            <v-card-subtitle>Con tu información y la de tu restaurante para iniciar tu portal</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="230" min-height="380">
            <v-img
              src="../assets/images/cardHome2.png"
              height="200px"
            ></v-img>
            <v-card-title>Ingresa tus <br> productos</v-card-title>
            <v-card-subtitle>Cuéntanos cuales son tus productos y servicios para tenerlos siempre disponibles</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="230" min-height="380">
            <v-img
              src="../assets/images/cardHome3.png"
              height="200px"
            ></v-img>
            <v-card-title>Actualiza tus <br> pedidos</v-card-title>
            <v-card-subtitle>Cuéntanos cuales son tus productos y servicios para tenerlos siempre disponibles</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="230" min-height="380">
            <v-img
              src="../assets/images/stadistics.png"
              height="200px"
            ></v-img>
            <v-card-title class="tituloCard">Genera reportes</v-card-title>
            <v-card-subtitle>Cuéntanos cuales son tus productos y servicios para tenerlos siempre disponibles</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      
    </div>

  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.columnaInformacion {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.columnaInformacion p {
  text-align: justify;
}
.tituloHome {
  text-align: center;
  margin-top: 5%;
}
.textoHome {
  text-align: justify;
  margin: 3%;
}
.imagenHome {
  margin: 0px auto;
  text-align: center;
}
</style>