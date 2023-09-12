//Funktion Liste
window.onload= function() {
    main();
}
// Global Variablen
let männlicheGeschlecht;
let weiblicheGeschlecht;
let inputSpielZahl;

// let inputButton = document.getElementById('inputButton');
let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let alter = document.getElementById('alter');
let begrusung = document.getElementById('begrusung');
let begrusung2 = document.getElementById('begrusung2'); 
let infoText = document.getElementById('infoText');


function main(){
    
    
    inputButton.addEventListener("click", function(){
        let geschlecht = document.querySelector('input[name="geschlecht"]:checked');
        let vornameOutput = vorname.value;
        let nachnameOutput = nachname.value;
        let geschlechtOutput = geschlecht.value;
        let alterOutput = alter.value;


        if (alterOutput >= 40 ){
        document.getElementById('begrusung').innerHTML = `Guten Tag, ${geschlechtOutput} ${nachnameOutput}`
        document.getElementById('begrusung2').innerHTML = `Wollen Sie ein Spiel spielen?`
        }
        
        else
        {
        document.getElementById('begrusung').innerHTML = `Hi, ${vornameOutput}`
        document.getElementById('begrusung2').innerHTML = `Wilst du ein Spiel spielen?`
        }
        
        document.getElementById('radioJaNein').innerHTML = '<input type="radio" id="radioJa" name="radioJaNein" value="ja" checked="checked"/><label for="ja">Ja</label><input type="radio" id="radioNein" name="radioJaNein" value="nein" /> <label for="nein">Nein</label>';
        document.getElementById('JaNeinInput').innerHTML = '<button name="buttonJaNein" id="buttonJaNein" >Bestetigen</button>';
    
        JaNeinInput.addEventListener('click', function (){
        let radioJaNein = document.querySelector('input[name="radioJaNein"]:checked');
        let radioJaNeinOutput = radioJaNein.value;
        if(radioJaNeinOutput == 'ja'){
            
            if (alterOutput >= 40 ){
                document.getElementById('antwort').innerHTML = `Die Regeln sind einfach. Ich würfle ein Zahl und Sie sollen raten welche.
                Sie haben nur 6 fersuche um Zahl zu erraten. Nach jeden Ihre Versuch werde ich ihnen sagen, ob mein Zahl größer oder kleiner.
                Möge der Macht mit ihnen sein.
                Es geht los. Ich hab ein Zahl. Raten Sie welche:`
                
            }
            
            else
            {
                document.getElementById('antwort').innerHTML = `Die Regeln sind einfach. Ich würfle ein Zahl ab 0 bis 100 und du soll raten welche.
                Du hast nur 6 Versuche um Zahl zu erraten. Nach jeden dein Versuch werde ich dir sagen ob mein Zahl größer oder kleiner.
                Wenn alles klar, dann möge der Macht mit dir sein. Wenn nicht, dann hast du Pech, niemand kann mir jetzt Stopen ;)
                Es geht los. Ich hab ein Zahl. Rate welche:`
            }
            spiel();
        } 
        else {
            document.getElementById('antwort').innerHTML = 'Ok :('       
        }
    });
    
    
});
}
function spiel () {
    var randomZahl = Math.floor(Math.random() * 100);
    let spielZahl;
    let zahl;
    let i = 0;
    
    spielZahl = randomZahl;
    console.log(spielZahl);
    
    document.getElementById('spielerZahl').innerHTML = '<label for="spielerZahl">Zahl:</label><input type="number" id="spielerZahlInput" name="spielerZahl" min ="1" max ="100" size="4" />';0,
    

    while (i < 5) {
            String? spielZahl = stdin.readLineSync();
            inputSpielZahl = int.parse(spielZahlInput!);
            zahl = inputSpielZahl;
        
            if (spielZahl == zahl) {
              print("Glükwunsch! Mein zahl ist $spielZahl");
              break;
            }
            if (zahl < spielZahl) {
              print("Mein Zahl ist großer");
            } else {
              print("Mein Zahl ist kleiner");
            }
            i++;
            if (i == 4) {
              print("Pass auf! Es ist letztes Versuch");
            }
          }
          if (i == 5) {
            print("Keine Versuchen mehr. Mein Zahl war $spielZahl");
          }
        
          var inputNochEinSpiel;
        
          print("Noch ein Spiel? Ja/Nein:");
          inputNochEinSpiel = stdin.readLineSync();
        
          if (inputNochEinSpiel.toLowerCase() == "ja") {
            if (inputAlter >= 40) {
              print("Es geht los. Ich hab eine Zahl. Raten Sie welche.");
            } else {
              print("Es geht los. Ich hab eine Zahl. Rate welche.");
            }
            spiel(inputGeschlecht, inputName, inputNachname, inputAlter);
          }
          if (inputNochEinSpiel.toLowerCase() == "nein") {
            if (inputAlter >= 40) {
              print("Ich hoffe, Sie hatten Spaß. Auf Wiedersehen!");
            } else {
              print("Ich hoffe, du hattst Spaß. Auf Wiedersehen!");
            }
          }
    

}
    // ziet den eingegebene Alter, pruft ob in Feld mit Alter die zahl eingegeben wurde, falls nicht wird Fehler gemeldet
    // "Schreiben Sie wie Alt sind Sie mit Zahlen"
    // Nutzer wird verpflichtet Alter neu zu schreiben
    // ziet eingegebene Geschlecht und vergleicht es mit ein Array von Geschlechts
    // es werden zwei Array sein mit verschiedene Geschlechte weiblicheGeschlecht[] und männlicheGeschlecht[] 
    // Fals Prufungs Schleife die durch zwei Array geht keine Zufall in Arreys findet wird ein Fehler gemeldet
    // "Es sieht so aus, dass Sie sich vertippt haben. Sie können Ihre Geschlecht als Buchstabe m oder w schreiben. 
    // Oder schreiben Sie ein ganzes Wort ohne Tippfehler"
    // Wenn alles ok. Die Seite wird Neu gerendert
    // Auf die seite wird Stehen 
    //  Falls Person Junger als 40 schreibt
    // "Hi, *User Vorname*!
    // Du bist *User Alter*
    // Willst du ein Spiel spielen"
    // Falls Person älter als 40 und ein Mann ist. Schreibt:
    // "Guten Tag, Herr *User Nachname*
    // Sie siend *User Alter*
    // Wollen Sie Ein Spiel spielen?"
    // Falls Person älter als 40 und ein Frau ist. Schreibt:
    // "Guten Tag, Frau *User Nachname*
    // Sie sind *User Alter*
    // Wollen Sie Ein Spiel spielen?"
    // Feld mit Ja und Nein Bottoms.
    // Falls Ja wird Seite neu geladen 
    // die Regeln werden Erklärt
    // Regel Erklärung für Person unter 40:
    // "Die Regeln sind einfach. Ich würfle ein Zahl ab 0 bis 100 und du soll raten welche.
    // Du hast nur 6 Versuche um Zahl zu erraten. Nach jeden dein Versuch werde ich dir sagen ob mein Zahl größer oder kleiner.
    // Wenn alles klar, dann möge der Macht mit dir sein. Wenn nicht, dann hast du Pech, niemand kann mir jetzt Stopen ;)
    // Es geht los. Ich hab ein Zahl. Rate welche"
    // Regeln Erklärung für Person über oder gleich 40:
    // "Die Regeln sind einfach. Ich würfle ein Zahl und Sie sollen raten welche.
    // Sie haben nur 6 fersuche um Zahl zu erraten. Nach jeden Ihre Versuch werde ich ihnen sagen, ob mein Zahl größer oder kleiner.
    // Möge der Macht mit ihnen sein.
    // Es geht los. Ich hab ein Zahl. Raten Sie welche"
    // Und dann startet spiel()

// Wie funktioniert Spiel Funktion:
// Ein random Zahl ab 0 bis 100 wird "gewürfelt"
// Nutzer gibt ein Zahl die Nutzerzahl wird mit Randomzahl wergleicht 
// Falls Zahl größer ist wird "Mein Zahl ist größer" Fals kleiner "Mein Zahl ist kleiner"
// Wenn nur ein Versuch übrig ist wird gesagt "Vorsichtig! Es ist ein letztes Versuch"
// Falls Nutzer den Zahl richtig Erraten wird geschrieben "Glückwunsch! Mein Zahl war in der Tat $randomZahl"
// Falls nicht "Schade... Mein zahl war $randomZahl"
// Igal ob Nutzer gewint oder ferliert im wird eingebotten Noch ein Spiel zu spielen
// "Noch ein spiel?"
// Feld mit ja oder nein Bottoms
// Falls Ja Spiel startet neu 
// Falls nutzer nicht Erstes mal Spielen will, wird geschrieben "Ok :("
// 44
// 55
// Falls Nutzer ein Spiel oder mehrere schpiele geschpielt



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
