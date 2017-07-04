angular.module('starter.services', [])

.factory('PokemonService', function() {

  var listaPokemons = [
    {
      id: 1,
      nome: 'José',
      raca: 'Pikachu',
      tipo: 'Elétrico',
      hp: '40',
      img: 'img/pikachu.jpg',
      icone: 'img/pikachu-pin.png',
      coordenadas: [-23.5147356, -46.6563439]
    },
    {
      id: 2,
      nome: 'Alfredo',
      raca: 'Pikachu',
      tipo: 'Elétrico',
      hp: '40',
      img: 'img/pikachu.jpg',
      icone: 'img/pikachu-pin.png',
      coordenadas: [-23.5942396, -46.6523839]
    },
    {
      id: 3,
      nome: 'Robervaldo',
      raca: 'Snorlax',
      tipo: 'Psíquico',
      hp: '200',
      img: 'img/snorlax.png',
      icone: 'img/snorlax-pin.png',
      coordenadas: [-23.5882296, -46.6722899]
    },
    {
      id: 4,
      nome: 'Astrogildo',
      raca: 'Charizard',
      tipo: 'Fogo',
      hp: '120',
      img: 'img/charizard.png',
      icone: 'img/charizard-pin.png',
      coordenadas: [-23.5544376, -46.6583279]
    },
    {
      id: 5,
      nome: 'Lia',
      raca: 'Zubat',
      tipo: 'Noturno',
      hp: '10',
      img: 'img/zubat.png',
      icone: 'img/zubat-pin.png',
      coordenadas: [-23.5572296, -46.6923859]
    },
    {
      id: 6,
      nome: 'Roger',
      raca: 'Bulbassauro',
      tipo: 'Grama/Veneno',
      hp: '40',
      img: 'img/bulbassauro.png',
      icone: 'img/bulbassauro-pin.png',
      coordenadas: [-23.5998696, -46.6921899]
    },
    {
      id: 7,
      nome: 'Sarah',
      raca: 'Jigglypuff',
      tipo: 'Fairy',
      hp: '2',
      img: 'img/jigglypuff.png',
      icone: 'img/jigglypuff-pin.png',
      coordenadas: [-23.5922316, -46.6124899]
    },
    {
      id: 8,
      nome: 'Bruce',
      raca: 'Squirtle',
      tipo: 'Água',
      hp: '50',
      img: 'img/squirtle.png',
      icone: 'img/squirtle-pin.png',
      coordenadas: [-23.5247356, -46.6921849]
    },
  ];

  return {
    todos: function() {
      return listaPokemons;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(id) {
      for (var i = 0; i < listaPokemons.length; i++) {
        if (listaPokemons[i].id == id) {
          return listaPokemons[i];
        }
      }
      return null;
    }
  };
});
