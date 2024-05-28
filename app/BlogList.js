"use client";

import styles from './BlogList.module.css';
import './BlogList.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import newImg from "./blog.jpg";

export default function BlogList({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column gap-4 align-items-center container">
        <input
          type="text"
          placeholder="Search posts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.inpField} id="exampleFormControlInput1"
        />
      <div className={styles.blogContainer}>
        {filteredPosts.map(({ id, title, date, summary }) => (
          <div key={id} >
            <Link href={`posts/${id}`} className={styles.blogItem}>
                <div className={styles.blogCard}>
                  <Image src={newImg} className={styles.blogImage} alt="blog" />
                  <div className="card-body p-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{summary}</p>
                    <p className="card-text">{date}</p>
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
