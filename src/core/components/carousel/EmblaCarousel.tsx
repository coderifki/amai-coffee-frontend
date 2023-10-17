import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

type PropType = {
  options?: EmblaOptionsType & { autoplay?: number }
  slides: ReactNode[]
}

export const EmblaCarousel = (props: PropType) => {
  const { options = {}, slides } = props
  const [emblaRef] = useEmblaCarousel({
    ...options,
  })

  return (
    <>
      <style>
        {`
          .embla {
            overflow: hidden;
            position: relative;
          }

          .embla__container {
            display: flex;
            will-change: transform;
          }

          .embla__slide {
            min-width: 100%;
          }

          .embla__slide img {
            width: 100%;
            height: auto;
            max-height: auto;
            max-width: 100%; 
          }

          .embla__button {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            font-size: 1.5em;
            line-height: 1;
          }

          .embla__dot {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            width: 10px;
            height: 10px;
            margin: 0 4px;
            border-radius: 50%;
          }

          .embla__dot--is-active {
            background-color: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default EmblaCarousel
