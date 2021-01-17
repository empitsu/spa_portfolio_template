<template>
  <div>
    <VHeader
      :intersecting-id="intersectingId"
      @on-click-nav-btn="onClickNavBtn"
    />
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

          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div class="row">
              <div class="col-lg-7">
                <!-- eslint-disable vue/no-v-html -->
                <p v-html="portfolioData.about.description"></p>
                <!-- eslint-enable vue/no-v-html -->
              </div>
              <div class="col-lg-5">
                <img
                  loading="lazy"
                  :src="portfolioData.about.imagePath"
                  width="300"
                  height="300"
                  alt=""
                  class="image d-block mx-auto mt-5 rounded-circle"
                />
              </div>
            </div>
          </VTransitionOnIntersection>
        </div>
      </section>
    </VIntersectionObserver>
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
            <template
              v-for="(highlightItem, index) in portfolioData.highlights"
            >
              <VTransitionOnIntersection
                :key="`item${index}`"
                :animation-type="FADE_IN_UP"
                class="col-lg-6"
              >
                <div class="icon">
                  <i :class="`fa fa-${highlightItem.icon}`"></i>
                </div>
                <h3 class="heading mb-3 text-400">
                  {{ highlightItem.title }}
                </h3>
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="text-left description"
                  v-html="highlightItem.description"
                ></div>
                <!-- eslint-enable vue/no-v-html -->
              </VTransitionOnIntersection>
              <div
                v-if="index % 2 === 1"
                :key="`wrap${index}`"
                class="w-100"
              ></div>
            </template>
          </div>
        </div>
      </section>
    </VIntersectionObserver>
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
              <h2 class="title text-white">My Career Goals</h2>
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
              v-for="(
                skinllCategory, skillCategoryIndex
              ) in portfolioData.skills"
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
              <transition-group name="works-filter" tag="div">
                <div
                  v-for="workItem in activeWorks"
                  :key="workItem.id"
                  class="row border-bottom mb-4"
                >
                  <div class="col-lg-3">
                    <img
                      width="247"
                      height="185"
                      loading="lazy"
                      :src="workItem.thumbImagePath"
                      alt=""
                      class="mx-auto d-block mb-4"
                    />
                  </div>
                  <div class="col-lg-9">
                    <h3 class="works-title">
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
                        v-for="(
                          responsibilityName, responsibilityIndex
                        ) in workItem.responsibilities"
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
                    <VAccordion v-if="workItem.description">
                      <div v-html="workItem.description"></div>
                    </VAccordion>
                    <!-- eslint-enable vue/no-v-html -->
                  </div>
                </div>
              </transition-group>
            </VTransitionOnIntersection>
          </div>
        </div>
      </section>
    </VIntersectionObserver>
    <VIntersectionObserver
      :options="intersectionOptionsForNav"
      @intersect="onIntersect('articles')"
    >
      <section id="articles" ref="articles">
        <div class="container">
          <header class="text-center mb-2">
            <VTransitionOnIntersection :animation-type="FADE_IN_DOWN">
              <h2 class="title">Articles</h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div class="articles-block border p-4 mx-auto mb-4">
              <dl class="articles-item">
                <template
                  v-for="(articleItem, index) in portfolioData.articles"
                >
                  <dt :key="`title${index}`" class="articles-title">
                    <a
                      class="articles-link"
                      :href="articleItem.link"
                      target="_blank"
                      rel="noopener"
                      >{{ articleItem.text }}</a
                    >
                  </dt>
                  <dd
                    :key="`description${index}`"
                    class="articles-description border-bottom"
                  >
                    {{ articleItem.description }}
                  </dd>
                </template>
              </dl>
            </div>
          </VTransitionOnIntersection>
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
              <h2 class="title">Professional Experience</h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div id="experience-timeline">
              <div
                v-for="(historyItem, index) in portfolioData.history"
                :key="index"
                class="vtimeline-point"
              >
                <div class="vtimeline-block">
                  <div class="vtimeline-content border">
                    <h3>{{ historyItem.companyName }}</h3>
                    <p class="vtimeline-date">{{ historyItem.date }}</p>
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
            class="education-block border"
          >
            <h3>{{ educationItem.institutionName }}</h3>
            <span class="education-date">{{ educationItem.date }}</span>
            <h4>{{ educationItem.degree }}</h4>
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
              <h2 class="title">Licenses and Certification</h2>
            </VTransitionOnIntersection>
          </header>
          <VTransitionOnIntersection :animation-type="FADE_IN_UP">
            <div class="certifications-block border p-4 mx-auto mb-4">
              <ul class="certifications-list">
                <li
                  v-for="(licenseItem, index) in portfolioData.licenses"
                  :key="index"
                  class="border-bottom py-3"
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
              © 2021 {{ portfolioData.firstName }} {{ portfolioData.lastName }}.
              All rights reserved.
            </p>
          </div>
          <div class="col-12 mt-4">
            <p class="template-bootstrapious">
              The source code of this site is
              <a
                href="https://github.com/empitsu/spa_portfolio_template"
                rel="noopener noreferrer"
                target="_blank"
                >here</a
              >.
              <br />
              The design is based on
              <a
                href="https://www.bootstrapious.com"
                rel="noopener noreferrer"
                target="_blank"
                >Bootstrapious</a
              >.
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
  AnimationType,
} from '~/components/molecules/VTransitionOnIntersection/index.vue'
import VAccordion from '~/components/atoms/VAccordion/index.vue'
import VHeader, {
  IntersectingId,
} from '~/components/organisms/VHeader/index.vue'

