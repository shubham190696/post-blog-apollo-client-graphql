import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostCard(props) {
  const { title, description, id } = props;
  return (
    <div class="max-w-xs flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden md:max-w-xs m4 min-w-230 min-h-180">
      <div class="md:flex">
        <div class="p-8">
          <p
            title={title}
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold line-clamp-1"
          >
            {title}
          </p>
          <p class="mt-2 text-gray-500 line-clamp-2">{description}</p>
          <Link class="mt-2 text-indigo-300 hover:underline" to={`/${id}`}>
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PostCard.defaultProps = {
  title: " Case study",
  description: `Getting a new business off the ground is a lot of hard work. Here are five ideas you can
  use to find your first customers.`,
};

export default PostCard;
