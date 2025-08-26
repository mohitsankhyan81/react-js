import { useState, useEffect } from "react";

const Fetchdata = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setpost(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <h1>First Post Title:</h1>
      {post.length > 0 ? <h1>{post[0].title}</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default Fetchdata;
