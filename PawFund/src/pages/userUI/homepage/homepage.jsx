import React from 'react'
import Header from '../../../component/header/header'
import Card from '../../../component/card/card'

const homepage = () => {
  const json = {
    
    "name": "Kitty",
    "age": "Medium",
    "breed": "Siamese"
  }
  
  return (
    <div>
      <Header />
      <Card cat={json} />
    </div>
  )
}

export default homepage
