//Funktion Liste
window.onload= function() {
    main();
}
// Global Variablen
let männlicheGeschlecht;
let weiblicheGeschlecht;
let inputSpielZahl;
let spielZahl;
let zahl;

// let inputButton = document.getElementById('inputButton');
let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let alter = document.getElementById('alter');
let begrusung = document.getElementById('begrusung');
let begrusung2 = document.getElementById('begrusung2'); 
let infoText = document.getElementById('infoText');

// Main Funktion
function main(){
  
  // Logoík für "Formular senden" - button. On click wird die information die Nutzer eingegeben gespeichert, um die weiter zu benutzen
  // in on click Funktion wird auch Logik für weitere Seite Rendering beschrieben
  inputButton.addEventListener("click", function(){
    let geschlecht = document.querySelector('input[name="geschlecht"]:checked');
    let vornameOutput = vorname.value;
    let nachnameOutput = nachname.value;
    // Value von Geschlecht ist "Herr" oder "Frau". 
    let geschlechtOutput = geschlecht.value;
    let alterOutput = alter.value;
    
    // Hier pruft die Schleife Alter von Benutzer. Falls Benutzer altere als 40 ist wird eine höfliche Begrusung gezeigt mit Familien Name von Nutzer
    // Auserdem wird ihm eingebotten ein Spiel zu spielen
    if (alterOutput >= 40 ){
      document.getElementById('begrusung').innerHTML = `Guten Tag, ${geschlechtOutput} ${nachnameOutput}`
      document.getElementById('begrusung2').innerHTML = `Wollen Sie ein Spiel spielen?`
    }
    
    // Falls nicht wird Nutzer mit Name einfach genant. 
    // Auserdem wird ihm eingebotten ein Spiel zu spielen
    else
    {
      document.getElementById('begrusung').innerHTML = `Hi, ${vornameOutput}`
      document.getElementById('begrusung2').innerHTML = `Wilst du ein Spiel spielen?`
    }
    
    // Ich habe entscheiden buttons in JS 
    document.getElementById('radioJaNein').innerHTML = '<input type="radio" id="radioJa" name="radioJaNein" value="ja" checked="checked"/><label for="ja">Ja</label><input type="radio" id="radioNein" name="radioJaNein" value="nein" /> <label for="nein">Nein</label>';
    document.getElementById('JaNeinInput').innerHTML = '<button name="buttonJaNein" id="buttonJaNein" >Bestetigen</button>';
    
    JaNeinInput.addEventListener('click', function (){
      let radioJaNein = document.querySelector('input[name="radioJaNein"]:checked');
      let radioJaNeinOutput = radioJaNein.value;
      if(radioJaNeinOutput == 'ja'){
        
        if (alterOutput >= 40 ){
          document.getElementById('ersteAntwort').innerHTML = `Die Regeln sind einfach. Ich würfle ein Zahl und Sie sollen raten welche.
          Sie haben nur 6 fersuche um Zahl zu erraten. Nach jeden Ihre Versuch werde ich ihnen sagen, ob mein Zahl größer oder kleiner.
            Möge der Macht mit ihnen sein.`
          document.getElementById('zweiteAntwort').innerHTML =`Es geht los. Ich hab ein Zahl. Raten Sie welche:`
          
        }
        
        else
        {
          document.getElementById('ersteAntwort').innerHTML = `Die Regeln sind einfach. Ich würfle ein Zahl ab 0 bis 100 und du soll raten welche.
          Du hast nur 6 Versuche um Zahl zu erraten. Nach jeden dein Versuch werde ich dir sagen ob mein Zahl größer oder kleiner.
          Wenn alles klar, dann möge der Macht mit dir sein. Wenn nicht, dann hast du Pech, niemand kann mir jetzt Stopen ;)`
          document.getElementById('zweiteAntwort').innerHTML =`Es geht los. Ich hab ein Zahl. Rate welche:`
        }
        spiel();
      } 
      else {
        document.getElementById('antwort').innerHTML = 'Ok :('       
      }
    });
    
    
  });
}
// spiel funktion
function spiel() {

  // zufalige Zahl wird generirt
  var randomZahl = Math.floor(Math.random() * 100);
  spielZahl = randomZahl;
  // 
  let versuche = 5;
  // let gewonnen = false;
  
  
  
  document.getElementById('spielerZahl').innerHTML = '<label for="spielerZahl">Zahl:</label><input type="number" id="spielerZahlInput" name="spielerZahl" min ="1" max ="100" size="4" />';
  document.getElementById('spielerZahlInputButton').innerHTML = '<button name="spielerZahlButton" id="spielerZahlButton" >Bestätigen</button>';
  
  
  
  function handleButtonClick() {
    
    let zahl = spielerZahlInput.value;
    
    console.log(spielZahl);
    console.log(zahl);


    if (zahl == spielZahl) {

      document.getElementById('ergebnis').innerHTML = `Glückwunsch! Mein Zahl ist ${spielZahl}`;
      document.getElementById('nochEinSpiel').innerHTML = `Noch ein Spiel?`;
      document.getElementById('radioNochEinMal').innerHTML = '<input type="radio" id="radioJaNoch" name="radioNochEinMal" value="Ja" checked="checked"/><label for="ja">Ja</label><input type="radio" id="radioNein" name="radioNochEinMal" value="Nein" /> <label for="nein">Nein</label>';
      document.getElementById('nochEinMalButton').innerHTML = '<button name="nochEinMalButton" id="nochEinMalButton" >Bestätigen</button>';

    } 
    
    else if (zahl < spielZahl) {
      document.getElementById('outputSpiel').innerHTML = `Mein Zahl ist größer als ${zahl}`;
    } 
    else {
      document.getElementById('outputSpiel').innerHTML = `Mein Zahl ist kleiner als ${zahl}`;
    }

    if (versuche == 1) {
      document.getElementById('warnung').innerHTML = `Pass auf! Es ist der letzte Versuch`;
    }
    if (versuche == 0 && zahl != spielZahl) {
      document.getElementById('ergebnis').innerHTML = `Keine Versuche mehr. Mein Zahl war ${spielZahl}`;
      document.getElementById('nochEinSpiel').innerHTML = `Noch ein Spiel?`;
      document.getElementById('radioNochEinMal').innerHTML = '<input type="radio" id="radioJaNoch" name="radioNochEinMal" value="Ja" checked="checked"/><label for="ja">Ja</label><input type="radio" id="radioNeinNoch" name="radioNochEinMal" value="Nein" /> <label for="nein">Nein</label>';
      document.getElementById('nochEinMalButton').innerHTML = '<button name="nochEinMalButton" id="nochEinMalButton" >Bestätigen</button>';
    }
    versuche--;
  }
  document.getElementById('spielerZahlInputButton').addEventListener("click", handleButtonClick);
}

 


 

