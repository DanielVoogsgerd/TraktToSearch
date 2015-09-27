function test() {
    var name = document.querySelector('meta[property="og:title"]').content;

    window.location = "http://search.student.utwente.nl/search?q=" + name;
}


if(document.querySelector('meta[property="og:type"]').content == "video.movie") {

    var actionButtonDiv = document.querySelector('.action-buttons');

    var buttonCode =
    '<a id="findOnSearchButton" class="btn btn-block btn-summary btn-checkin" data-movie-id="102924" data-type="movie" data-url="/movies/tomorrowland-2015" href="#">' +
        '<div class="fa fa-fw trakt-icon-list">' +
        '</div>' +
        '<div class="text">' +
            '<div class="main-info" data-text-off="Find on search" data-text-on="Listed On">Find on search</div>' +
            '<div class="under-info">' +
            '</div>'+
        '</div>'+
        '<div class="loading">'+
            '<div class="icon">'+
                '<div class="fa fa-refresh fa-spin">'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</a>';


    actionButtonDiv.innerHTML = actionButtonDiv.innerHTML + buttonCode;

    document.getElementById('findOnSearchButton').addEventListener('click', test);
}