interface SkillCategory {
  categoryTitle: string
  items: string[]
}

interface WorkItem {
  id: number
  categories: string[]
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
  GITHUB = 'github',
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T | null
}

@Component({
  components: {
    VIntersectionObserver,
    VTransitionOnIntersection,
    VAccordion,
    VHeader,
  },
})
export default class extends Vue {
  @Prop() portfolioData!: PortfolioData

  public intersectingId: IntersectingId = IntersectingId.INTRO
  public selectedWorksCategory: string = 'all'

  public get activeWorks(): WorkItem[] {
    return this.selectedWorksCategory === 'all'
      ? this.portfolioData.works
      : this.portfolioData.works.filter(({ categories }) =>
          categories.includes(this.selectedWorksCategory)
        )
  }

  public get worksCategoryList(): string[] {
    const categoriesAry = this.portfolioData.works.map(
      (item) => item.categories
    )
    return [...new Set(categoriesAry.flat())]
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

  public onClickNavBtn(targetId: string | null): void {
    if (targetId === null) return
    const target = this.$refs[targetId] as HTMLElement
    target.scrollIntoView({ behavior: 'smooth' })
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
@media only screen and (max-width: 768px) {
  .title {
    font-size: 2.3rem;
  }
}

.works-filter-enter-active {
  transition: all 1s;
}
.works-filter-enter,
.works-filter-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.works-filter-move {
  transition: transform 1s;
}
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
  color: #555;
  font-family: var(--fontFamily);
  font-weight: normal;
  font-size: 1.3rem;
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
  margin-left: 35px;
  background: #fff;
  padding: 15px;
  text-align: left;
}
.vtimeline-content ul {
  padding-left: 2rem;
  margin: 10px 0;
  color: #74808a;
  font-size: 0.9em;
}

.vtimeline-content h3 {
  font-family: var(--fontFamily);
  font-size: 1.3rem;
  font-weight: 400;
  display: inline-block;
}

.vtimeline-content h4 {
  font-family: var(--fontFamily);
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 15px 0;
}

.vtimeline-point {
  position: relative;
  display: block;
  margin-bottom: 30px;
}

.vtimeline-point::before {
  position: absolute;
  top: 17px;
  left: 0;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: 'Font Awesome 5 Free';
  font-size: 0.8rem;
  font-weight: 900;
  color: #ef5285;
  content: '\f111';
}

.vtimeline-icon {
  position: relative;
  float: left;
  z-index: 99;
  padding-top: 20px;
}

.vtimeline-icon i {
  display: block;
  font-size: 0.8rem;
  color: #ef5285;
}

.vtimeline-date {
  color: #74808a;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.education-block {
  max-width: 700px;
  margin: 0 auto 30px auto;
  padding: 15px;
  text-align: left;
}

.education-block h3 {
  font-family: var(--fontFamily);
  font-weight: 400;
  float: left;
  font-size: 1.3rem;
}

.education-block span {
  color: #74808a;
  float: right;
}

.education-block h4 {
  font-family: var(--fontFamily);
  color: #74808a;
  clear: both;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 15px 0;
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
  max-width: 850px;
}

#experience-timeline::before {
  position: absolute;
  content: '';
  top: 20px;
  bottom: 0;
  left: 5px;
  right: auto;
  height: 100%;
  width: 2px;
  background: #ef5285;
  z-index: 0;
}

.certifications-block {
  max-width: 700px;
}

.certifications-list {
  list-style: none;
  padding: 0;
}

.certification-name {
  font-weight: 500;
  margin: 0;
  color: #555;
}
.certification-date {
  color: #6c757d;
}

.articles-block {
  max-width: 700px;
}

.articles-title {
  padding: 0 0 12px 0;
}

.articles-link::after {
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font: normal normal normal 14px/1 FontAwesome;
  content: '\f08e';
  margin-left: 0.3rem;
}

.articles-description {
  margin-bottom: 20px;
  padding-bottom: 15px;
  color: #555;
}

.articles-description:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .education-block h3,
  .education-block span {
    float: none;
  }
}
</style>
