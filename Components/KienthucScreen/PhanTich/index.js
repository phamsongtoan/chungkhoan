import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import CardItem from '../../ComponentsInner/CardIteam'
import TitleLine from '../../ComponentsInner/TitleLine'

const PhanTich = ({ className, title = 'Bộ cơ bản' }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  }
  return (
    <div className={cn(styles.phantich, className, 'mb-5 pb-5')}>
          <section>
            <TitleLine className={'mb-5'} title = {title}/>
            <div>
              <Slider {...settings}>
                <div>
                  <CardItem
                    className="card-news"
                    title={
                      'There are many variations of passages of Lorem Ipsum available'
                    }
                  />
                </div>
                <div>
                  <CardItem
                    className="card-news"
                    title={
                      'There are many variations of passages of Lorem Ipsum available'
                    }
                  />
                </div>
                <div>
                  <CardItem
                    className="card-news"
                    title={
                      'There are many variations of passages of Lorem Ipsum available'
                    }
                  />
                </div>
                <div>
                  <CardItem
                    className="card-news"
                    title={
                      'There are many variations of passages of Lorem Ipsum available'
                    }
                  />
                </div>
              </Slider>
            </div>
          </section>
      </div>
  )
}

export default PhanTich
