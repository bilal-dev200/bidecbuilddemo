
"use client";
import React, { useEffect } from 'react';
import Banner from '@/components/WebsiteComponents/Blog/Banner';
import ShopifySection from '@/components/WebsiteComponents/Blog/ShopifySection';
import CarouselCard from '@/components/WebsiteComponents/Blog/CarouselCard';
import { useBlogStore } from '@/lib/stores/blogsStore';
import Loader from '@/components/Loader';

const Page = () => {
  const { blogs, fetchBlogs, loading } = useBlogStore();

  
  useEffect(() => {
    fetchBlogs();
  }, []);


if (loading) return <Loader />;


  // Get the last 4 blogs for the carousel
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 4)
    .map(blog => ({
      img: blog.image,
      slug: blog.slug,
      category: blog.category?.name || "Uncategorized",
      title: blog.title,
      desc: blog.short_description,
      author: blog.author?.name || "Unknown",
       authorbio: blog.author?.bio || "Unknown",
      authorAvatar: blog.author?.avatar || null,   // <-- ADD THIS LINE
      date: new Date(blog.created_at).toLocaleDateString(),
    }));

  // Organize blogs by category for ShopifySection
  const categories = blogs.reduce((acc, blog) => {
    const catName = blog.category?.name || "Uncategorized";
    if (!acc[catName]) acc[catName] = [];
    acc[catName].push({
      img: blog.image,
      slug: blog.slug,
      category: catName,
      title: blog.title,
      desc: blog.short_description,
      author: blog.author?.name || "Unknown",
      date: new Date(blog.created_at).toLocaleDateString(),
    });
    return acc;
  }, {});

  return (
    <div className=''>
      <Banner />

      {/* Pass latestBlogs to the carousel */}
      <CarouselCard blogs={latestBlogs} />

      {Object.keys(categories).map(cat => (
        <ShopifySection
          key={cat}
          title={cat}
          cards={categories[cat]}
        />
      ))}
    </div>
  );
};

export default Page;
