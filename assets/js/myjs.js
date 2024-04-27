$(document).ready(function() {
    var x;        
    $("#search").click(function() {
               x=$('#input').val();
             
			   $.ajax({

                           
                            url: "song/song"+x+".html",
                           
                                      

                            success: function(response) {
                            $('#display').html(response);
                               

                            }

                            });
			  
			  
			  
            });
        });