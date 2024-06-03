import React from 'react';
import { useParams } from 'react-router-dom';
import Content2 from '../Blogy2/Content2';
import BlogSingle from '../Blogy2/BlogSingle';
import Footer from '../Blogy2/Footer';

const BlogDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Example logic to determine which content to render based on id
  // You can adjust this logic based on your actual requirement
  const renderContent = () => {
    if (id === '1') {
      return (
        <div>
          <Content2 />
          <BlogSingle />
          <Footer />
        </div>
      );
    } else if (id === '2') {
      return (
        <>
          <Content2 />
          <BlogSingle />
          <Footer />
        </>
      );
    } else if (id === '3') {
      return (
        <>
          <Content2 />
          <BlogSingle />
          <Footer />
        </>
      );
    } else if (id === '4') {
      return (
        <>
          <Content2 />
          <BlogSingle />
          <Footer />
        </>
      );
    } else if (id === '5') {
      return (
        <>
          <Content2 />
          <BlogSingle />
          <Footer />
        </>
      );
    } else if (id === '6') {
      return (
        <>
          <Content2 />
          <BlogSingle />
          <Footer />
        </>
      );
    } else {
      return <div>Content not found</div>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default BlogDetail;
