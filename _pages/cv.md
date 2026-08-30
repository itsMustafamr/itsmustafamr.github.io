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
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Ames, IA</span>
        <ul>
          <li>GPA: 3.93/4.00</li>
          <li><strong>Focus:</strong> Multi-Agent Systems, Large Language Models, High-Performance Computing, Machine Learning</li>
          <li><strong>Relevant coursework:</strong> Advanced Machine Learning, Deep Learning, Parallel Computing, Algorithm Design, Distributed Systems</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">August 2023 - May 2026</span>
      <div class="cv-edu-details">
        <strong>Master of Science in Artificial Intelligence</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Ames, IA</span>
        <ul>
          <li>GPA: 3.92/4.00</li>
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
          <li>Dean's List</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Experience</h2>
    <div class="cv-edu-item">
      <span class="cv-edu-years">August 2026 - December 2026</span>
      <div class="cv-edu-details">
        <strong>AI Research Engineering Intern, Translational Research</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-building"></i> Multiple Myeloma Research Foundation (MMRF) - Remote, Norwalk, CT</span>
        <ul>
          <li>Building an agentic AI research copilot for the MMRF <strong>Virtual Lab</strong> platform (Gen3 data commons on <strong>AWS</strong>), translating natural-language research questions into cohort discovery and analysis over large-scale <strong>multi-omic and clinical myeloma datasets</strong> using LLMs, RAG, and platform APIs.</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">August 2023 - August 2024</span>
      <div class="cv-edu-details">
        <strong>Graduate Teaching Assistant</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Department of Computer Science</span>
        <ul>
          <li>
            <strong>COM S 309 (Software Development Practices)</strong><br>
            <span class="cv-edu-years">Spring 2024, Fall 2024</span><br>
            Mentored <strong>8 assigned teams (40+ students)</strong> through full-stack development projects using Spring Boot, React, and MySQL; conducted code reviews and debugging sessions.
          </li>
          <li>
            <strong>COM S 336 (Computer Graphics)</strong><br>
            <span class="cv-edu-years">Fall 2023</span><br>
            Led weekly office hours for <strong>60+ students</strong> on OpenGL rendering, shader programming, and ray tracing; maintained a <strong>4.8/5.0</strong> teaching rating.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cv-section-card">
  <h2>Research</h2>
  <div class="cv-edu-item">
    <span class="cv-edu-years">August 2024 - Present</span>
    <div class="cv-edu-details">
      <strong>Graduate Research Assistant</strong><br>
      <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University - Translational AI Center (IdeaLab), Ames, IA</span>
      <ul>
        <li>
          <strong>CRAFT - Agentic Retrieval-Augmented Text2CAD System (OpenSCAD)</strong> - accepted at <strong>IEEE ICLAD 2026</strong>
          [<a href="https://idealab-isu.github.io/CRAFT/" target="_blank">project page</a> | <a href="https://idealab-isu.github.io/CRAFT/static/pdfs/CRAFT_paper.pdf" target="_blank">paper</a> | <a href="https://github.com/idealab-isu/CRAFT" target="_blank">code</a>]<br>
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
        <li>
          <strong>VISTA-CAD</strong><br>
          Follow-up to CRAFT on iteratively refining parametric CAD programs using visual feedback. <em>Manuscript in preparation.</em>
        </li>
        <li>
          <strong>Distributed ML/LLM workflows on HPC</strong><br>
          Developed distributed training and inference workflows on university HPC (SLURM, Nova): multi-node GPU jobs, parallel data preprocessing, and reproducible experiment tracking with MLflow and Weights &amp; Biases across 1000+ concurrent tasks.
        </li>
        <li>
          <strong>TabPFN for Time-Series Forecasting on Industrial IoT</strong><br>
          Deployed the TabPFN foundation model on multivariate sensor streams across 1,300+ hierarchical units (68,200+ observations). Achieved state-of-the-art R² of 0.881 and RMSE of 7.1, outperforming traditional ML while reducing training time by ~100×. Demonstrated foundation model evaluation, benchmarking, and custom PyTorch training loops with gradient checkpointing; production stack included sliding-window inference, calibration, drift monitoring, and deployment-focused monitoring for robust performance.
        </li>
        <li>
          <strong>NeRF pipeline (non-standard turntable capture)</strong><br>
          Built a Neural Radiance Field pipeline for a stationary-camera, rotating-object setup: custom camera pose estimation and view synthesis, trained and evaluated on ISU HPC with multi-GPU acceleration. Extended with NeRF-SOS for self-supervised object segmentation—achieving &lt;2° reprojection error from 150 fixed-camera images, collaborative contrastive loss for zero-annotation 3D segmentation (15% IoU gain over supervised baselines), and SAM2-based masking (≈30% faster training), producing watertight meshes and per-object neural fields for CAD/robotics.
        </li>
        <li>
          <strong>Slice 100k work</strong><br>
          To generate cad designs from code prompts
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="cv-section-card">
  <h2>Publications</h2>
  <ul>
    <li>
      <strong>M. M. Rafi*</strong>, A. Jignasu, M. Saraeian, C. Hegde, A. Balu, A. Krishnamurthy: "CRAFT: Corrective and Robust Multi-Agent Framework for Text-to-Parametric CAD", <strong>IEEE ICLAD 2026</strong>. <a href="https://idealab-isu.github.io/CRAFT/" target="_blank">[project page]</a> <a href="https://idealab-isu.github.io/CRAFT/static/pdfs/CRAFT_paper.pdf" target="_blank">[paper]</a> <a href="https://github.com/idealab-isu/CRAFT" target="_blank">[code]</a>
    </li>
    <li>
      <strong>M. M. Rafi*</strong>, T. Ayanlade, B. Ganapathysubramanian, S. Sarkar, A. Krishnamurthy, C. Hegde, A. Balu: "Benchmarking Tabular Foundation Models for Agricultural Yield Prediction", <strong>Agri AI Workshop, AAAI 2026</strong>. <a href="https://openreview.net/forum?id=f5XUPRARlG" target="_blank">[article]</a>
    </li>
    <li>
      <strong>M. M. Rafi*</strong>, A. Krishnamurthy, A. Balu: "Trustworthy LLM-Mediated Communication: Evaluating Information Fidelity in LLM as a Communicator (LAAC) Framework in Multiple Application Domains", <strong>IEEE DISTILL, 2025</strong>. <a href="https://arxiv.org/abs/2511.04184" target="_blank">[article]</a>
    </li>
  </ul>
