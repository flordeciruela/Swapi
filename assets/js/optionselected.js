'use strict';

function selected(){
	showMember($('#select').val());
}

function showMember(people){
	$.getJSON('https://swapi.co/api/people/'+people,function(response){
		var div = $('<div></div>');
		var h1 = $('<h1></h1>');
		h1.text("Hola, mi nombre es "+ response.name);
		div.append(h1);
		$('#root').append(div);
	});
}
