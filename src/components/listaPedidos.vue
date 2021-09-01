<template>
  <div>
    <h1>Lista de Pedidos</h1>

    <table id="customers">
            <tr>
              <th class="inicial-pedido" COLSPAN="3">
                Tu pedido
              </th>
            </tr>
            <tr>
              <th>Nombre Cliente</th>
              <th>Id Pedido</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
            <tr v-for="ped in pedidos" v-bind:key="ped.index">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
  </div>
</template>


<script>
import services from "../services/despachandoServices";

export default {
  name: "listaPedidos",
  data: () => ({
    pedidos: [],
  }),
  methods: {
    async obtenerPedidos(nit) {
      await services
        .getPedidos(nit.toString())
        .then((response) => {
          this.pedidos = response.data.status;
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(this.pedidos);
    },
  },
  mounted() {
    this.obtenerPedidos(this.$store.state.restauranteActual.nit);
  },
  created() {},
};
</script>


<style scoped>
</style>
