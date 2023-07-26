import React, { Suspense } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import PostWidget from '../components/PostWidget';
import Categories from '../components/Categories';
import PostCard from '../components/PostCard';

import { getPosts, getRecentPosts, getSimilarPosts } from '../services'

const inter = Inter({ subsets: ['latin'] })
interface PostNode {
  title: string;
  // include other properties of your post objects
}


export default function Home({posts}) {
  return (
    <>
    <div className="container mx-auto px-10 mb-8"  >
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 ' >
      <div className='lg:col-span-8 col-span-1 p-8'>
      {posts.map((post: {node: PostNode}) => (
  <PostCard post={post.node} key={post.node.title}/>
    ))}
      </div> 
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>

              <PostWidget />

              <Categories />
            </div>
          </div>
    </div>

    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}