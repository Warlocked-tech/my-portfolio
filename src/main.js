import './style.css'

document.querySelector('#app').innerHTML = `
<nav aria-label="Main navigation">
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</nav>
<section id="center">
  <div>
    <h1>Iori Yamauchi</h1>
    <p>Hi, I’m Iori Yamauchi, a fourth-year BS Information Technology student and aspiring software engineer. I enjoy building websites and turning ideas into projects, while exploring app and game development. Through personal and school projects, I’m building my skills and learning something new with every challenge.</p>
    <a class="primary-link" href="#projects">View projects</a>
  </div>
</section>

<section id="projects">
  <h2>Projects</h2>
  <p>A selection of my personal and school projects.</p>

  <article class="project-card">
    <img
      class="project-image"
      src="/images/ced-vault-dashboard.png"
      alt="CED-Vault landing page showing the document management system introduction and login options"
      loading="lazy"
    >
    <h3>CED-Vault</h3>
    <p>
      An academic document management system with role-based access,
      document tracking, audit logs, and anomaly detection.
    </p>
    <p>
      My role: Full-stack developer. I developed access controls,
      dashboards, document workflows, and integrated a Python-based
      security monitoring module.
    </p>
    <p>
      Technologies: Laravel, Livewire, Tailwind CSS, MySQL, Python
    </p>
  </article>

  <article class="project-card project-card--mobile">
    <img
      class="project-image project-image--mobile"
      src="/images/abysstunes-home.png"
      alt="abysstunes landing page"
      loading="lazy"
    >
    <div class="project-details">
      <h3>AbyssTunes</h3>
      <p>
        A mood-based Android music app with a deep-sea theme.
      </p>
      <p>
        Built the interface, mood selection, playlist navigation, and whale and bubble animations.
      </p>
      <p>
        Technologies: Kotlin, Jetpack Compose, Jetpack Navigation
      </p>
    </div>
  </article>

  <article class="project-card">
    <img
      class="project-image"
      src="/images/deep-sea-ocean.png"
      alt="deep-sea-ocean screenshot"
      loading="lazy"
    >
    <h3>Deep Sea Ocean</h3>
    <p>
      A web application with real-time messaging, hosted on Microsoft Azure.
    </p>
    <p>
      Built the frontend, integrated Cloud Firestore for live updates, and configured an Azure Windows Server VM with IIS to host the site.
    </p>
    <p>
      Technologies: HTML, CSS, JavaScript, Cloud Firestore, Azure Virtual Machines, IIS
    </p>
  </article>
</section>

<section id="skills">
  <h2>Skills & Tools</h2>
  <ul class="skills-list">
    <li>HTML & CSS</li>
    <li>JavaScript</li>
    <li>PHP & Laravel</li>
    <li>MySQL</li>
    <li>Kotlin & Jetpack Compose</li>
    <li>Git & GitHub</li>
    <li>Azure Virtual Machines & IIS</li>
    <li>Figma</li>
  </ul>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>Interested in working together? Get in touch.</p>

  <div class="contact-links">
    <a href="mailto:ioriyamauchi24@gmail.com">Email me</a>
    <a href="https://github.com/Warlocked-tech">GitHub</a>
    <a href="/iori-yamauchi-resume.pdf" download>Download resume</a>
  </div>
</section>

`