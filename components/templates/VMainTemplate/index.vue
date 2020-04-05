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
              <li
                v-for="(navName, index) in navigationAry"
                :key="index"
                class="nav-item"
              >
                <a
                  :href="`#${navName}`"
                  class="nav-link link-scroll"
                  :class="{ active: navName === intersectingId }"
                  @click.prevent="onClickNavBtn"
                  >{{ convertToCamelCase(navName) }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Intro Image-->
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('intro')"
    >
      <section id="intro" ref="intro" class="intro-section pb-2">
        <div class="container text-center">
          <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
            <h1 class="text-shadow mb-5">
              {{ portfolioData.firstName }} {{ portfolioData.lastName }}
            </h1>
          </VTransitionOnIntersection>
          <VTransitionOnIntersection :animation-type="SLIDE_IN_UP">
            <p class="h3 text-shadow text-400">
              {{ portfolioData.positionName }}
            </p>
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
    <!-- About-->
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('about')"
    >
      <section id="about" ref="about" class="about-section">
        <div class="container">
          <header class="text-center">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">About me</h2>
            </VTransitionOnIntersection>
          </header>
          <div class="row">
            <VTransitionOnIntersection :animation-type="FADE_IN_UP">
              <div class="col-lg-6">
                <!-- eslint-disable vue/no-v-html -->
                <p v-html="portfolioData.about.description"></p>
                <!-- eslint-enable vue/no-v-html -->
              </div>
            </VTransitionOnIntersection>
            <VTransitionOnIntersection :animation-type="FADE_IN_UP">
              <div class="col-lg-6">
                <div class="col-sm-6 mx-auto mt-5">
                  <img
                    :src="portfolioData.about.imagePath"
                    alt="This is me"
                    class="image rounded-circle img-fluid"
                  />
                </div>
              </div>
            </VTransitionOnIntersection>
          </div>
        </div>
      </section>
    </VIntersectionObserver>
    <!-- Service-->
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('highlights')"
    >
      <section
        id="highlights"
        ref="highlights"
        class="bg-gradient services-section"
      >
        <div class="container">
          <header class="text-center">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">Highlights</h2>
            </VTransitionOnIntersection>
          </header>
          <div class="row services text-center">
            <VTransitionOnIntersection
              v-for="(highlightItem, index) in portfolioData.highlights"
              :key="index"
              :animation-type="FADE_IN_UP"
              class="col-lg-4"
            >
              <div class="icon">
                <i :class="`fa fa-${highlightItem.icon}`"></i>
              </div>
              <h3 class="heading mb-3 text-400">
                {{ highlightItem.title }}
              </h3>
              <!-- eslint-disable vue/no-v-html -->
              <p
                class="text-left description"
                v-html="highlightItem.description"
              ></p>
              <!-- eslint-enable vue/no-v-html -->
            </VTransitionOnIntersection>
          </div>
        </div>
      </section>
    </VIntersectionObserver>
    <!-- Vision -->
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('vision')"
    >
      <section
        id="vision"
        ref="vision"
        data-dir="up"
        class="vision-section text-white parallax"
      >
        <div class="container text-center">
          <header>
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title text-white">
                My Career Goals
              </h2>
            </VTransitionOnIntersection>
          </header>
          <!-- eslint-disable vue/no-v-html -->
          <VTransitionOnIntersection :animation-type="SLIDE_IN_UP">
            <p
              class="text-shadow text-400 text-white"
              v-html="portfolioData.careerGoal"
            ></p>
          </VTransitionOnIntersection>
          <!-- eslint-enable vue/no-v-html -->
        </div>
        <div class="dark-mask"></div>
      </section>
    </VIntersectionObserver>
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('skills')"
    >
      <section id="skills" ref="skills">
        <div class="container">
          <header class="text-center mb-2">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">Skills</h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div
              v-for="(skinllCategory,
              skillCategoryIndex) in portfolioData.skills"
              :key="skillCategoryIndex"
            >
              <h3>{{ skinllCategory.categoryTitle }}</h3>
              <ul>
                <li v-for="(item, index) in skinllCategory.items" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
    <!--
    *** works IMAGE ***
    _________________________________________________________
    -->
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('works')"
    >
      <section id="works" ref="works">
        <div class="container">
          <div class="col-sm-12">
            <div class="mb-5 text-center">
              <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
                <h2 class="title">My work</h2>
              </VTransitionOnIntersection>
              <VTransitionOnIntersection :animation-type="FADE_IN_UP">
                <p class="lead">
                  I have worked on dozens of projects so I have picked only the
                  latest for you.
                </p>
              </VTransitionOnIntersection>
            </div>
            <VTransitionOnIntersection :animation-type="FADE_IN_UP">
              <ul id="filter" class="works-category-btn-list">
                <li
                  class="works-category-btn-list__item"
                  :class="{ active: 'all' === selectedWorksCategory }"
                >
                  <button
                    class="works-category-btn-list__btn"
                    type="button"
                    @click="onClickWorksFilterBtn('all')"
                  >
                    All
                  </button>
                </li>
                <li
                  v-for="(categoryName, index) in worksCategoryList"
                  :key="index"
                  class="works-category-btn-list__item"
                  :class="{ active: categoryName === selectedWorksCategory }"
                >
                  <button
                    type="button"
                    class="works-category-btn-list__btn"
                    @click="onClickWorksFilterBtn(categoryName)"
                  >
                    {{ categoryName }}
                  </button>
                </li>
              </ul>
            </VTransitionOnIntersection>
            <!-- Reference detail-->
            <VTransitionOnIntersection :animation-type="FADE_IN_UP">
              <div
                v-for="(workItem, index) in portfolioData.works"
                :key="index"
                data-category="frontend"
                class="works-item"
              >
                <div class="works-thumbnail">
                  <img
                    :src="workItem.thumbImagePath"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="works-description">
                  <h3 class="h4 works-title">
                    {{ workItem.title }}
                  </h3>
                  <p>
                    <span class="project-date">{{ workItem.date }}</span>
                  </p>
                  <dl
                    v-if="workItem.responsibilities"
                    class="works-responsibility"
                  >
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
                  <!-- eslint-disable vue/no-v-html -->
                  <VAccordion v-if="workItem.description" class="clearfix">
                    <div v-html="workItem.description"></div>
                  </VAccordion>
                  <!-- eslint-enable vue/no-v-html -->
                </div>
              </div>
            </VTransitionOnIntersection>
          </div>
        </div>
      </section>
    </VIntersectionObserver>
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('experience')"
    >
      <section id="experience" ref="experience">
        <div class="container">
          <header class="text-center mb-2">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">
                Professional Experience
              </h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div id="experience-timeline">
              <div
                v-for="(historyItem, index) in portfolioData.history"
                :key="index"
                class="vtimeline-point"
              >
                <div class="vtimeline-icon">
                  <i class="fa fa-map-marker"></i>
                </div>
                <div class="vtimeline-block">
                  <span class="vtimeline-date">{{ historyItem.date }}</span>
                  <div class="vtimeline-content">
                    <h3>{{ historyItem.companyName }}</h3>
                    <h4>{{ historyItem.position }}</h4>
                    <!-- eslint-disable vue/no-v-html -->
                    <div v-html="historyItem.description"></div>
                    <!-- eslint-enable vue/no-v-html -->
                  </div>
                </div>
              </div>
            </div>
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('education')"
    >
      <section id="education" ref="education">
        <div class="container">
          <header class="text-center mb-2">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">Education</h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection
            v-for="(educationItem, index) in portfolioData.education"
            :key="index"
            :animation-type="FADE_IN_UP"
            class="education-block"
          >
            <h3>{{ educationItem.institutionName }}</h3>
            <span class="education-date">{{ educationItem.date }}</span>
            <h4>{{ educationItem.date }}</h4>
            <!-- eslint-disable vue/no-v-html -->

            <p v-html="educationItem.description"></p>
            <!-- eslint-enable vue/no-v-html -->
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('certification')"
    >
      <section id="certification" ref="certification">
        <div class="container">
          <header class="text-center mb-2">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">
                Licenses and Certification
              </h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
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
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
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
import VIntersectionObserver from '~/components/atoms/VIntersectionObserver/index.vue'
import VTransitionOnIntersection, {
  AnimationType
} from '~/components/molecules/VTransitionOnIntersection/index.vue'
import VAccordion from '~/components/molecules/VAccordion/index.vue'

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

