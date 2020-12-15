import React from "react";
import "./css/RecommendedVideos.css";
import VideoCard from "./VideoCard";
import Post from "./Post";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Outer Folding Phones: It's Time to Stop!"
          views="2.3M views"
          timestamp="5 hours ago"
          channel="Marques Brownlee"
          channelURL="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s176-c-k-c0x00ffffff-no-rj"
          imgURL="https://i.ytimg.com/vi/4oco9pLw13E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMWp2lVu4e5Rw_F0Jwe_zbLHuM5Ahttps://i.ytimg.com/vi/4oco9pLw13E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMWp2lVu4e5Rw_F0Jwe_zbLHuM5A"
        />

        <VideoCard
          title="This is NOT a Tesla..."
          views="1.2M views"
          timestamp="1 day ago"
          channel="Unbox Therapy"
          channelURL="https://yt3.ggpht.com/a-/AOh14GgiVOOD0_aCpVe-97CkAUtXUKZWjMcfcKXmHA=s68-c-k-c0x00ffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/6wkdv3B5300/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCo7pqbk9zdfmqafNmUrzkwAZYIAA"
        />

        <VideoCard
          title="Right-handed Warner hammers huge sixes"
          views="1M views"
          timestamp="4 years ago"
          channel="cricket.com.au"
          channelURL="https://yt3.ggpht.com/a-/AOh14GgHptBTfRd8bS6jTysa2HXOfoFvIBbCng0SoA=s68-c-k-c0x00ffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/gBUcZdx0H5o/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBWVpSVMIznmC0GiCxeCPAFHtbPkg"
        />

        <VideoCard
          title="Marvel Studios’ Avengers: Endgame | “To the End”"
          views="33M views"
          timestamp="1 year ago"
          channel="Marvel Entertainment"
          channelURL="https://yt3.ggpht.com/a-/AOh14GgFEhg-sotAi73AqlUtscQxmc2-RtcfxV-okA=s68-c-k-c0x00ffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/0jNvJU52LvU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWFzqoLGyX7kksc3mrQpLxPDMxIw"
        />

        <VideoCard
          title="The Best Laptops - 2020 Picks!"
          views="500K views"
          timestamp="2 hours ago"
          channel="Dave Lee"
          channelURL="https://yt3.ggpht.com/ytc/AAUvwniSYmTa5NLqubBNeXbONaln1U2FAIzqrzVNWpjrJw=s176-c-k-c0xffffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/16ayIgVCb5c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCf1Jr7ke5ROgPW1e94Vhvz5u-qNA"
        />

        <VideoCard
          title="Groot's Holiday List | Disney+"
          views="716K views"
          timestamp="3 days ago"
          channel="Disney Plus"
          channelURL="https://yt3.ggpht.com/a-/AOh14Gg27bvmH5qzuyVNya-VYgYS9goNCHl8_8HdAQ=s68-c-k-c0x00ffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/ADlaBg709FA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCceR34qgcjO3LWEhL7rIXKJa1ArA"
        />

        <VideoCard
          title="Kalakriti-DTU | Orientation'20"
          views="119 views"
          timestamp="2 days ago"
          channel="Kalakriti DTU"
          channelURL="https://yt3.ggpht.com/a-/AOh14Gj7W4DPmswlwYE0rKV4_FBG-N7XMli-5Ykhww=s68-c-k-c0x00ffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/Eg693q6kD6k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDOdr8ZIIcCfLxpMFMnh2u0XWrcUQ"
        />
        <VideoCard
          title="CYBERPUNK 2077 Walkthrough Gameplay Part 18 - GHOST TOWN (FULL GAME)"
          views="92K views"
          timestamp="8 hours ago"
          channel="theRadBrad"
          channelURL="https://yt3.ggpht.com/ytc/AAUvwngH1NjU6YfbmgOYNMMiwXMLQLUMTscL-I_zSq3-ww=s176-c-k-c0xffffffff-no-rj-mo"
          imgURL="https://i.ytimg.com/vi/YC6TaNQU2mI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4EbYlZzIGnsQctjI3qfPN1Ml0yA"
        />
      </div>
      <hr />
      <h2>Latest YouTube posts</h2>
      <div className="recommended__posts">
        <Post
        channelImg = "https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s76-c-k-c0x00ffffff-no-rj-mo"
        title ="Unbox Therapy"
        timestamp = "1 hour ago"
        likes="1K"
        comments="546"
        content ="iPhone 12 Mini its Not Looking Good..." />
        <Post
        channelImg = "https://yt3.ggpht.com/ytc/AAUvwnhC-RnpJWuFAj5X9Gs1iBuEFg8MBGiTyg-iMYH2og=s76-c-k-c0xffffffff-no-rj-mo"
        title ="Jaby Koay"
        timestamp = "2 months ago"
        likes="7.9K"
        comments="1.3K"
        content ="It’s been a while since we’ve done live stream gaming on this channel.  What would you want to see me play?﻿" />

        <Post
        channelImg = "https://yt3.ggpht.com/ytc/AAUvwnhy6Zu8qtiBa6F3mxnPVRoYbd7O8tmQCyqR1LL86A=s76-c-k-c0xffffffff-no-rj-mo"
        title ="BeeBom"
        timestamp = "4 months ago"
        likes="8.5K"
        comments="184"
        content ="We just unboxed the cutest thing on earth. Watch here: https://www.instagram.com/p/CDVuaXsJH.....
If you like what you saw, consider following us on Instagram for more such cool stuff. Cheers! 🐶" />
      </div>
      <hr/>
    </div>
  );
}
export default RecommendedVideos;
