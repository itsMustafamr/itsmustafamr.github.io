---
layout: archive
#   
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-header">
  <div class="cv-title">
    <h1>CV</h1>
    <p>This is the curriculum vitae of {{ site.author.name }}.</p>
  </div>
  <div class="cv-pdf">
    <a href="https://drive.google.com/file/d/1vDlZ2GKlIlHNLza2R6J4QNyFQZjDzVv0/view?usp=sharing" class="btn btn--inverse" target="_blank">
      <i class="fas fa-file-pdf"></i>&nbsp;Download PDF
    </a>
  </div>
</div>

<div class="cv-section">
  <h2>General Information</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li><strong>Full Name</strong> mm</li>
    <li><strong>Email</strong> mohd7@iastate.edu</li>
    <li><strong>Address</strong> 1111 Woi Rd. 0035A Roy J Carver Colab, Ames, IA 50014</li>
    <li><strong>Website</strong> <a href="https://itsmustafamr.github.io/">https://adityabalu.github.io/</a></li>
  </ul>
</div>

<div class="cv-section">
  <h2>Education</h2>
  <ul>
    <li>
      <strong>Ph.D. Candidate in Computer Science</strong><br>
      <em>Iowa State University, Iowa, USA</em><br>
      Aug 2023 – Present | GPA: 3.91/4.00
    </li>
    <li>
      <strong>Master of Science in Artificial Intelligence</strong><br>
      <em>Iowa State University, Iowa, USA</em><br>
      Aug 2023 – Aug 2025 | GPA: 3.93/4.00
    </li>
    <li>
      <strong>Bachelor of Science in Electrical and Electronics Engineering</strong><br>
      <em>APJ Abdul Kalam Technological University, Kerala, INDIA</em><br>
      July 2018 – July 2022
    </li>
  </ul>
</div>

<div class="cv-section">
  <h2>Experience</h2>
  <strong>Graduate Teaching Assistant</strong><br>
  <em>Iowa State University</em>
  <ul>
    <li><strong>COM S 336 (Computer Graphics) 2023-2024</strong>: Conducted labs and guided students in 3D rendering and visualization techniques.</li>
    <li><strong>COM S 309 (Software Development Practices) 2023-2024</strong>: Led labs and mentored students in best practices.</li>
  </ul>
</div>

<div class="cv-section">
  <h2>Research / Internship</h2>
  <strong>Graduate Research Assistant</strong><br>
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

<div class="cv-section">
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

<div class="cv-section">
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

<div class="cv-section">
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

