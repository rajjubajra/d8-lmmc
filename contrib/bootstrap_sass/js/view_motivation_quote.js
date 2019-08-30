/**
 * DISPLAY RANDOM MOTIVATION SUTTAS IN TO THE FRONT PAGE
 * FROM CONTENT TYPE "Motivation Suttas" 
 */

//get UI for the Suttas to display
const ui_greetings = document.getElementById('greetings');

//get motivation suttas
const uri_suttas = `${window.location.href}/jsonapi/node/motivation_suttas`;
console.log(' Sutta uri ',uri_suttas);
/** 
*  run to view suttas */

view_suttas(uri_suttas);

function view_suttas(request){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
        //console.log('xhttp req', xhttp.responseText);
        let response = JSON.parse(xhttp.responseText);
        let dbArr = response.data;
        console.log(dbArr);
        console.log(dbArr[0].attributes.title);
        console.log(dbArr[0].attributes.field_motivation_suttas);



        ui_greetings.innerHTML = dbArr[0].attributes.field_motivation_suttas;


      }
  };
  xhttp.open("GET", request, true);
  xhttp.send();
}