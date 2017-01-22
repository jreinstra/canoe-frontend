$('#searchButton').click(function(e) {
    $('#search').hide();
    $('#results').show();
});

$('#backToSearch').click(function(e) {
    $('#results').hide();
    $('#search').show();
});

$('.panel').click(function(e) {
    var url = e.currentTarget.getAttribute('x-url');
    window.open(url, "_blank");
});


/* Datepicker */
$('#datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '1d'
});

/* Pusher https://github.com/pusher/pusher-js */

var pusher = new Pusher('b4782df8ff81aa3fbd62');