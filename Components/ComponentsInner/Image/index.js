import React from 'react'

const ImageA = ({ src }) => {
  return (
    <img src={`https://apichungkhoang.orokucode.com${src}`} alt='cho co phieu'/>
  // <img src={`http://localhost:1337${src}`} alt='cho co phieu'/>

  )
}
export default ImageA
