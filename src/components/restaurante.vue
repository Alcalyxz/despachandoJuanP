<template>
  <div class="delivery_section">
    <!--Este es el formulario-->

    <v-dialog v-model="openCart">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-card>

        <div class="section4">
          <form action="/action_page.php" class="formulario">
            <h3 class="resumen">Resumen del pedido</h3>
            <label for="fname">Nombre:</label><br />
            <input v-model="nombre" type="email" id="fname" name="fname" value="" /><br />
            <label for="fname">Celular:</label><br />
            <input v-model="celular" type="email" id="fname" name="fname" value="" /><br />
            <label for="fname">Dirección:</label><br />
            <input v-model="direccion" type="email" id="fname" name="fname" value="" /><br />
            <label for="fname">Barrio:</label><br />
            <input v-model="barrio" type="email" id="fname" name="fname" value="" /><br />
            <label for="fname">Método de pago:</label><br />
            <input v-model="pago" type="email" id="fname" name="fname" value="" /><br />
          </form>
          <table id="customers">
            <tr>
              <th class="inicial-pedido" COLSPAN="3">
                Tu pedido
              </th>
            </tr>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
            <tr v-for="ped in pedido" v-bind:key="ped.index">
              <td>{{ped.nombreProducto}}</td>
              <td>{{ped.cantidad}}</td>
              <td>${{ped.precio}}</td>
            </tr>
          </table>
          <h1>TOTAL:</h1>
          <h2>{{total}}</h2>
<div class="">

          <button @click="closeWindowCart()" class="boton-finalizar">Cancelar compra</button>
          <button @click="crearPedido()" class="boton-pagar">Finalizar compra</button>
  
