// --- --- --- generic search function --- --- ---
$("#search-submit").on("click",function(event){ // --- use a form to make this
        // --- grab data from search box
        var searchValue = $("#search-input").val();
        
        // --- opens in new window/tab
        var newWindow; // --- generate new URL based on info
        window.open(newWindow)

        // --- clears search box (if needed)
    $("#search-input").val("");
});

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
        jsonData = response;
    });
        // --- outputs JSON data so there's no need to reuse code
    return jsonData;
}

// --- --- --- populate movie information --- --- ---
function standardData(movieData){
    var director;
    var cast;
    var genre;
    var runTime;
    var posterImage;
    var trailerVideo;
    var description;
    var guidanceRating; // --- stuff like PG/R/etc.
    var movieRating; // --- actual critical ratings
}

function postHeadingInfo(){
    // --- append the poster (remember to resize to scale), ratings, run time, etc.
}
function postDescriptionInfo(){
    // --- append movie description information seaprate from basic information
}
function postGenreInfo(){
    // --- append genres separate from basic information
    // --- make genres interactive and opens new window/tab for user to parse
}
function postStaffInfo(){
    // --- post staff information such as cast and director(s)
    // --- also make this interactive just like with genres
}

// --- --- --- availability --- --- ---
function amazonStore(){
    // --- checks if the title is available on amazon
    // --- if it's available, displays the price for the user as well as link to product page
}

function amazonVideo(){
    // --- checks if title is available on amazon prime video
    // --- if available, link to show page
}

        // --- add netflix and potentially hulu onto this list as well *******************
