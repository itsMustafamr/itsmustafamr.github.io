---
permalink: /
#title: "Academic Pages is a ready-to-fork GitHub Pages template for academic personal websites"
#title: "About Me... "
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<div class="homepage-layout">
  <section id="about" class="home-section homepage-content">
    <div class="homepage-text">
      <h1>{{ site.author.name }}</h1>
      {% if site.author.pronouns %}<p class="author__pronouns">{{ site.author.pronouns }}</p>{% endif %}
      {% if site.author.bio %}<p class="author__bio">{{ site.author.bio }}</p>{% endif %}
      <h2 class="about-heading">About me....</h2>
      <p>Hi! I'm Mustafa, a Ph.D. student in Computer Science at Iowa State University, advised by Dr. Adarsh Krishnamurthy and Dr. Aditya Balu. I work with Dr. Adarsh in the Idea Lab, and I also collaborate closely with Dr. Chinmay and Dr. Zanhong. My research focuses on developing innovative approaches to Neural Radiance Fields (NeRF) for high-quality 3D scene reconstruction, emphasizing advanced segmentation techniques and self-supervised learning methods.</p>

      <p>I'm currently working on LLM-to-CAD model generation—building systems that translate natural language (and sketches) into editable, parametric CAD models with feature histories, constraints, and B-Rep/STEP outputs. This line of work led to <a href="https://idealab-isu.github.io/CRAFT/">CRAFT</a>, a corrective multi-agent framework for text-to-parametric CAD, accepted at <b>ICLAD 2026</b>. I'm now extending it with <b>VISTA-CAD</b>, which iteratively refines parametric CAD programs using visual feedback (manuscript in preparation). Beyond research, I actively enhance my coding and problem-solving skills through LeetCode and various programming challenges.</p>

      <p>I believe in continuously learning something new every day, balancing hard work with fun and creativity along the way.</p>

      <p>Check out my <a href="/projects/">Projects</a>, <a href="/teaching/">Teaching experience</a>, and <a href="/cv/">CV</a> for more details!</p>

      <p>
        <a href="{{ site.data.navigation.cv_url }}" class="btn btn--primary" target="_blank" rel="noopener" aria-label="⬇">
          <i class="fa-solid fa-download" aria-hidden="true"> CV</i>
        </a>Download my curriculum vitae.
        <!-- Feel free to reach out for any discussion. -->
      </p>

      <p>You can reach out by using my contact info <a href="/contact">here</a>.</p>
  
    </div>



    <div class="homepage-avatar">
      {% if site.author.avatar contains "://" %}
        <img src="{{ site.author.avatar }}" alt="{{ site.author.name }}" class="profile-image">
      {% else %}
        <img src="{{ site.author.avatar | prepend: "/images/" | prepend: site.baseurl }}" alt="{{ site.author.name }}" class="profile-image">
      {% endif %}
      
      <div class="contact-info">
        {% if site.author.location %}
          <div class="contact-item">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            <span>{{ site.author.location }}</span>
          </div>
        {% endif %}
        
        {% if site.author.employer %}
          <div class="contact-item">
            <i class="fas fa-fw fa-building-columns" aria-hidden="true"></i>
            <span>{{ site.author.employer }}</span>
          </div>
        {% endif %}
        
        {% if site.author.email %}
          <div class="contact-item">
            <i class="fas fa-fw fa-envelope" aria-hidden="true"></i>
            <a href="mailto:{{ site.author.email }}">Email</a>
          </div>
        {% endif %}
        
        {% if site.author.googlescholar %}
          <div class="contact-item">
            <i class="ai ai-google-scholar" aria-hidden="true"></i>
            <a href="{{ site.author.googlescholar }}">Google Scholar</a>
          </div>
        {% endif %}
        
        {% if site.author.github %}
          <div class="contact-item">
            <i class="fab fa-fw fa-github" aria-hidden="true"></i>
            <a href="https://github.com/{{ site.author.github }}">GitHub</a>
          </div>
        {% endif %}
        
        {% if site.author.kaggle %}
          <div class="contact-item">
            <i class="fab fa-fw fa-kaggle" aria-hidden="true"></i>
            <a href="https://kaggle.com/{{ site.author.kaggle }}">Kaggle</a>
          </div>
        {% endif %}
      </div>
    </div>
  </section>

  <section id="updates" class="home-section homepage-sections">
    <h2>Current Position</h2>
    <p>Research Assistant, lab of mechanics, Iowa State University</p>

    <h2>Recent updates</h2>
    <div class="updates-block">
      <ul>
        <li>Aug 27, 2026  Launched the <b>CRAFT</b> project website - an interactive walkthrough of the framework, results, and generated CAD models <a href="https://idealab-isu.github.io/CRAFT/">[project page]</a></li>
        <li>Jul 30, 2026  Gave an <b>oral presentation</b> of <b>CRAFT</b> at <b>IEEE ICLAD 2026</b>, Stanford University, Stanford, CA (Jul 30-31) <a href="https://idealab-isu.github.io/CRAFT/">[project page]</a></li>
        <li>May 26, 2026  Paper accepted at <b>ICLAD 2026</b> (IEEE International Conference on LLM-Aided Design) - <a href="https://idealab-isu.github.io/CRAFT/">CRAFT: Corrective and Robust Multi-Agent Framework for Text-to-Parametric CAD</a></li>
        <li>May 21, 2026  Started <b>Jarvis-home</b> - my new fully local AI assistant project on NVIDIA Jetson Orin Nano; tracking active daily upgrades <a href="https://github.com/itsMustafamr/Jarvis-home">[repo]</a></li>
        <li>May 3, 2026  Won <b>3rd Place</b> at <a href="https://swan-hacks-spring-2026.devpost.com/">Swan Hacks Spring 2026</a> for <a href="https://devpost.com/software/celsius?ref_content=user-portfolio&ref_feature=in_progress"><em>narrAIt</em></a>; received an <b>NVIDIA Jetson Orin Nano</b></li>
        <li>Apr 18, 2026  <b>Winner, 2026 Applied AI Challenge</b> - AI-Assisted Making Award, for <em>Study Buddy</em> <a href="https://drive.google.com/file/d/1T2295TaWJTAw5y4iPtA4K95SfgqSBv1v/view?usp=sharing">[certificate]</a></li>
        <li>May 2026  Completed M.S. in Artificial Intelligence, Iowa State University - Thesis: <em>Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</em></li>
        <li>Apr 8, 2026  Passed final Master's defense for my M.S. in AI</li>
        <li>Mar 19, 2026  Submitted a paper to ICLAD 2026 - CRAFT: Corrective and Robust Multi-Agent Framework for Text-to-Parametric CAD</li>
        <li>Mar 15, 2026  Presented poster at <b>NVIDIA GTC 2026</b>, San Jose, CA - <a href="https://drive.google.com/file/d/1-qs7N_WnKxkOgNpsu7IW01a5wmsZcqZM/view?usp=sharing">Natural Language to 3D Geometric CAD: A Multi-Agent LLM Framework for Design Synthesis Using Hierarchical Decomposition</a></li>
        <li>Jan 31, 2026  Paper accepted at AgriAI 2026 Workshop, AAAI 2026 - <a href="https://openreview.net/forum?id=f5XUPRARlG">Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</a></li>
        <li>Dec 18, 2025  Poster accepted at <b>NVIDIA GTC 2026</b> - Natural Language to 3D Geometric CAD: A Multi-Agent LLM Framework for Design Synthesis Using Hierarchical Decomposition</li>
        <li>Nov 21, 2025  Submitted a paper to Agri AI Workshop, AAAI 2026 - Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</li>
        <li>Oct 30, 2025  Submitted a paper to IEEE CIC/CogMI/TPS 2025 - LLM as a Communicator (LAAC)</li>
        <li>Mar 15, 2025  Winner, Applied AI Challenge 2025: Karma AI – Social Impact Award</li>
        <li>Feb 23, 2025  Constellation Prize, (Top 4 out of 30+ teams), Ivy Data Visualization & Storytelling Case Competition, Ivy College of Business</li>
      </ul>
      <!-- Shown by home.js, which collapses the list to the newest few; without JS the full list stays visible. -->
      <button type="button" class="updates-toggle" aria-expanded="false" hidden>Show all updates</button>
    </div>
  </section>

  <!-- Projects and publications are pulled from the _projects / _publications collections,
       newest first, so they stay in sync with the full pages automatically. -->
  {% assign home_projects = site.projects | sort: 'date' | reverse %}
  <section id="projects" class="home-section">
    <div class="home-section__head">
      <h2>Projects</h2>
      <a class="home-section__more" href="{{ '/projects/' | relative_url }}">All {{ home_projects.size }} projects &rarr;</a>
    </div>
    <div class="home-projects">
      {% for project in home_projects limit: 6 %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </section>

  {% assign home_pubs = site.publications | sort: 'date' | reverse %}
  <section id="publications" class="home-section">
    <div class="home-section__head">
      <h2>Publications</h2>
      <a class="home-section__more" href="{{ '/publications/' | relative_url }}">All publications &rarr;</a>
    </div>
    <div class="home-pubs">
      {% for pub in home_pubs limit: 3 %}
        <article class="home-pub">
          <h3 class="home-pub__title"><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></h3>
          <p class="home-pub__venue"><i>{{ pub.venue }}</i> &middot; {{ pub.date | date: "%Y" }}</p>
          {% if pub.excerpt %}<p class="home-pub__summary">{{ pub.excerpt | strip_html | truncatewords: 40 }}</p>{% endif %}
          <p class="home-pub__links">
            {% if pub.paperurl %}<a href="{{ pub.paperurl }}" target="_blank" rel="noopener">Paper</a>{% endif %}
            {% if pub.codeurl %}<a href="{{ pub.codeurl }}" target="_blank" rel="noopener">Code</a>{% endif %}
            {% if pub.projecturl %}<a href="{{ pub.projecturl }}" target="_blank" rel="noopener">Project page</a>{% endif %}
            <a href="{{ pub.url | relative_url }}">Details</a>
          </p>
        </article>
      {% endfor %}
    </div>
  </section>

  <!-- Condensed from the CV page; keep in sync when the CV changes. -->
  <section id="experience" class="home-section">
    <div class="home-section__head">
      <h2>Experience &amp; Education</h2>
      <a class="home-section__more" href="{{ '/cv/' | relative_url }}">Full CV &rarr;</a>
    </div>

    <h3 class="home-subhead">Experience</h3>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Aug 2026 - Dec 2026</span>
      <div class="cv-edu-details">
        <strong>AI Research Engineering Intern, Translational Research</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-building"></i> Multiple Myeloma Research Foundation (MMRF) - Remote, Norwalk, CT</span>
        <ul>
          <li>Building an agentic AI research copilot for the MMRF <strong>Virtual Lab</strong> platform (Gen3 data commons on <strong>AWS</strong>), turning natural-language research questions into cohort discovery and analysis over <strong>multi-omic and clinical myeloma datasets</strong> with LLMs, RAG, and platform APIs.</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Aug 2024 - Present</span>
      <div class="cv-edu-details">
        <strong>Graduate Research Assistant</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University - Translational AI Center (IdeaLab), Ames, IA</span>
        <ul>
          <li><strong>CRAFT</strong> (IEEE ICLAD 2026): six-agent <strong>LangGraph</strong> pipeline that turns natural language into parametric OpenSCAD, with RAG over 500+ CAD artifacts; raised compilation success from <strong>68% to 89%</strong> and schema pass rate from <strong>73% to 94%</strong>.</li>
          <li><strong>VISTA-CAD</strong>: refining parametric CAD programs with visual feedback (manuscript in preparation).</li>
          <li>TabPFN forecasting on industrial IoT (R² 0.881, ~100× faster training), NeRF pipelines, and distributed ML on university HPC (SLURM).</li>
        </ul>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Aug 2023 - Aug 2024</span>
      <div class="cv-edu-details">
        <strong>Graduate Teaching Assistant</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Department of Computer Science</span>
        <ul>
          <li><strong>COM S 309</strong> (Software Development Practices): mentored 8 teams (40+ students) building full-stack apps with Spring Boot, React, and MySQL.</li>
          <li><strong>COM S 336</strong> (Computer Graphics): weekly office hours for 60+ students on OpenGL, shaders, and ray tracing; 4.8/5.0 teaching rating.</li>
          <li><a href="{{ '/teaching/' | relative_url }}">Teaching details &rarr;</a></li>
        </ul>
      </div>
    </div>

    <h3 class="home-subhead">Education</h3>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Aug 2023 - Present</span>
      <div class="cv-edu-details">
        <strong>Ph.D. Candidate in Computer Science</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Ames, IA &middot; GPA 3.93/4.00</span>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Aug 2023 - May 2026</span>
      <div class="cv-edu-details">
        <strong>M.S. in Artificial Intelligence</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> Iowa State University, Ames, IA &middot; GPA 3.92/4.00</span>
      </div>
    </div>
    <div class="cv-edu-item">
      <span class="cv-edu-years">Jul 2018 - Jul 2022</span>
      <div class="cv-edu-details">
        <strong>B.S. in Electrical and Electronics Engineering</strong><br>
        <span class="cv-edu-institution"><i class="fa fa-university"></i> APJ Abdul Kalam Technological University, Kerala, India &middot; Dean's List</span>
      </div>
    </div>
  </section>

  <section id="skills" class="home-section">
    <div class="home-section__head">
      <h2>Skills</h2>
      <a class="home-section__more" href="{{ '/cv/' | relative_url }}">Full CV &rarr;</a>
    </div>
    <div class="home-skills">
      <div class="home-skills__group">
        <h3>LLM Systems</h3>
        <ul><li>Multi-Agent Orchestration</li><li>RAG Pipelines</li><li>LangGraph</li><li>LangChain</li><li>Prompt Engineering</li><li>Fine-tuning &amp; Post-Training</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>ML / AI Frameworks</h3>
        <ul><li>PyTorch</li><li>TensorFlow</li><li>JAX</li><li>Hugging Face Transformers</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>HPC &amp; Distributed</h3>
        <ul><li>SLURM</li><li>MPI</li><li>OpenMP</li><li>CUDA</li><li>Multi-GPU / Multi-Node Training</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>Edge AI</h3>
        <ul><li>NVIDIA Jetson Orin Nano</li><li>llama.cpp</li><li>whisper.cpp</li><li>Ollama</li><li>On-Device Inference</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>Languages</h3>
        <ul><li>Python</li><li>C++</li><li>CUDA C/C++</li><li>SQL</li><li>Java</li><li>JavaScript</li><li>Swift</li><li>Bash</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>Infrastructure &amp; Tools</h3>
        <ul><li>Docker</li><li>Kubernetes</li><li>AWS</li><li>GCP</li><li>MLflow</li><li>Weights &amp; Biases</li><li>Git</li><li>CI/CD</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>CAD &amp; Engineering</h3>
        <ul><li>OpenSCAD</li><li>SolidWorks</li><li>ANSYS</li><li>FEA</li><li>CFD</li></ul>
      </div>
      <div class="home-skills__group">
        <h3>Data &amp; Visualization</h3>
        <ul><li>Pandas</li><li>NumPy</li><li>Matplotlib</li><li>Plotly</li><li>ParaView</li><li>VTK</li></ul>
      </div>
    </div>
  </section>

  <section id="contact" class="home-section">
    <div class="home-section__head">
      <h2>Contact</h2>
      <a class="home-section__more" href="{{ '/contact/' | relative_url }}">All contact details &rarr;</a>
    </div>
    <p>Email is the quickest way to reach me.</p>
    <div class="home-contact">
      {% if site.author.email %}<a class="home-btn home-btn--primary" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>{% endif %}
      <a class="home-btn home-btn--primary" href="{{ site.data.navigation.cv_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-download" aria-hidden="true"></i> CV</a>
      <a class="home-btn" href="https://linkedin.com/in/mohammed-musthafa-r/" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
      {% if site.author.github %}<a class="home-btn" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>{% endif %}
      {% if site.author.googlescholar %}<a class="home-btn" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>{% endif %}
    </div>
  </section>
</div>

<script src="{{ '/assets/js/home.js' | relative_url }}" defer></script>

<style>
.homepage-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Sections */
.home-section {
  /* land each section just under the fixed nav bar (height set by nav.js); the -1px
     tucks the section's divider under the bar's own border so only one line shows */
  scroll-margin-top: calc(var(--masthead-h, 70px) - 1px);
}

.home-section + .home-section {
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid var(--global-border-color);
}

.home-section__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-bottom: 20px;
}

