<template>
    <div v-if="data" class="flex flex-col gap-y-[42px] lg:gap-x-[20px] justify-between items-center lg:items-start lg:flex-row flex-1">
        <Widget
          v-for="product in data" :key="product.id"
          :title="`This product ${product.action}`"
          :subtitle="`${product.type === 'carbon' ? product.amount + 'kgs of' : product.amount} ${product.type}`"
          :product-type="product.type"
          :badge-color="getBadgeColor(product.type)"
        />
      </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex';
import Widget from '../components/Widget.vue'
import { headerBackground, headerColor } from '../utils/WidgetHeader'
import type { BadgeColorType, ProductDataType } from '../types/ProductData'

export default {
  components: { Widget },
  setup() {
    const data = ref<ProductDataType[] | undefined>([])

    const store = useStore()

    const fetchProductData = async () => {
      return await store.dispatch('fetchProductData')
    }

    onMounted(async () => {
      try {
        await fetchProductData()
        data.value = store.state.productData

      } catch (error) {
        console.error('Error fetching product data', error)

      }
    })

    const badgeColor = computed<BadgeColorType>(() => store.state.badgeColor)

    const getBadgeColor = (product: ProductDataType['type'] | undefined): string => {
      if (product) {
        return badgeColor.value[product]
      }
      return '';
    };

    return { data, headerBackground, headerColor, getBadgeColor }
  }
}
</script>