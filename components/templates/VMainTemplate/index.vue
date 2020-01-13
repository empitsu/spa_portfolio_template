<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarcollapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div id="navbarcollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  href="#intro"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Intro</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#about"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#highlights"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Highlights</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#vision"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Vision</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#skills"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Skills</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#works"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >My work</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#experience"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Experience</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#education"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Education</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#certification"
                  class="nav-link link-scroll"
                  @click.prevent="onClickNavBtn"
                  >Certification</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Intro Image-->
    <section id="intro" ref="intro" class="intro-section pb-2">
      <div class="container text-center">
        <h1 data-animate="fadeInDown" class="text-shadow mb-5">
          {{ portfolioData.firstName }} {{ portfolioData.lastName }}
        </h1>
        <p data-animate="slideInUp" class="h3 text-shadow text-400">
          {{ portfolioData.positionName }}
        </p>
      </div>
    </section>
    <!-- About-->
    <section id="about" ref="about" class="about-section">
      <div class="container">
        <header class="text-center">
          <h2 data-animate="fadeInDown" class="title">About me</h2>
        </header>
        <div class="row">
          <div data-animate="fadeInUp" class="col-lg-6">
            <!-- eslint-disable vue/no-v-html -->
            <p v-html="portfolioData.about.description"></p>
          </div>
          <div data-animate="fadeInUp" class="col-lg-6">
            <div class="col-sm-6 mx-auto mt-5">
              <img
                :src="portfolioData.about.imagePath"
                alt="This is me"
                class="image rounded-circle img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service-->
    <section
      id="highlights"
      ref="highlights"
      class="bg-gradient services-section"
    >
      <div class="container">
        <header class="text-center">
          <h2 data-animate="fadeInDown" class="title">Highlights</h2>
        </header>
        <div class="row services text-center">
          <div
            v-for="(highlightItem, index) in portfolioData.highlights"
            :key="index"
            data-animate="fadeInUp"
            class="col-lg-4"
          >
            <div class="icon">
              <i :class="`fa fa-${highlightItem.icon}`"></i>
            </div>
            <h3 class="heading mb-3 text-400">
              {{ highlightItem.title }}
            </h3>

            <p
              class="text-left description"
              v-html="highlightItem.description"
            ></p>
            <!-- eslint-disable vue/no-v-html -->
          </div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section
      id="vision"
      ref="vision"
      data-dir="up"
      class="vision-section text-white parallax"
    >
      <div class="container text-center">
        <header>
          <h2 data-animate="fadeInDown" class="title text-white">
            My Career Goals
          </h2>
        </header>
        <p
          data-animate="slideInUp"
          class="text-shadow text-400 animated slideInUp text-white"
          v-html="portfolioData.careerGoal"
        ></p>
      </div>
      <div class="dark-mask"></div>
    </section>
    <section id="skills" ref="skills">
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">Skills</h2>
        </header>
        <div data-animate="fadeInUp">
          <div
            v-for="(skinllCategory, skillCategoryIndex) in portfolioData.skills"
            :key="skillCategoryIndex"
          >
            <h3>{{ skinllCategory.categoryTitle }}</h3>
            <ul>
              <li v-for="(item, index) in skinllCategory.items" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--
    *** works IMAGE ***
    _________________________________________________________
    -->
    <section id="works" ref="works">
      <div class="container">
        <div class="col-sm-12">
          <div class="mb-5 text-center">
            <h2 data-animate="fadeInUp" class="title">My work</h2>
            <p data-animate="fadeInUp" class="lead">
              I have worked on dozens of projects so I have picked only the
              latest for you.
            </p>
          </div>
          <ul id="filter" data-animate="fadeInUp">
            <li class="active"><a href="#" data-filter="all">All</a></li>
            <li><a href="#" data-filter="frontend">Front-end</a></li>
            <li><a href="#" data-filter="design">Design</a></li>
            <li><a href="#" data-filter="management">Management</a></li>
            <li><a href="#" data-filter="other">Other</a></li>
          </ul>
          <!-- Reference detail-->
          <div
            v-for="(workItem, index) in portfolioData.works"
            :key="index"
            data-category="frontend"
            class="works-item"
          >
            <div class="works-thumbnail">
              <img :src="workItem.thumbImagePath" alt="" class="img-fluid" />
            </div>
            <div class="works-description">
              <h3 class="h4 works-title">
                {{ workItem.title }}
              </h3>
              <p>
                <span class="project-date">{{ workItem.date }}</span>
              </p>
              <dl v-if="workItem.responsibilities" class="works-responsibility">
                <dt>Assigned process</dt>
                <dd
                  v-for="(responsibilityName,
                  responsibilityIndex) in workItem.responsibilities"
                  :key="responsibilityIndex"
                >
                  {{ responsibilityName }}
                </dd>
              </dl>
              <dl v-if="workItem.roles" class="works-role">
                <dt>Responsibilities</dt>
                <dd
                  v-for="(roleName, roleIndex) in workItem.roles"
                  :key="roleIndex"
                >
                  {{ roleName }}
                </dd>
              </dl>
              <dl v-if="workItem.techStacks" class="works-tech">
                <dt>Tech stack</dt>
                <dd
                  v-for="(techName, techIndex) in workItem.techStacks"
                  :key="techIndex"
                >
                  {{ techName }}
                </dd>
              </dl>
              <div class="works-detail-wrap clearfix">
                <div
                  id="works-tabelog-webpack"
                  class="works-detail collapse"
                  v-html="workItem.description"
                ></div>
                <button
                  v-if="workItem.description"
                  class="works-btn-more btn-link"
                  data-toggle="collapse"
                  data-target="#works-tabelog-webpack"
                >
                  <span class="works-btn-more-text-normal">See more</span
                  ><span class="works-btn-more-text-active">Show less</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="experience" ref="experience">
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">Professional Experience</h2>
        </header>
        <div id="experience-timeline" data-animate="fadeInUp">
          <div
            v-for="(historyItem, index) in portfolioData.history"
            :key="index"
            class="vtimeline-point"
          >
            <div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>
            <div class="vtimeline-block">
              <span class="vtimeline-date">{{ historyItem.date }}</span>
              <div class="vtimeline-content">
                <h3>{{ historyItem.companyName }}</h3>
                <h4>{{ historyItem.position }}</h4>
                <div v-html="historyItem.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="education" ref="education">
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">Education</h2>
        </header>
        <div
          v-for="(educationItem, index) in portfolioData.education"
          :key="index"
          class="education-block"
        >
          <h3>{{ educationItem.institutionName }}</h3>
          <span class="education-date">{{ educationItem.date }}</span>
          <h4>{{ educationItem.date }}</h4>
          <p v-html="educationItem.description"></p>
        </div>
      </div>
    </section>
    <section id="certification" ref="certification">
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">
            Licenses and Certification
          </h2>
        </header>
        <div class="certifications-block">
          <ul class="certifications-list">
            <li
              v-for="(licenseItem, index) in portfolioData.licenses"
              :key="index"
              class="certifications-item"
            >
              <p class="certification-name">
                {{ licenseItem.title }}
              </p>
              <span class="certification-date">{{ licenseItem.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-lg-left">
            <p class="social">
              <a
                v-for="(linkItem, index) in portfolioData.links"
                :key="index"
                :href="linkItem.url"
                :class="`${linkItem.type}`"
                target="_blank"
                ><i
                  :class="`fa fa-${linkIconName(linkItem.type)}`"
                  aria-hidden="true"
                ></i
              ></a>
            </p>
          </div>
          <!-- /.6-->
          <div class="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
            <p>
              © 2019 {{ portfolioData.firstName }} {{ portfolioData.lastName }}.
              All rights reserved.
            </p>
          </div>
          <div class="col-12 mt-4">
            <p class="template-bootstrapious">
              Designed by
              <a href="https://www.bootstrapious.com">Bootstrapious</a>
              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import smoothscroll from 'smoothscroll-polyfill'

interface SkillCategory {
  categoryTitle: string
  items: string[]
}

interface WorkItem {
  category: string
  title: string
  date: string
  responsibilities: string[]
  roles: string[]
  techStacks: string[]
  description: string
}

export interface PortfolioData {
  positionName: string
  skills: SkillCategory[]
  lastName: string
  firstName: string
  licenses: {
    date: string
    title: string
  }[]
  highlights: {
    description: string
    title: string
  }[]
  careerGoal: string
  works: WorkItem[]
  education: {
    date: string
    institutionName: string
    description: string
    department: string
  }[]
  about: {
    imagePath: string
    description: string
  }
  links: {
    type: string
    url: string
  }[]
  history: {
    date: string
    companyName: string
    description: string
    position: string
  }[]
}

enum LinkType {
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  GITHUB = 'github'
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T | null
}

@Component
export default class extends Vue {
  @Prop() portfolioData!: PortfolioData

  public mounted() {
    if (process.client) {
      smoothscroll.polyfill()
      // for debug
      type TempWindow = {
        __forceSmoothScrollPolyfill__: boolean
      }
      ;((window as unknown) as TempWindow).__forceSmoothScrollPolyfill__ = true
    }
  }

  public linkIconName(type: LinkType): string {
    switch (type) {
      case LinkType.EMAIL:
        return 'envelope'
      case LinkType.INSTAGRAM:
        return LinkType.INSTAGRAM
      case LinkType.LINKEDIN:
        return LinkType.LINKEDIN
      case LinkType.GITHUB:
        return LinkType.GITHUB
      default:
        // eslint-disable-next-line no-case-declarations
        const _exhaustiveCheck: never = type
        return _exhaustiveCheck
    }
  }

  public onClickNavBtn(e: HTMLElementEvent<HTMLAnchorElement>): void {
    if (e.target) {
      const targetId = e.target.hash.replace(/^#/, '')
      const target = this.$refs[targetId] as HTMLElement
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
<style scoped>
.works-title {
  font-family: 'Roboto', sans-serif;
  color: #555;
  font-weight: normal;
}
.works-item {
  position: relative;
  border-bottom: 1px solid #dcd9d9;
  padding: 0 0 20px 0;
  margin-bottom: 20px;
}
.works-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
}
.works-description {
  padding-left: 230px;
}
.works-detail-wrap {
  padding-top: 1rem;
}
.works-detail.is-hidden {
  display: none;
}
.works-btn-more {
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
}
.works-btn-more::before {
  display: inline-block;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\f107';
}
.works-btn-more[aria-expanded='true']::before {
  display: inline-block;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\f106';
}

.works-btn-more:not([aria-expanded='true']) .works-btn-more-text-active {
  display: none;
}
.works-btn-more:not([aria-expanded='true']) .works-btn-more-text-normal {
  display: inline;
}
.works-btn-more[aria-expanded='true'] .works-btn-more-text-active {
  display: inline;
}
.works-btn-more[aria-expanded='true'] .works-btn-more-text-normal {
  display: none;
}

.project-date {
  color: #74808a;
}

.works-responsibility,
.works-role,
.works-tech {
  margin: 0 auto;
}
.works-responsibility dt,
.works-role dt,
.works-tech dt {
  color: #555;
}

.works-responsibility dd,
.works-role dd,
.works-tech dd {
  display: inline-block;
  margin: 6px;
  padding: 3px 7px;
  background: rgb(230, 230, 233);
  list-style: none;
  cursor: default;
  font-size: 1em;
}

#intro {
  background: url(~assets/images/home.jpg) center bottom no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#vision {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(~assets/images/parallax.jpg);
}
.showcase {
  justify-content: center;
}

.vtimeline-content {
  margin-left: 350px;
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 15px;
  border-radius: 3px;
  text-align: left;
}
.vtimeline-content ul {
  padding-left: 2rem;
  margin: 10px 0;
  color: #74808a;
  font-size: 0.9em;
}

.vtimeline-content h3 {
  font-size: 1.5em;
  font-weight: 300;
  color: #374054;
  display: inline-block;
  margin: 0;
}

.vtimeline-content h4 {
  font-size: 1.2em;
  font-weight: 300;
  color: #7e8890;
  margin: 0 0 15px 0;
}

.vtimeline-content p {
  color: #74808a;
  font-size: 0.9em;
  margin: 0;
}

.vtimeline-point {
  position: relative;
  display: block;
  vertical-align: top;
  margin-bottom: 30px;
}

.vtimeline-icon {
  position: relative;
  color: #fff;
  width: 50px;
  height: 50px;
  background: #3498db;
  border-radius: 50%;
  float: left;
  z-index: 99;
  margin-left: 280px;
}

.vtimeline-icon i {
  display: block;
  font-size: 2em;
  margin-top: 10px;
}

.vtimeline-date {
  width: 260px;
  text-align: right;
  position: absolute;
  left: 0;
  top: 10px;
  font-weight: 300;
  color: #374054;
}

.education-block {
  max-width: 700px;
  margin: 0 auto 30px auto;
  padding: 15px;
  border: 1px solid #dcd9d9;
  text-align: left;
}

.education-block h3 {
  font-weight: 500;
  float: left;
  margin: 0;
  color: #374054;
}

.education-block span {
  color: #74808a;
  float: right;
}

.education-block h4 {
  color: #74808a;
  clear: both;
  font-weight: 500;
  margin: 0 0 15px 0;
}

.education-block p,
.education-block ul {
  margin: 0;
  color: #74808a;
  font-size: 0.9em;
}

.education-block ul {
  padding: 0 0 0 15px;
}

#skills {
  text-align: center;
}
#skills h3 {
  text-align: center;
  margin: 30px 0;
  color: #555;
}
#skills ul {
  display: block;
  margin: 0 auto;
  padding: 0;
  max-width: 800px;
}

#skills li {
  display: inline-block;
  margin: 7px;
  padding: 5px 10px;
  background: rgb(230, 230, 233);
  list-style: none;
  cursor: default;
  font-size: 1.2em;
}

