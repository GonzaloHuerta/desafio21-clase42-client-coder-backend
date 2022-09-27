const axios = require('axios');

const nuevoProducto = {
    nombre: 'Apple Watch',
    descripcion: 'Smart Watch Apple Watch series 3',
    codigo: '265',
    thumbnail: 'http://facebook.com',
    precio: 1652,
    stock: 10
}

const productoEditado = {
    nombre: 'iPhone 13',
    descripcion: 'iPhone 13 de 128gb',
    codigo: '268',
    thumbnail: 'http://facebook.com',
    precio: 11540,
    stock: 20
}

const getProducts = async()=>{
    const productos = await axios.get('http://localhost:8081/products');
    console.log(productos.data);
}

const addProduct = async(producto)=>{
    const productoAgregado = await axios.post('http://localhost:8081/products', producto);
    console.log(productoAgregado.data);
}

const deleteProduct = async(id)=>{
    const productoBorrado = await axios.delete(`http://localhost:8081/products/${id}`);
    console.log(productoBorrado.data);
}

const editProduct = async(id, producto)=>{
    const productoEditado = await axios.put(`http://localhost:8081/products/${id}`, producto);
    console.log(productoEditado.data);
}


//tests

//getProducts();
//addProduct(nuevoProducto);
//deleteProduct('6332475c048b4b72c8e3ba44');
//editProduct('633247d59543ec8353f66eda', productoEditado);