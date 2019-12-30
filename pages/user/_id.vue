<template>
  <div>
    <h1>user - this.name: {{ name }}</h1>
    <h1>user - _id: {{ $route.params.id }}</h1>
    <h1>user - ?name: {{ $route.query.name }}</h1>
  </div>
</template>

<script>
export default {
    data () {
        console.log('this', this)
        console.log('this.$attrs', this.$attrs)
        console.log('this.$options', this.$options)
        console.log('this.$props', this.$props)
        console.log('this.$route', this.$route)
        return {
            name: 'abc'
        }
    },
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    }
}
</script>
