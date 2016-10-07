'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/app/app1');
            $stateProvider
                .state('app', {
                    abstract: true,
                    cache: false,
                    url: "/app",
                    templateUrl: "tpl/app.html",
                })
                .state('app.app1', {
                    url: '/app1',
                    templateUrl: "tpl/app_app1.html",
                })
                .state('app.lakes', {
                    url: '/lake',
                    templateUrl: "tpl/app_lake.html",
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    files: [
                                        'css/pcss/Lake-Tyrrell.css',
                                        'js/controllers/lake.js'
                                    ]
                                })
                            }
                        ]
                    },


                })
        }
    );