document.getElementById('nochEinMalButton').addEventListener("click", function () {

  if (document.getElementById('radioJaNoch').checked) {
    document.getElementById('infoText').innerHTML = ``;
    document.getElementById('outputSpiel').innerHTML = ``;
    document.getElementById('warnung').innerHTML = ``;
    document.getElementById('ergebnis').innerHTML = ``;
    document.getElementById('nochEinSpiel').innerHTML = '';
    document.getElementById('radioNochEinMal').innerHTML = '';
    document.getElementById('nochEinMalButton').innerHTML = '';
    spiel();

  } else {

    document.getElementById('wiedersehen').innerHTML = `Auf Wiedersehen!`;

  }

});




// import 'dart:io';
// import 'dart:convert';
// import 'dart:math';

// void main() {
//   // ignore: prefer_typing_uninitialized_variables
//   var inputGeschlecht;

//   // Schleife die Pruft ob Geschlecht ist richtig eingegeben
//   do {
//     // Schreibt den Text
//     print("Ihre Geschlecht w/m:");

//     //Hier nihmt die Schleife die Ergebniss von Nützer und speichert die  in inputGeschlecht
//     inputGeschlecht = stdin.readLineSync();

//     // Schleife if pruft die Ergebniss von Nutzer, falls die Ergebniss nicht "w" oder "m" ist, dann wird Fehlerhafte Eingabe gezeigt
//     if (inputGeschlecht!.toLowerCase() != "w" &&
//         inputGeschlecht!.toLowerCase() != "m") {
//       print(
//           "Fehlerhafte Eingabe. Bitte geben Sie `w` für weiblich oder `m` für männlich ein.");
//     }
//   }
//   // Schleife wird so lange laufen, bis der Nutzer alles richtig schreibt
//   while (inputGeschlecht!.toLowerCase() != "w" &&
//       inputGeschlecht!.toLowerCase() != "m");

