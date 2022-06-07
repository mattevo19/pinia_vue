import { defineStore } from "pinia"

export const useNamesStore = defineStore("names", {
  state: () => ({
    firstName: "matt",
    lastName: "evans"
  }),
  getters: {
    fullName: (state) =>
      state.firstName.charAt(0).toUpperCase() +
      state.firstName.slice(1) +
      " " +
      state.lastName.charAt(0).toUpperCase() +
      state.lastName.slice(1)
  }
})
