import axios from 'axios'

export const getAllBlog = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BLOGGER_API_URI}/blogs/${import.meta.env.VITE_BLOGGER_POST_ID}/posts?key=${import.meta.env.VITE_BLOGGER_API_KEY}`,
      {
        timeout: 10000,
      },
    )
    const data = await res.data?.items
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getBlogDetail = async (id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BLOGGER_API_URI}/blogs/${id.toString()}/posts/${import.meta.env.VITE_BLOGGER_POST_ID}?key=${import.meta.env.VITE_BLOGGER_API_KEY}`,
      {
        timeout: 10000,
      },
    )
    const data = await res.data
    return data
  } catch (error) {
    console.error(error)
  }
}
