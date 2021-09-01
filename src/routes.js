import home from "./components/home";
import login from "./components/login";
import signup from "./components/signup";
import principal from "./components/principal";
import edituser from "./components/edituser";
import agregarrestaurante from "./components/agregarrestaurante"
import editarrestaurante from "./components/editarrestaurante"
import puente from "./components/puente"
import menus from "./components/menus"
import puenteproductos from "./components/puenteproductos"
import crearpedido from "./components/crearPedido"
import restaurante from "./components/restaurante"
import listaPedidos from "./components/listaPedidos"


export const routes = [
    {path:'/', component:home}, 
    {path:'/home', component:home},
    {path: '/login', component:login},
    {path: '/signup', component:signup},
    {path: '/principal', component:principal},
    {path: '/edituser', component:edituser},
    {path: '/agregarrestaurante', component:agregarrestaurante},
    {path: '/editarrestaurante', component:editarrestaurante},
    {path: '/puente', component:puente},
    {path: '/menus', component:menus},
    {path: '/puenteproductos', component:puenteproductos},
    {path: '/crearpedido', component:crearpedido},
    {path: '/restaurante', component:restaurante},
    {path: '/listaPedidos', component:listaPedidos},
    
]
