$(function() {

    //on is the jQuery equivalent of addEventListener
    $('#myButton').on("click", function(e){
        console.log(this);    
    });  

    

    //Try it yourself

    $('#testBtn').on("click", function(e) {
        alert(e.pageX + ", " + e.pageY);
    })


});
