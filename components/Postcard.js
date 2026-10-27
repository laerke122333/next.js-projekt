import Link from "next/link";
import styles from "./Postcard.module.css";

export default function Postcard({ post }) {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        {category && <div className={styles.category}>{category}</div>}

        <div className={styles.date}>
          {new Date(post.date).toLocaleDateString("da-DK", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <h2 className={styles.title}>{post.title.rendered}</h2>
      </div>

      {image && <img src={image} alt="" className={styles.image} />}

      <div className={styles.content}>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </article>
  );
}
