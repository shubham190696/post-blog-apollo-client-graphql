import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Post = React.lazy(() => import("../pages/Post"));
const NewPost = React.lazy(() => import("../pages/NewPost"));

const routes = [
  {
    exact: true,
    path: "/",
    element: (
      <React.Suspense fallback="...">
        <Home />
      </React.Suspense>
    ),
  },
  {
    exact: true,
    path: "/:id",
    element: (
      <React.Suspense fallback="...">
        <Post />
      </React.Suspense>
    ),
  },
  {
    exact: true,
    path: "/new-post",
    element: (
      <React.Suspense fallback="...">
        <NewPost />
      </React.Suspense>
    ),
  },
];

export default routes;
