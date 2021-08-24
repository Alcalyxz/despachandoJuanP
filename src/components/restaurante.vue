<template>

  <div class="delivery_section">
    <div class="principal_image">
      <figure>
        <img src="../assets/images/principal_restaurant_image.jpeg" alt="">
      </figure>
    </div>
    <div class="section_restaurant_information">
      <div class="restaurant_icon">
        <figure>
          <img src="../assets/images/principal_restaurant_image.jpeg" alt="">
        </figure>
      </div>
      <div>
        <div class="information_restaurant">
          <div class="restaurant_name">
            <h1>Restaurant name</h1>
            <button><img src="../assets/images/star.png" alt=""></button>
            <p><strong>4,5</strong> </p>
          </div>
          <div class="more_information_restaurant">
            <button><strong>Ver más</strong></button>
            <hr>
            <div class="min_delivery_information">
              <img src="../assets/images/money-symbol.png" alt="simbolo de pesos" >
              <p><strong>Pedido mínimo $5.000</strong></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="search_bar">
      <form action="">
        <img src="../assets/images/search_icon.png" alt="">
        <input type="text
        " placeholder="Buscar producto">
      </form>
    </div>
    <div class="featured_products">
      <h3>Destacados</h3>
      <div class="products">
        <div class="featured_product_card">
          <figure>
            <img src="../assets/images/bowl_cerdo.jpeg" alt="">
          </figure>  
          <div class="featured_product_card_information">
            <h4>Bowl de Cerdo</h4>
            <p>Delicioso y saludable bowl de cerdo con verduras</p>
            <div class="card_price">
              <h5>$15.000</h5>
            </div>
            <div class="botones">
              <v-btn>
                
              </v-btn>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "restaurante",

};


</script>

<style scoped>
.delivery_section{
  margin: 0 7em;
}
.principal_image{
  margin-bottom: 2em;
}
.principal_image figure img{
  border-radius: 4px;
  height: 250px;
  width: 100%;
  background-image: url('../assets/images/principal_restaurant_image.jpeg');
  background-size: cover;
  border-radius: 8px;
  object-fit:cover;
}
.section_restaurant_information{
  display: inline-flex;
  align-items: center;
  font-family: -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.restaurant_icon figure img{
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid rgb(175, 175, 175);
}
.information_restaurant{
  width: 76.5vw;
  display: flex;
  justify-content: space-between;
}
.restaurant_name{
  display: flex;
  align-items: center;
}
.restaurant_name button {
display: flex;
align-items: center;

}
.restaurant_name p{
    margin-bottom: 0;
    color: #f7c144;
}
.restaurant_name img{
  margin-bottom: 0;
  width: 15px;
  height: 15px;
}
.more_information_restaurant{
  display: flex;
  align-items: center;
  color: red;
}
.min_delivery_information{
  display: flex;
  align-items: center;
  margin-right: 25px;
}

.min_delivery_information img{
  width:1.5vw;
  margin-right: 0.5em;
}
.search_bar form{
  border: 1px solid rgb(180, 178, 178);
  height:60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 20px;
margin: 2em 0;
}
.search_bar img{
    align-items: center;
    height:25px;
    margin-right: 10px;
}
.search_bar input {
    width:90%;
}
.products{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  }
.featured_product_card{
  border: 1px solid rgb(219, 219, 219);
  width:30%;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(231, 231, 231, 0.61);

}
.featured_product_card img{
border-radius: 5px 5px 0 0;
width: 100%;
height: 10em;

}
.featured_product_card_information{
  margin:0.5em 1em;
}
.featured_product_card_information .card_price{
margin-top: 4em;
display: flex;
align-items: center;
} 
.menu_prducts{
  display: flex;
}
.menu_product_card{
  width: 40vw;
  height: 20vh;
  border: hotpink 1px solid;
  display: flex
}
.menu_product_card img{
  width: 100%; 
  height: 100%; 
}
p{
  margin-bottom: 0;
  font-size: 13px;
color: rgb(184, 184, 184);
}
h1{
margin:0 1em;
}
h3{
  font-size: 1.8em;
  margin-bottom: .4em;
}
h4{
text-transform: uppercase;
font-weight: 400;
margin-bottom: 1.5em;
}
h5{
color: rgb(19, 170, 19);
font-size: 1.2em;
font-weight:400;
}
h6{
color: rgb(158, 158, 158);
font-size: 1em;
font-weight:400;
margin-left: 1em;
}
hr{ 
  margin:0 20px;
    border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         3vh;
    width:          1px;       
}
</style>