//   //Eingabe von Name
//   print("Gib Vorname ohne Sonderzeihen:");
//   print("Ihre Vorname ist:");
//   var inputName = stdin.readLineSync(encoding: utf8);

//   // Eingabe von Vorname
//   print("Gib Nachname ohne Sonderzeihen:");
//   print("Ihre Nachname ist:");
//   var inputNachname = stdin.readLineSync(encoding: utf8);

//   // alter Variable
//   int? inputAlter;

//   // Schleife die Pruft ob Alter ist richtig eingegeben
//   do {
//     // Schreibt den Text
//     print("Ihre Alter ist:");

//     //Hier nihmt die Schleife den Zahl von Nützer und speichert die Ergebniss in alterInput
//     String? alterInput = stdin.readLineSync();

//     try {
//       //Hier nihmt die Schleife eingegebene Zahl und versucht eine runde Zahl zu machen und speichert die Ergebniss in inputAlter
//       inputAlter = int.parse(alterInput!);

//       //Falls den Nutzer null eingibt, dann wird ein "Fellerhafte Eingabe" gezeigt
//       if (inputAlter <= 0) {
//         print(
//             "Fehlerhafte Eingabe. Ihre Alter kann nicht 0 sein. Bitte geben Sie Ihre Alter als Zahl ein.");

//         //Befehl für die Schleife, der die Schleifenausführung auf die nächste Iteration verschibt, um das Alter erneut abzufragen
//         continue;
//       }

//       //Wenn alles richtig ist, wird die Schleife hier enden
//       break;
//     }

//     //Falls den Nutzer nicht den Zahl eingibt, sondern, zum Beispiel, eine Buchstabe, dann wird den Versuch eine runde Zahl zu machen scheitern
//     // Nutzer wird Fehlerhafte Eingabe sehen
//     catch (alter) {
//       print("Fehlerhafte Eingabe. Bitte geben Sie Ihre Alter als Zahl ein.");
//     }
//   }
//   //Schleife wird so lange laufen bis die eingegebene Zahl richtig ist
//   while (true);

//   // Schleife der wird die Begrüßung endern, wenn die Person älter als 40 ist. Je nach dem ob die Person
//   //männlich oder weiblich wird Frau oder Herr geschrieben
//   if (inputAlter >= 40) {
//     if (inputGeschlecht!.toLowerCase() == "w") {
//       print("Guten Tag, Frau $inputNachname");
//       print("Sie sind $inputAlter Jahre Alt");
//     }

//     if (inputGeschlecht!.toLowerCase() == "m") {
//       print("Guten Tag, Herr $inputNachname");
//       print("Sie sind $inputAlter Jahre Alt");
//     }
//     //Wenn Person junger als 40 ist, dann wird eine einfache Begrüßung geschrieben und den Geschlecht
//   } else {
//     print("Hallo, $inputName $inputNachname");
//     print("Du bist $inputAlter Jahre Alt");

//     if (inputGeschlecht!.toLowerCase() == "w") {
//       print("Du bist weiblich");
//     }

//     if (inputGeschlecht!.toLowerCase() == "m") {
//       print("Du bist männlich");
//     }
//   }

//   var inputJaOderNein;

//   if (inputAlter >= 40) {
//     if (inputGeschlecht!.toLowerCase() == "w") {
//       print("Frau $inputNachname wollen sie Ein Spiel spielen?");
//       print("Schreiben Sie Ja oder Nein");
//     }

