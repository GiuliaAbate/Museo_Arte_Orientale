//JAVASCRIPT
//Funzione 1: controllare la correttezza dei campi di un form e consentirne l'invio --> Form di acquisto biglietti
function controllaInvio() {

    //Controllo dei campi, se vuoti da errore
    var nome = document.getElementById("nome").value;
    if (nome == "") {
        alert("Campo obbligatorio, inserisci il tuo nome");
        document.getElementById("nome").focus();
        return false;
    }

    var cognome = document.getElementById("cognome").value;
    if (cognome == "") {
        alert("Campo obbligatorio, inserisci il tuo cognome");
        document.getElementById("cognome").focus();
        return false;
    }

    var email=document.getElementById("email").value
    if(email==""){
        alert("Campo obbligatorio, inserisci la tua email");
        document.getElementById("email").focus();
        return false;
    }

    if(!document.getElementById("email").value.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)){
        alert("L'email inserita non è valida");
        document.getElementById("email").focus();
        return false;
    }

    //Controlla se nel tipo di pagamento si è scelto mastercard, visa o bancomat e nel caso i campi relativi alla carta diventano obbligatori da riempire
    var tipoPagamento = document.getElementById("tipo_pagamento").value;

        if (tipoPagamento == "mastercard" || tipoPagamento == "visa" || tipoPagamento == "bancomat") {
            var numeroCarta = document.getElementById("numero_carta").value;
            if (numeroCarta == "") {
                alert("Campo obbligatorio, inserisci il numero della carta");
                document.getElementById("numero_carta").focus();
                return false;
            }

            
            var dataScadenza = document.getElementById("data_scadenza").value;
            if (dataScadenza == "") {
                alert("Campo obbligatorio, inserisci la data di scadenza");
                document.getElementById("data_scadenza").focus();
                return false;
            }

            
            var cvv = document.getElementById("cvv").value;
            if (cvv == "") {
                alert("Campo obbligatorio, inserisci il CVV");
                document.getElementById("cvv").focus();
                return false;
            }

            
            var titolare = document.getElementById("titolare").value;
            if (titolare == "") {
                alert("Campo obbligatorio, inserisci il nome del titolare della carta");
                document.getElementById("titolare").focus();
                return false;
            }
        }
    alert("Dati inviati con successo!");
}

//funzione 2: utilizzare proprietà e metodi dell'oggetto window --> si apre una finestra nella homepage
function apriFAQ(){
    let y= confirm("Vuoi aprire un'altra finestra?"); 
    if(y==true){ //Se si seleziona si nell'aprire la finestra questa viene aperta
        let finestra=window.open('','FAQ','height=500, width=700');
        finestra.document.write("<h4>È necessario prenotare per visitare i musei?</h4> \n <p> No, è sufficiente presentarsi direttamente alle cassa il giorno in cui si vuole effettuare la visita e pagare il biglietto.</p> \n <h4>Quanto tempo occorre per visitare i musei?</h4> \n <p>Ciascun museo della Fondazione ha un vasto patrimonio da scoprire, per ciascuno prevedete almeno un'ora e mezza.</p> \n <h4>È possibile scattare fotografie?</h4> \n <p>All'interno del Museo sono benvenute le riprese amatoriali senza flash e senza cavalletto, che potete condividere con i musei sui canali social.</p> \n <h4>Esiste un biglietto cumulativo per i musei?</h4> \n <p>Potete acquistare alle casse lo speciale biglietto Multimuseo.</p> ");
        finestra.moveTo(400,200);
    } else { //sennò esce un alert che avvisa di aver deciso di non aprirla
        alert("Hai deciso di non aprire la finestra");
    }
}

//funzione 3: usare proprietà e metodi di document e dei suoi figli ed eventi --> pagina biglietteria, cliccando su un pulsante mostra un div
function visibilita(){
    let riduzioni= document.getElementById("agevolazioni"); 
    if (riduzioni.style.display == "block") { //Se il div è visibile questo viene nascosto
        riduzioni.style.display = "none";
    } else {
        riduzioni.style.display = "block"; //Se non è visibile viene mostrato
    }
}

//funzione 4: usare proprietà e metodi di document e dei suoi figli ed eventi --> pagina storia, se si passa con il mouse su un immagine questa cambia in un altra
function cambiaImg(){ //Quando si passa la prima volta cambia
    document.getElementById("palazzo_interno").src="immagini/mazzonis_esterno.jpg";
}
function ripristinaImg(){ //Appena il mouse si sposta dall'immagine, questa si ripristina
    document.getElementById("palazzo_interno").src="immagini/mazzonis.jpg";
}

//JQUERY

//1. Controllare correttezza dei campi di un form e consentirne l’invio se è tutto giusto --> form della pagina visite
$(document).ready(function(){ //Appena la pagina si è caricata viene eseguita la funzione
    $("#prenotazione").submit(function(event){ //In particolare quando si prova ad inviare il form

        //Controllo dei campi, se vuoti da errore. In particolare mostra sotto il campo un messaggio in rosso
        var nome = $("#nome").val();
        if (nome == "") {
            $("#nome_errore").text("Inserisci il nome").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }

        var cognome = $("#cognome").val();
        if (cognome == "") {
            $("#cognome_errore").text("Inserisci il cognome").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }

        var data = $("#dataVisita").val();
        if (data == "") {
            $("#dataVisita_errore").text("Inserisci una data adatta per svolgere la visita").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }

        var ora = $("#oraPreferita").val();
        if (ora == "") {
            $("#oraPreferita_errore").text("Inserisci un'ora adatta per la visita").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }

        var partecipanti = $("#numeroPartecipanti").val();
        if (partecipanti == "") {
            $("#numeroPartecipanti_errore").text("Inserisci il numero di partecipanti").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }

        var lingua = $("#linguaPreferita").val();
        if (lingua == "") {
            $("#linguaPreferita_errore").text("Inserisci la lingua per la visita").css({"font-size":"17px","color":"red"});
            event.preventDefault();
        }
    });
});

