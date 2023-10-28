import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import TitleLine from '../ComponentsInner/TitleLine'
import { Col, Row } from 'react-bootstrap'
import NewsItem from '../ComponentsInner/NewsItem'
import dayjs from 'dayjs'
import { get } from 'lodash'
import { useRouter } from 'next/router'

const NewsDetailScreen = ({ className, post, relative }) => {
  const { query } = useRouter()

  if (!post) {
    return null
  }

  // const thumbnail = get(post, 'attributes.thumnail.data.attributes.url')
  const content = get(post, 'attributes.noi_dung')
  const relativePosts = relative.slice(0, 5)
  const cat = query['danh-muc']

  return (
    <LayoutPage title={`Bài Viết | ${post.attributes.tieu_de}`}>
      <div className={cn(styles.newsDetail, className, 'mb-5 pb-5')}>
        <div className="container pt-5">
          <div className="title">
            <TitleLine title={'Tin tức tài chính'} />
          </div>
          <Row className='mt-4 mb-4'>
            <Col className='col-lg-8'>
              <div className="news-heading">
                <h3 className="fw-bold">
                  {post.attributes.tieu_de}
                </h3>
                <span className="text-secondpage text-date">
                  Ngày đăng {dayjs(post.attributes.createdAt).format('DD/MM/YYYY hh:mm')}
                </span>
              </div>
            </Col>
          </Row>
          <Row className='g-5'>
            <Col className='col-md-8 col-12'>
              <div className='news-content'>
                 <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </Col>
            <Col className='col-md-4 col-12'>
              <div>
                  <TitleLine className={'mb-4'} title={'Các bài nổi bật'} />
                  <div className='list-relative'>
                    {relativePosts.filter(it => it.id !== post.id).map(post => {
                      const title = get(post, 'attributes.tieu_de')
                      const desc = `Ngày đăng ${dayjs(post.attributes.createdAt).format('DD/MM/YYYY hh:mm')}`
                      const src = get(post, 'attributes.thumnail.data.attributes.url')
                      return <NewsItem src={src} link={`/bai-viet/${cat}/${post.attributes.slug}`} post={post} key={`relative-${post.id}`} title={title} des={desc}/>
                    })}
                  </div>
              </div>
            </Col>
          </Row>
          {/* <ItemRelative className={'pt-5 mt-5'}/> */}
        </div>
      </div>
    </LayoutPage>
  )
}

export default NewsDetailScreen
