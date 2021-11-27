import React, { useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
import { gql, useQuery } from "@apollo/client";
import PostCard from "../../Components/PostCard";
import Loader from "../../Components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    currentPage: 1,
    limit: 6,
  });

  const postsRef = useRef();

  const GET_POSTS = gql`
    query Posts($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
          body
        }
        meta {
          totalCount
        }
      }
    }
  `;

  const { loading, data } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: pagination.currentPage,
          limit: pagination.limit,
        },
      },
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      let postsCopy = Array.from(posts);
      const paginationCopy = { ...pagination };
      if (
        postsCopy.length < paginationCopy.currentPage * paginationCopy.limit &&
        postsCopy.length <= paginationCopy.totalCount
      ) {
        postsCopy = postsCopy.concat(data.posts.data);
        setPosts(postsCopy);
      }
      paginationCopy.totalCount = data.posts.meta.totalCount;
      setPagination(paginationCopy);
    }
  }, [data]);

  const postsContent = posts.map((el) => <PostCard {...el} />);

  const handlePagination = (page) => {
    const paginationCopy = { ...pagination };
    paginationCopy.currentPage = page;
    setPagination(paginationCopy);
    postsRef.current.scrollLeft = postsRef.current.scrollLeft + 230 * 6;
  };

  const handlePrev = () => {
    if (postsRef.current && postsRef.current.scrollLeft > 230 * 6) {
      postsRef.current.scrollLeft = postsRef.current.scrollLeft - 230 * 6;
    } else {
      postsRef.current.scrollLeft = 0;
    }
  };

  const loaderContent = loading !== undefined && loading ? <Loader /> : "";

  return (
    <main className="flex flex-col h-screen pt-1">
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      <div className="h-4/5 text-4xl tracking-widest flex justify-center items-center bg-home-page bg-no-repeat bg-center bg-cover shadow-2xl text-indigo-500 ">
        Title for the Home Page
      </div>
      <div className="flex">
        <button className="bg-white w-12 p-4" onClick={handlePrev}>{`<`}</button>
        <div ref={postsRef} className="h-50 flex flex-row space-x-4 p-10 overflow-auto">
          {postsContent}
        </div>
        <button
          className="bg-white w-12 p-4"
          onClick={() => handlePagination(pagination.currentPage + 1)}
        >{`>`}</button>
      </div>
      {loaderContent}
    </main>
  );
}

export default Home;
