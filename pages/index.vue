<template>
  <VMainTemplate :portfolio-data="portfolioData" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import VMainTemplate, {
  PortfolioData,
} from '~/components/templates/VMainTemplate/index.vue'

@Component({
  components: {
    VMainTemplate,
  },
  async asyncData(
    ctx: Context
  ): Promise<{
    portfolioData: PortfolioData
  }> {
    const result = await ctx.$axios.$get(ctx.$config.portfolioDataPath)
    return {
      portfolioData: result,
    }
  },
})
export default class extends Vue {
  portfolioData = {} as PortfolioData
}
</script>
