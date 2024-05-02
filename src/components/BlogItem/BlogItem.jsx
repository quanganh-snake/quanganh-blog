import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { routeConfig } from '../../configs/route.config'

const BlogItem = (props) => {
  const { data } = props
  const [imageSrcList, setImageSrcList] = useState([])

  useEffect(() => {
    if (data.content) {
      // Parse HTML content
      const parser = new DOMParser()
      const doc = parser.parseFromString(data.content, 'text/html')

      // Find all img tags
      const imgTags = doc.getElementsByTagName('img')

      // Extract src attributes
      const srcList = Array.from(imgTags).map((img) => img.getAttribute('src'))

      // Set the srcList in the state
      setImageSrcList(srcList)
    }
  }, [data.content])

  return (
    <Link
      to={`${routeConfig.blogDetail.path}/${data?.id}`}
      className="flex h-full w-full flex-col gap-2 rounded-lg border border-gray-100 shadow-md"
    >
      <div className="thumbnail w-full rounded-lg shadow-sm hover:bg-blend-multiply">
        <img
          src={
            imageSrcList.length > 0
              ? imageSrcList[Math.floor(Math.random() * imageSrcList.length)]
              : 'https://laptrinhcuocsong.com/images/programmer-books.png'
          }
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
            __html: data.content.length > 1000 ? data.content.slice(0, 400) + '...' : data.content,
          }}
        />
      </div>
    </Link>
  )
}

BlogItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogItem
