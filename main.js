$('#searchButton').click(function(e) {
    $('#search').hide();
    $('#results').show();
});

$('#backToSearch').click(function(e) {
    $('#results').hide();
    $('#search').show();
});

$('#search-travel-mode').change(function(e) {
    var optionsDict = {'r':0, 'o':1};
    var options = ['#roundTripOptions', '#onewayTripOptions'];
    var i = optionsDict[e.currentTarget.value];
    $(options[i]).show();
    $(options[(i + 1) % 2]).hide();
});

$('.panel').click(function(e) {
    var url = e.currentTarget.getAttribute('x-url');
    window.open(url, "_blank");
});


/* Datepicker */
$('.datepicker-div').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '1d'
});

/* Pusher https://github.com/pusher/pusher-js */

//var pusher = new Pusher('b4782df8ff81aa3fbd62', {encrypted:true});

function getSuggestions(query, process) {
    $.get('http://laguna.joseb.me/autosuggest', {"q":query}, function(data, status) {
        process(data);
    });
    //process(["SFO", "SLC", "OAK", "OAR"]);
}


$("#search-from-code").typeahead({source:getSuggestions});
$("#search-to-code").typeahead({source:["SFO", "SLC", "OAK", "OAR"]});