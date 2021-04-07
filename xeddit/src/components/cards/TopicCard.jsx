import React from "react";
import { Link } from "@reach/router";

function TopicCard({ slug, description }) {
  return (
    <li className="topic-card">
      <Link to={`/articles/topic/${slug}`}>
        <h3>{slug}</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}

export default TopicCard