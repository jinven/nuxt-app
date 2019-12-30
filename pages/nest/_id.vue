<template>
  <div>
    <h1>nest - this.name: {{ name }}</h1>
    <h1>nest - _id: {{ $route.params.id }}</h1>
    <h1>nest - ?name: {{ $route.query.name }}</h1>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'abc'
        }
    },
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    }
}
</script>
