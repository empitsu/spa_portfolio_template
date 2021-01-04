<template>
  <VIntersectionObserver @intersect="onIntersect">
    <div class="waiting" :class="classes">
      <slot>default</slot>
    </div>
  </VIntersectionObserver>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VIntersectionObserver from '~/components/atoms/VIntersectionObserver/index.vue'

export type AnimationType = 'slideInUp' | 'fadeInDown' | 'fadeInUp' | undefined

@Component({
  components: { VIntersectionObserver },
})
export default class extends Vue {
  @Prop({ type: String, default: 'slideInUp' }) animationType?: AnimationType

  public isShow = false

  public get classes(): Array<
    { [k: string]: boolean } | AnimationType | boolean
  > {
    const animationClass = this.isShow ? this.animationType : false
    return [{ 'animate-enter': this.isShow }, animationClass]
  }

  public onIntersect(): void {
    this.isShow = true
  }
}
</script>
<style scoped>
.waiting {
  visibility: hidden;
}
.animate-enter {
  visibility: visible;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 50px, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
}
</style>
