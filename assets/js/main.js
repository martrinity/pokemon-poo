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
const Vulpux = new Pokemon ('Vulpix','marron', 45)

Digglet.atacar(Vulpix);

document.write(Vulpix.vida);