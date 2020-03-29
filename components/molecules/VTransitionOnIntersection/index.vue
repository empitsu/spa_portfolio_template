<template>
  <VIntersectionObserver
    :class="{ 'is-visible': isShow }"
    @intersect="onIntersect"
  >
    <slot>default</slot>
  </VIntersectionObserver>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VIntersectionObserver from '~/components/atoms/VIntersectionObserver/index.vue'
@Component({
  components: { VIntersectionObserver }
})
export default class extends Vue {
  public isShow = false

  public onIntersect(): void {
    this.isShow = true
  }
}
</script>
<style scoped>
.fadeInDown {
  transform: translateY(-50px);
  opacity: 0;
}
.is-visible {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.8s cubic-bezier(0, 0, 0.18, 1);
}
</style>
