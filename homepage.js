// --- --- --- initialize some variables if needed --- --- ---


// --- --- --- generic search function --- --- ---
$("#search-submit").on("click",function(event){ // --- use a form to make this
        // --- grab data from search box
    var searchValue = $("#search-input").val();

        // --- clears search box (if needed)
    $("#search-input").val("");
});
            // --- --- --- potentially move this aspect from header to main body for home page only ***************************************

// --- --- --- header bar buttons --- --- ---
$("#main-page").on("click",function(){

});
$("#movies-page").on("click",function(){

});
$("#tv-page").on("click",function(){

});

        // --- extra if we can make it
$("#community-page").on("click",function(){

});
$("#in-theaters").on("click",function(){

});

// --- --- --- grab ajax data --- --- ---
function jsonGrab(queryURL){
    var jsonData = {};

    $.ajax({
        url: gifURL,
        method: "GET"
    }).then(function(response){
        jsonData = response.data;
    });
        // --- outputs JSON data so there's no need to reuse code
    return jsonData;
}

// --- --- --- initialize database --- --- ---
var config = {
    
};

firebase.initializeApp(config);
var database = firebase.database();

// --- --- --- make column for trending or popular movies --- --- ---
function movietable(){

}

// --- --- --- make column for trending or popular shows --- --- ---
function tvTables(){

}