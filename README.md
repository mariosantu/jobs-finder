# jobs-finder

Jobs finder è un'app pensata per ricercare lavori in base
alla propria posizione e al livello professionale
selezionabile tramite le apposite checkbox.

Inizialmente all'avvio dell'applicazione verrà
effettuata una ricerca dei lavori con categoria di default:
Engineering (con piccole modifiche sarà possibile
poter eseguire una ricerca anche in altri campi).

Una volta effettuata la ricerca verranno visualizzati i vari
lavori trovati e cliccando sul bottone "view Job" sarà
possibile visualizzare tutte le info riguardante in lavoro e
tramite un altro bottone o cliccando sul nome dell'azienda
visualizzare le informazioni su quest'ultima.

## Come è stat sviluppata l'applicazione? 
L'applicazione è stata sviluppata utilizzando il framework 
Angular e Node.js.

## Librerie esterne utilizzate :
Non ci sono state librerie terze utilizzate, ma è stata 
utilizzata l'api del sito "The muse" per ricavarne i dati,
come ad esempio le categorie di lavoro e le relative offerte.

## Funzionalità Applicazione: 
Come già descritto al primo punto l'applicazione ha le suddette
funzionalità con le seguenti caratteristiche:

### Componenti: 
  - App,
  - Company-detail,
  - Dashboard,
  - header,
  - Jobs-detail,
  - page-not-found

  #### App 
    Ospita il componente header e il routing dell'app.

  #### Header
    Ha lo scopo di visualizzare l'intestazione dell'app.
  #### Dashboard 
    Ospita la navbar contenente i flitri e il bottone di ricerca
    più il main contenente i lavori trovati.
  #### Jobs-Detail
    Ospita il dettaglio del lavoro selezionato dall'utente e il bottone
    che rimanda l'utente al dettaglio della compagnia.
  #### Company-detail
    Ospita il dettaglio della compagnia e il link che rimanda alla 
    landing page della stessa.
    
  #### Page-not-found
    Viene visualizzato in caso di url non valido.

### Servizi : 
  - Company-detail-service,
  - Get-jobs-service,
  - Internal-job-service

  #### Company-detail-service
    Viene utilizzato (Company-detail-component) per effettuare la chiamata al server 
    di the muse ricevendo i dettagli della compagnia selezionata dall'utente.
 
 #### Get-jobs-service
    Viene utilizzato (dashboard-component) per effettuare la chiamata al server 
    di the muse ricevendo l'elenco delle offerte di lavoro filtrate tramite 
    le scelte selezionate dall'utente.

 #### Internal-job-service
    Ha lo scopo di mantenere in memoria dell'applicazione la lista 
    dei lavori onde evitare più richieste con lo stesso scopo al server
    di the muse. 
    Inoltre, ha la funzionalità di ritornare un lavoro specifico, presente nella lista,
    selezionato dall'utente.
##### Configurazione e prova in locale
Per la configurazione si dovrà clonare la repo github del proggetto 
e per prima cosa lanciare il comando da terminale `npm install` e 
solo dopo il comando `ng serve --open` per la prova in locale dell'app.


## Firebase Link
L'app è stata hostata tramite firebase al seguente link: https://jobs-finder-7328d.web.app/dashboard

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://karma-runner.github.io/latest/index.html" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg" alt="karma" width="40" height="40"/> </a> </p>