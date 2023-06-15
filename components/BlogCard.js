import Link from 'next/link'

export default function RecipeCard({ blog_post }) {
  const { title, slug, thumbnail, bannerImage, tags, author, content} = blog_post.fields

  return (
    <li className="card">
      <div className="featured">
        {/* featured image */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          {/* <p>{ content }</p> */}
        </div>
        <div className="actions">
          <Link href="#">Read More</Link>
        </div>
      </div>
    </li>
  )
}