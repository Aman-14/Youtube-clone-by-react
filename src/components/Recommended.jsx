import React from "react";
import Suggestion from "./Suggestion";
import "./Recommended.css";
import VideoCard from "./VideoCard";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Recommended() {
  return (
    <div className="recommended">
      <hr />
      <div className="recommended__suggestionContainer">
        <Suggestion title="All" />
        <Suggestion title="PUBG" />
        <Suggestion title="Javascript" />
        <Suggestion title="Food Challenges" />
        <Suggestion title="Python" />
        <Suggestion title="Eating" />
        <Suggestion title="Anime" />
        <Suggestion title="Live" />
        <Suggestion title="AMVs" />
        <Suggestion title="Computers" />
        <Suggestion title="Courses" />
      </div>
      <hr />
      <div className="recommended__videos">
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
        <VideoCard
          imgSrc="https://i.ytimg.com/an_webp/2kJf6UjXLQA/mqdefault_6s.webp?du=3000&sqp=COD30YEG&rs=AOn4CLAllESYXPlGQb3Q86Lz098pq_AS2Q"
          videoTitle="The God of High School「AMV」Never Surrender ᴴᴰ"
          channelName="Aman Kumar"
          Icon={CheckCircleIcon}
          views="1 million"
          timestamp="1 hour ago"
        />
      </div>
    </div>
  );
}

export default Recommended;
