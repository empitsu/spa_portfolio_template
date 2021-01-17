<template>
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
</template>
<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'

export enum IntersectingId {
  INTRO = 'intro',
  ABOUT = 'about',
  HIGHLIGHTS = 'highlights',
  SKILLS = 'skills',
  VISION = 'vision',
  EXPERIENCE = 'experience',
  WORKS = 'works',
  ARTICLES = 'articles',
  CERTIFICATION = 'certification',
  EDUCATION = 'education',
}

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T | null
}

@Component({
  name: 'v-header',
})
export default class extends Vue {
  @Prop() intersectingId!: IntersectingId

  public get navigationAry() {
    return [
      IntersectingId.INTRO,
      IntersectingId.ABOUT,
      IntersectingId.HIGHLIGHTS,
      IntersectingId.VISION,
      IntersectingId.SKILLS,
      IntersectingId.WORKS,
      IntersectingId.ARTICLES,
      IntersectingId.EXPERIENCE,
      IntersectingId.EDUCATION,
      IntersectingId.CERTIFICATION,
    ]
  }

  public convertToCamelCase(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  @Emit()
  public onClickNavBtn(e: HTMLElementEvent<HTMLAnchorElement>): string | null {
    if (e.target) {
      const targetId = e.target.hash.replace(/^#/, '')
      return targetId
    }
    return null
  }
}
</script>