//2. Interagire con elementi del DOM con effetti di TOGGLE, SLIDE e/o EVENTI che coinvolgano l’interazione con l’utente. --> Pagina visite, quando si clicca su un pulsante mostra in sequenza dei div
$(document).ready(function(){
$("button").click(function(){
    $("#div1").fadeToggle(1000);
    $("#div2").fadeToggle(2000);
    $("#div3").fadeToggle(3000);
    $("#div4").fadeToggle(4000);
});
});

//3. Interagire con elementi del DOM con effetti di TOGGLE, SLIDE e/o EVENTI che coinvolgano l’interazione con l’utente. --> Pagina visite, mostra i caratteri rimanenti quando si scrive
$(document).ready(function() {
    var lunghezzaMax = 300; //La lunghezza massima del textarea è di 300 caratteri,

    $('#esigenge_speciali').keyup(function() { //L'evento si attiva ogni volta che si cliccano i tasti sullla tastiera
        var lunghTesto = lunghezzaMax - $(this).val().length; //Nella variabile si inserisce il valore del campo e con lenght si determinano i caratteri
        $('#caratteri').text(lunghTesto); //I caratteri rimanenti vengono mostrati
    });
});

//ANGULAR JS

//CONTROLLER 1: Nel form in homepage, viene mostrato quello che si scrive quindi nome, cognome ed email --> form in homepage
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.nome = "";
    $scope.cognome = "";
    $scope.email="";
});


//CONTROLLER 2: In un campo nella pagine delle mostre si scrive qualcosa e si cerca tra le mostre presenti, mostrando i risultati che contengono i caratteri inseriti --> pagina opere_mostre
app.controller('mostreCtrl', function ($scope) {
    $scope.mostre = [
        "Contemporary Monogatari: nuove narrazioni giapponesi",
        "Animo Chen | Una breve elegia",
        "Declinazioni contemporanee",
        "PROFUMI - FIORI - Fiori dipinti, incisi, intessuti",
        "PROFUMI - LEGNO - Sotto l'oro, il cipresso",
        "PROFUMI - ORIENTE - Le spezie, l'incenso e altre strade",
        "Il sole, il sesamo e gli aquiloni. La festa indiana di Makar Sankranti",
        "Trad u/i zioni d'Eurasia",
        "Evolving soundscapes",
        "Arte e tè in Oriente",
        "Tsherin Sherpa",
        "Visual Vernacular"
    ];
});


//EVENTO : Mostra un paragrafo sotto alle immagini delle opere cliccando un pulsante --> pagina opere_mostre
app.controller('opereCtrl', function($scope) {
    $scope.mostra = false; //La variabile mostra in scope è settata a false, quindi l'elemento è nascosto
    $scope.visualizza = function() { //Quando la funzione viene chiamata, il paragrafo viene mostrato se nascoto o viceversa
        $scope.mostra = !$scope.mostra;
    }
});

//FILTRO 1: Ordina la tabella in base all'orario quando si clicca --> homepage
app.controller('orariCtrl', function ($scope) {
    $scope.orari = [
        {giorno:'Lunedì', orario:'Chiuso'},
        {giorno:'Martedì', orario:'10-18'},
        {giorno:'Mercoledì', orario:'10-18'},
        {giorno:'Giovedì', orario:'11-17'},
        {giorno:'Venerdì', orario:'11-18'},
        {giorno:'Sabato', orario:'9-18'},
        {giorno:'Domenica', orario:'9-18'},
    ];

    $scope.orderByOrario = function () { //Si crea una funzione in cui si imposta una variabile di ordinamento
        $scope.myOrderBy = function(y){ //Questa restituisce la funziona "ordinaOrario"
            return ordinaOrario(y.orario);
        }
    };

    function ordinaOrario(orario){ //Trasforma gli orari in un valore numerico tramite ParseInt
        return parseInt(orario.split('-')[0]); //split divide la stringa in un array, separa i numeri che sono divis dal trattini
        //[0] va a prendere il primo elemento e in base a questo ordina
    }
});


//SERVIZIO: In homepage mostra un banner che cambia scritta dopo qualche secondo --> homepage
app.controller('newCtrl', function($scope, $timeout) {
  $scope.novita = "Benvenuto visitatore!";
  $timeout(function () {
      $scope.novita = "Scopri tutto ciò che il nostro museo ha da offrirti!";
  }, 3000);
});

//VALIDAZIONE DEL FORM --> homepage
app.controller('validateCtrl', function ($scope) {
  $scope.nome = '';
  $scope.cognome = '';
  $scope.email = '';

  $scope.testo = "";
  $scope.invio = function () {
      $scope.testo = "Iscrizione alla newsletter avvenuta!";
  }
});

