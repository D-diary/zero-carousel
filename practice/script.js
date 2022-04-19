;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement
      this.itemClassName = 'carousel_item'
      this.items = this.carouselElement.querySelectorAll('.carousel_item')

      this.totalItems = this.item.length
      this.current = 0
    }

    setEventListener() {
      this.prevButton = this.carouselElement.querySelector('.carousel_button--prev')
      this.nextButton = this.carouselElement.querySelector('.carousel_button--next')
    }
  }


  document.addEventListener('DOMContentLoaded',() => {
    const carouselElement = get('.carousel')
    const carousel = new Carousel(carouselElement)
  })
})()
