"use client";

import styles from './BlogPost.module.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export default function BlogPost({ post }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = post.title;

  return (
    <article className={styles.blogContent}>
      <h1>{title}</h1>
      <div>
        <small>{post.date}</small>
        <p>By {post.author}</p>
      </div>
      <div className={styles.shareContainer}>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
    </article>
  );
}
