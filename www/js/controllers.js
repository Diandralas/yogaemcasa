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

.controller('HomeController', function($scope) {
  $scope.home = [
    { title: 'Meditação', pagina: 'meditacao', id: 1},
    { title: 'Exercícios', pagina: 'exercicios',id: 2 },
    { title: 'Postura', pagina:'postura',id: 3 },
    { title: 'Glossário', pagina: 'glossario',id: 4 },
    { title: 'Locais', pagina: 'locais',id: 5 },
    { title: 'Mapa', pagina: 'mapa',id: 6 }
  ];
})

.controller('MeditacaoController', function($scope, $stateParams) {
})

.controller('ExerciciosController', function($scope, $stateParams) {
  $scope.exercicios = [
    { title: 'Tutorial', pagina: 'tutorial', id: 21},
    { title: 'Vídeos', pagina: 'videos', id: 22 }
  ];
})

.controller('PosturaController', function($scope, $stateParams) {
})

.controller('GlossarioController', function($scope, $stateParams) {
})

.controller('LocaisController', function($scope, $stateParams) {
  $scope.locais = [
    {id: "1",
    local: "Parque do Ibirapuera",
    endereco: "Praça do Porquinho (portão 6) e aos domingos na Serraria (portão 7)",
    bairro: "Ibirapuera",
    horario_funcionamento: "Todo sábado e domingo, às 9h",
    contato: "Anderson Gouveia e Rafael Sanchos",
    telefone: ""
  },
    {id: "2",
    local: "Parque Villa-Lobos",
    endereco: "próximo à Casa do João de Barro",
    bairro: "Lapa",
    horario_funcionamento: "Todo sábado, faça chuva ou faça sol, às 10h",
    contato: "Natália Andrade",
    telefone: ""
  },
    {id: "3",
    local: "",
    endereco: "",
    bairro: "",
    horario_funcionamento: "",
    contato: "",
    telefone: ""
  },
    {id: "4",
    local: "",
    endereco: "",
    bairro: "",
    horario_funcionamento: "",
    contato: "",
    telefone: ""
  },
    {id: "5",
    local: "",
    endereco: "",
    bairro: "",
    horario_funcionamento: "",
    contato: "",
    telefone: ""
  },
    {id: "6",
    local: "",
    endereco: "",
    bairro: "",
    horario_funcionamento: "",
    contato: "",
    telefone: ""
  }
  ];
})

.controller('MapaController', function($scope, $stateParams) {
})

.controller('TutorialController', function($scope, $stateParams) {
})

.controller('VideosController', function($scope, $stateParams) {
});
