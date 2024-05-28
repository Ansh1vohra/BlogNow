import { getSortedPostsData } from '../lib/posts.js';
import BlogList from './BlogList.js';
import styles from './page.module.css';

export default async function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div className={styles.mainContent}>
        <BlogList posts={allPostsData} />
    </div>
  );
}
