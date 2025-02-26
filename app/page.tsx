import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Bryan Granados
      </h1>
      <h2 className="mb-8 text-xl font-semibold tracking-tighter">
        Senior Product Service Delivery Lead
      </h2>
      <p className="mb-4">
        {`Born in Lima. Two decades in the US. From marketing to engineering and then to product. Currently work at an award-winning software development agency, based in the US. Also the CEO of one of our Latam offices. Mostly based in Lima now, but travel often.

Coffee aficionado. Survival RPG fanatic. Carbonara lover. Vargas Llosa reader. Four cats, all named Chicken. Ask me about my K/D ratio.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
