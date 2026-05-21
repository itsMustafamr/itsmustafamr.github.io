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
  <div class="homepage-content">
    <div class="homepage-text">
      <h1>{{ site.author.name }}</h1>
      {% if site.author.pronouns %}<p class="author__pronouns">{{ site.author.pronouns }}</p>{% endif %}
      {% if site.author.bio %}<p class="author__bio">{{ site.author.bio }}</p>{% endif %}
      <h2 class="about-heading">About me....</h2>
      <p>Hi! I'm Mustafa, a Ph.D. student in Computer Science at Iowa State University, advised by Dr. Adarsh Krishnamurthy and Dr. Aditya Balu. I work with Dr. Adarsh in the Idea Lab, and I also collaborate closely with Dr. Chinmay and Dr. Zanhong. My research focuses on developing innovative approaches to Neural Radiance Fields (NeRF) for high-quality 3D scene reconstruction, emphasizing advanced segmentation techniques and self-supervised learning methods.</p>

      <p>I'm currently working on LLM-to-CAD model generation—building systems that translate natural language (and sketches) into editable, parametric CAD models with feature histories, constraints, and B-Rep/STEP outputs. Beyond research, I actively enhance my coding and problem-solving skills through LeetCode and various programming challenges.</p>

      <p>I believe in continuously learning something new every day, balancing hard work with fun and creativity along the way.</p>

      <p>Check out my <a href="/projects/">Projects</a>, <a href="/teaching/">Teaching experience</a>, and <a href="/cv/">CV</a> for more details!</p>

      <p>
        <a href="https://drive.google.com/file/d/1NSafYfmzddpe32ft9-ZsD5zoZeAHjO4B/view?usp=sharing" class="btn btn--primary" target="_blank" rel="noopener" aria-label="⬇">
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
  </div>

  <div class="homepage-sections">
    <h2>Current Position</h2>
    <p>Research Assistant, lab of mechanics, Iowa State University</p>

    <h2>Recent updates</h2>
    <div class="updates-block">
      <ul>
        <li>May 21, 2026  Started <b>Jarvis-home</b> - my new fully local AI assistant project on NVIDIA Jetson Orin Nano; tracking active daily upgrades <a href="https://github.com/itsMustafamr/Jarvis-home">[repo]</a></li>
        <li>May 3, 2026  Won <b>3rd Place</b> at <a href="https://swan-hacks-spring-2026.devpost.com/">Swan Hacks Spring 2026</a> for <a href="https://devpost.com/software/celsius?ref_content=user-portfolio&ref_feature=in_progress"><em>narrAIt</em></a>; received an <b>NVIDIA Jetson Orin Nano</b></li>
        <li>Apr 18, 2026  <b>Winner, 2026 Applied AI Challenge</b> - AI-Assisted Making Award, for <em>Study Buddy</em> <a href="https://drive.google.com/file/d/1T2295TaWJTAw5y4iPtA4K95SfgqSBv1v/view?usp=sharing">[certificate]</a></li>
        <li>May 2026  Completed M.S. in Artificial Intelligence, Iowa State University - Thesis: <em>Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</em></li>
        <li>Apr 8, 2026  Passed final Master's defense for my M.S. in AI</li>
        <li>Mar 19, 2026  Submitted a paper to ICAD 2026 - CRAFT: Corrective and Robust Multi-Agent Framework for Text-to-Parametric CAD</li>
        <li>Mar 15, 2026  Presented poster at <b>NVIDIA GTC 2026</b>, San Jose, CA - <a href="https://drive.google.com/file/d/1-qs7N_WnKxkOgNpsu7IW01a5wmsZcqZM/view?usp=sharing">Natural Language to 3D Geometric CAD: A Multi-Agent LLM Framework for Design Synthesis Using Hierarchical Decomposition</a></li>
        <li>Jan 31, 2026  Paper accepted at AgriAI 2026 Workshop, AAAI 2026 - <a href="https://openreview.net/forum?id=f5XUPRARlG">Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</a></li>
        <li>Dec 18, 2025  Poster accepted at <b>NVIDIA GTC 2026</b> - Natural Language to 3D Geometric CAD: A Multi-Agent LLM Framework for Design Synthesis Using Hierarchical Decomposition</li>
        <li>Nov 21, 2025  Submitted a paper to Agri AI Workshop, AAAI 2026 - Benchmarking Tabular Foundation Models for Agricultural Yield Prediction</li>
        <li>Oct 30, 2025  Submitted a paper to IEEE CIC/CogMI/TPS 2025 - LLM as a Communicator (LAAC)</li>
        <li>Mar 15, 2025  Winner, Applied AI Challenge 2025: Karma AI – Social Impact Award</li>
        <li>Feb 23, 2025  Constellation Prize, (Top 4 out of 30+ teams), Ivy Data Visualization & Storytelling Case Competition, Ivy College of Business</li>
      </ul>
    </div>
  </div>
</div>

<style>
.homepage-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.homepage-content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
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

.about-heading {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
}

/* Responsive design */
@media (max-width: 768px) {
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
}
</style>
