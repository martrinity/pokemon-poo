function Pokemon(nombre,color,poderDeAtaque){
  this.nombre = nombre;
  this.color = color;

  this.nivelDeAmistad = 0;

  this.vida = 100;
  this.poderDeAtaque = poderDeAtaque;

  this.mostrarPokemon = function(){
  	return ('Hola, soy: ' + this.nombre + ' y soy de color: ' + this.color)
  };

  this.aumentarAmistad = function(valor){
  	this.nivelDeAmistad = this.nivelDeAmistad + valor
  };
}this.atacar = function(pokemon){
	pokemon.vida - this.poderDeAtaque
};


const Digglet = new Pokemon('Digglet','marron', 50);
const Vulpux = new Pokemon ('Vulpix','marron', 45);
const Abra = new Pokemon ('Abra','amarillo', 60);
const Squirtle = new Pokemon ('Squirtle','azul',30)
const Caterpie = new Pokemon ('Caterpie','verde',50);
const Cubone = new Pokemon ('Cubone','blanco',40);

Digglet.atacar(Vulpix);

document.write(Vulpix.vida);