.home-section__head h2 {
  margin: 0;
  font-size: 1.8em;
  font-weight: bold;
}

.home-section__more {
  font-size: 0.95em;
  white-space: nowrap;
}

.home-subhead {
  margin: 28px 0 16px;
  font-size: 1.2em;
}

.home-section__head + .home-subhead {
  margin-top: 0;
}

/* equal-width date badges so the entries line up */
.home-section .cv-edu-years {
  flex: 0 0 auto;
  width: 12.5em;
  padding: 6px 10px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.homepage-content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.homepage-text {
  flex: 1;
}

.homepage-text h1 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 2.5em;
  font-weight: bold;
}

.author__pronouns {
  margin: 0 0 15px 0;
  font-size: 1.1em;
  color: var(--global-text-color);
  opacity: 0.8;
}

.author__bio {
  margin: 0 0 20px 0;
  font-size: 1.1em;
  line-height: 1.6;
}

.homepage-avatar {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--global-border-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  min-width: 200px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;
  color: var(--global-text-color);
}

.contact-item i {
  width: 16px;
  text-align: center;
  color: var(--global-link-color);
}

.contact-item a {
  color: var(--global-link-color);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.homepage-sections h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.8em;
  font-weight: bold;
}

.homepage-sections h2:first-child {
  margin-top: 0;
}

