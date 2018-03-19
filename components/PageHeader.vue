<template>
  <div class="page-header jumbotron">
    <div class="container">
      <h3>{{ title }}</h3>
      <p class="page-header__desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  .page-header__desc {
    margin: 1rem 0;
    font-size: 1.15rem;
    color: #424242;
  }
}
</style>
