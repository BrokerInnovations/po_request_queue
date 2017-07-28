(function() {

    'use strict';

    angular.module('po', ['ngAnimate']);

    angular
        .module('po')
        .controller('HomeController', HomeController);

    function HomeController($http, $scope) {
        var vm = this;
        vm.seatInfo = false;
        vm.addSeats = addSeats;
        vm.submit = submit;
        vm.seats = [];
        vm.poInfo = {};

        function addSeats() {
            vm.seats.push({
                'section':"",
                'row':"",
                'odd':"",
                'low_seat':"",
                'seatqty':""
            });
        }

        function submit() {
            var num = 0;
            var section_id = null;
            vm.seats.map(function(seat) {
                num = num + parseInt(seat.seatqty);
            });
            vm.poInfo.tickets_quantity = num;
            console.log(vm.poInfo);
            $http.post('potable.php', vm.poInfo).then(function(res) {
                console.log(res.data);
                section_id = res.data;
                vm.seats.forEach(function(seat) {
                    seat.section_id = section_id;
                });
                //return vm.seats;
                $http.post('table.php', vm.seats).then(function(res) {
                    console.log(res.data);
                    vm.seats = [];
                    vm.poInfo = {};
                    vm.seatInfo = false;
                }).catch(function(error) {
                    console.error(error);
                });
                console.log(vm.seats);
            }).catch(function(error) {
                console.error(error);
            });
        }

    }

})();
