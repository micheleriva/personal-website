<template lang="pug">
div
  .bgImage
  svg.blobCont
    image(xlink:href='/imgs/svgbg.jpg', mask='url(#mask)', width='100%', height='100%', preserveAspectRatio='xMidYMid slice')
    mask#mask(x='0', y='0')
      g(style='filter: url(#gooey)')
        circle.blob(cx='10%', cy='10%', r='80',  fill='white', stroke='white')
        circle.blob(cx='50%', cy='10%', r='40',  fill='white', stroke='white')
        circle.blob(cx='17%', cy='15%', r='70',  fill='white', stroke='white')
        circle.blob(cx='90%', cy='20%', r='120', fill='white', stroke='white')
        circle.blob(cx='30%', cy='25%', r='30',  fill='white', stroke='white')
        circle.blob(cx='50%', cy='60%', r='80',  fill='white', stroke='white')
        circle.blob(cx='70%', cy='90%', r='10',  fill='white', stroke='white')
        circle.blob(cx='90%', cy='60%', r='90',  fill='white', stroke='white')
        circle.blob(cx='30%', cy='90%', r='80',  fill='white', stroke='white')
        circle.blob(cx='10%', cy='10%', r='80',  fill='white', stroke='white')
        circle.blob(cx='50%', cy='10%', r='20',  fill='white', stroke='white')
        circle.blob(cx='17%', cy='15%', r='70',  fill='white', stroke='white')
        circle.blob(cx='40%', cy='20%', r='120', fill='white', stroke='white')
        circle.blob(cx='30%', cy='25%', r='30',  fill='white', stroke='white')
        circle.blob(cx='80%', cy='60%', r='80',  fill='white', stroke='white')
        circle.blob(cx='17%', cy='10%', r='100', fill='white', stroke='white')
        circle.blob(cx='40%', cy='60%', r='90',  fill='white', stroke='white')
        circle.blob(cx='10%', cy='50%', r='80',  fill='white', stroke='white')
    filter#gooey(height='130%')
      fegaussianblur(in='SourceGraphic', stdDeviation='15', result='blur')
      fecolormatrix(in='blur', mode='matrix', values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7', result='goo')

</template>

<script>
export default {
  name: "BubbleBg"
}
</script>

<style lang="scss" scoped>

  .bgImage {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: top;
    background-image: url('/imgs/svgbg.jpg');
    opacity: 0.1;
    filter: grayscale(70%);
    z-index: -1;
  }

  .blobCont {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }


  @for $i from 1 through 18 {
    $a : #{$i*90};
    $b : #{$i*90+360}; 
    
    .blob:nth-child(#{$i}) {
        animation: move#{$i} 80s infinite linear;
    }
    
    @keyframes move#{$i} {
      from {
        transform:rotate(#{$a}deg) translate3d( 200px ,0.1px, 0px) rotate(-#{$a}deg);
      }
      to {
        transform:rotate(#{$b}deg) translate3d( 200px ,0.1px, 0px) rotate(-#{$b}deg);
      }
    }
  }

</style>