//     if (inputGeschlecht!.toLowerCase() == "m") {
//       print("Herr $inputNachname wollen sie Ein Spiel spielen?");
//       print("Schreiben Sie Ja oder Nein");
//     }
//   } else {
//     print("$inputName willst du ein Spiel spielen");
//     print("Ja oder Nein");
//   }
//   inputJaOderNein = stdin.readLineSync();
//   if (inputJaOderNein.toLowerCase() == "ja") {
//     if (inputAlter >= 40) {
//       print(
//           "Regeln sind einfach: Ich würfle ein Zahl ab 1 bis 100. Und Sie mussen erraten welcher Zahl ist das.");
//       print(
//           "Sie können einfach ihre Vermutung als Zahl schreiben und ich werde ihnen sagen, ob meine Zahl größer oder weniger als ihre Zahl ist");
//       print("Sie haben 5 Versuchen. Nutzen Sie die Weise");
//       print("Sind Sie bereit?");
//       print("Möge die Macht mit ihnen sein");
//       print("Es geht los. Ich hab eine Zahl. Raten Sie welche.");
//     } else {
//       print(
//           "Regeln sind einfach: Ich würfle ein Zahl ab 1 bis 100. Und du muss erraten welcher Zahl ist das.");
//       print(
//           "Du must einfach deine Vermutung als Zahl schreiben und ich werde dir sagen, ob meine Zahl größer oder weniger als deine Zahl");
//       print("Du hast 5 Versuchen. Nutz die Weise");
//       print("Möge die Macht mit dir sein");
//       print("Es geht los. Ich hab eine Zahl. Rate welche.");
//     }
//   }
//   if (inputJaOderNein.toLowerCase() == "nein") {
//     print("Ok :(");
//   }
//   do {
//     if (inputJaOderNein!.toLowerCase() != "ja" &&
//         inputJaOderNein!.toLowerCase() != "nein") {
//       print("Fehlerhafte Eingabe. Bitte schreiben Sie `ja` oder `nein`.");
//     }
//   } while (inputJaOderNein!.toLowerCase() != "ja" &&
//       inputJaOderNein!.toLowerCase() != "nein");
//   spiel(inputGeschlecht, inputName, inputNachname, inputAlter);
// }

// void spiel(inputGeschlecht, inputName, inputNachname, inputAlter) {
//   var randomZahl = Random();
//   int? inputSpielZahl;
//   int? spielZahl;
//   int? zahl;
//   var i = 0;

//   spielZahl = randomZahl.nextInt(100);

//   while (i < 5) {
//     String? spielZahlInput = stdin.readLineSync();
//     inputSpielZahl = int.parse(spielZahlInput!);
//     zahl = inputSpielZahl;

//     if (spielZahl == zahl) {
//       print("Glükwunsch! Mein zahl ist $spielZahl");
//       break;
//     }
//     if (zahl < spielZahl) {
//       print("Mein Zahl ist großer");
//     } else {
//       print("Mein Zahl ist kleiner");
//     }
//     i++;
//     if (i == 4) {
//       print("Pass auf! Es ist letztes Versuch");
//     }
//   }
//   if (i == 5) {
//     print("Keine Versuchen mehr. Mein Zahl war $spielZahl");
//   }

//   var inputNochEinSpiel;

//   print("Noch ein Spiel? Ja/Nein:");
//   inputNochEinSpiel = stdin.readLineSync();

//   if (inputNochEinSpiel.toLowerCase() == "ja") {
//     if (inputAlter >= 40) {
//       print("Es geht los. Ich hab eine Zahl. Raten Sie welche.");
//     } else {
//       print("Es geht los. Ich hab eine Zahl. Rate welche.");
//     }
//     spiel(inputGeschlecht, inputName, inputNachname, inputAlter);
//   }
//   if (inputNochEinSpiel.toLowerCase() == "nein") {
//     if (inputAlter >= 40) {
//       print("Ich hoffe, Sie hatten Spaß. Auf Wiedersehen!");
//     } else {
//       print("Ich hoffe, du hattst Spaß. Auf Wiedersehen!");
//     }
//   }

//   do {
//     if (inputNochEinSpiel!.toLowerCase() != "ja" &&
//         inputNochEinSpiel!.toLowerCase() != "nein") {
//       print("Fehlerhafte Eingabe. Bitte schreiben Sie `ja` oder `nein`.");
//     }
//   } while (inputNochEinSpiel!.toLowerCase() != "ja" &&
//       inputNochEinSpiel!.toLowerCase() != "nein");
// }
