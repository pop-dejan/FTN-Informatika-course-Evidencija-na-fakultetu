var city1 = {
	name : "Novi Sad",
	country : "RS",
	capital : false  
  };

  var city2 = {
	name : "Beograd",
	country : "RS",
	capital : true
  };

  var city3 = {
	name : "Manchester",
	country : "UK",
	capital : false  
  };

  var city4 = {
	name : "London",
	country : "UK",
	capital : true
  };

  var city5 = {
	name : "Valencia",
	country : "ESP",
	capital: false
  };

  var city6 = {
	name : "Barcelona",
	country : "ESP",
	capital: false  
  };

  var city7 = {
	name : "Nis",
	country : "RS",
	capital : false  
  };

  var city8 = {
	name : "Madrid",
	country : "ESP",
	capital: true  
  };

  var city9 = {
	name : "Leeds",
	country : "UK",
	capital: false  
  };


var cities = [];
cities.push(city2);
cities.push(city1);
cities.push(city3);
cities.push(city4);
cities.push(city5);
cities.push(city6);
cities.push(city7);
cities.push(city8);
cities.push(city9);

var countries = ["RS", "UK", "ESP"];

function proveraForme(forma){
	let retval = true;

	let name = forma.name.value.trim()
	if(name == ""){
		retval = false;
	}

	let country = forma.country.value.trim()
	if(country == ""){
		retval = false;
	}

	let klasa = document.getElementById("sel1").value
	if(klasa == "" || klasa.length > 3){ 
		retval = false;
	}

	let klasa2 = document.getElementById("sel2").value
	if(klasa2 == "" || klasa2[0] != klasa2[0].toUpperCase()){ 
		retval = false;
	}

	return retval;

}



function promeni(selekt){
	
	
	let drugiSelekt = document.getElementById("sel2")
	document.getElementById("capital").disabled = true
	document.getElementById("capital").checked = false
	drugiSelekt.options.length = 0
	let prviSelekt = selekt

	for (var i in cities) {

		
		var city = cities[i];
		canAdd = false;
		
		if(city.country == prviSelekt.value){
			canAdd = true;
			
		}else{
			canAdd = false;
		}
		if(canAdd){
			drugiSelekt.options[drugiSelekt.options.length] = new Option(cities[i].name);
			drugiSelekt.disabled = false;
			drugiSelekt.style.visibility = "visible";	
		}
		
	}
	 
		
}
function promeniCek(selekt){

	document.getElementById("capital").disabled = true;
	document.getElementById("capital").checked = false;

	for(let i = 0; i < cities.length; i++){
		if(selekt.value == cities[i].name && cities[i].capital === true ){
			console.log(cities[i].name, cities[i].capital);
			document.getElementById("capital").disabled = false;
			document.getElementById("capital").checked = true;
		}

}	}

window.onload = function(){
	let selekt = document.getElementById("sel1");
	let output = "";
    for(let i = 0; i < countries.length; i++){
        let optionElem = `<option>${countries[i]}</option>`;
        output += optionElem;        
    }
    selekt.innerHTML = output;

	promeni(selekt)
	document.getElementById("capital").disabled = false;
	document.getElementById("capital").checked = true;
	
	
}

