<template lang="pug">
  nuxt-link(to="/").back-btn
    i.fas.fa-caret-left
    span &nbsp; Home
</template>

<script>
export default {
  name: "BackBtn"
}
</script>

<style lang="scss">
  @import '~/assets/main.scss';

  .back-btn {
    position: absolute;
    top: 4em;
    display: inline-block;
    text-decoration: none;
    color: $white;
    z-index: 1;
    transition: ease 0.5s;

    @include query(phone) {
      display: none;
    }

    span {
      font-weight: 700;
    }

    i {
      transition: ease 0.5s;
    }

    &:hover {
      i {
        transform: translateX(-5px);
      }
    }

    &::before {
      content: " ";
      position: absolute;
      top: 8px;
      left: 15px;
      background-color: rgba(0, 0, 0, 0.12941176470588237);
      width: 55px;
      height: 15px;
      z-index: -1;
      transition: ease 0.5s;
    }

    &:hover::before {
      transform: translate3d(5px, 5px, 0px);
    }
  }
</style>
