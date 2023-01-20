$(document).ready(function () {
    $(".flexItem").click(function (event) {
        event.stopPropagation();
        $(".dorpDownMenu").toggle();
       
    });
    
    
     $(document).click(function (event) {
        $(".dorpDownMenu").hide();
       
    });


       // Pagination addClass and removeClass

       $(".paginationItem").click(function(){
        $(".paginationItem").removeClass('paginationActive');
        $(this).removeClass('paginationActive');
     
    })


   
}); 
 

