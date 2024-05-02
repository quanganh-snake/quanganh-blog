import React from 'react'

function SkeletonBlogItem() {
  return (
    <div
      role="status"
      className="flex h-full w-full animate-pulse flex-col gap-2 rounded-lg border border-gray-100 shadow-md"
    >
      <div className="thumbnail h-32 w-full rounded-t-lg bg-gray-200 hover:bg-blend-multiply"></div>
      {/* END: .thumbnail */}
      <div className="content p-2">
        <div className="mb-3 h-4 w-full rounded-lg bg-gray-200"></div>
        <div className="mb-1 h-2 w-full rounded-lg bg-gray-200"></div>
        <div className="mb-1 h-2 w-full rounded-lg bg-gray-200"></div>
        <div className="mb-1 h-2 w-full rounded-lg bg-gray-200"></div>
        <div className="mb-1 h-2 w-full rounded-lg bg-gray-200"></div>
      </div>
    </div>
  )
}

export default SkeletonBlogItem
