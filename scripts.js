function Writer(text, speed, id) {
  return new Promise((resolve) => {
    var i = 0;

    function typeNextCharacter() {
      if (i < text.length) {
        document.getElementById(id).innerHTML = text.substr(0, i+1);
        i++;
        setTimeout(typeNextCharacter, speed);
      } else {
        resolve(); // Risolvi la promessa quando la scrittura è completata
      }
    }

    typeNextCharacter(); // Avvia la scrittura
    
  });
}

var about = "Passionate about the limitless possibilities at the intersection of data science, machine learning and \
bioinformatics. I am a tech-savvy guy with a profound interest in solving complex problems through \
innovative approaches. With a robust background in parallel computing, algorithm development, and a deep \
affection for Linux operating systems, I thrive in environments that demand a blend of technical prowess and \
creative thinking.";

var education = `<ul class="education-list" style="list-style: none; padding: 10px;">
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; font-weight: bold; flex: 1;">Neural Academy</p>
        <p style="font-weight: normal; flex: 1;">Master in Data Science</p>
    </span>
    <span class="dates" style="flex: 1;">
        Successfully completed<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; font-weight: bold; flex: 1;">Sapienza University of Rome</p>
        <p style="font-weight: normal; flex: 1;">Bachelor's Degree in Computer Science</p>
    </span>
    <span class="dates" style="flex: 1;">
        110/110 cum laude<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; font-weight: bold; flex: 1;">ITIS B. Pascal</p>
        <p style="font-weight: normal; flex: 1;">High school leaving certificate in information technology and telecommunications</p>
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
        <p calss="experience_where" style="font-weight: bold; flex: 1; font-size: 20px">Sapienza University of Rome - Computer Science department</p>
        <p calss="experience_what"  style="font-weight: normal; flex: 1; padding-bottom: 10px; padding-top: 10px;font-size: 16px; font-weight: bold">Internship</p>
        <p calss="experience_how"   style="font-weight: normal; flex: 1; font-size: 16px;">Development of a parallel algorithm capable of running third-party annotation software (Diamond or BLAST) in parallel mode. Leveraging data parallelism makes it possible to execute such software in a distributed manner, greatly enhancing the efficiency of transcriptome annotation processes. During the internship, various automation scripts were developed to make the parallel annotation process as user-friendly as possible. The software is also capable of consolidating the results of partial annotations into a single final file, which is identical to the final file we would have obtained using traditional annotation software.</p>
    </span>
    <span class="dates experience-date">
        2022-2023
    </span>
</li>
</ul>`;

var project_1 = `<h3 style="font-size: 20px;padding-right: 30px;padding-left: 30px;">Identifying Age-Related Conditions (ICR)</h3>
<p style="font-size: 16px;padding-right: 30px;padding-left: 30px;">&quot;Identifying Age-Related Conditions&quot; is a Kaggle competition. I am proud to share that I achieved a Silver Medal, ranking in the top 2% of the competition leaderboard.</p>
<p style="font-size: 16px;padding-right: 30px;padding-left: 30px; padding-top: 10px">The goal of the competition is to use machine learning to predict whether a person has any of three specific medical conditions. Participants are tasked with creating a model trained on measurements of health characteristics to make these predictions. The conditions are categorized into two classes:</p>
<ul style="font-size: 16px; margin-top: 10px; text-align: left">
  <li style="margin-left: 75px;">Class 0: No medical conditions</li>
  <li style="margin-left: 75px;">Class 1: At least one of the 3 medical conditions</li>
</ul>
<br>
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">This competition is crucial as it aims to streamline and simplify the process of identifying these medical conditions, which typically involves a lengthy and intrusive data collection process from patients. My predictive model aim to expedite this process while ensuring patient privacy by utilizing essential characteristics related to the conditions and encoding them effectively.</p>
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px; padding-top: 10px">By participating in this competition, I contributed to the advancement of medical research by aiding in the discovery of the relationship between various health characteristics and potential patient conditions.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/icr-identify-age-related-conditions" target="_blank"><i class="fa fa-github"></i></a></p>`;