</div>
        </div>
      </v-card>
    </v-dialog>

    <div class="principal_image">
      <figure>
        <img src="../assets/images/principal_restaurant_image.jpeg" alt="" />
      </figure>
    </div>
    <div class="section_restaurant_information">
      <div class="restaurant_icon">
        <figure>
          <img src="../assets/images/principal_restaurant_image.jpeg" alt="" />
        </figure>
      </div>
      <div>
        <div class="information_restaurant">
          <div class="restaurant_name">
            <h1>Restaurant name</h1>
          </div>

          <div class="overflow-hidden">
            <v-bottom-navigation>
              <v-btn @click="openWindowCart">
                <img width="40px" src="../assets/images/carros.png" alt="" />
              </v-btn>
            </v-bottom-navigation>
          </div>

          <div class="overflow-hidden">
            <v-bottom-navigation>
              <v-btn @click="goToAllPedidos">
                <img width="40px" src="../assets/images/pedidos.png" alt="" />
              </v-btn>
            </v-bottom-navigation>
          </div>


          <div>
            <p class="numero-productos">{{ cantidad }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="search_bar">
      <form action="">
        <img src="../assets/images/search_icon.png" alt="" />
        <input
          type="text
        "
          placeholder="Buscar producto"
        />
      </form>
    </div> -->
    <div v-for="carta in cartas" :key="carta.index">
      <h3>{{ carta.name }}</h3>
      <!--CARD -->
      <div class="featured_products">
        <div class="products" v-for="item in carta.products" :key="item.index">
          <div class="featured_product_card">
            <figure>
              <img v-bind:src="item.imagen" alt="" />
            </figure>
            <div class="featured_product_card_information">
              <h4>{{ item.name }}</h4>
              <p class="featured_product_card_information_description">
                {{ item.descripcion }}
              </p>

              <div class="actions">
                <div class="card_price">
                  <h5>${{ item.price }}</h5>
                </div>
                <div>
                  <v-row>
                    <v-col>
                      <input
                        v-model="item.cantidad"
                        class="cantidad"
                        type="number"
                      />
                    </v-col>
                    <v-col>
                      <div class="overflow-hidden">
                        <div class="boton-adicionar">
                          <button
                            class="boton-de-adicionar"
                            @click="
                              addCarrito(
                                item.idproducto,
                                item.price,
                                item.name,
                                parseInt(item.cantidad)
                              )
                            "
                          >
                            Adicionar
                          </button>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import services from "../services/despachandoServices";

export default {
  name: "restaurante",
  data: () => ({
    restaurante: [],
    items: [],
    cartas: [],
    pedido: [],
    cantidad: 0,
    openCart: false,
    nombre: '',
    barrio: '',
    pago: '',
    direccion: '',
    celular: '',
    total: 0
  }),

  methods: {
    ...mapActions(["obtenerMenu"]),
    addCarrito(id, precio, name, cantidad) {
      let producto = {
        idproducto: id,
        precio: precio*cantidad,
        nombreProducto: name,
        cantidad: cantidad,
      };
      this.total = this.total + precio*cantidad;
      this.pedido.push(producto);
      console.log(this.pedido);
      this.cantidad++;
    },
    openWindowCart() {
      this.openCart = !this.openCart;
    },
    closeWindowCart(){
      this.openCart = !this.openCart;
      this.pedido= []
      this.nombre=''
      this.pago=''
      this.direccion=''
      this.barrio=''
      this.celular=''
      this.cantidad=0
      this.total=0
      this.openWindowCart()
      this.openCart = !this.openCart;
      this.resetCantidadesProductos()

    },
    resetCantidadesProductos(){
      for (var i = 0; i < this.cartas.length; i++) {
      for (var j = 0; j < this.cartas[i].products.length; j++) {
        this.cartas[i].products[j].cantidad = 1;
      }
    }

    },
    async crearPedido(){
      let cliente = {
        nombre: this.nombre,
        celular: parseInt(this.celular),
        pago: this.pago,
        barrio: this.pago,
        direccion: this.direccion,
        id: parseInt(this.celular)
      }

      let pedido = {
        pedidos: this.pedido,
        cliente
      }

      console.log(pedido)


      await services.crearPedido(pedido);
      this.pedido= []
      this.nombre=''
      this.pago=''
      this.direccion=''
      this.barrio=''
      this.celular=''
      this.cantidad=0
      this.total=0
      this.openWindowCart()
      this.resetCantidadesProductos()
    },
    goToAllPedidos(){
      this.$router.push("/listaPedidos").catch(() => {});
    }
  },

  mounted() {
    this.restaurante = this.$store.state.restauranteActual;
    this.cartas = this.$store.state.cartaActual;

    this.resetCantidadesProductos();
  },
  created() {
    this.nit = this.$store.state.restauranteActual.nit;
    this.obtenerMenu();
  },
  computed: {
    ...mapState(["cartaActual"]),
  },
};
</script>

<style scoped>
.section4 {
  align-items: center;
  border-radius: 20px;
}

input[type="text"]:focus {
  background-color: #ffd52c46;
  border: #ffd52c 2px solid;
  border-radius: 10px;
}

input[type="email"] {
  width: 100%;
  padding: 10px 20px;
  margin: 8px;
  box-sizing: border-box;
  border: 2px solid rgb(212, 212, 212);
  border-radius: 10px;
  outline: none;
}
input[type="email"]:focus {
  background-color: #ffd52c46;
  border: #ffd52c 2px solid;
  border-radius: 10px;
}

.boton-pagar {
  align-items: flex-end;
  padding: 2px 10px;
  margin: 2em;
  background-color: #ffd52c;
  border: white solid 1px;
  height: 2.5em;
  border-radius: 10px;
}
.boton-finalizar{
  align-items: flex-end;
  padding: 2px 10px;
  margin: 2em 0 0 0;
  background-color: #ffd52c;
  border: white solid 1px;
  height:2.5em;
  border-radius: 10px;
}
.resumen-productos table th {
  margin: 30px;
}
.cantidad {
  width: 50px;
}
.delivery_section {
  margin: 0 7em;
}
.principal_image {
  margin-bottom: 2em;
}
.principal_image figure img {
  border-radius: 4px;
  height: 250px;
  width: 100%;
  background-image: url("../assets/images/principal_restaurant_image.jpeg");
  background-size: cover;
  border-radius: 8px;
  object-fit: cover;
}
.section_restaurant_information {
  display: inline-flex;
  align-items: center;
  font-family: -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
}
.restaurant_icon figure img {
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid rgb(175, 175, 175);
}
.information_restaurant {
  width: 76.5vw;
  display: flex;
  justify-content: space-between;
}
.restaurant_name {
  display: flex;
  align-items: center;
}
.restaurant_name button {
  display: flex;
  align-items: center;
}
.restaurant_name p {
  margin-bottom: 0;
  color: #f7c144;
}
.restaurant_name img {
  margin-bottom: 0;
  width: 15px;
  height: 15px;
}
.more_information_restaurant {
  display: flex;
  align-items: center;
  color: red;
}
.min_delivery_information {
  display: flex;
  align-items: center;
  margin-right: 25px;
}
.min_delivery_information img {
  width: 1.5vw;
  margin-right: 0.5em;
}
.search_bar form {
  border: 1px solid rgb(180, 178, 178);
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 2em 0;
}
.resumen{
  height: 50px;
  padding: 60px 0 ;
}
.search_bar img {
  align-items: center;
  height: 25px;
  margin-right: 10px;
}
.search_bar input {
  width: 90%;
}
.products {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}
.featured_products {
  display: flex;
  flex-wrap: wrap;
}
.featured_product_card {
  border: 1px solid rgb(219, 219, 219);
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(231, 231, 231, 0.61);
  width: 300px;
  margin: 0 40px;
}
.featured_product_card img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 10em;
}
.featured_product_card_information {
  margin: 0.5em 1em;
}
.featured_product_card_information .card_price {
  margin-top: 4em;
  display: flex;
  align-items: center;
}
.cantidad {
  border: rgb(199, 198, 198) 1px solid;
  border-radius: 7px;
  height: 30px;
}
.menu_prducts {
  display: flex;
}
.menu_product_card {
  width: 40vw;
  height: 20vh;
  border: hotpink 1px solid;
  display: flex;
}
.menu_product_card img {
  width: 100%;
  height: 100%;
}
.featured_product_card_information_description {
  width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
p {
  margin-bottom: 0;
  font-size: 13px;
  color: rgb(184, 184, 184);
}
h1 {
  margin: 0 1em;
}
h3 {
  font-size: 1.8em;
  margin-bottom: 0.4em;
}
h4 {
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1.5em;
}
h5 {
  font-size: 1.2em;
  font-weight: 400;
}
h6 {
  color: rgb(158, 158, 158);
  font-size: 1em;
  font-weight: 400;
  margin-left: 1em;
}
hr {
  margin: 0 20px;
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 3vh;
  width: 1px;
}
.boton-adicionar {
  background-color: #e51e2b;
  color: white;
  font-size: 14px;
  border: red 1px solid;
  border-radius: 7px;
  padding: 5px;
  text-align: center;
  height: 30px;
  width: 70px;
}
.section4 {
  align-items: center;
  margin:10% 20%
}
.inicial-pedido {
  border-radius: 10px 10px 0 0;
  text-align: center;
  text-transform: uppercase;
}
table {
  border-collapse: collapse;
  width: 80%;
}
th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #ffd52c;
  color: white;
}
table tr:hover {
  background-color: #f0c4167a;
}
.numero-productos {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: #000;
}
.formulario{
  width: 80%;
}

</style>