enum IntersectingId {
  INTRO = 'intro',
  ABOUT = 'about',
  HIGHLIGHTS = 'highlights',
  SKILLS = 'skills',
  VISION = 'vision',
  EXPERIENCE = 'experience',
  WORKS = 'works',
  CERTIFICATION = 'certification',
  EDUCATION = 'education'
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T | null
}

@Component({
  components: { VIntersectionObserver, VTransitionOnIntersection, VAccordion }
})
export default class extends Vue {
  @Prop() portfolioData!: PortfolioData

  public intersectingId: IntersectingId = IntersectingId.INTRO
  public selectedWorksCategory: string = 'all'

  public get worksCategoryList(): string[] {
    const categoryAry = this.portfolioData.works.map((item) => item.category)
    return [...new Set(categoryAry)]
  }

  public get navigationAry() {
    return [
      IntersectingId.INTRO,
      IntersectingId.ABOUT,
      IntersectingId.HIGHLIGHTS,
      IntersectingId.SKILLS,
      IntersectingId.VISION,
      IntersectingId.EXPERIENCE,
      IntersectingId.WORKS,
      IntersectingId.CERTIFICATION,
      IntersectingId.EDUCATION
    ]
  }

  public get FADE_IN_DOWN(): AnimationType {
    return 'fadeInDown'
  }

  public get FADE_IN_UP(): AnimationType {
    return 'fadeInUp'
  }

  public get SLIDE_IN_UP(): AnimationType {
    return 'slideInUp'
  }

  public get intersectionOptionsForNav(): IntersectionObserverInit {
    return { root: null, rootMargin: '-50% 0px', threshold: 0 }
  }

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

  public convertToCamelCase(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
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

  public onClickWorksFilterBtn(categoryName: string): void {
    this.selectedWorksCategory = categoryName
  }

  public onIntersect(targetId: IntersectingId): void {
    this.intersectingId = targetId
  }
}
</script>
<style scoped>
.works-category-btn-list {
  text-align: center;
  margin: 20px 0;
  padding: 0;
}
.works-category-btn-list__item {
  display: inline-block;
  list-style-type: none;
  font-family: 'Roboto Slab', serif;
  border-top: solid 1px #ef5285;
  border-bottom: solid 1px #ef5285;
  margin: 0 10px 20px;
  transition: all 0.3s;
}

.works-category-btn-list__btn {
  display: inline-block;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #ef5285;
  outline: none;
  transition: all 0.3s;
}

.works-category-btn-list__item.active .works-category-btn-list__btn,
.works-category-btn-list__item:hover .works-category-btn-list__btn {
  color: #fff;
  text-decoration: none;
  background: #ef5285;
}

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

/* TODO:コンポーネント化*/
.fadeInDown {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
