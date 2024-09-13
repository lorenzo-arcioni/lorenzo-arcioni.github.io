function Writer(text, speed, id) {
  return new Promise((resolve) => {
    var i = 0;

    function typeNextCharacter() {
      if (i < text.length) {
        document.getElementById(id).innerHTML = text.substr(0, i + 1);
        i++;
        setTimeout(typeNextCharacter, speed);
      } else {
        resolve(); // Risolvi la promessa quando la scrittura è completata
      }
    }

    typeNextCharacter(); // Avvia la scrittura
  });
}

var about = "Appassionato delle infinite possibilità all'intersezione tra la Data Science, " +
            "il Machine Learning e la Bioinformatica. Sono una persona esperta di tecnologia con " +
            "un profondo interesse nella risoluzione di problemi complessi tramite approcci " +
            "innovativi. Con una solida esperienza in calcolo parallelo, sviluppo di algoritmi " +
            "e una profonda affezione per i sistemi operativi Linux, eccello in ambienti che " +
            "richiedono una combinazione di abilità tecniche e pensiero creativo.";

var education = `<ul class="education-list" style="list-style: none; padding: 10px;">
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">Neural Academy</p>
        <p style="font-weight: normal; flex: 1;">Master in Data Science</p>
    </span>
    <span class="dates" style="flex: 1;">
        Completato con successo<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">Università La Sapienza di Roma</p>
        <p style="font-weight: normal; flex: 1;">Laurea Triennale in Informatica</p>
    </span>
    <span class="dates" style="flex: 1;">
        110/110 con lode<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">ITIS B. Pascal</p>
        <p style="font-weight: normal; flex: 1;">Diploma di maturità in Informatica e Telecomunicazioni</p>
    </span>
    <span class="dates" style="flex: 1;">
        100/100<br>
        2014-2019
    </span>
</li>
</ul>`;

var experience_1 = `<ul class="experience-list" style="padding-right: 30px;padding-left: 30px;">
<li class="experience-item">
    <span class="details">
        <p class="experience_where" style="font-weight: bold; flex: 1; font-size: 20px">Università La Sapienza di Roma - Dipartimento di Informatica</p>
        <p class="experience_what" style="font-weight: normal; flex: 1; padding-bottom: 10px; padding-top: 10px; font-size: 16px; font-weight: bold">Stage</p>
        <p class="experience_how" style="font-weight: normal; flex: 1; font-size: 16px;">Sviluppo di un algoritmo parallelo in grado di eseguire software 
        di annotazione di terze parti (Diamond o BLAST) in modalità parallela. Sfruttando il parallelismo dei dati, è possibile eseguire tale software in 
        modalità distribuita, migliorando notevolmente l'efficienza dei processi di annotazione del trascrittoma. Durante lo stage sono stati sviluppati 
        vari script di automazione per rendere il processo di annotazione parallelo il più user-friendly possibile. Il software è anche in grado di 
        consolidare i risultati delle annotazioni parziali in un unico file finale, identico al file finale che avremmo ottenuto utilizzando software 
        di annotazione tradizionali.</p>
    </span>
    <span class="dates experience-date">
        2022-2023
    </span>
</li>
</ul>`;

var project_1 = `<h3 style="font-size: 20px;padding-right: 30px;padding-left: 30px;">Identifying Age-Related Conditions (ICR)</h3>
<p style="font-size: 16px;padding-right: 30px;padding-left: 30px;">"ICR" è una competizione su Kaggle. 
Sono orgoglioso di condividere che ho ottenuto una Medaglia d'Argento, classificandomi nella top 2% della classifica della competizione.</p>
<p style="font-size: 16px;padding-right: 30px;padding-left: 30px; padding-top: 10px">L'obiettivo della competizione è utilizzare il machine learning 
per prevedere se una persona ha una delle tre specifiche condizioni mediche. I partecipanti sono chiamati a creare un modello addestrato su 
misurazioni delle caratteristiche di salute per fare queste previsioni.</p>
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">Questa competizione è cruciale poiché mira a semplificare e velocizzare il 
processo di identificazione di queste condizioni mediche, che tipicamente coinvolge un lungo e intrusivo processo di raccolta dati dai pazienti. 
Il mio modello predittivo mira a velocizzare questo processo garantendo la privacy dei pazienti utilizzando caratteristiche essenziali relative 
alle condizioni e codificandole in modo efficace.</p><br><br>
<a class="project_link_icon" href="https://github.com/lorenzo-arcioni/icr-identify-age-related-conditions" target="_blank"><i class="fa fa-github"></i></a></p>`;

