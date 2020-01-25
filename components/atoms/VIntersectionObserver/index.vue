<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'
@Component
export default class extends Vue {
  private observer: IntersectionObserver | null = null

  mounted(): void {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) this.onInterSect()
    }, options)

    this.observer.observe(this.$el)
  }

  destroyed() {
    if (this.observer) this.observer.disconnect()
  }

  render() {
    return this.$slots.default ? this.$slots.default[0] : null
  }

  @Emit('intersect')
  private onInterSect(): void {
    // do nothing
  }
}
</script>
