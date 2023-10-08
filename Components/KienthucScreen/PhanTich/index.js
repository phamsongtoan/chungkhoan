import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import CardItem from '../../ComponentsInner/CardIteam'
import TitleLine from '../../ComponentsInner/TitleLine'

const PhanTich = ({ className, title = 'Bộ cơ bản', cat, posts = [] }) => {
  const settings = {
    dots: false,
    infinite: false,
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
                {posts.map(post => {
                  return (
                    <div key={`PhanTich-${post.attributes.tieu_de}`}>
                    <CardItem
                      link={`/bai-viet/${cat}/${post.attributes.slug}`}
                      src={post.attributes.thumnail.data.attributes.url}
                      className="card-news"
                      title={post.attributes.tieu_de}
                    />
                  </div>
                  )
                })}
              </Slider>
            </div>
          </section>
      </div>
  )
}

export default PhanTich
