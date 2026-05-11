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
      <span class="cv-edu-years">August 2023 - May 2026</span>
      <div class="cv-edu-details">
        <strong>Master of Science in Artificial Intelligence</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Iowa, USA</span>
        <ul>
          <li>GPA: 3.93/4.00</li>
          <li>Thesis: <em>Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</em></li>
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
          <strong>NeRF pipeline (non-standard turntable capture)</strong><br>
          Built a Neural Radiance Field pipeline for a stationary-camera, rotating-object setup: custom camera pose estimation and view synthesis, trained and evaluated on ISU HPC with multi-GPU acceleration. Extended with NeRF-SOS for self-supervised object segmentation—achieving &lt;2° reprojection error from 150 fixed-camera images, collaborative contrastive loss for zero-annotation 3D segmentation (15% IoU gain over supervised baselines), and SAM2-based masking (≈30% faster training), producing watertight meshes and per-object neural fields for CAD/robotics.
        </li>
        <li>
          <strong>TabPFN for Time-Series Forecasting on Industrial IoT</strong><br>
          Deployed the TabPFN foundation model on multivariate sensor streams across 1,300+ hierarchical units (68,200+ observations). Achieved state-of-the-art R² of 0.881 and RMSE of 7.1, outperforming traditional ML while reducing training time by ~100×. Demonstrated foundation model evaluation, benchmarking, and custom PyTorch training loops with gradient checkpointing; production stack included sliding-window inference, calibration, drift monitoring, and deployment-focused monitoring for robust performance.
        </li>
        <li>
          <strong>Distributed ML/LLM workflows on HPC</strong><br>
          Developed distributed training and inference workflows on university HPC (SLURM, Nova): multi-node GPU jobs, parallel data preprocessing, and reproducible experiment tracking with MLflow and Weights &amp; Biases across 1000+ concurrent tasks.
        </li>
        <li>
          <strong>Agentic Retrieval-Augmented Text2CAD System (OpenSCAD)</strong><br>
          <ul>
            <li>
              Architected a <strong>fully traceable multi-agent LLM pipeline</strong> using <strong>LangGraph</strong> for stateful orchestration—conditional execution paths, inter-agent communication protocols, and hierarchical task decomposition across <strong>six specialized agents</strong> (Reasoner, Planner, Compiler, Verifier, Repair, Assembler)—with <strong>structured logging at each agent decision point</strong>, producing parametric <strong>OpenSCAD</strong> from natural language.
            </li>
            <li>
              Integrated <strong>retrieval-augmented generation</strong> with <strong>GPT-5</strong>: FAISS vector search over <strong>500+ domain artifacts</strong> (Fusion360 Gallery reconstructions and related assets) using <strong>L2-normalized embeddings</strong>, hybrid retrieval over meshes (OBJ/STEP/SMT) and synthetic CAD sequences; <strong>~40% latency reduction</strong> via intelligent caching; built <strong>systematic evaluation pipelines</strong> for multi-agent reasoning quality. Achieved <strong>75% semantic accuracy</strong> through sequence-based sketch–extrude–boolean construction.
            </li>
            <li>
              Designed <strong>agent-level reward mechanisms</strong> through <strong>iterative self-repair validation</strong>: system-level <strong>compilation and verification signals</strong> propagate back to individual agents for targeted correction, improving task success via <strong>post-training refinement strategies</strong>—including <strong>OpenSCAD compilation success from 68% to 89%</strong>—while improving <strong>schema pass rate from 73% to 94%</strong>, maintaining <strong>91% parametric dependency preservation</strong> and correct spatial reasoning for placement and clearances.
            </li>
            <li>
              Implemented <strong>credit assignment</strong> for the multi-agent stack: fine-grained feedback from global task outcomes to individual agent actions; <strong>40% reduction in cascading failures</strong> through localized error attribution and controlled ablation experiments.
            </li>
            <li>
              Developed <strong>hierarchical assembly decomposition</strong> (Block → Parametric → Full Model). Validated on complex furniture and mechanical assemblies (tables, chairs, components) with <strong>1000+ line JSON IR</strong> generation.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="cv-section-card">
  <h2>Publications</h2>
  <ul>
    <li>
      <strong>M. M. Rafi*</strong>, T. Ayanlade, B. Ganapathysubramanian, S. Sarkar, A. Krishnamurthy, C. Hegde, A. Balu: "Benchmarking Tabular Foundation Models for Agricultural Yield Prediction", <strong>AgriAI 2026 Workshop, AAAI 2026</strong>. <a href="https://openreview.net/forum?id=f5XUPRARlG" target="_blank">[article]</a>
    </li>
    <li>
      <strong>M. M. Rafi*</strong>, A. Krishnamurthy, A. Balu, et al.: "Trustworthy LLM-Mediated Communication: Evaluating Information Fidelity in LLM as a Communicator (LAAC) Framework in Multiple Application Domains", <strong>IEEE DISTILL, 2025</strong>. <a href="https://arxiv.org/abs/2511.04184" target="_blank">[article]</a>
    </li>
  </ul>
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
      <h3><em>narrAIt - Agentic Accessibility Companion for macOS</em></h3>
      <ul>
        <li>Built a voice-driven AI accessibility companion that explains UI elements, answers contextual questions, and points users to the right on-screen controls without taking over their mouse.</li>
        <li>Won <strong>3rd Place</strong> at <strong>Swan Hacks Spring 2026</strong>, with a <strong>$1,200 prize and NVIDIA Jetson Orin Nano</strong> (per team member).</li>
        <li>
          <a href="https://github.com/rah757/NarrAIt">Code</a> |
          <a href="https://devpost.com/software/celsius?ref_content=user-portfolio&ref_feature=in_progress">Devpost</a> |
          <a href="https://www.youtube.com/watch?v=K0vZgihtcT0&t=1s">Demo Video</a> |
          <a href="https://docs.google.com/presentation/d/1uhTLyZ0vBhjXIZ48vhbOrL5uvWWz7O2P/edit?usp=sharing&ouid=110093744032910100745&rtpof=true&sd=true">Document (PPT)</a> |
          <a href="/images/narrait-highlight.png">Highlight Image</a>
        </li>
      </ul>
    </div>
    <hr>
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
        <li>
          <strong>3rd Place, Swan Hacks Spring 2026:</strong> <em>narrAIt</em> (AI navigation companion for accessibility); received <strong>$1,200</strong> and an <strong>NVIDIA Jetson Orin Nano</strong> (per team member)<br>
          <a href="https://swan-hacks-spring-2026.devpost.com/">Hackathon</a> | <a href="https://devpost.com/software/celsius?ref_content=user-portfolio&ref_feature=in_progress">Project</a> | <a href="https://www.youtube.com/watch?v=K0vZgihtcT0&t=1s">Demo</a>
        </li>
        <li>
          <strong>Winner, Applied AI Challenge 2026:</strong> <em>AI-Assisted Making Award</em>, for <strong>Study Buddy</strong> - an AI-powered learning companion built with AI-assisted development tools<br>
          <a href="https://drive.google.com/file/d/1T2295TaWJTAw5y4iPtA4K95SfgqSBv1v/view?usp=sharing">Certificate</a>
        </li>
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



