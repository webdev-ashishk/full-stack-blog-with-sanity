import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "next-sanity";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  console.log(blogs);

  return <div>Home page!!</div>;
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "q4737knk",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type=="post"]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
