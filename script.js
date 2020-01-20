$(document).ready(function() {
    $('#holder').hide();
    $('#get-employees').fadeIn();
    $('#get-employees').click(function(){
        $(this).fadeOut(function() {
            $('#loader').fadeIn(function(){
                $.ajaz({
                    url:'https://www.mccinfo.net/epsample/employees',
                }).done(onAjaxComplete);
            });
            });
        });
        function onAjaxComplete(employees) {
            var employees = $.parseJSON(employees);
            var $ ="";
            if(Array.isArray(employees)){
                for (var i=0; i< employees.length; i++){
                    //s +="<div id='" + employees[i].id + "'>"   //3
                    $ += "<h3>" + employees[i].first_name + " " + employees[i].last_name + "<h3>"; //3
                    $ += "<div>";     //3
                    $ +=  "<img src='" + employees[i].image_filename + "' alt='employee image' /></p>";

                    //4
                    //s +='<a href="#" id="' + employees[i].id + '" class
                
    
                }
            }
        }
    }

}