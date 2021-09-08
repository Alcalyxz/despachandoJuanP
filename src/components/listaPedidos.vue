<template>
  <div class="pedidos">
    <h2>Lista Pedidos:</h2>
    <div class="LosPedidos">
      <div class="TPedidos" v-for="pedido in pedidos" :key="pedido.index">
        <div class="miPedido">
          <h1 class="tituloP" align="left">Pedido</h1>
          <h2 class="numeroP" align="left">{{ pedido.id_pedido }}</h2>
        </div>
        <div class="TituloPedido">
          <table>
            <tr>
              <th class="titu" align="left">Cliente</th>
              <th class="infor" align="left">{{ pedido.cliente_nombre }}</th>
            </tr>
            <tr>
              <th class="titu" align="left">Total</th>
              <th class="infor" align="left">${{ pedido.precio }}</th>
            </tr>
            <tr>
              <th class="titu" align="left">Dirección</th>
              <th class="infor" align="left">{{ pedido.direccion }}</th>
            </tr>
            <tr>
              <th class="titu" align="left">Barrio</th>
              <th class="infor" align="left">{{ pedido.barrio }}</th>
            </tr>
            <tr>
              <th class="titu" align="left">Celular</th>
              <th class="infor" align="left">{{ pedido.celular }}</th>
            </tr>
            <tr>
              <th class="titu" align="left">Estado</th>
              <th class="infor" align="left">{{ pedido.estado_pedido }}</th>
              <th v-if="pedido.estado_pedido == 'enviado'">
                <img
                  src="../assets/images/garrapata.png"
                  width="25"
                  height="25"
                  alt="Estado"
                />
              </th>
              <th v-if="pedido.estado_pedido == 'pendiente'">
                <img
                  src="../assets/images/sand-clock.png"
                  width="25"
                  height="25"
                  alt="Estado"
                  @click="changeState(pedido.id_pedido)"
                />
              </th>
              <th v-if="pedido.estado_pedido == 0">
                <img
                  src="../assets/images/sand-clock.png"
                  width="25"
                  height="25"
                  alt="Estado"
                  @click="changeState(pedido.id_pedido)"
                />
              </th>
            </tr>
          </table>
        </div>
        <div class="info_pedido">
          <table>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Nombre Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in pedido.productos" :key="producto.name">
                <td>{{ producto.cantidad_producto }}</td>
                <td>{{ producto.nombre_producto }}</td>
                <td>${{ pedido.precio }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
    async changeState(id) {
      await services.updateOrder(id);
      this.obtenerPedidos(this.$store.state.restauranteActual.nit);
    },
  },
  mounted() {
    this.obtenerPedidos(this.$store.state.restauranteActual.nit);
  },
  created() {},
};
</script>

<style scoped>
.miPedidoo {
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.tituloP {
  font-size: 15px;
  color: grey;
  display: flex;
  justify-content: space-around;
}
.numeroP {
  font-size: 30px;
  color: #face1c;
  display: flex;
  justify-content: space-around;
}
.pedidos {
  margin: 0 10%;
}
.LosPedidos {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.TPedidos {
  padding-left: 2%;
  border: solid 1px #face1c52;
  max-width: 300px;
  border-radius: 15px;
}
.titu {
  font-size: 15px;
  color: rgba(128, 128, 128, 0.719);
}
.infor {
  font-size: 18px;
}
.info_pedido {
  margin-top: 10px;
}
table {
  border-collapse: collapse;
}
thead {
  background: #f6d34788;
}
th {
  border-spacing: 5px;
}
</style>
