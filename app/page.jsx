import Image from "next/image";
import styles from "./page.module.css";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard";

export default function Home() {
  const postMetadata = getPostMetadata("recipes");
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post}></PostCard>;
        })}
      </div>
    </main>
  );
}