</div>

<div class="cv-section-card">
  <h2>Conference Experience</h2>
  <ul>
    <li>
      <strong>Oral Presentation</strong> - IEEE ICLAD 2026, Stanford University, Stanford, CA<br>
      <em>CRAFT: Corrective and Robust Multi-Agent Framework for Text-to-Parametric CAD</em>
      <a href="https://idealab-isu.github.io/CRAFT/" target="_blank">[project page]</a>
    </li>
    <li>
      <strong>Poster Presentation</strong> - NVIDIA GTC 2026, San Jose, CA<br>
      <em>Natural Language to 3D Geometric CAD: A Multi-Agent LLM Framework for Design Synthesis Using Hierarchical Decomposition</em>
      <a href="https://drive.google.com/file/d/1-qs7N_WnKxkOgNpsu7IW01a5wmsZcqZM/view?usp=sharing" target="_blank">[poster]</a>
    </li>
    <li>
      <strong>Poster Presentation</strong> - AAAI 2026 Conference and AgriAI Workshop, Singapore<br>
      <em>Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</em>
      <a href="https://openreview.net/forum?id=f5XUPRARlG" target="_blank">[article]</a>
    </li>
    <li>
      <strong>Oral Presentation</strong> - 2025 IEEE International Conference on Distributed Intelligence at the Tactical and Logical Edge (IEEE DISTILL), Pittsburgh, PA<br>
      <em>Trustworthy LLM-Mediated Communication (LAAC)</em>
      <a href="https://arxiv.org/abs/2511.04184" target="_blank">[article]</a>
    </li>
  </ul>
</div>

<div class="cv-section-card">
  <h2>Technical Skills</h2>
  <div class="cv-skills-category">
    <h3><em>HPC &amp; Distributed</em></h3>
    <ul>
      <li>SLURM, MPI, OpenMP, CUDA, Multi-GPU/Multi-Node Training, Job Scheduling, Parallel Data Processing</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>ML / AI Frameworks</em></h3>
    <ul>
      <li>PyTorch, TensorFlow, JAX, Hugging Face Transformers, LangChain, LangGraph</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>LLM Systems</em></h3>
    <ul>
      <li>Multi-Agent Orchestration, RAG Pipelines, Prompt Engineering, Foundation Model Fine-tuning, Post-Training</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Edge AI &amp; Embedded</em></h3>
    <ul>
      <li>NVIDIA Jetson Orin Nano, JetPack, llama.cpp, whisper.cpp, Piper TTS, On-Device Inference, Ollama</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Languages</em></h3>
    <ul>
      <li>Python, C++, CUDA C/C++, Bash, SQL, Java, JavaScript, Swift</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Infrastructure &amp; Tools</em></h3>
    <ul>
      <li>Docker, Kubernetes, AWS, GCP, MLflow, Weights &amp; Biases, Git, Linux, CI/CD, Unity</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>CAD &amp; Engineering Software</em></h3>
    <ul>
      <li>OpenSCAD, SolidWorks, ANSYS, FEA, CFD</li>
    </ul>
  </div>
  <hr>
  <div class="cv-skills-category">
    <h3><em>Data Analysis &amp; Visualization</em></h3>
    <ul>
      <li>Pandas, NumPy, Matplotlib, Plotly, Paraview, VTK</li>
    </ul>
  </div>
