import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import WalineComments from '@site/src/components/WalineComments';

export default function BlogPostItemWrapper(props) {
  const {isBlogPostPage, metadata} = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <WalineComments path={metadata.permalink} />}
    </>
  );
}
