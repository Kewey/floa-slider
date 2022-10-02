import './style.css'
import { setupSlider } from './slider.js'

document.querySelector('#app').innerHTML = `<div id="slider"></div>`

setupSlider(document.querySelector('#slider'))
