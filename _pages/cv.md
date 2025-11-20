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
  <div class="cv-edu-item">
    <span class="cv-edu-years">August 2024 - Present</span>
    <div class="cv-edu-details">
      <strong>Research</strong><br>
      <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Ames, IA</span>
      <ul>
        <li>
          <strong>Slice 100k work</strong><br>
          To generate cad designs from code prompts
        </li>
        <li>
          <strong>NeRF-SOS: Self-Supervised Object Segmentation for Stationary-Camera NeRF</strong><br>
          Developed a novel turntable-style pipeline integrating NeRF-SOS for stationary-camera capture, achieving &lt;2° reprojection error from 150 fixed-camera images. Implemented collaborative contrastive loss for zero-annotation 3D segmentation, improving IoU by 15% over supervised baselines. Leveraged SAM2-based masking to reduce training time by 30%, generating watertight meshes and per-object neural fields for CAD/robotics.
        </li>
        <li>
          <strong>TabPFN for Time-Series Forecasting on Industrial IoT</strong><br>
          Deployed TabPFN foundation model on multivariate sensor streams across 1,300+ hierarchical units (68,200+ series). Achieved state-of-the-art R² of 0.881 and RMSE of 7.1, outperforming traditional ML while reducing training time by ~100×. Productionized with sliding-window inference, calibration, and drift monitoring for robust, consistent performance.
        </li>
        <li>
          <strong>Agentic Retrieval-Augmented Text2CAD System (OpenSCAD)</strong><br>
          <ul>
            <li>
              Architected <strong>multi-agent Text2CAD framework</strong> with hierarchical decomposition pipeline that converts natural language descriptions into parametric <strong>OpenSCAD</strong> models. Designed a <strong>3-agent system</strong> (Reasoner, Planner, Compiler) orchestrated via <strong>LangGraph</strong> for stateful design synthesis with conditional repair mechanisms.
            </li>
            <li>
              Integrated <strong>retrieval-augmented generation</strong> using <strong>Fusion360 Gallery dataset (500+ reconstruction models)</strong> with GPT-5 for parametric CAD generation. Achieved <strong>75% semantic accuracy</strong> through sequence-based sketch–extrude–boolean construction operations and a hybrid FAISS-based knowledge base over meshes (OBJ/STEP/SMT) and synthetic CAD sequences, reducing generation latency by ~40%.
            </li>
            <li>
              Implemented <strong>self-repair validation system</strong> with iterative error correction, improving <strong>schema pass rate from 73% to 94%</strong> and <strong>OpenSCAD compilation success from 68% to 89%</strong>, while maintaining <strong>91% parametric dependency preservation</strong> and correct spatial reasoning for relative placement and clearances.
            </li>
            <li>
              Developed <strong>hierarchical assembly decomposition</strong> approach (Block → Parametric → Full Model). Validated system on complex furniture and mechanical assemblies (tables, chairs, components) with <strong>1000+ line JSON IR</strong> generation.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="cv-section-card">
  <h2>Technical Skills</h2>
  <div class="cv-skills-category">
    <h3><em>Programming Languages</em></h3>
    <ul>
      <li>Python, C++, CUDA, JavaScript, MATLAB, R</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Machine Learning & AI</em></h3>
    <ul>
      <li>PyTorch, TensorFlow, scikit-learn, Keras, OpenCV, Transformers, Diffusion Models</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>High-Performance Computing</em></h3>
    <ul>
      <li>CUDA, MPI, OpenMP, GPU Computing, HPC Cluster Management</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>CAD & Engineering Software</em></h3>
    <ul>
      <li>SolidWorks, ANSYS, FEA, CFD</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Data Analysis & Visualization</em></h3>
    <ul>
      <li>Pandas, NumPy, Matplotlib, Plotly, Paraview, VTK</li>
    </ul>
  </div>
