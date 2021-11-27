import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Loader from "../../Components/Loader";
// import PropTypes from "prop-types";

function NewPost() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const CREATE_POST = gql`
    mutation CREATE_POST($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `;

  const [addTodo, { data, loading }] = useMutation(CREATE_POST);

  let createdPost = data !== undefined ? data.createPost.id : null;
  let loader = loading !== undefined ? loading : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { input: { title: formValues.title, body: formValues.description } } });
  };

  const onChange = (e) => {
    const formValueCopy = { ...formValues };
    formValueCopy[e.target.name] = e.target.value;
    setFormValues(formValueCopy);
  };

  const loaderContent = loading !== undefined && loading ? <Loader /> : "";

  const postContent = createdPost ? (
    <div className="text-white mt-8 bg-indigo-500 p-20 rounded-xl shadow-xl">
      Post {createdPost} is created successfully
    </div>
  ) : (
    <form className="bg-indigo-500 p-20 rounded-xl shadow-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-white">
          Title *
        </label>
        <input
          required
          disabled={loader}
          id="title"
          placeholder="Title"
          class="border p-2 w-96 mt-2 border-white-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="title"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col mt-8">
        <label htmlFor="description" className="text-white">
          Description *
        </label>
        <textarea
          required
          disabled={loader}
          id="description"
          placeholder="Description"
          rows={6}
          class="border p-2 w-96 mt-2 border-white-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="description"
          onChange={onChange}
        />
      </div>
      <button
        className="bg-green-500 mt-8 hover:bg-green-400 active:bg-green-700 p-2 rounded text-white"
        type="submit"
        disabled={loader}
      >
        Create a Post
      </button>
    </form>
  );

  return (
    <div className="flex flex-col h-screen pt-1 justify-center items-center">
      {postContent} {loaderContent}
    </div>
  );
}

export default NewPost;
