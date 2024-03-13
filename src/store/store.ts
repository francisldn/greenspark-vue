// store.ts
import type { ProductDataType } from '@/types/ProductData'
import { createStore, type Commit } from 'vuex'
import type { BadgeColorType } from '@/types/ProductData'
import { getData } from '@/api/data.api'
import { BadgeColor } from '@/utils/BadgeColor'
// Define the root state interface
interface RootState {
  selectedProduct: ProductDataType['type'] | undefined
  setSelectedProduct: (product: ProductDataType['type']) => void
  productData: ProductDataType[]
  setProductData: (data: ProductDataType[]) => void
  badgeColor: BadgeColorType
  setBadgeColor: (color: BadgeColorType) => void
}

type Actions = {
  fetchProductData(context: { commit: Commit }): Promise<void>
}

// Create a new Vuex store instance
export default createStore<RootState>({
  state: {
    selectedProduct: undefined,
    setSelectedProduct: () => {},
    productData: [],
    setProductData: () => {},
    badgeColor: {},
    setBadgeColor: () => {}
  },
  mutations: {
    setSelectedProduct(state: RootState, product: ProductDataType['type']) {
      state.selectedProduct = product
    },
    setBadgeColor(state: RootState, color: BadgeColorType) {
      state.badgeColor = {
        ...state.badgeColor,
        ...color
      }
    },
    setProductData(state: RootState, data: ProductDataType[]) {
      state.productData = data
    }
  },
  actions: {
    async fetchProductData({ commit }) {
      // Simulate an asynchronous action (e.g., fetching data)
      const data = await getData()
      if (data && data.length > 0) {
        commit('setProductData', data)
        commit(
          'setBadgeColor',
          data?.reduce((acc, item) => {
            return {
              ...acc,
              [item.type]: BadgeColor[item.selectedColor.toUpperCase() as keyof typeof BadgeColor]
            }
          }, {} as BadgeColorType)
        )
        commit('setSelectedProduct', data.find((item) => item.active)?.type)
      }
    }
  } as Actions
})
