
App.controller('UserController', ['$scope', 'UserService', '$window','$location', function($scope, UserService,$window,$location) {
	//alert("inside user controller");
var self = this;
$scope.user={};


   $scope.getUser = function(user){
	   //alert("inside function");
             UserService.getUser(user).then(function(data){
				 //$scope.user.userName=data.userName;
//UserService.user.userName=$scope.user.userName;
          //alert("data::"+JSON.stringify(data.userName));
		// $window.location.href ='/welcome';
		$location.path('/welcome');
     });
          };

 }]);
 
 
 App.controller('UserController2', ['$scope', 'UserService', '$location',function($scope, UserService,$location) {
	//alert("inside user controller");

 $scope.user={};
 $scope.listdata ={};

	  
            var product = UserService.shareUser();
			$scope.user.userName= product[0];
			var list =[];
			
		//	alert("hjdfhjs");
			var result = UserService.getCity();
			result.then(function(data){
			    list= data;
			   // alert("list::"+JSON.stringify(list));
			    var city =[];
			    var clist=[];
				for(var i=0;i<list.length;i++){
					//alert("city names::"+list[i].city);
					city.push(list[i].city);
					clist.push(list[i]);
				}
				console.log("city::"+JSON.stringify(city));
				$scope.cityList = city;
				$scope.listdata = clist;
			
			     },
			function(errorPayload) {
				              $log.error('failure loading movie', errorPayload);
				          });
			
		
			
			
			
			var selectedValue = $scope.selectedName;
			

   $scope.findUser = function(){
	  // alert("inside function");
	   alert("selected value::"+selectedValue);
			//alert(product[0]);
			console.log("user 2"+product[0]);
			//alert("userName::"+$scope.user.userName);
		 
          };
          $scope.changedvalue = function(){
        	 alert("selected value::"+  $scope.selectedName);
        		 
                  };
        		  
		  
		   $scope.deleteUser = function(){
	 alert("inside delete");
	 var id = 4;
	 
		 UserService.deleteUser(id).then(function(data){
			alert(data);
     });;
		
          };
		  
		   $scope.uploadFile = function(){
			   alert("inide upload file::");
               var file = $scope.myFile;
               
               console.log('file is ' );
               console.dir(file);
               UserService.uploadFileToUrl(file);
            };
            
            
            $scope.calculator = function(){
           	 alert("inside calculator");
           	$location.path('/calculator');
           	
           	
           	
                     };
                     $scope.search = function(){
                       	// alert("inside calculator");
                       	$location.path('/search');
                       	
                       	
                       	
                                 };


 }]);
 
 
 App.controller('SearchController', ['$scope', 'UserService', '$window','$location', function($scope, UserService,$window,$location) {
		//alert("inside user controller");
	 $scope.people = [
	                  {
	                      name:'Soheil'
	                  },
	                  {
	                      name:'Soroush'
	                  },
	                  {
	                      name:'Reza'
	                  }

	              ]


	 }]);
 
 