/**
 * DISPLAY RANDOM Dhammapada IN TO THE FRONT PAGE
 * FROM CONTENT TYPE "Dhammapada"  
 */

//get UI for the Suttas to display
const ui_dhammapada = document.getElementById('dhammapada');

//get motivation suttas
const uri_dhammapada = `${window.location.href}/jsonapi/node/dhammapada`;
console.log(' Sutta uri ',uri_dhammapada);
/** 
*  run to view suttas */

view_suttas(uri_dhammapada);

function view_suttas(request){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
        //console.log('xhttp req', xhttp.responseText);
        let response = JSON.parse(xhttp.responseText);
        let dbArr = response.data;
        console.log(dbArr);
        //console.log(dbArr[0].attributes.title);
        //console.log(dbArr[0].attributes.field_dhammapada);

        const arr_length = dbArr.length;
        /**
         * to get random index id
         * genrate randome number in between the array length
         */
        let i = Math.floor(Math.random() * arr_length);
        ui_dhammapada.innerHTML = dbArr[i].attributes.field_dhammapada;
      }
  };
  xhttp.open("GET", request, true);
  xhttp.send();
}