</div>

  <div class="cv-section-card">
    <h2>Projects</h2>
    <div class="cv-skills-category">
      <h3><em>Prompt-to-Perception: Integrated Text-to-Image Pipeline</em></h3>
      <ul>
        <li>Developed an end-to-end system for text-to-image generation using prompt refinement and Stable Diffusion 2.1.</li>
        <li>Improved prompt quality 3× (ROUGE metrics) via T5-Small, with an average prompt-image alignment of 0.72.</li>
        <li>
          <a href="https://github.com/rah757/KarmaAI">Code</a> |
          <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Demo Video</a> |
          <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>TraitViz – Interactive PubMed Annotation Visualizer</em></h3>
      <ul>
        <li>Built a full-stack web app for automatic annotation and visualization of PubMed articles with entity extraction and SVG parse graphs.</li>
        <li>
          <a href="https://github.com/itsMustafamr/Trait_viz">Code</a> |
          <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Video</a> |
          <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>CNN Visualization</em></h3>
      <ul>
        <li>Built an interactive system to inspect intermediate layers of CNNs. Given an input image, it renders per‑layer activation maps and optionally visualizes filter weights. Added forward hooks and epoch snapshots to step through training for real‑time introspection and debugging</li>
        <li>
          <a href="https://github.com/tre3x/CNN_Viz">Code</a>|
          <a href="https://drive.google.com/file/d/1xwwAuCXOdzLab0-nhCCaZ0imfJHVx0of/view?usp=sharing">Video</a> |
          <a href="https://drive.google.com/file/d/1n_TNCCo-95ut_TST6ZYyh7vEp6841nB3/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Diseased Plant Detection</em></h3>
      <ul>
        <li>Created ResNet50, VGG16, and custom CNNs for new plant disease detection across 38 vision classes.</li>
        <li><a href="https://drive.google.com/file/d/1xIN8EN7gbcpu1FSt5s0U76oeCbJRlQta/view?usp=sharing">Document</a></li>
      </ul>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Certifications & Awards</h2>
    <div class="cv-skills-category">
      <h3><em>Certifications</em></h3>
      <ul>
        <li><strong>Fundamentals of Accelerated Computing with CUDA C/C++</strong> (NVIDIA)</li>
        <li><strong>Complete Python With DSA Bootcamp by Krish Naik, Udemy</strong> (In progress)</li>
        <li><strong>Complete Machine Learning, NLP Bootcamp with MLOps and Deployment by Krish Naik, Udemy</strong> (In progress)</li>
        <li><strong>Neural Radiance Fields & Implicit Neural Representations</strong> (Digital Badge, May 2025, TrAC, ISU)</li>
        <li><strong>MLOps: Machine Learning in Practice</strong> (Digital Badge, Nov 2024, Translational AI Center, ISU)</li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Awards</em></h3>
      <ul>
        <li><strong>Constellation Prize</strong> (Top 4/30+ teams), Ivy Data Visualization & Storytelling Case Competition, Ivy College of Business</li>
        <li>
          <strong>Winner, Applied AI Challenge 2025:</strong> <em>Karma AI – Social Impact Award</em> ($1500), for an AI solution empowering the visually impaired using multimodal prompting and GPT-based voice assistant<br>
          <a href="https://github.com/rah757/KarmaAI">Code</a> | <a href="https://www.canva.com/design/DAGjaj5kX14/2f9-IAWV0LZ4p8TBO0g-Xw/view?utlId=hd404c7e05e#4">Demo</a>
        </li>
        <li><strong>2nd Place, Fall 2023 Coding Contest</strong>, CSE Programming Club</li>
      </ul>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Contact</h2>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>Email:</strong> <a href="mailto:mr.mohdmustafa007@gmail.com">mr.mohdmustafa007@gmail.com</a></li>
      <li><strong>Mobile:</strong> +1-515-916-9595</li>
      <li><strong>GitHub:</strong> <a href="https://github.com/itsMustafamr" target="_blank">itsMustafamr</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mohammed-musthafa-r/" target="_blank">LinkedIn</a></li>
    </ul>
  </div>

</div>