var project_2 = `<h3 style="font-size: 20px; padding-right: 30px;padding-left: 30px;">Water Potability</h3> 
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">In questo studio, abbiamo condotto un'analisi di un dataset contenente 
varie caratteristiche relative alla qualità dell'acqua per determinarne la potabilità. Dopo aver analizzato il dataset, abbiamo 
utilizzato tecniche di machine learning per sviluppare un modello per predire la potabilità dell'acqua basato sulle caratteristiche fornite. 
Il modello ha l'obiettivo di determinare la sicurezza dell'acqua per il consumo umano. L'analisi ha coinvolto la visualizzazione delle 
relazioni tra le diverse caratteristiche utilizzando vari grafici e diagrammi.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/water-potability" target="_blank"><i class="fa fa-github"></i></a>
</p>`;

var project_3 = `<h3 style="font-size: 20px; padding-right: 30px; padding-left: 30px;">HPC-T-Annotator</h3>
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">
HPC-T-Annotator è uno strumento avanzato progettato per parallelizzare l'annotazione del trascrittoma, 
riducendo drasticamente i tempi di attesa e facilitando l'elaborazione di grandi trascrittomi, 
in particolare quelli eucariotici con ampi dataset. Utilizza un'architettura HPC per l'annotazione 
parallela delle trascrizioni, gestendo simultaneamente più attività tramite un sistema a code (workload manager jobs). 
Questo approccio migliora significativamente l'efficienza computazionale e il parallelismo, 
riducendo i tempi di esecuzione da giorni a ore o minuti. 
L'interfaccia grafica user-friendly e le opzioni di esecuzione dalla riga di comando rendono lo 
strumento altamente adattabile per l'annotazione di più trascrittomi su database differenti, 
ottimizzando l'analisi di ampi dataset 'omici.
Sono previsti aggiornamenti per ampliare la compatibilità con cluster e scheduler diversi da SLURM, 
espandendo ulteriormente la base utenti.
<br><br></p>
<a class="project_link_icon" href="https://github.com/lorenzo-arcioni/HPC-T-Annotator" target="_blank">
  <i class="fa fa-github"></i>
</a>`;

var project_4 = `<h3 style="font-size: 20px; padding-right: 30px;padding-left: 30px;">BioSwiftAnalytics</h3> 
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">BioSwiftAnalytics offre una suite di notebook Jupyter 
per semplificare l'analisi dei dati biologici, con strumenti per la ricerca trascrittomica e genomica. Supporta la 
generazione di report completi, la visualizzazione degli hit rate, la creazione di diagrammi di Venn e l'analisi 
dei risultati BUSCO. Gli utenti possono anche generare grafici di sintenia, alberi filogenomici e grafici di molteplicità 
degli ortologhi dai risultati di OrthoFinder. Lo strumento può essere utilizzato tramite Docker o in un ambiente Jupyter 
locale, rendendolo accessibile per l'elaborazione post-dataset biologici con facilità.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/BioSwiftAnalytics" target="_blank"><i class="fa fa-github"></i></a>
</p>`;

var publication_1 = `<h3 style="font-size: 20px;"><a href="https://www.bmc.com/blogs/2023/02/10/hpc-t-annotator-an-hpc-tool-for-de-novo-transcriptome-assembly-annotation/">
HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation</a></h3>
<p>BMC Bioinformatics, 2024</p>
`;

var certification_1 = `<h3 style="font-size: 20px;">Introduzione al Machine Learning <a href="https://drive.google.com/file/d/1_KthHpXzeT6ec5f_kKwvx20SOzrhyjc1/view" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">Kaggle, emesso Feb 2023</p>
`;

var certification_2 = `<h3 style="font-size: 20px;">Pandas <a href="https://drive.google.com/file/d/13nl3T5cwl8_T8bcaqGSq5d11TTN6MVUv/view" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">Kaggle, emesso Feb 2023</p>
`;

var certification_3 = `<h3 style="font-size: 20px;">Fondamenti di Python <a href="https://www.hackerrank.com/certificates/aa03010a7d90" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">HackerRank, emesso Set 2020</p>
`;

var certification_4 = `<h3 style="font-size: 20px;">CISCO CCNA</h3>
<p style="font-size: 16px; margin-top: -10px;">Cisco Networking Academy, emesso Set 2019</p>
`;

function onLoad() {
  // Esegui le funzioni in parallelo utilizzando Promise.all()
  Promise.all([Writer(about, 20, "demo"),
              Writer(education, 5, "education_p"), 
              Writer(experience_1, 5, "experience_p"), 
              Writer(project_1, 5, "project_1"), 
              Writer(project_2, 5, "project_2"),
              Writer(project_3, 5, "project_3"),
              Writer(project_4, 5, "project_4"),
              Writer(publication_1, 5, "publication_1"),
              Writer(certification_1, 5, "certification_1"),
              Writer(certification_2, 5, "certification_2"),
              Writer(certification_3, 5, "certification_3"),
              Writer(certification_4, 5, "certification_4")
    ])
    .then((results) => {
      console.log("Tutte le funzioni sono state completate:");
      console.log(results); // Contiene i risultati delle funzioni
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
  });
}

