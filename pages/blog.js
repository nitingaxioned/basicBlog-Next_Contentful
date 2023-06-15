import { createClient } from 'contentful'
import BlogCard from '../components/BlogCard'

export async function getStaticProps() {

  const client = createClient({
    space: 'yo4b4xfnucbc',
    accessToken: 'Z_HMbg_0DEpNau877P3gRqKlPSkAZAc8eGekbsZXTLo',
  })

  const res = await client.getEntries({ content_type: "blog_post" })

  return {
    props: {
        blog_posts: res.items,
    }
  }
}

export default function Blog({ blog_posts }) {
    console.log(blog_posts)
  
    return (
    <>
      <h1>Blog Listing Page</h1>
      <ul className="blog-list">
        {blog_posts.map(blog_post => (
            <BlogCard key={blog_post.sys.id} blog_post={blog_post}/>
        ))}
      </ul>
    </>
    )

}