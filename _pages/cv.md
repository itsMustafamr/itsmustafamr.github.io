---
layout: archive
#   
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

<div class="cv-main-container">
  <div class="cv-header">
    <div class="cv-title">
      <h1>CV</h1>
      <p>This is the curriculum vitae of {{ site.author.name }}.</p>
    </div>
    <div class="cv-pdf">
      <a href="https://drive.google.com/file/d/1NSafYfmzddpe32ft9-ZsD5zoZeAHjO4B/view?usp=sharing" class="btn btn--inverse" target="_blank" aria-label="Download PDF">
        <i class="fa-solid fa-file-arrow-down"></i>
      </a>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>General Information</h2>
    <ul style="list-style-type: none; padding-left: 0;">
      <!-- <li><strong>Full Name:</strong>Mohammed Musthafa Rafi</li>
      <li><strong>Email:</strong> mohd7@iastate.edu</li> -->
      <!-- <li><strong>Address</strong> 1111 Woi Rd. 0035A Roy J Carver Colab, Ames, IA 50014</li> -->
      <!-- <li><strong>Address:</strong> ISU Laboratory of Mechanics 2519 Union Dr, Ames, IA 50011</li> -->
      <!-- <li><strong>Website:</strong> <a href="https://itsmustafamr.github.io/">https://itsmustafamr.github.io/</a></li> -->
    </ul>
  </div>

  <div class="cv-section-card">
    <h2>Education</h2>
    <div class="cv-edu-item">
      <span class="cv-edu-years">August 2023 - Present</span>
      <div class="cv-edu-details">
        <strong>Ph.D. Candidate in Computer Science</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Iowa, USA</span>
        <ul>
          <li>GPA: 3.91/4.00</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">August 2023 - 2025</span>
      <div class="cv-edu-details">
        <strong>Master of Science in Artificial Intelligence</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Iowa, USA</span>
        <ul>
          <li>GPA: 3.93/4.00</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">July 2018 - July 2022</span>
      <div class="cv-edu-details">
        <strong>Bachelor of Science in Electrical and Electronics Engineering</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> APJ Abdul Kalam Technological University, Kerala, INDIA</span>
        <ul>
          <li>July 2018 – July 2022</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Experience</h2>
    <div class="cv-edu-item">
      <span class="cv-edu-years">2023 - Present</span>
      <div class="cv-edu-details">
        <strong>Graduate Teaching Assistant</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University</span>
        <ul>
          <li>
            <strong>COM S 309 (Software Development Practices)</strong><br>
            <span class="cv-edu-years">Spring 2023, Fall 2024</span><br>
            Guided and mentored 8 student teams with 4–5 members each, helping them with software-development practices and collaborative project work.<br>
            Held lab sessions, assisted students with coding and debugging, and supported their use of tools like GitHub for project management.
          </li>
          <li>
            <strong>COM S 336 (Computer Graphics)</strong><br>
            <span class="cv-edu-years">Fall 2023</span><br>
            Prepared quizzes on TopHat, conducted office hours, and provided student support via Piazza discussions<br>
            Conducted labs focused on teaching 3-D rendering, visualization techniques, and basic graphics programming
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Research / Internship</h2>
    <strong>Research</strong><br>
    <em>Iowa State University, Ames, IA</em> | Aug 2024 – Present
    <ul>
      <li>
        <strong>Stationary-Camera Neural Radiance Field (NeRF):</strong><br>
        Developed a turntable-style pipeline by reversing object rotation angles (+θ → –θ), enabling COLMAP to achieve <2° reprojection error from 150 stationary-camera images. Automated SAM2-based masking to strip backgrounds, reducing training time by 30% and improving PSNR by +1.8 dB. Integrated into Nerfstudio, generating photorealistic 360° renders and watertight meshes.
      </li>
      <li>
        <strong>Neural Radiance Fields – Pose Optimization & Quality Enhancement:</strong><br>
        Designed pose-refinement loops to fine-tune COLMAP poses, reducing pose RMSE by 22% and boosting chamfer-distance accuracy by 18%. Improved SSIM from 0.88 to 0.93 on proprietary datasets.
      </li>
    </ul>
  </div>

  <div class="cv-section-card">
    <h2>Skills</h2>
    <ul>
      <li><strong>Programming:</strong> Python, R, C++, Java, SQL, JavaScript, LaTeX</li>
      <li><strong>Machine Learning:</strong> PyTorch, TensorFlow, Scikit-learn, Keras, CUDA, Deep Learning, LangChain, Transformers, MLflow</li>
      <li><strong>Cloud & DevOps:</strong> AWS, Docker, GitLab CI/CD, Azure Functions</li>
      <li><strong>Data Analysis:</strong> Pandas, NumPy, Matplotlib, Seaborn, Jupyter</li>
      <li><strong>Web Development:</strong> React, Node.js, Express, MongoDB</li>
      <li><strong>Other:</strong> Git, Linux, Agile, Computer Vision, NLP, Distributed Systems</li>
      <li><strong>Monitoring:</strong> Grafana, Kibana</li>
    </ul>
  </div>

  <div class="cv-section-card">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Prompt-to-Perception: Integrated Text-to-Image Pipeline</strong><br>
        Developed an end-to-end system for text-to-image generation using prompt refinement and Stable Diffusion 2.1. Improved prompt quality 3× (ROUGE metrics) via T5-Small, with an average prompt-image alignment of 0.72.<br>
        <a href="https://github.com/rah757/KarmaAI">Code</a> | <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Demo Video</a> | <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Document</a>
      </li>
      <li>
        <strong>TraitViz – Interactive PubMed Annotation Visualizer</strong><br>
        Built a full-stack web app for automatic annotation and visualization of PubMed articles with entity extraction and SVG parse graphs.<br>
        <a href="https://github.com/itsMustafamr/Trait_viz">Code</a> | <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Video</a> | <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Document</a>
      </li>
      <li>
        <strong>Diseased Plant Detection</strong><br>
        Created ResNet50, VGG16, and custom CNNs for new plant disease detection across 38 vision classes. <a href="https://drive.google.com/file/d/1xIN8EN7gbcpu1FSt5s0U76oeCbJRlQta/view?usp=sharing">Document</a>
      </li>
    </ul>
  </div>

  <div class="cv-section-card">
    <h2>Certifications & Awards</h2>
    <ul>
      <li><strong>Fundamentals of Accelerated Computing with CUDA C/C++</strong> (NVIDIA)</li>
      <li><strong>Constellation Prize</strong> (Top 4/30+ teams), Ivy Data Visualization & Storytelling Case Competition, Ivy College of Business</li>
      <li>
        <strong>Winner, Applied AI Challenge 2025:</strong> <em>Karma AI – Social Impact Award</em> ($1500), for an AI solution empowering the visually impaired using multimodal prompting and GPT-based voice assistant<br>
        <a href="https://github.com/rah757/KarmaAI">Code</a> | <a href="https://www.canva.com/design/DAGjaj5kX14/2f9-IAWV0LZ4p8TBO0g-Xw/view?utlId=hd404c7e05e#4">Demo</a>
      </li>
      <li><strong>2nd Place, Fall 2023 Coding Contest</strong>, CSE Programming Club</li>
      <li><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> (In progress)</li>
      <li><strong>Neural Radiance Fields & Implicit Neural Representations</strong> (Digital Badge, May 2025, TrAC, ISU)</li>
      <li><strong>MLOps: Machine Learning in Practice</strong> (Digital Badge, Nov 2024, Translational AI Center, ISU)</li>
    </ul>
  </div>
</div>