.updates-block {
  background-color: var(--global-bg-color);
  border-left: 4px solid var(--global-link-color);
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.updates-block ul {
  margin: 0;
  padding-left: 20px;
}

.updates-block li {
  margin-bottom: 10px;
  line-height: 1.5;
}

.updates-block.is-collapsed li:nth-child(n+6) {
  display: none;
}

.updates-toggle {
  margin-top: 6px;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: 0.95em;
  color: var(--global-link-color);
  cursor: pointer;
}

.updates-toggle:hover {
  text-decoration: underline;
}

.about-heading {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
}

/* Projects: reuse the /projects/ cards in a grid */
.home-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 28px;
}

.home-projects .project-card {
  margin-bottom: 0 !important; /* card ships inline spacing for the stacked layout */
}

/* Publications */
.home-pub {
  padding: 18px 0;
  border-bottom: 1px solid var(--global-border-color);
}

.home-pub:first-child {
  padding-top: 0;
}

.home-pub:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.home-pub__title {
  margin: 0 0 6px;
  font-size: 1.15em;
  line-height: 1.35;
}

.home-pub__venue {
  margin: 0 0 8px;
  color: var(--global-text-color-light);
  font-size: 0.95em;
}

.home-pub__summary {
  margin: 0 0 8px;
  font-size: 0.95em;
  line-height: 1.55;
}

