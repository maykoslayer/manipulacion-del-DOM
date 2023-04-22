var articulos = [
  {nombre: "bici", costo: 3000},
  {nombre: "tv", costo: 9000},
  {nombre: "libro", costo: 320},
  {nombre: "celular", costo: 15000},
  {nombre: "laptop", costo: 14500},
  {nombre: "teclado", costo: 500},
  {nombre: "audifonos", costo: 1500},
  {nombre: "mouse", costo: 350}
]
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500;
})
var nombrearticulo = articulos.map(function(articulo){     return  articulo.nombre;        })

