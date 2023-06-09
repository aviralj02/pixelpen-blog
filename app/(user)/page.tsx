import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const posts = await client.fetch(query)

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
