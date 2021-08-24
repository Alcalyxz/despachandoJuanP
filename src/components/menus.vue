<template>
  <div>
    <!-- Ventana Emergente para Eliminar un producto -->
    <v-dialog v-model="dialogDelete" max-width="600px">
      <v-card>
        <v-card-title class="headline"
          >¿Estás seguro que deseas eliminar este producto?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteitem">No</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >Si</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCategoria" max-width="600px">
      <v-card>
        <v-card-title class="headline"
          >Añadir Categoria de Producto</v-card-title
        >
        <form class="formularioEditar">
          <v-text-field
            v-model="addCategoria"
            label="Categoria"
            :rules="[(v) => !!v || 'Item is required']"
            required
          ></v-text-field>

          <v-btn color="blue darken-1" text @click="closeNuevaCategoria"
            >Cancelar</v-btn
          >
          <v-btn color="blue darken-1" text @click="addcategoria">Añadir</v-btn>
        </form>
      </v-card>
    </v-dialog>

    <!-- Ventana Emergente para Editar un producto -->
    <v-dialog v-model="dialogEdit" max-width="500">
      <v-card>
        <div>
          <form class="formularioEditar">
            <v-text-field
              v-model="nameEdit"
              label="Nombre"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
            <v-text-field
              v-model="priceEdit"
              type="number"
              label="Precio"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
            <v-text-field
              v-model="descripcionEdit"
              label="Descripcion"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>

            <v-btn color="blue darken-1" text @click="closeedititem"
              >Cancelar</v-btn
            >
            <v-btn color="blue darken-1" text @click="editItem">Guardar</v-btn>
          </form>
        </div>
      </v-card>
    </v-dialog>

    <!-- Ventana Emergente para Agregar un producto -->
    <v-dialog v-model="dialogAdd" max-width="500">
      <v-card>
        <div>
          <form class="formularioEditar">
            <v-text-field
              v-model="nameAdd"
              label="Nombre"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>

            <v-file-input
              v-model="imagen"
              :rules="[(v) => !!v || 'Item is required']"
              accept="image/*"
              label="Imagen Restaurante"
            >
            </v-file-input>

            <v-text-field
              v-model="priceAdd"
              label="Precio"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
            <v-text-field
              v-model="descripcionAdd"
              label="Descripcion"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>

            <v-select
              v-model="tipo"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Tipo"
              required
            ></v-select>

            <v-btn color="blue darken-1" text @click="closeadditem"
              >Cancelar</v-btn
            >
            <v-btn color="blue darken-1" text @click="addProducts"
              >Agregar</v-btn
            >
          </form>
        </div>
      </v-card>
    </v-dialog>

    <!-- 
      Aca va lo de mamanda
    -->

    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <div v-for="carta in cartaActual" :key="carta.index">
      <table class="content-table">
        <thead>
          <tr>
            <th COLSPAN="4">
              {{ carta.name }}
            </th>
          </tr>
          <tr>
            <th class="tipoProductos" scope="col">Precio</th>
            <th class="tipoProductos" scope="col">Nombre</th>
            <th class="tipoProductos" scope="col">Descripción</th>
            <th class="tipoProductos" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entrada in carta.products" :key="entrada.name">
            <td>${{ entrada.price }}</td>
            <td>{{ entrada.name }}</td>
            <td>
              {{ entrada.descripcion }}
            </td>
            <td>
              <img
                src="../assets/images/editar.png"
                alt="icono de editar"
                width="30px"
                @click="
                  edititem(
                    entrada.name,
                    entrada.price,
                    entrada.descripcion,
                    entrada.idproducto
                  )
                "
              />
              <img
                src="../assets/images/eliminar.png"
                alt="icono de eliminar"
                width="30px"
                @click="deleteitem(entrada.idproducto)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="overflow-hidden">
      <v-bottom-navigation>
        <v-btn @click="regresar">
          <span>Volver</span>
          <v-icon>mdi-keyboard-backspace</v-icon>
        </v-btn>

        <v-btn @click="closeNuevaCategoria">
          <span>Categoria</span>

          <v-icon>mdi-plus-box-multiple</v-icon>
        </v-btn>

        <v-btn @click="agregarProducto">
          <span>Producto</span>

          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>

    <p>
      <v-spacer></v-spacer>
    </p>

    <!-- <div>
      <v-data-table
        :headers="headers"
        :items="menuCompleto"
        :search="search"
        item-key="name"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Crud de Productos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>    
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="
                  edititem(
                    item.name,
                    item.price,
                    item.descripcion,
                    item.id
                  )">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteitem(item.id)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import services from "../services/despachandoServices";
import firebase from "firebase";

