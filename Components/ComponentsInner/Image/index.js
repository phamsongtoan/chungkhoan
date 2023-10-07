import React from 'react'

const ImageA = ({ src }) => {
  return (
    <img src={`http://127.0.0.1:1337${src}`} alt='cho co phieu'/>
  )
}
export default ImageA
