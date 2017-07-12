angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeController', function($scope, $state) {
  $scope.home = [
    { title: 'Meditação', pagina: 'meditacao', id: 1, img: 'img/meditacao.png'},
    { title: 'Exercícios', pagina: 'exercicios',id: 2, img: 'img/exercicios.png' },
    { title: 'Postura', pagina:'postura',id: 3, img: 'img/postura.png' },
    { title: 'Glossário', pagina: 'glossario',id: 4, img: 'img/glossario.png' },
    { title: 'Locais', pagina: 'locais',id: 5, img: 'img/locais.png' },
    { title: 'Mapa', pagina: 'mapa',id: 6, img: 'img/mapa.png' }
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('MeditacaoController', function($scope, $stateParams) {
})

.controller('ExerciciosController', function($scope, $stateParams, $state) {
  $scope.exercicios = [
    { title: 'Tutorial', pagina: 'tutorial', id: 21, img: 'img/tutorial.png'},
    { title: 'Vídeos', pagina: 'videos', id: 22, img: 'img/videos.png' }
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('MeditacaoController', function($scope, $stateParams) {
})

.controller('LoginController', function($scope, $stateParams) {
})

.controller('PosturaController', function($scope, $stateParams) {
})

.controller('GlossarioController', function($scope, $http, $state, $ionicPopup) {
  $scope.dados = {};

  $http.get('http://localhost:3000/glossario').then(function(resposta){
    $scope.glossario = resposta.data;
  });

  $scope.showPopup = function(item) {
    var alertPopup = $ionicPopup.alert({
      title: item.palavra,
      template: item.significado
    });

    alertPopup.then(function(res) {
      console.log('Callback');
    });
  };
}

/*
.controller('LocaisController', function($scope, $stateParams) {
  $scope.locais = [
    { id: "1",
      local: "Parque do Ibirapuera",
      endereco: "Praça do Porquinho (portão 6) e aos domingos na Serraria (portão 7)",
      bairro: "Ibirapuera",
      horario_funcionamento: "Todo sábado e domingo, às 9h",
      contato: "Anderson Gouveia e Rafael Sanchos",
      telefone: ""
    },
    { id: "2",
      local: "Parque Villa-Lobos",
      endereco: "próximo à Casa do João de Barro",
      bairro: "Lapa",
      horario_funcionamento: "Todo sábado, faça chuva ou faça sol, às 10h",
      contato: "Natália Andrade",
      telefone: ""
    },
    { id: "3",
      local: "Parque Burle Marx",
      endereco: "Avenida Dona Helena Pereira de Moraes, 200",
      bairro: "Morumbi",
      horario_funcionamento: "Todo quarto domingo do mês, às 10h",
      contato: "Renata Barcellini",
      telefone: ""
    },
    { id: "4",
      local: "Parque Buenos Aires",
      endereco: "Av. Angélica, 1500",
      bairro: "Higienópolis",
      horario_funcionamento: "Todo primeiro domingo do mês, às 11h.",
      contato: "Natália Andrade",
      telefone: ""
    },
    { id: "5",
      local: "Parque Severo Gomes",
      endereco: "R. Píres de Oliveira, 356",
      bairro: "Granja Julieta",
      horario_funcionamento: "Todos os sábados, às 12h30.",
      contato: "Marcos Eiji",
      telefone: ""
    },
    { id: "7",
      local: "Parque Ceret",
      endereco: "R. Canuto Abreu, s/n",
      bairro: "Tatuapé",
      horario_funcionamento: "Todo sábado, às 9h",
      contato: "Thiago Ferreira",
      telefone: ""
    },
    { id: "8",
      local: "Alphaville",
      endereco: "Al. Mamoré com Al. Itapecuru",
      bairro: "Alphaville Industrial",
      horario_funcionamento: "Todo primeiro sábado do mês, às 10h",
      contato: "Alessandra Filipini",
      telefone: ""
    },
    { id: "9",
    local: "São Bernardo do Campo",
    endereco: "Parque Raphael Lazzuri",
    bairro: "",
    horario_funcionamento: "Duas vezes por mês, aos domingos, a cada 15 dias, às 10h.",
    contato: "Tatiana Uehoka",
    telefone: ""
    },
    { id: "10",
    local: "Itú",
    endereco: "Gramado ao lado do Container Sucos",
    bairro: "",
    horario_funcionamento: "Todo sábado, às 9h",
    contato: "Antonio Prates",
    telefone: ""
    }
  ];
})
*/


)
