<template>
  <div>

    <div v-for="pedido in pedidos" :key="pedido.index">
      <table>
        <thead>

          <tr>
            <th COLSPAN="4">
              #Pedido: {{ pedido.id_pedido }}
            </th>
            <th COLSPAN="4">
              CLIENTE: {{ pedido.cliente_nombre }}
            </th>
            <th COLSPAN="4">
              PRECIO: ${{ pedido.precio }}
            </th>
          </tr>


          <tr>
            <th>Cantidad</th>
            <th>Nombre Producto</th>
          </tr>
          
          
        </thead>
        <tbody>
          <tr v-for="producto in pedido.productos" :key="producto.name">
            <td>{{ producto.cantidad_producto }}</td>
            <td>{{ producto.nombre_producto }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    
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
          this.pedidos = response.data.result;
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
