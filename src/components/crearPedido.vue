<template>
  <div>
    <v-card>
      <v-card-title>
        Lista de Productos
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="itemsCompletos"
        :search="search"
        item-key="name"
        show-select
        class="elevation-1"
      >
        </v-data-table
      >
    </v-card>
    <v-spacer><p></p></v-spacer>

    <div class="overflow-hidden">
      <v-btn color="blue-grey" class="ma-2 white--text">
        Crear Pedido
        <v-icon right dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>

    <!-- <input v-model="selected[0].name"> 
 -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "crearpedido",
  data: () => ({
    search: "",
    singleSelect: false,
    selected: [],
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Nombre Producto",
        align: "start",
        value: "name",
      },
      { text: "Precio", value: "price" },
      { text: "Descripción", value: "descripcion" },
    ],
    items: [],
    itemsCompletos: [],
    cartas: [],
  }),
  methods: {
    ...mapActions(["obtenerMenu"]),
    regresar() {
      this.$router.push("/principal").catch(() => {});
    },
    cargarMenus() {
      this.items = [];
      for (var i = 0; i < this.$store.state.cartaActual.length; i++) {
        for (
          var j = 0;
          j < this.$store.state.cartaActual[i].products.length;
          j++
        ) {
          let objeto = {
            name: this.$store.state.cartaActual[i].products[j].name,
            id: this.$store.state.cartaActual[i].products[j].idproducto,
            price: this.$store.state.cartaActual[i].products[j].price,
            descripcion: this.$store.state.cartaActual[i].products[j]
              .descripcion,
          };
          this.itemsCompletos.push(objeto);
        }

        this.items[i] = this.$store.state.cartaActual[i].name;
      }
    },
  },
  computed: {
    ...mapState(["cartaActual"]),
  },
  mounted() {},
  created() {
    this.cargarMenus();
    this.obtenerMenu();
  },
};
</script>

<style scoped></style>
