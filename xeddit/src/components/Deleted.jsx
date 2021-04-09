
import React from "react";
import { Link } from "@reach/router";

export default function Deleted() {
  return (
    <section className="deleted">
      <h3>Your Article Has Been Deleted</h3>
      <Link to="/">Return to Home Page</Link>
    </section>
  );
}
