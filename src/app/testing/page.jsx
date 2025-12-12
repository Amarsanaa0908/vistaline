import React from 'react'

export default function TestingPage() {
    const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  return (
    <div>TestingPage {id}</div>
  )
}