var project_2 = `<h3 style="font-size: 20px; padding-right: 30px;padding-left: 30px;">Water Potability</h3> 
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">In this study, we conducted an analysis of a dataset containing various features related to water quality to determine the potability of the water.
After analyzing the dataset, we utilized machine learning techniques to develop a predictive model for water potability based on the provided features. The model aims to determine the safety of water for human consumption. By training the model on a subset of the dataset and evaluating its performance, we can assess its accuracyand predictive capabilities. The analysis involved visualizing the relationships between different features using various graphs and charts. 
Precision metric was used to measure the model's performance. Cross-validation techniques such as k-fold cross-validation were applied to ensure the model's generalizability and robustness.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/water-potability" target="_blank"><i class="fa fa-github"></i></a>
</p>`;

var project_3 = `<h3 style="font-size: 20px; padding-right: 30px;padding-left: 30px;">HPC-T-Annotator</h3> 
<p style="font-size: 16px; padding-right: 30px;padding-left: 30px;">The HPC-T-Annotator tool is an efficient solution for parallelizing homology annotation software, significantly reducing waiting times and enabling the processing of large transcriptomes, particularly beneficial for eukaryotic ones with substantial data. It's revealed that transcriptome size, rather than the number of sequences, mainly affects execution time, and partitioning the transcriptome into manageable sequence files enhances computational efficiency and parallelism. This tool reduces execution and waiting times from days to hours or even minutes, offering a user-friendly graphical interface and command-line execution options. It's adaptable for concurrent annotation of multiple transcriptomes across diverse databases, enhancing the analysis of extensive 'omics datasets. Moreover, its scalable and efficient framework makes it suitable for parallelizing various bioinformatics tasks, potentially advancing research in the field. Future IT adaptations are planned to expand its compatibility to clusters with schedulers other than SLURM, further broadening its user base.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/HPC-T-Annotator" target="_blank"><i class="fa fa-github"></i></a>
</p>
`;

var publication_1 = `<h3 style="font-size: 20px;">HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation</h3>
<p>BMC Bioinformatics (pending review)</p>
`;

var certification_1 = `<h3 style="font-size: 20px;">Introduction to Machine Learning <a href="https://drive.google.com/file/d/1_KthHpXzeT6ec5f_kKwvx20SOzrhyjc1/view" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">Kaggle, issued Feb 2023</p>
`;

var certification_2 = `<h3 style="font-size: 20px;">Pandas <a href="https://drive.google.com/file/d/13nl3T5cwl8_T8bcaqGSq5d11TTN6MVUv/view" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">Kaggle, issued Feb 2023</p>
`;

var certification_3 = `<h3 style="font-size: 20px;">Python Basics <a href="https://www.hackerrank.com/certificates/aa03010a7d90" class="button"></a></h3>
<p style="font-size: 16px; margin-top: -10px;">HackerRank, issued Sep 2020</p>
`;

var certification_4 = `<h3 style="font-size: 20px;">CISCO CCNA</h3>
<p style="font-size: 16px; margin-top: -10px;">Cisco Networking Academy, issued Sep 2019</p>
`;

function onLoad(){
  // Esegui le funzioni in parallelo utilizzando Promise.all()
  Promise.all([Writer(about,      20, "demo"),
              Writer(education,  2, "education_p"), 
              Writer(experience_1, 2, "experience_p"), 
              Writer(project_1,  1, "project_1"), 
              Writer(project_2,  5, "project_2"),
              Writer(project_3,  1, "project_3"),
              Writer(publication_1, 1, "publication_1"),
              Writer(certification_1, 1, "certification_1"),
              Writer(certification_2, 1, "certification_2"),
              Writer(certification_3, 1, "certification_3"),
              Writer(certification_4, 1, "certification_4")
    ])
    .then((risultati) => {
      console.log("Tutte le funzioni sono state completate:");
      console.log(risultati); // Contiene i risultati delle due funzioni
    })
    .catch((errore) => {
      console.error("Si è verificato un errore:", errore);
  });
}
