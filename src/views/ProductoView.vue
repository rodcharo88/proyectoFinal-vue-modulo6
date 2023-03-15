<template>
    <div class="container">
        <h1>Productos</h1>
        
        <br />
        <form @submit.prevent="agregarProducto()">

            <div class="input-group mb-2">Seleccionar Catalogo:</div>
                <div class="input-group mb-2">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" v-model="producto.catalogoId">                    
                    
                    <option v-for="item in catalogo" v-bind:key="item.id" v-bind:value="item.id">{{ item.nombre }}</option>

                </select>
            </div>

            <div class="input-group mb-2">
                <input type="text" class="form-control" v-model="producto.nombre" placeholder="Nuevo Producto"
                    aria-describedby="button-addon2">
            </div>
            <div class="input-group mb-2">
                <input type="text" class="form-control" v-model="producto.descripcion" placeholder="Descripción"
                    aria-describedby="button-addon2">
            </div>
            <div class="input-group mb-2">
                <input type="text" class="form-control" v-model="producto.precio" placeholder="Precio Bs."
                    aria-describedby="button-addon2">
            </div>
            <div class="input-group mb-2">
                <button class="btn btn-outline-secondary" type="submit"> <i class="fas fa-save"></i>Guardar</button>
            </div>
      

        </form>

        <h1>Listado de Productos</h1>
        <br />


        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">PRECIO [Bs]</th>
                    <th scope="col">EDITAR</th>
                    <th scope="col">ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in productos">
                    <th scope="row">{{value.id}}</th>
                    <td>{{value.nombre}}</td>
                    <td>{{value.descripcion}}</td>
                    <td>{{value.precio}}</td>
                    <td>
                        <a href="#" class="nav-link1" @click="verProducto(value.id)"> <i
                                class="fa-sharp fa-solid fa-pen"></i> Editar</a>
                    </td>
                    <td>
                        <a href="#" class="nav-link2" @click="eliminarProducto(value.id)"> <i
                                class="fa-sharp fa-solid fa-trash"></i>Eliminar </a>

                    </td>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
//import AppAcciones from '@/components/AppAcciones.vue';
export default {
    name: 'productoView',
    data() {
        return {
           
            producto: {
                id: null,
                nombre: null,
                descripcion: null,
                precio: null,
                catalogoId: null,
            },
            productos: [],
            catalogo: [],            
        }
    },
    methods: {
        agregarProducto() {
            if (this.producto.id == null) {
                axios({
                    method: "post",
                    // url: process.env.VUE_APP_RUTA_API+"/tareas",
                    url: "http://localhost:3000/productos",
                    data: this.producto
                })
                    .then(response => {
                        console.log(response);
                        //this.tarea.titulo = null;
                        this.getProductos();
                        this.nuevoProducto();
                    })
                    .catch(e => console.log(e));

            } else {
                axios({
                    method: "patch",
                    url: "http://localhost:3000/productos/" + this.producto.id,
                    data: this.producto
                })
                    .then(response => {
                        console.log(response);
                        //this.tarea.titulo = null;
                        this.getProductos();
                        this.nuevoProducto();
                    })
                    .catch(e => console.log(e));
            }



        },
        getProductos() {
            axios({
                method: "get",
                
                url: "http://localhost:3000/productos",
            })
                .then(response => {
                    this.productos = response.data;
                    console.log(response);
                })
                .catch(e => console.log(e));
        },
        eliminarProducto(id) {
            axios({
                method: "delete",
               
                url: "http://localhost:3000/productos/" + id
            })
                .then(response => {
                    console.log(response);                    
                    this.getProductos();
                    this.nuevoProducto();
                })
                .catch(e => console.log(e));
        },
        verProducto(id) {
            axios({
                method: "get",
                
                url: "http://localhost:3000/productos/" + id
            })
                .then(response => {
                    console.log(response);
                    //this.tarea.titulo = null;
                    this.producto = response.data;
                })
                .catch(e => console.log(e));
        },
        nuevoProducto() {
            this.producto = {
                id: null,
                nombre: null,
                descripcion: null,
                precio: null,
                catalogoId: null,
            };
            

        },
        getCatalogo() {
            axios({
                method: "get",
                
                url: "http://localhost:3000/catalogo",
            })
                .then(response => {
                    this.catalogo = response.data;
                    console.log(response);
                })
                .catch(e => console.log(e));
        },

    },
    computed: {

    },
    mounted() {
        this.getCatalogo();
        this.getProductos();
    },
    components: {

    }
}
</script>