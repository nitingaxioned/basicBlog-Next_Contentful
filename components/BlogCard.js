// "use client"
import Link from 'next/link'
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

export default function RecipeCard({ blog_post }) {
  const { title, slug, thumbnail, bannerImage, tags, author, content} = blog_post.fields

  const dateString = blog_post.sys.createdAt;
  const date = parseISO(dateString);
  
  return (
    <li className="card">
      <div className="featured">
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h2>{ title }</h2>
          <span>Publised on <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time> </span>
          <br/>
          <span>Author : { author } </span>
        
          {/* <p>{ content }</p> */}
        </div>
        <br/>
        <div className="actions">
          <Link href={'/blog/' + slug}>Read More</Link>
        </div>
      </div>

      <style jsx>{`
       .card {
          padding: 20px 0;
        }
      `}</style>
    </li>
  )
}