import { Dropdown, DropdownItem } from 'flowbite-react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllBlog } from './../../../api/blog.api'
import BlogList from '../../../components/BlogList/BlogList'
import { SkeletonBlogList } from '../../../components/Loading/SkeletonBlog'
import Swal from 'sweetalert2'

function Home() {
  const [selectedTypeBlog, setSelectedTypeBlog] = useState('Tất cả bài viết')
  const {
    data: dataBlogs,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['blogs'], queryFn: getAllBlog })

  if (isPending) {
    return <SkeletonBlogList />
  }

  if (isError) {
    return Swal.fire({
      icon: 'error',
      title: 'Đã có lỗi xảy ra!',
      text: 'Vui lòng ấn F5 để làm mới lại Page!',
    })
  }

  return (
    <div>
      <div className="min-w-[300px]">
        <Dropdown label={selectedTypeBlog} dismissOnClick={false} size="sm">
          <DropdownItem
            onClick={() => {
              setSelectedTypeBlog('Tất cả bài viết')
            }}
          >
            Tất cả bài viết
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setSelectedTypeBlog('Bài viết hay nhất')
            }}
          >
            Bài viết hay nhất
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setSelectedTypeBlog('Bài viết mới nhất')
            }}
          >
            Bài viết mới nhất
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setSelectedTypeBlog('Bài viết cũ nhất')
            }}
          >
            Bài viết cũ nhất
          </DropdownItem>
        </Dropdown>
      </div>
      {/* END: Filter Blog */}
      <BlogList listBlogs={dataBlogs} />
      {/* END: List Blog */}
    </div>
  )
}

export default Home
