import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    isEven: (state) => (state.counter % 2 === 0 ? "is EVEN" : "is ODD")
  },
  actions: {
    increment() {
      return this.counter++
    }
  }
})
