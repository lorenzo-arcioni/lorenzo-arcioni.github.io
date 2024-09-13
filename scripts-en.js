function Writer(text, speed, id) {
  return new Promise((resolve) => {
    var i = 0;

    function typeNextCharacter() {
      if (i < text.length) {
        document.getElementById(id).innerHTML = text.substr(0, i + 1);
        i++;
        setTimeout(typeNextCharacter, speed);
      } else {
        resolve(); // Resolve the promise when typing is complete
      }
    }

    typeNextCharacter(); // Start typing
  });
}

var about = "Passionate about the endless possibilities at the intersection of Data Science, " +
            "Machine Learning, and Bioinformatics. I am a tech enthusiast with " +
            "a deep interest in solving complex problems through " +
            "innovative approaches. With a strong background in parallel computing, algorithm development, " +
            "and a deep affinity for Linux operating systems, I excel in environments that " +
            "require a combination of technical skills and creative thinking.";

var education = `<ul class="education-list" style="list-style: none; padding: 10px;">
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">Neural Academy</p>
        <p style="font-weight: normal; flex: 1;">Master's in Data Science</p>
    </span>
    <span class="dates" style="flex: 1;">
        Successfully completed<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">University La Sapienza, Rome</p>
        <p style="font-weight: normal; flex: 1;">Bachelor's Degree in Computer Science</p>
    </span>
    <span class="dates" style="flex: 1;">
        110/110 with honors<br>
        2023
    </span>
</li>
<li class="education-item" style="display: flex; flex-direction: row; margin-bottom: 30px;">
    <span class="school-name" style="font-weight: bold; flex: 1;"><p style="font-size: 20px; " +
            "font-weight: bold; flex: 1;">ITIS B. Pascal</p>
        <p style="font-weight: normal; flex: 1;">High School Diploma in Computer Science and Telecommunications</p>
    </span>
    <span class="dates" style="flex: 1;">
        100/100<br>
        2014-2019
    </span>
</li>
</ul>`;

var experience_1 = `<ul class="experience-list" style="padding-right: 30px; padding-left: 30px;">
<li class="experience-item">
    <span class="details">
        <p class="experience_where" style="font-weight: bold; flex: 1; font-size: 20px">University La Sapienza, Rome - Department of Computer Science</p>
        <p class="experience_what" style="font-weight: normal; flex: 1; padding-bottom: 10px; padding-top: 10px; font-size: 16px; font-weight: bold">Internship</p>
        <p class="experience_how" style="font-weight: normal; flex: 1; font-size: 16px;">Developed a parallel algorithm capable of running third-party annotation software 
        (Diamond or BLAST) in parallel mode. By leveraging data parallelism, the software can run in 
        a distributed manner, significantly improving transcriptome annotation efficiency. During the internship, 
        various automation scripts were developed to make the parallel annotation process as user-friendly as possible. 
        The software can also consolidate partial annotation results into a single final file, identical to the final file 
        we would have obtained using traditional annotation software.</p>
    </span>
    <span class="dates experience-date">
        2022-2023
    </span>
</li>
</ul>`;

var project_1 = `<h3 style="font-size: 20px; padding-right: 30px; padding-left: 30px;">Identifying Age-Related Conditions (ICR)</h3>
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">"ICR" is a Kaggle competition. 
I am proud to share that I earned a Silver Medal, ranking in the top 2% of the competition leaderboard.</p>
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px; padding-top: 10px">The competition's goal is to use machine learning 
to predict if a person has one of three specific medical conditions. Participants are required to build a model trained on 
health feature measurements to make these predictions.</p>
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">This competition is crucial as it aims to simplify and speed up the 
process of identifying these medical conditions, which typically involves a lengthy and intrusive data collection process from patients. 
My predictive model aims to expedite this process while ensuring patient privacy by using essential features related to 
the conditions and encoding them effectively.</p><br><br>
<a class="project_link_icon" href="https://github.com/lorenzo-arcioni/icr-identify-age-related-conditions" target="_blank"><i class="fa fa-github"></i></a></p>`;

var project_2 = `<h3 style="font-size: 20px; padding-right: 30px; padding-left: 30px;">Water Potability</h3> 
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">In this study, we conducted an analysis of a dataset containing 
various features related to water quality to determine its potability. After analyzing the dataset, we 
used machine learning techniques to develop a model to predict water potability based on the provided features. 
The model aims to determine the safety of water for human consumption. The analysis involved visualizing 
the relationships between different features using various charts and diagrams.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/water-potability" target="_blank"><i class="fa fa-github"></i></a>
</p>`;

var project_3 = `<h3 style="font-size: 20px; padding-right: 30px; padding-left: 30px;">HPC-T-Annotator</h3>
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">
HPC-T-Annotator is an advanced tool designed to parallelize transcriptome annotation, 
drastically reducing waiting times and facilitating the processing of large transcriptomes, 
particularly eukaryotic ones with extensive datasets. It utilizes an HPC architecture for parallel annotation 
of transcripts, managing multiple tasks simultaneously through a workload manager system. 
This approach significantly enhances computational efficiency and parallelism, 
reducing execution times from days to hours or minutes. 
The user-friendly graphical interface and command-line execution options make the tool highly adaptable 
for annotating multiple transcriptomes across different databases, 
optimizing the analysis of large omics datasets.
Future updates are planned to expand compatibility with clusters and schedulers beyond SLURM, 
further broadening its user base.
<br><br></p>
<a class="project_link_icon" href="https://github.com/lorenzo-arcioni/HPC-T-Annotator" target="_blank">
  <i class="fa fa-github"></i>
</a>`;

var project_4 = `<h3 style="font-size: 20px; padding-right: 30px; padding-left: 30px;">BioSwiftAnalytics</h3> 
<p style="font-size: 16px; padding-right: 30px; padding-left: 30px;">BioSwiftAnalytics provides a suite of Jupyter notebooks 
to simplify biological data analysis, with tools for transcriptomic and genomic research. It supports 
the generation of comprehensive reports, visualization of hit rates, creation of Venn diagrams, and analysis 
of BUSCO results. Users can also generate synteny graphs, phylogenomic trees, and ortholog multiplicity 
graphs from OrthoFinder results. The tool can be used via Docker or in a local Jupyter environment, 
making it accessible for post-biological dataset processing with ease.
<br><br></p><a class="project_link_icon" href="https://github.com/lorenzo-arcioni/BioSwiftAnalytics" target="_blank"><i class="fa fa-github"></i></a>
</p>`;

var publication_1 = `<h3 style="font-size: 20px;"><a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05887-3">
HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation</a></h3>
<p>BMC Bioinformatics, 2024</p>
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

function onLoad() {
  // Run functions in parallel using Promise.all()
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
      console.log("All functions have been completed:");
      console.log(results); // Contains the results of the functions
    })
    .catch((error) => {
      console.error("An error occurred:", error);
  });
}
