<template>
  <styled-select 
    class="year-selector separated-caret"
    :options="options"
    :value="parseInt(year)"
    @input="selected"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'year-select',
  computed: {
    options () {
      return this.years
      .slice() 
      .sort((a, b) => b - a) 
      .map((x) => { return { key: x, value: x } })
    },
    ...mapState({
      years: state => state.money.years,
      year: state => state.route.params.year
    })
  },
  mounted () {
    this.getYears()
  },
  methods: {
    selected (year) {
      this.$router.push({ name: 'home', params: { year } })
    },
    ...mapActions([
      'getYears'
    ])
  },
}
</script>

<style lang="scss" scoped>
  .list-bare {
    z-index: 2000;
    border-top-width: calc(1px * calc(1 - 0));
    border-bottom-width: calc(1px * 0);
    width: 11rem;
  }
</style>