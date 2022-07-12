import React from 'react'
import SkelectonShim from './SkelectonShim'
import SkeletonElement from './SkeletonElement'

export default function SkelectonPost() {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-post'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkelectonShim />
      </div>
    </div>
  )
}
