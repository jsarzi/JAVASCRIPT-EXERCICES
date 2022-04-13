const div = document.getElementsByTagName("div");
fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25&offset=0")
.then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	for(rec of data.records) {
       div[2].innerHTML += rec.record.fields.nom_etablissement+ " ";
       div[2].innerHTML += rec.record.fields.nom_commune+ " ";
       div[2].innerHTML += rec.record.fields.mail + "<br>";
            }
        
        console.log(data); 
    
});

/*
var main = document.getElementById("main");

// First check that the element has child nodes 
if(main.hasChildNodes()) {
    var nodes = main.children;
    
    // Loop through node list and display node name
    for(var i = 0; i < nodes.length; i++) {
        alert(nodes[i].nodeName);
    }
}*/

/*var tab = Object.keys(data);
// pour avoir le tableau avec les noms
 
for (key in data) {
    other_tab.push(data[key]);
    // ajoute dans l'autre tableau le contenu de chaque objet de data
}*/






/*.then(function (response){
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(function (data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


/*
.then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
*/