import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>This is dynamic routes in my URL: {router.query.slug}</p>;
}
