import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import TitleLine from '../ComponentsInner/TitleLine'
import { Col, Pagination, Row } from 'react-bootstrap'
import CardItem from '../ComponentsInner/CardIteam'
import { first } from 'lodash'
import ImageA from '../ComponentsInner/Image'
import Link from 'next/link'
import { useDebounce } from 'react-use'
import { api } from '../../libs/api'

const TintucScreen = ({ className, posts: inputPosts }) => {
  const { data: posts, meta: { pagination } } = inputPosts
  console.log('🐳 -> TintucScreen -> posts', inputPosts)

  const firstPost = first(posts)
  const top3Posts = posts.slice(1, 4)
  const resPosts = posts.slice(4)

  const [currentPosts, setCurrentPosts] = useState(() => resPosts || [])
  const [page, setPage] = useState(1)

  const fetchPosts = async () => {
    const { data: { data } } = await api.get(`/tin-tucs?populate=*&sort=id:desc&pagination[page]=${page}&pagination[pageSize]=10`)

    if (page === 1) {
      return setCurrentPosts(data.slice(4))
    }

    return setCurrentPosts(data)
  }

  useDebounce(() => {
    fetchPosts()
  }, 200, [page])

  return (
    <LayoutPage title="Tin Tức">
      <div className={cn(styles.tintuc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <div>
            <TitleLine title="Tin tức Tài chính" className={'mb-5'} />
            <div className="tintuc-content">
              <Link href={`/bai-viet/tin-tuc/${firstPost.id}`} className="content-noibat">
                <Row className="g-5">
                  <Col md={6}>
                    <figure>
                      <ImageA
                        src={firstPost.attributes.thumnail.data.attributes.url}
                      />
                    </figure>
                  </Col>
                  <Col md={6}>
                    <div>
                      <h3 className="mb-4 line-clamp">{firstPost.attributes.tieu_de}</h3>
                      <p className="text-justify line-clamp-4" dangerouslySetInnerHTML={{ __html: firstPost.attributes.noi_dung }}>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Link>
              <div className="content-show mt-5 pt-5">
                <Row className="g-5">
                  {top3Posts.map(post => {
                    return (
                      <Col md={4} key={post.id}>
                        <CardItem
                          className={'class-show'}
                          src={post.attributes.thumnail.data.attributes.url}
                          title={post.attributes.tieu_de}
                          link={`bai-viet/tin-tuc/${post.id}`}
                        />
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <TitleLine title="Tất cả tin tức" className={'mb-5'} />
            <div className="tintuc-all">
              {currentPosts.map(post => {
                return (
                  <Link href={`/bai-viet/tin-tuc/${post.id}`} className="tintuc-item" key={post.id}>
                    <Row className="g-5">
                      <Col md={4}>
                        <figure>
                          <ImageA
                            src={post.attributes.thumnail.data.attributes.url}
                          />
                        </figure>
                      </Col>
                      <Col md={8}>
                        <div className='ps-5'>
                          <h4 className="mb-4 fw-bold mb-2 line-clamp">
                            {post.attributes.tieu_de}
                          </h4>
                          <p className='line-clamp' dangerouslySetInnerHTML={{ __html: post.attributes.noi_dung }}>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-5 pt-5">
            <Pagination>
              {pagination.pageCount > 1 && Array(pagination.pageCount).fill(1).map((_item, index) => {
                return (
                  <Pagination.Item key={index} active={page === index + 1} onClick={() => setPage(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                )
              })}

            </Pagination>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default TintucScreen
