import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "adamalshammaa",
    userImg: "https://i.pravatar.cc",
    img: "https://i.pravatar.cc",
    caption: "Subscribe and destroy the like button for the me!",
  },
  {
    id: "123",
    username: "adamalshammaa",
    userImg: "https://i.pravatar.cc",
    img: "https://i.pravatar.cc",
    caption: "Subscribe and destroy the like button for the me!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
