import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/index";
import Navigation from "../components/navigation";

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        {posts.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            frontmatter: {
              title,
              date,
              path,
              author,
              coverImage,
              excerpt,
              tags,
            },
          } = node;

          return (
            <Post
              key={id}
              title={title}
              date={date}
              path={path}
              author={author}
              coverImage={coverImage}
              tags={tags}
              excerpt={excerpt || autoExcerpt}
            />
          );
        })}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="新しい記事"
          nextPath={nextPagePath}
          nextLabel="古い記事"
        />
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 63, truncate: true)
          frontmatter {
            title
            date(formatString: "YYYY年M月D日")
            path
            author
            excerpt
            tags
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