export default {
  name: "menus",
  data: () => ({
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
    restaurante: {},
    search: "",
    carta: [],
    nit: "",
    addCategoria: "",
    dialogCategoria: false,
    dialogDelete: false,
    dialogEdit: false,
    dialogAdd: false,
    nameEdit: "",
    priceEdit: "",
    descripcionEdit: "",
    nameAdd: "",
    priceAdd: "",
    tipo: "",
    descripcionAdd: "",
    idEdit: "",
    idDelete: "",
    items: [],
    itemsCompletos: [],
    menuCompleto: [],
    imagen: null,
  }),
  methods: {
    ...mapActions(["obtenerMenu"]),
    async editItem() {
      await services.editProduct(
        this.idEdit.toString(),
        this.nameEdit,
        this.priceEdit.toString(),
        this.descripcionEdit
      );
      this.dialogEdit = !this.dialogEdit;
      this.$router.push("/puenteproductos").catch(() => {});
    },
    deleteitem(idproduct) {
      this.idDelete = idproduct;
      this.dialogDelete = !this.dialogDelete;
    },
    closeNuevaCategoria() {
      this.dialogCategoria = !this.dialogCategoria;
    },
    regresar() {
      this.$router.push("/principal").catch(() => {});
    },

    async addcategoria() {
      await services.addMenu(this.nit.toString(), this.addCategoria);
      this.dialogCategoria = !this.dialogCategoria;
      this.$router.push("/puenteproductos").catch(() => {});
      //Servicio añadir categoria
    },
    edititem(name, price, descripcion, id) {
      console.log(name, price, descripcion, id);

      this.nameEdit = name;
      this.priceEdit = price;
      this.descripcionEdit = descripcion;
      this.idEdit = id;
      this.dialogEdit = !this.dialogEdit;
    },
    closeedititem() {
      this.dialogEdit = !this.dialogEdit;
    },
    closeadditem() {
      this.dialogAdd = !this.dialogAdd;
    },
    async deleteItemConfirm() {
      console.log(this.idDelete);
      await services.deleteProduct(this.idDelete.toString());
      this.dialogDelete = !this.dialogDelete;
      this.$router.push("/puenteproductos").catch(() => {});
    },
    async addProducts() {
      let idProducto = this.itemsCompletos.find(
        (element) => element.name == this.tipo
      );
      console.log(idProducto);

      //Conexion con FireStorage para almacenar la imagen
      const ref = firebase.storage().ref();
      const nombree = new Date() + "-" + this.imagen.name;
      const metaData = {
        contentType: this.imagen.type,
      };
      const task = ref.child(nombree).put(this.imagen, metaData);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then(async (url) => {
          //Una vez tenemos el URL llamamos el método de añadir restaurante
          await services.addProduct(
            this.priceAdd,
            this.nameAdd,
            this.descripcionAdd,
            idProducto.idcarta,
            url
          );
          this.$router.push("/principal").catch(() => {});
        });

      this.$refs.form.validate();

      this.dialogAdd = !this.dialogAdd;
      this.$router.push("/puenteproductos").catch(() => {});
    },
    agregarProducto() {
      console.log(this.$store.state.cartaActual);
      this.cargarMenus();
      this.dialogAdd = !this.dialogAdd;
    },
    cargarMenus() {
      this.items = [];
      this.menuCompleto = [];
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
          };
          this.menuCompleto.push(objeto);
        }

        this.items[j] = this.$store.state.cartaActual[j].name;
      }

      console.log("MENU COMPLETO:" + this.menuCompleto);
    },
  },
  computed: {
    ...mapState(["cartaActual"]),
  },
  mounted() {},
  created() {
    this.cargarMenus();
    this.nit = this.$store.state.restauranteActual.nit;
    this.obtenerMenu();
  },
};
</script>

<style scoped>
.formularioEditar {
  margin-right: 100px;
  margin-left: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
}

* {
  font-family: "Roboto", sans-serif;
}

table {
  border-collapse: collapse;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 5%;
}
thead {
  background-color: #f0c416;
  font-family: "Open Sans", sans-serif;
}
tr:nth-child(even) {
  background-color: #f0c4162a;
}
th {
  color: white;
  padding: 1% 3%;
  font-weight: bold;
}
td {
  height: 30px;
  padding: 0 10px;
}
img {
  padding: 5px;
}
table tr:hover {
  background-color: #f0c4167a;
}
.tipoProductos {
  background-color: rgba(255, 255, 255, 0.288);
}

.agregarProducto {
  padding-left: 50%;
}

.botonNavBarIngresar {
  padding: 10px 20px;
  font-weight: bold;
  background: #f6d247;
  border-radius: 30px;
  margin: 0px 8px;
  width: 18vw;
}

.filaBotones {
  display: flex;
  justify-content: space-around;
}
</style>
