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
      this.prevButton.addEventListener('click', () => { this.movePrev() })
      this.nextButton.addEventListener('click', () => { this.moveNext() })
    }

    moveCarousleTo() {
      let prev = this.current - 1
      let next = this.current + 1
    }

    moveNext() {
      if (this.current === this.totalItems - 1) {
        this.current = 0
      } else { 
        this.current++
      }
      this.moveCarouselTo()
    }

    movePrev() {
      if (this.current === 0) {
        this.current = this.totalItems - 1
      } else {
        this.current--
      }
      this.moveCarouselTo()

    }
  }



  document.addEventListener('DOMContentLoaded',() => {
    const carouselElement = get('.carousel')
    const carousel = new Carousel(carouselElement)
  })
})()
