import React from "react";

/**
 * 포스트 컴포넌트
 * @author 주민지
 */

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {/* mb-4: 4(24px)만큼의 marginbottom을 줘라 */}
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
}