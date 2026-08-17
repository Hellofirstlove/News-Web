import React, { Suspense } from 'react'
import Categories from '../Categories'
import RinghtDown from './RightDown'

const LeftSide = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Categories></Categories>
      </Suspense>
      <RinghtDown></RinghtDown>
    </div>
  )
}

export default LeftSide