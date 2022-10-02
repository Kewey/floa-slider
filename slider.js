import Splide from '@splidejs/splide'
// Default theme
import '@splidejs/splide/css'
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    perPage: 2,
    perMove: 1,
  }).mount()
})

const floaHistory = [
  {
    date: '2022',
    actions: [
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
    ],
  },
  {
    date: '2021',
    actions: [
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
    ],
  },
  {
    date: '2020',
    actions: [
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
    ],
  },
  {
    date: '2019',
    actions: [
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
      {
        title: 'action',
        description: 'lorem ipsum',
      },
    ],
  },
]

export function setupSlider(element) {
  const makeSlide = (date) => `
  <li class="splide__slide">
    <div class="platform">
      <span class="date">${date}</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 225.392 230.371">
        <defs>
          <style>
            .a {
              fill: #216ccf;
            }
            .b {
              fill: #fff;
            }
            .is-platform-active {
              fill: url("#a");
            }
          </style>
          <radialGradient id="a" cx="0.5" cy="0.5" r="0.345" gradientTransform="matrix(0.564, -0.825, 0.957, 0.654, -0.26, 0.586)" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#64f172"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        </defs>
        <g transform="translate(-528.332 -488.291)"><path class="a" d="M-8.425,11.181l5.364-7.119,118.647,39.9,35.14,116.056-5.55,7.365L19.615,139.621Z" transform="matrix(0.799, -0.602, 0.602, 0.799, 532.616, 579.914)"/><path class="b" d="M-8.4,11.146,115.586,43.962l29.8,123.14L19.615,139.621Z" transform="matrix(0.799, -0.602, 0.602, 0.799, 532.616, 571.044)"/><path class="is-platform-active" d="M-8.4,11.146,120.335,45.219l30.943,127.856L20.688,144.542Z" transform="matrix(0.799, -0.602, 0.602, 0.799, 528.466, 570.431)"/></g>
      </svg>
    </div>
  </li>`

  const slides = floaHistory.map((year) => makeSlide(year.date))

  const setSlider = () => {
    element.innerHTML = `
    <section class="splide" aria-labelledby="carousel-heading">
      <div class="splide__track">
        <ul class="splide__list">
          ${slides.join('')}
        </ul>
      </div>
    </section>`
  }

  setSlider()
}