.home-pub__links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
}

/* Skills */
.home-skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 24px;
}

.home-skills__group h3 {
  margin: 0 0 10px;
  font-size: 1em;
}

.home-skills__group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-skills .home-skills__group li {
  margin: 0;
  padding: 3px 10px;
  border: 1px solid var(--global-border-color);
  border-radius: 999px;
  font-size: 0.85em;
}

/* Contact */
.home-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Own button style: the theme's .btn--primary renders as bare text in dark mode.
   Link rules below are prefixed with .homepage-layout to outrank custom.css's .page__content a. */
.homepage-layout a.home-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--global-border-color);
  border-radius: 999px;
  font-size: 0.9em;
  font-weight: bold;
  color: var(--global-text-color);
  text-decoration: none;
}

.homepage-layout a.home-btn:hover {
  border-color: var(--global-link-color);
  color: var(--global-link-color);
  text-decoration: none;
}

.homepage-layout a.home-btn--primary,
.homepage-layout a.home-btn--primary:hover {
  background: var(--global-link-color);
  border-color: var(--global-link-color);
  color: #061018;
}

.homepage-layout a.home-btn--primary:hover {
  filter: brightness(1.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .homepage-layout {
    padding: 16px;
  }

  .homepage-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .homepage-text h1 {
    font-size: 2em;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
  }
  
  .contact-info {
    align-items: center;
    text-align: center;
  }
  
  .contact-item {
    justify-content: center;
  }

  .home-section__head h2 {
    font-size: 1.5em;
  }

  /* stack the date badge above the entry on narrow screens */
  .home-section .cv-edu-item {
    flex-direction: column;
    gap: 8px;
  }

  .home-section .cv-edu-years {
    align-self: flex-start;
    width: auto;
    margin-right: 0;
  }
}
</style>