#experience {
  padding: 50px 15px;
  text-align: center;
}
#experience-timeline {
  margin: 30px auto 0 auto;
  position: relative;
  max-width: 1000px;
}

#experience-timeline:before {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 303px;
  right: auto;
  height: 100%;
  width: 3px;
  background: #3498db;
  z-index: 0;
}

#experience-timeline:after {
  position: absolute;
  content: '';
  width: 3px;
  height: 40px;
  background: #3498db;
  background: linear-gradient(to bottom, #3498db, rgba(52, 152, 219, 0));
  top: 100%;
  left: 303px;
}

.certifications-block {
  max-width: 700px;
  border: 1px solid #dcd9d9;
  border-radius: 3px;
  margin: 0 auto 30px auto;
  padding: 30px;
  text-align: left;
}

.certifications-list {
  list-style: none;
  padding: 0;
}

.certifications-item {
  padding: 16px 0 12px;
  border-bottom: 1px solid #dcd9d9;
}
.certification-name {
  font-weight: 500;
  margin: 0;
  color: #555;
}
.certification-date {
  color: #6c757d;
}

@media only screen and (max-width: 750px) {
  #experience-timeline:before,
  #experience-timeline:after {
    left: 23px;
  }

  .vtimeline-date {
    width: auto;
    text-align: left;
    position: relative;
    margin-bottom: 15px;
    display: block;
    margin-left: 70px;
  }

  .vtimeline-icon {
    margin-left: 0;
  }

  .vtimeline-content {
    margin-left: 70px;
  }
}

@media only screen and (max-width: 768px) {
  .education-block h3,
  .education-block span {
    float: none;
  }
}
</style>
