import React, { Component } from 'react';

const PostPage = props => {
  const { data } = props;
  return (
    <div>
      <span>{data.markdownRemark.frontmatter.date}</span>
      <h3>{data.markdownRemark.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  );
};

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;
