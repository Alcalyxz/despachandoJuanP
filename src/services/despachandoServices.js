//import api from './api';
import axios from 'axios';
export default {

  async addEmployee(email, id) {
    console.log(email, id);
    let usuario = {
      email: email,
      idpropietario: id,
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
      celular: "",
      rol_idrol: 1
    }
    console.log(JSON.stringify(usuario));
    await axios.post('https://despachando.herokuapp.com/addEmployee', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response
    }).catch(e => {
      console.log("Entre a error");
      console.log(e);
    });
  },
  async emailExist(email, id) {
    let usuario = {
      email: email
    }
    await axios.post('https://despachando.herokuapp.com/getExists', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response.data.result)

      if (!response.data.result) {
        await this.addEmployee(email, id)
      }

    }).catch(e => {
      console.log(e)
    });

  },
  async getRestaurantes(email) {
    let usuario = {
      email: email
    }
    await axios.post('https://despachando.herokuapp.com/getRestaurant', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response.data.db_result);
      this.$store.state.restaurantes = response.data.db_result;

    }).catch(e => {
      console.log(e)
    });

  },

  async updateUser(email, nombre, apellido, fecha, celular) {
    let usuario = {
      email: email,
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha,
      celular: celular
    }
    await axios.put('https://despachando.herokuapp.com/updateEmployee', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },

  async addRestaurant(nit, nombre, ubicacion, tipo_comida, telefono, propietario, imagen, open, close, descripcion) {


    let usuario = {
      nit: nit,
      nombre: nombre,
      ubicacion: ubicacion,
      tipo_comida: tipo_comida,
      telefono: telefono,
      propietario_idpropietario: propietario,
      foto: imagen,
      hora_inicio: open,
      hola_cierre: close,
      descripcion: descripcion
    }

    console.log(usuario);
    await axios.post('https://despachando.herokuapp.com/addRestaurant', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },
  async deleteRestaurant(nit) {
    console.log(nit);
    let usuario = {
      nit: nit
    }
    await axios.put('https://despachando.herokuapp.com/deleteRestaurant', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },

  async updateRestaurant(nombre, ubicacion, tipo_comida, telefono, hora_inicio, hola_cierre, descripcion, nit) {
    console.log(nit);
    let usuario = {
      nombre,
      ubicacion,
      tipo_comida,
      telefono,
      hora_inicio,
      hola_cierre,
      descripcion,
      nit: nit.toString(),
    }
    console.log(usuario);
    await axios.put('https://despachando.herokuapp.com/updateRestaurant', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },

  async editProduct(idproducto, nombre, precio, descripcion) {
    console.log(idproducto, nombre, precio, descripcion);
    let usuario = {
      idproducto,
      nombre,
      precio,
      descripcion
    }
    await axios.put('https://despachando.herokuapp.com/updateProducts', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },

  async deleteProduct(idproducto) {
    console.log(idproducto);
    let usuario = {
      idproducto,
    }
    await axios.put('https://despachando.herokuapp.com/deleteProduct', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },

  async addMenu(nit, nombre) {
    let usuario = {
      nit,
      nombre,
    }
    console.log(usuario);
    await axios.post('https://despachando.herokuapp.com/addMenu', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },


  async addProduct(precio, nombre, descripcion,idcarta,imagen) {
    let usuario = {
      nombre,
      precio,
      descripcion,
      idcarta,
      imagen
    }
    console.log(usuario);
    await axios.post('https://despachando.herokuapp.com/addProduct', JSON.stringify(usuario), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    });

  },
}
