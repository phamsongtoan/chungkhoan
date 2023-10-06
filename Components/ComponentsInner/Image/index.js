import React from 'react'

const ImageA = ({ src }) => {
  return (
    <img src={`${process.env.NEXT_IMAGE}${src}`} alt='cho co phieu'/>
  )
}
export default ImageA
