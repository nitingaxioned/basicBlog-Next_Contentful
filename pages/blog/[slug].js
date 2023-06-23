import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { parseISO, format } from 'date-fns';

const client = createClient({
  space: 'yo4b4xfnucbc',
  accessToken: 'Z_HMbg_0DEpNau877P3gRqKlPSkAZAc8eGekbsZXTLo',
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blog_post" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog_post',
    'fields.slug': params.slug
  })

  return {
    props: { blog_post: items[0] }
  }

}

export default function BlogDetails({blog_post}) {
  const { title, slug, thumbnail, bannerImage, tags, author, content} = blog_post.fields

  const dateString = blog_post.sys.createdAt;
  const date = parseISO(dateString);

  return (
    <div>
      <div className="banner">
        <Image 
          src={'https:' + bannerImage.fields.file.url}
          width={bannerImage.fields.file.details.image.width}
          height={bannerImage.fields.file.details.image.height}
          className="banner-img"
        />
      </div>

      <div className="info">
        <h2>{ title }</h2>
        <span>Publised on <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time> </span>
        <br/>
        <span>Author : { author } </span>
        <div className="blog-tags">{tags.map(tag => (
          <>
          <h4>Tags -</h4>
          <span className="blog-tag" key={tag}>{ tag }</span>
          </>
        ))}
        </div>
      </div>
        
      <div className="content">
        <div>{documentToReactComponents(content)}</div>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>

      <style jsx>{`
        .banner {
          width: 125%;
          position: relative;
          left: -10vw;
        } 

        h4 {
          margin-block-end: 1.33em;
        }

        .blog-tag {
          padding: 3px 7px;
          display: inline-block;
          background: #eee;
          border-radius: 7px;
          margin: 0 10px 10px 0;
        }

        .content {
          max-width: 800px;
        }
      `}</style>
    </div>
    )
}