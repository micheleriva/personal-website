<template lang="pug">
  transition(name="fade")
    nuxt
</template>

<script>


export default {
  name: "DefaultLayout",
}
</script>


<style lang="scss">

@import '~/assets/main.scss';

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>