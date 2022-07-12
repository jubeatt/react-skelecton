import React from 'react'
import SkelectonShim from './SkelectonShim'
import SkeletonElement from './SkeletonElement'

export default function SkelectonProfile() {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-profile'>
        <div>
          <SkeletonElement type='avatar' />
        </div>
        <div>
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
        <SkelectonShim />
      </div>
    </div>
  )
}
