import Postcard from "./Postcard";
import styles from "./Postlist.module.css";

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <li key={post.id}>
          <Postcard post={post} />
        </li>
      ))}
    </ul>
  );
}
