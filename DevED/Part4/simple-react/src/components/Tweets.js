import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "John", tweet: "React!" },
    { name: "Media", tweet: "Whats up!" },
    { name: "Bob", tweet: "React sucks!" },
    { name: "Bob1", tweet: "React sucks!" },
    { name: "Bob2", tweet: "React sucks!" },
    { name: "Bob3", tweet: "React sucks!" },
  ];
  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
