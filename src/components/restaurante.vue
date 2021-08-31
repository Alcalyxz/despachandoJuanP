<template>
  <div class="delivery_section">
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
            <button><img src="../assets/images/star.png" alt="" /></button>
            <p><strong>4,5</strong></p>
          </div>
          <div class="more_information_restaurant">
            <button><strong>Ver más</strong></button>
            <hr />
            <div class="min_delivery_information">
              <img
                src="../assets/images/money-symbol.png"
                alt="simbolo de pesos"
              />
              <p><strong>Pedido mínimo $5.000</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search_bar">
      <form action="">
        <img src="../assets/images/search_icon.png" alt="" />
        <input
          type="text
        "
          placeholder="Buscar producto"
        />
      </form>
    </div>
    <div v-for="carta in cartaActual" :key="carta.index">
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
                      <input class="cantidad" type="number" />
                    </v-col>
                    <v-col>
                      <div class="overflow-hidden">
                        <div class="boton-adicionar">
                          <v-bottom>
                            <span><h2>Adicionar</h2></span>
                          </v-bottom>
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
//import services from "../services/despachandoServices";

export default {
  name: "restaurante",
  data: () => ({
    restaurante: [],
    itemsCompletos: [],
    items: [],
  }),

  methods: {
    ...mapActions(["obtenerMenu"]),
    cargarMenus() {
      console.log("Llegue AQUI!");
      console.log(this.$store.state.cartaActual);
      this.items = [];
      this.itemsCompletos = [];

      for (var i = 0; i < this.$store.state.cartaActual.length; i++) {
        this.itemsCompletos[i] = this.$store.state.cartaActual[i];
        this.items[i] = this.$store.state.cartaActual[i].name;
      }

      for (var j = 0; j < this.$store.state.cartaActual.length; j++) {
        for (
          var k = 0;
          k < this.$store.state.cartaActual[j].products.length;
          k++
        ) {
          let objeto = {
            name: this.$store.state.cartaActual[j].products[k].name,
            id: this.$store.state.cartaActual[j].products[k].idproducto,
            price: this.$store.state.cartaActual[j].products[k].price,
            descripcion: this.$store.state.cartaActual[j].products[k]
              .descripcion,
            cantidad: 0,
          };
          this.itemsCompletos.push(objeto);
        }

        this.items[j] = this.$store.state.cartaActual[j].name;
      }

      console.log("MENU COMPLETO:" + this.itemsCompletos[0].name);
    },
  },

  mounted() {
    this.restaurante = this.$store.state.restauranteActual;
  },
  created() {
    this.cargarMenus();
    this.nit = this.$store.state.restauranteActual.nit;
    this.obtenerMenu();
  },
  computed: {
    ...mapState(["cartaActual"]),
  },
};
</script>

<style scoped>
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
  font-size: 9px;
  border: red 1px solid;
  border-radius: 7px;
  padding: 5px;
  text-align: center;
}
</style>
