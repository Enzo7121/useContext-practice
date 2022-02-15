import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Blog() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const filterByURL = (item) => {
    const filter = searchParams.get("filter");
    if (!filter) return true;

    const title = item.title.toLowerCase();
    return title.startsWith(filter.toLowerCase());
  };

  const handleChange = (e) => {
    const filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (error !== "") {
    return <h5>{error}</h5>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        className="form-control mb-2"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      {data.filter(filterByURL).map((item) => (
        <h4 key={item.id}>
          <Link to={`/blog/${item.id}`}>
            {item.id} - {item.title}
          </Link>
        </h4>
      ))}
    </div>
  );
}

export default Blog;
