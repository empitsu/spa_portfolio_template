<template>
  <div :class="`${$options.name} py-3`">
    <button
      v-if="!isOpen"
      :class="`${$options.name}__trigger-btn`"
      :aria-expanded="isOpen"
      @click="onClickToggleBtn"
    >
      <span :class="`${$options.name}__trigger-btn-text-normal`">See more</span>
    </button>
    <transition name="slide">
      <div v-show="isOpen" :class="`${$options.name}__body`">
        <slot>default</slot>
      </div>
    </transition>
    <button
      v-if="isOpen"
      :class="`${$options.name}__trigger-btn`"
      :aria-expanded="isOpen"
      @click="onClickToggleBtn"
    >
      <span :class="`${$options.name}__trigger-btn-text-active`"
        >Show less</span
      >
    </button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'v-accordion',
})
export default class extends Vue {
  public isOpen = false

  public onClickToggleBtn(): void {
    this.isOpen = !this.isOpen
  }
}
</script>
<style scoped>
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.v-accordion__trigger-btn {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  color: #ef5285;
  text-align: right;
}
.v-accordion__trigger-btn:hover {
  text-decoration: underline;
}
.v-accordion__trigger-btn::before {
  display: inline-block;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\f107';
  margin-right: 5px;
}
.v-accordion__trigger-btn[aria-expanded='true']::before {
  display: inline-block;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\f106';
}
</style>
