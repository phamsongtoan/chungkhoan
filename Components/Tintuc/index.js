import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import TitleLine from '../ComponentsInner/TitleLine'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import CardItem from '../ComponentsInner/CardIteam'

const TintucScreen = ({ className }) => {
  return (
    <LayoutPage>
      <div className={cn(styles.tintuc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <div>
            <TitleLine title="Tin tức Tài chính" className={'mb-5'} />
            <div className="tintuc-content">
              <div className="content-noibat">
                <Row className="g-5">
                  <Col md={6}>
                    <figure>
                      <Image
                        src={require('../../assets/projects/banan.jpeg')}
                      />
                    </figure>
                  </Col>
                  <Col md={6}>
                    <div>
                      <h3 className="mb-4">What is Lorem Ipsum?</h3>
                      <p className="text-justify">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="content-show mt-5 pt-5">
                <Row className="g-5">
                  <Col md={4}>
                    <CardItem
                      className={'class-show'}
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <CardItem
                      className={'class-show'}
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <CardItem
                      className={'class-show'}
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <TitleLine title="Tất cả tin tức" className={'mb-5'} />
            <div className="tintuc-all">
              <div className="tintuc-item">
                <Row className="g-5">
                  <Col md={4}>
                    <figure>
                      <Image
                        src={require('../../assets/projects/banan.jpeg')}
                      />
                    </figure>
                  </Col>
                  <Col md={8}>
                    <div className='ps-5'>
                      <h4 className="mb-4 fw-bold mb-2">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </h4>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="tintuc-item">
                <Row className="g-5">
                  <Col md={4}>
                    <figure>
                      <Image
                        src={require('../../assets/projects/banan.jpeg')}
                      />
                    </figure>
                  </Col>
                  <Col md={8}>
                    <div className='ps-5'>
                      <h4 className="mb-4 fw-bold mb-2">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </h4>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default TintucScreen
