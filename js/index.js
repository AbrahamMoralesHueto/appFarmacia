const btnLogin = document.getElementById("login");
const btnSignUp = document.getElementById('signUp');

btnLogin.addEventListener('click', () => {
    top.location.href = "login.html";
});

btnSignUp.addEventListener('click', () => {
    top.location.href = "sign-up.html";
});

function comprar(idProducto){
    
}

function obtenerArticulos (){
    const http = new XMLHttpRequest();
    const url = "url";

    http.onreadystatechange = () => {
        if(this.readyState == 4 && this.status == 200){
            let medicamento = new Medicamento();
            medicamento.id = res.id;
            
            addArticulo(medicamento);
        }
    }

    http.open('GET', url);
    http.send();
}

function addArticulo(medicamento){
    const element = document.getElementById("products");
    element.innerHTML = `<div class="card text-center mb-4">
    <div class="card-body">
        <strong>Product</strong>: ${medicamento.name} -
        <strong>Price</strong>: ${medicamento.price} - 
        <strong>Year</strong>: ${medicamento.year}
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
    </div>
</div>`;
}

function add(){
    // const element = document.getElementById("products");
    // element.appendChild = `<a href="#" class="btn btn-danger" name="delete">Delete</a>`;
    console.log("Hola");
}

class Medicamento {
    constructor(id, nombre, tipo, precio, url, stock) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.url = url;
        this.stock = stock;
    }
}