import Image from "next/image";
import { Inter, Ultra } from "next/font/google";
import { createClient } from "next-sanity";
const inter = Inter({ subsets: ["latin"] });
import PortableText from "react-portable-text";

export default function Home({ posts }) {
  console.log(posts[1]);

  return (
    <div>
      <h1>home</h1>
      <h1>Title: {posts[1].title}</h1>
      <h2>data: {posts[1]._createdAt}</h2>
      {posts[1].body.map((bodyy) => {
        return (
          <>
            <ul key={bodyy?._key}>
              <li>{bodyy?.children[0].text}</li>
            </ul>
          </>
        );
      })}
      {/* <Image
        src={posts[1].mainImage.asset._ref}
        alt="Post-image"
        height={200}
        width={300}
      /> */}
      {/* <div>
        <PortableText
          // Pass in block content straight from Sanity.io
          content={posts[0].content}
          projectId="q4737knk"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => <h1 style={{ color: "red" }} {...props} />,
            li: ({ children }) => (
              <li className="special-list-item">{children}</li>
            ),
          }}
        />
      </div> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "q4737knk",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type=="post"]`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}
