import axios from 'axios'

export const getAllBlog = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BLOGGER_API_URI}/blogs/7134101648104267498/posts?key=${import.meta.env.VITE_BLOGGER_API_KEY}`,
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
