<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
import progressBar from 'progressbar.js'

const emit = defineEmits(['loader-complete'])

onMounted(() => {
  gsap.to('.tp', {
    strokeDashoffset: '0',
    ease: 'none',
    duration: 4,
    onComplete: () => {
      emit('loader-complete')
    },
  })
  gsap.to('.tp', { fillOpacity: 1, duration: 2.3 }, '-=1.3')

  const loader = new progressBar.Line('#progressbar', {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 2000,
    delay: 750,
    trailWidth: 1.7,
    color: '#FFC107',
    trailColor: '#191922',
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (_, bar) => {
      bar.setText(`${Math.round(bar.value() * 100)} %`)
    },
  })
  loader.text.style.marginTop = '24px'
  loader.animate(1)
})
</script>

<template>
  <section class="w-full h-full centralise">
    <div class="w-[94%] md:w-[98%] h-[96%] flex-col centralise sidebar-background pb-24">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="64" stroke="#000" class="text-center">
          <text class="texto np-font" x="10px" y="50px" fill="#999" stroke="#e6e6e6" strokeWidth="3" fontSize="50px">
            <tspan class="tp">c</tspan>
            <tspan class="tp" dx="1px">le</tspan>
            <tspan class="tp" dx="1px">if]</tspan>
            <tspan class="tp" dx="1px">s</tspan>
            <tspan class="tp" dx="15px">8+</tspan>
            <tspan class="tp" dx="1px">uf]</tspan>
            <tspan class="tp" dx="1px">n</tspan>
          </text>
        </svg>
      </div>

      <div id="progressbar" class="english" />
    </div>
  </section>
</template>

<style type="text/css">
.tp {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  fill-opacity: 0;
}
.np-font {
  font-family: Abhinav;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
}
</style>
