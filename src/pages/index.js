import React from 'react';
import PropTypes from 'prop-types';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