</div>

  <div class="cv-section-card">
    <h2>Projects</h2>
    <div class="cv-skills-category">
      <h3><em>Jarvis-home - Local AI Voice Assistant on Jetson Orin Nano</em></h3>
      <ul>
        <li>Built a fully on-device AI assistant with zero cloud dependency, combining <strong>whisper.cpp</strong> for speech-to-text, <strong>Gemma 4 E2B via llama.cpp</strong> for reasoning, and <strong>Piper TTS</strong> for synthesis. Designed a local intent router for lights, weather, and vision queries; actively iterating on conversation memory, on-device wake word ("Hey Jarvis"), and a multimodal vision path.</li>
        <li><em>Jetson Orin Nano, JetPack, llama.cpp, whisper.cpp, Piper, Edge AI</em></li>
        <li>
          <a href="https://github.com/itsMustafamr/Jarvis-home">Code</a> |
          <a href="/images/Jarvis_v1.gif">Main GIF</a> |
          <a href="/images/Jarvis_highlight.png">Highlight Image</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>narrAIt - Agentic Accessibility Companion for macOS</em></h3>
      <ul>
        <li>Co-developed an AI-powered accessibility assistant that explains on-screen elements in real time and answers voice questions in context, pointing users to exact interaction targets without taking over control.</li>
        <li>Won <strong>3rd Place</strong> at <strong>Swan Hacks Spring 2026</strong>, with a <strong>$1,200 prize and NVIDIA Jetson Orin Nano</strong> (per team member).</li>
        <li><em>Swift, macOS, Agentic AI, Computer Use, Voice Interface</em></li>
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
      <h3><em>VoiceForge VR - Voice-Driven Virtual Reality Interaction</em></h3>
      <ul>
        <li>Built an interactive Unity VR experience targeting <strong>Google Cardboard on iPhone</strong>, with FPS locomotion, gaze-based UI for stereo mode, and voice-prompt-to-STL generation in-world. Focused on intuitive in-world controls and natural interaction flow for low-cost mobile VR.</li>
        <li><em>Unity, C#, VR, HCI, Voice Interface</em></li>
        <li>
          <a href="https://drive.google.com/file/d/18W6rAzLZePAvoGty4ZKCC9fdKEBuLCBx/view?usp=drive_link">Demo Video</a> |
          <a href="https://drive.google.com/file/d/1euOrsBzDhWS_mw3z9FvmVwaBKzhVdCCJ/view?usp=sharing">Document (Final Report)</a> |
          <a href="/images/voiceforgevr-highlight.png">Highlight Image</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Distributed 3D Gaussian Splatting &amp; Neural Rendering on HPC</em></h3>
      <ul>
        <li>Investigated multi-GPU training performance for neural radiance fields and 3D Gaussian Splatting on Iowa State's Nova cluster using SLURM; benchmarked scaling efficiency across node configurations with MPI-based communication and conducted controlled experiments on rendering quality vs. compute tradeoffs.</li>
        <li><em>SLURM, MPI, Multi-GPU, 3DGS, NeRF</em></li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>LLM-Mediated Communication Framework (LAAC)</em></h3>
      <ul>
        <li>Developed a trustworthy communication framework addressing "communication theater" problems in multi-agent LLM workflows; designed evaluation pipelines measuring information fidelity across multiple application domains with systematic benchmarking on reasoning quality.</li>
        <li>
          <a href="https://arxiv.org/abs/2511.04184">arXiv</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>TraitViz - RGBD Depth Estimation &amp; 3D Reconstruction</em></h3>
      <ul>
        <li>Implemented state-of-the-art depth estimation and 3D reconstruction algorithms on the <strong>NYUD dataset</strong> using RGBD data from pinhole cameras; built a full pipeline from intrinsic-aware back-projection to point-cloud reconstruction and qualitative evaluation.</li>
        <li><em>Python, OpenCV, NYUD, Point Clouds, Depth</em></li>
        <li>
          <a href="https://github.com/itsMustafamr/Trait_viz">Code</a> |
          <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Video</a> |
          <a href="https://drive.google.com/file/d/1wzDS9u8cviT64zE-Q7tGQ-R3j_JVRqAl/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>CNN Visualization using CUDA and OpenGL</em></h3>
      <ul>
        <li>Interactive system inspecting CNN intermediate layers with <strong>per-layer activation maps</strong> and filter weights. Implemented forward hooks and epoch snapshots for real-time training introspection.</li>
        <li><em>PyTorch, CUDA, OpenGL, CuPy/PyCUDA, GLFW</em></li>
        <li>
          <a href="https://github.com/tre3x/CNN_Viz">Code</a> |
          <a href="https://drive.google.com/file/d/1xwwAuCXOdzLab0-nhCCaZ0imfJHVx0of/view?usp=sharing">Video</a> |
          <a href="https://drive.google.com/file/d/1n_TNCCo-95ut_TST6ZYyh7vEp6841nB3/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Prompt-to-Perception Pipeline</em></h3>
      <ul>
        <li>Built an end-to-end system with prompt refinement (<strong>T5-Small</strong> fine-tuning), <strong>Stable Diffusion 2.1</strong> synthesis, and <strong>SAM2</strong> segmentation. Achieved <strong>3× ROUGE score improvement</strong> and <strong>0.72</strong> prompt-image alignment.</li>
        <li>
          <a href="https://github.com/rah757/KarmaAI">Code</a> |
          <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Demo Video</a> |
          <a href="https://drive.google.com/file/d/1VSBz1eQgYxSWjtFrwq7wmQGh1h4VorDc/view?usp=sharing">Document</a>
        </li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Diseased Plant Detection: Comparative Deep Learning Study</em></h3>
      <ul>
        <li>Trained and evaluated <strong>ResNet50</strong>, <strong>VGG16</strong>, and a custom CNN for plant disease classification across <strong>38 classes</strong> on a large-scale plant disease dataset; benchmarked architectures on accuracy, training stability, and inference latency.</li>
        <li><em>PyTorch, ResNet50, VGG16, Transfer Learning</em></li>
        <li><a href="https://drive.google.com/file/d/1xIN8EN7gbcpu1FSt5s0U76oeCbJRlQta/view?usp=sharing">Document</a></li>
      </ul>
    </div>
  </div>

  <div class="cv-section-card">
    <h2>Certifications &amp; Awards</h2>
    <div class="cv-skills-category">
      <h3><em>Certifications</em></h3>
      <ul>
        <li><strong>NVIDIA DLI: CUDA C/C++ Fundamentals for Accelerated Computing</strong> - Score: 98%</li>
        <li><strong>MLOps: Machine Learning in Practice</strong> (Digital Badge, Nov 2024, Translational AI Center, ISU) - production ML pipeline with 99.9% uptime</li>
        <li><strong>Neural Radiance Fields &amp; Implicit Neural Representations</strong> (Digital Badge, May 2025, TrAC, ISU)</li>
        <li><strong>Complete Python With DSA Bootcamp by Krish Naik, Udemy</strong> (In progress)</li>
        <li><strong>Complete Machine Learning, NLP Bootcamp with MLOps and Deployment by Krish Naik, Udemy</strong> (In progress)</li>
      </ul>
    </div>
    <hr>
    <div class="cv-skills-category">
      <h3><em>Awards</em></h3>
      <ul>
        <li>
          <strong>3rd Place, Swan Hacks Spring 2026:</strong> <em>narrAIt</em> (agentic accessibility companion for macOS); received <strong>$1,200</strong> and an <strong>NVIDIA Jetson Orin Nano</strong> (per team member)<br>
          <a href="https://swan-hacks-spring-2026.devpost.com/">Hackathon</a> | <a href="https://devpost.com/software/celsius?ref_content=user-portfolio&ref_feature=in_progress">Project</a> | <a href="https://www.youtube.com/watch?v=K0vZgihtcT0&t=1s">Demo</a>
        </li>
        <li>
          <strong>Winner, Applied AI Challenge 2026:</strong> <em>AI-Assisted Making Award</em> ($1,000), for <strong>StudyBuddy</strong> - an AI-driven 3D-printable desk organizer system<br>
          <a href="https://drive.google.com/file/d/1T2295TaWJTAw5y4iPtA4K95SfgqSBv1v/view?usp=sharing">Certificate</a>
        </li>
        <li>
          <strong>Winner, Applied AI Challenge 2025:</strong> <em>Social Impact Award</em> ($1,500), for <strong>Karma AI</strong> - an assistive multimodal system serving <strong>500+ users with disabilities</strong><br>
          <a href="https://github.com/rah757/KarmaAI">Code</a> | <a href="https://www.canva.com/design/DAGjaj5kX14/2f9-IAWV0LZ4p8TBO0g-Xw/view?utlId=hd404c7e05e#4">Demo</a>
        </li>
        <li><strong>Constellation Prize</strong> (Top 4/30+ teams), Ivy Data Visualization &amp; Storytelling Case Competition, Ivy College of Business</li>
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
