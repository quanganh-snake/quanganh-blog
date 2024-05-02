import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getBlogDetail } from '../../../api/blog.api'
import Swal from 'sweetalert2'
import SkeletonBlogDetail from './../../../components/Loading/SkeletonBlog/SkeletonBlogDetail'
import { useEffect, useState } from 'react'
import Loading from './../../../components/Loading/Loading/Loading'

function BlogDetail() {
  const { id } = useParams()
  const [imageSrcList, setImageSrcList] = useState([])
  const { data, isPending, isError } = useQuery({
    queryKey: ['blogDetail', id],
    queryFn: async () => {
      const data = await getBlogDetail(id)
      return data
    },
  })

  if (isPending) {
    return <SkeletonBlogDetail />
  }

  if (isError) {
    // return Swal.fire({
    //   icon: 'error',
    //   title: 'Đã có lỗi xảy ra!',
    //   text: 'Vui lòng ấn F5 để làm mới lại Page!',
    // })
    return <Loading />
  }

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
  }, [data.content, id])

  return (
    <div>
      <img
        src={
          imageSrcList.length > 0
            ? imageSrcList[Math.floor(Math.random() * imageSrcList.length)]
            : 'https://laptrinhcuocsong.com/images/programmer-books.png'
        }
        alt={data.title}
        className="w-full"
      />
      <h2>{data.title}</h2>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{
          __html: data.content.length > 1000 ? data.content.slice(0, 400) + '...' : data.content,
        }}
      />
    </div>
  )
}

export default BlogDetail
