import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = (props) => {
  const { data } = props
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-gray-100 shadow-md">
      <div className="thumbnail w-full rounded-lg shadow-md hover:bg-blend-multiply">
        <img
          src="https://laptrinhcuocsong.com/images/programmer-books.png"
          alt={data.title}
          className="h-32 w-full cursor-pointer rounded-t-lg object-cover"
        />
      </div>
      {/* END: .thumbnail */}
      <div className="content p-2">
        <h3 className="text-lg font-semibold">
          {data.title.length > 36 ? data.title.slice(0, 36) + '...' : data.title}
        </h3>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: data.content.length > 200 ? data.content.slice(0, 200) + '...' : data.content,
          }}
        />
      </div>
    </div>
  )
}

BlogItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogItem
