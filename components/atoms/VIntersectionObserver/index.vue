<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'
import 'intersection-observer'

@Component
export default class extends Vue {
  @Prop() options?: IntersectionObserverInit

  private observer: IntersectionObserver | null = null

  mounted(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) this.onInterSect()
    }, this.options)

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
