import React from 'react'
import SkeletonBlogItem from './SkeletonBlogItem'

function SkeletonBlogList() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-6 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
      <div className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
        <SkeletonBlogItem />
      </div>
    </div>
  )
}

export default SkeletonBlogList
