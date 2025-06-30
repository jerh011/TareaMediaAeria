import React from "react";
import Products from "./Products";
import Category from "./Categoty";



function Ejercicio5_2() {
  const productos = [
    { nombre: "iPhone 15", precio: 999, descuento: 10, categoria: "Electrónicos" },
    { nombre: "MacBook Air", precio: 1299, descuento: 15, categoria: "Electrónicos" },
    { nombre: "AirPods Pro", precio: 249, descuento: 20, categoria: "Electrónicos" },
    { nombre: "iPad Air", precio: 599, descuento: 5, categoria: "Electrónicos" },
    { nombre: "Camiseta Premium", precio: 29, descuento: 25, categoria: "Ropa" },
    { nombre: "Jeans Clásicos", precio: 79, descuento: 30, categoria: "Ropa" },
    { nombre: "Chaqueta de Cuero", precio: 199, descuento: 15, categoria: "Ropa" },
    { nombre: "Zapatillas Deportivas", precio: 89, descuento: 20, categoria: "Ropa" },
    { nombre: "Sofá Moderno", precio: 899, descuento: 25, categoria: "Hogar" },
    { nombre: "Mesa de Comedor", precio: 449, descuento: 10, categoria: "Hogar" },
    { nombre: "Lámpara LED", precio: 69, descuento: 15, categoria: "Hogar" },
    { nombre: "Alfombra Persa", precio: 299, descuento: 30, categoria: "Hogar" }
  ];

  const categorias = Array.from(new Set(productos.map(p => p.categoria)));

  const productosPorCategoria = categorias.map(categoria => ({
    nombre: categoria,
    productos: productos.filter(p => p.categoria === categoria)
  }));

  return (
    <div >
      <h1>Tienda Online</h1>
      {productosPorCategoria.map((cat) => (
        <Category key={cat.nombre} nombre={cat.nombre} productos={cat.productos} />
      ))}
    </div>
  );
}

export default Ejercicio5_2;
