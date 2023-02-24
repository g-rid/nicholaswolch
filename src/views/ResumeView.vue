<template>
  <div class="resume-container">
    <section class="resume-header">
      <h1>Nicholas Wolch</h1>
      <blockquote>
        <span>Santa Rosa, CA <strong> | </strong> </span>
        <span
          ><a href="mailto:hey@nicholaswolch.com">hey@nicholaswolch.com</a>
          <strong> | </strong>
        </span>
        <span
          ><a href="https://www.linkedin.com/in/nicholaswolch/" target="_blank"
            >LinkedIn</a
          >
          <strong> | </strong>
        </span>
        <span
          ><a href="https://github.com/g-rid" target="_blank">GitHub</a></span
        >
      </blockquote>
    </section>
    <section>
      <h2>Skills</h2>
      <ul>
        <li>
          Front-End Web Developer with experience in HTML, CSS, SCSS,
          JavaScript, TypeScript, VueJs, PHP, and Git
        </li>
        <li>
          Graphic Design background with training in Adobe Photoshop and
          Illustrator
        </li>
        <li>Automated testing experience with the Cypress testing framework</li>
        <li>UX/UI Specialist focused on Human Centered Design</li>
        <li>Experience with Agile project management methodologies</li>
        <li>
          Excellent communication skills, with a knack for explaining complex
          technical concepts
        </li>
        <li>Adaptable and flexible team player, with a sense of humor</li>
        <li>Extremely organized, with excellent time management skills</li>
      </ul>
    </section>
    <section>
      <h2>Experience</h2>
      <div class="experience-title">
        <h3>January 2019 – October 2022</h3>
        <h3>Web Developer, <i>RevenueWell Systems / PBHS Inc</i></h3>
      </div>
      <ul>
        <li>
          Helped create a VueJs Admin Interface to allow customers to customize
          their website
        </li>
        <li>
          Ensured software quality by creating E2E automated testing with the
          Cypress framework
        </li>
        <li>
          Utilized UX/UI principles to design intuitive admin features which
          reduced friction for users
        </li>
        <li>
          Created pixel-perfect custom WordPress websites for individual clients
          from design mockups
        </li>
        <li>
          Made client sites more accessible by routinely auditing for W3C
          compliance and usability
        </li>
        <li>
          Enhanced company marketing by maintaining our extensive pbhs.com
          website portfolio
        </li>
        <li>
          Built an internal WordPress plugin to generate marketing landing pages
          which lead to specialized designs with great conversions and little
          setup
        </li>
      </ul>
      <div class="experience-title">
        <h3>January 2018 – 2020 (Part-time)</h3>
        <h3>Freelance Web Designer/Developer, <i>Grid Web Design</i></h3>
      </div>
      <ul>
        <li>
          Created and maintained websites for small business and entrepreneurs
        </li>
        <li>
          Generated full site design mockups which excited clients and engaged
          end users
        </li>
        <li>
          Implemented websites for clients using CMS including WordPress,
          Shopify, and Webflow
        </li>
        <li>
          Experience calling public API’s to integrate data onto clients sites
        </li>
        <li>
          Maintained SEO best practices including Google Analytics training
        </li>
        <li>Provided free web development consulting to clients in need</li>
      </ul>
    </section>
    <section>
      <h2>Education</h2>
      <h3>
        December 2020 - AS, Computer Science: Web Full-Stack Developer -
        <i>Santa Rosa Junior College</i>
      </h3>
      <h3>
        May 2018 - Web Fundamentals Certificate -
        <i>Santa Rosa Junior College</i>
      </h3>
    </section>
  </div>
</template>

<style scoped>
.resume-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
}

.resume-header {
  text-align: center;
}

section {
  width: 100%;
}
.experience-title {
  padding-top: 2rem;
}

h2 {
  padding: 2rem 0;
  font-size: 2.5rem;
}

h2 + .experience-title,
h2 + ul {
  padding-top: 0;
}

h3 {
  padding: 0.5rem 0;
}

h2,
h3 {
  text-align: left;
  font-weight: 500;
  line-height: 1.3;
}

h1,
h2,
h3,
blockquote {
  font-family: "Lora", serif;
}

ul {
  padding-top: 1.5rem;
  padding-inline-start: 3rem;
  list-style-type: circle;
}

p,
li {
  font-size: 1.4rem;
}

@media (max-width: 768px) {
  .resume-container {
    padding: 2rem;
  }
  blockquote span {
    display: block;
  }
  blockquote strong {
    display: none;
  }
  h2,
  h3 {
    text-align: center;
  }
  ul {
    padding-inline-start: 1rem;
  }
}
</style>
