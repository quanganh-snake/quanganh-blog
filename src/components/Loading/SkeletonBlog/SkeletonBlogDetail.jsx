import React, { useId } from 'react'

const listParagraph = new Array(50).fill(0)

function SkeletonBlogDetail() {
  const id = useId()
  return (
    <div role="status" className="flex h-full w-full animate-pulse flex-col gap-2 rounded-lg">
      <div className="thumbnail h-56 w-full rounded-t-lg bg-gray-200 hover:bg-blend-multiply"></div>
      {/* END: .thumbnail */}
      <div className="content">
        <div className="mb-3 h-4 w-3/12 rounded-lg bg-gray-200"></div>
        <div className="mb-3 h-4 w-full rounded-lg bg-gray-200"></div>
        {listParagraph.map((e, index) => (
          <div key={e + id + index} className="mb-1 h-1 w-full rounded-lg bg-gray-200"></div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonBlogDetail
