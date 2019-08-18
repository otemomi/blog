import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";

import style from "../styles/index.module.css";

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  tags,
  html,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <div className={style.post}>
      <Link to={path}>
        <div className={style.postContent}>
          {coverImage && (
            <Img
              fluid={coverImage.childImageSharp.fluid}
              className={style.coverImage}
            />
          )}
          <h1 className={style.title}>{title}</h1>
          <div className={style.meta}>
            {date} {author && <>— Written by {author}</>}
          </div>
          <div className={style.article}>
            {excerpt ? (
              <>
                <p className={style.ex}>{excerpt}</p>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {tags ? (
        <div className={style.tags}>
          {tags.map(tag => (
            <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
              <span className={style.tag}>#{tag}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
