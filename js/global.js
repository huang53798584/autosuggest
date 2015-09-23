$(document).ready(function(){
	var users = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('username'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
		    url: 'users.php?query=%QUERY',
		    wildcard: '%QUERY'
		}
	});

	users.initialize();

	$('#users').typeahead({
		hint: true,
		highlight: true,
		minLength: 2
	}, {
		name: 'users',
		displayKey: 'username',
		source: users.ttAdapter()
	});
});