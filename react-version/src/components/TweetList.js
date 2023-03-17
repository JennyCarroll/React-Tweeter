import React from "react";
import Tweet from "./Tweet";

function TweetList() {
  return (
    // Container for tweet list
    <section className="tweets">
      <Tweet></Tweet>
      <Tweet></Tweet>
    </section>
  );
}

export default TweetList;
