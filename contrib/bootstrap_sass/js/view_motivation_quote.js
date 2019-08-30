//get motivation suttas
const uri_suttas = `${window.location.href}/jsonapi/node/motivation_suttas`;
console.log(' Sutta uri ',uri_suttas);

function view_suttas(request){


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
        //console.log('xhttp req', xhttp.responseText);
        let response = JSON.parse(xhttp.responseText);
        let dbArr = response.data;
        console.log(dbArr);
        console.log(dbArr[0].attributes.body);
      }
  };
  xhttp.open("GET", request, true);
  xhttp.send();



}