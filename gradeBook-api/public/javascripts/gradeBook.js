angular.module('app', [])

  // Service
.factory('Roster', ['$http', function($http){
  return $http.get('/gbook');
}])
  

  .controller('GradeController', ['$scope', 'Roster', function ($scope, Roster) 
  {
      Roster.success(function(data){
         
         // console.log(data);
          $scope.roster = data.roster;
          $scope.assessments = data.assessments;
        }).error(function(data, status){
          console.log(data, status);
          $scope.roster = [];
          $scope.assessments = [];
        });
      


    //  $scope.roster = roster;
    //  $scope.assessments = assessment; // due to time constaraint and limited knowledge of mongo I had to simulate the database interaction.

   

    $scope.gradeAvg = function(assessElt , test)
    {
      //console.log(test);
        var tot = 0;
        for ( gradeEltid in assessElt.grades)
        {
          var gradeElt = assessElt.grades[gradeEltid];
          tot += gradeElt.grade;
        }

        if (test) // test will be true if this is computed for the last column, at which point the table width should be to its max value.
        {
          var offwid =document.getElementById("theTable").offsetWidth +100; // mystery to me why I need to add an offset here ... it being pixel is also not ideal for responsiveness
          document.getElementById("tableBackground").style.width = offwid + "px" ;
        }

        if (assessElt.grades.length > 0)
        {
          return Math.round(tot/assessElt.grades.length) + "%";  // let's return whole numbers
        }
        else
        {
          return "-";
        }

        
        
    }

    $scope.studAvg = function(id)
    {
      var tot = 0;
      var countAssessment = 0;
      //console.log($scope.assessments);
      for ( assessEltid in $scope.assessments)
      {
        var assessElt = $scope.assessments[assessEltid];
        //console.log(assessElt);
        for ( gradeEltid in assessElt.grades)
        {
            var gradeElt = assessElt.grades[gradeEltid];
           // console.log(gradeElt);
            if (gradeElt.classId == id)
            {
              countAssessment ++;
              tot += gradeElt.grade;
            }
        }
      }
      if ( countAssessment > 0)
      {
        return Math.round(tot/countAssessment) + "%";  // let's return whole numbers.
      }
      else
      {
        return "-";
      }
    }

    $scope.findGrade = function ( gradeArray , id )
    {
      for (var i=0 ; i< gradeArray.length ; i++)
      {
        if (gradeArray[i].classId == id)
        {
          return gradeArray[i].grade + "%";
        }
      }
      return "-";
    }



}])
