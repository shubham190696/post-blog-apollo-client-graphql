import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
// import PropTypes from "prop-types";

function Post() {
  const { id } = useParams();

  const GET_POSTS = gql`
    query Post($id: ID!) {
      post(id: $id) {
        id
        title
        body
      }
    }
  `;

  const { loading, data } = useQuery(GET_POSTS, {
    variables: { id: id },
  });

  const loaderContent = loading !== undefined && loading ? <Loader /> : "";
  return (
    <div className="flex flex-col h-screen pt-1 justify-center items-center">
      <div className="flex flex-col bg-indigo-500 p-20 rounded-xl shadow-xl h-3/4 w-screen md:w-1/2">
        <div className="text-white tracking-widest text-2xl text-gray-300 ">
          {data !== undefined ? data.post.title : ""}
        </div>
        <div className="text-white">{data !== undefined ? data.post.body : ""}</div>
      </div>
      {loaderContent}
    </div>
  );
}

export default Post;
