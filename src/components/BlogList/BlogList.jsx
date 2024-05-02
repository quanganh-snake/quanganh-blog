import PropTypes from 'prop-types'
import BlogItem from '../BlogItem/BlogItem'
import React from 'react'

function BlogList(props) {
  const { listBlogs } = props
  return (
    <section className="s-blog py-14">
      <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        {listBlogs?.map((b, index) => (
          <div key={b?.title} className="blog__item col-span-1 h-full md:col-span-2 lg:col-span-1">
            <BlogItem data={b} />
          </div>
        ))}
      </div>
    </section>
  )
}

BlogList.propTypes = {
  listBlogs: PropTypes.array.isRequired,
}

export default BlogList
