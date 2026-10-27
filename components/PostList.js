import PostCard from "@/components/Postcard";
import styles from "./Postlist.module.css";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>There are no posts yet.</p>;
  }

  return (
    <section className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
