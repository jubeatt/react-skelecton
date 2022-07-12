import React from 'react'
import './index.css'

export default function SkeletonElement({ type }) {
  if (!type)
    throw new Error(
      `SkeletonElement must have an type of 'title' | 'text' | 'avatar' | 'thumbnail'`
    )
  const classes = `skeleton ${type}`

  return <div className={classes}></div>
}
