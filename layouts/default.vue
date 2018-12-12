<template lang="pug">
  div
    nuxt
</template>

<script>


export default {
  name: "DefaultLayout",
}
</script>


<style lang="scss">

@import '~/assets/main.scss';

.page-enter-active,
.page-leave-active,
.page-enter-active::before,
.page-enter-active::after,
.page-leave-active::before,
.page-leave-active::after {
  transition: transform 650ms cubic-bezier(.17,.67,.54,.98);
}

.page-enter-active::before,
.page-leave-active::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
.page-enter-active::before {
  left: -417px;
}
.page-leave-active::before {
  right: -417px;
}
.page-enter-active::after,
.page-leave-active::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $black;
}
.page-leave::before {
  transform: translate3d(calc(-100% - 417px), 0, 0) scaleX(-1);
}
.page-leave-to::before {
  transform: scaleX(-1);
}
.page-leave::after {
  transform: translate3d(calc(-100% - 417px), 0, 0);
}
.page-enter-to::before,
.page-enter-to::after {
  transform: translate3d(calc(100% + 417px), 0, 0);
}

</style>