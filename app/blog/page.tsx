'use client';

import { useState, useEffect } from 'react';
import { Code2, ExternalLink, CalendarDays } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  cover_image: string | null;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=skanenje');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="group/spotlight relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" 
           style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)' }} />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <main id="content" className="pt-24 lg:w-full lg:py-24">
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
                <h2 className="text-xl font-bold tracking-tight text-slate-200">Blog</h2>
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-300"></div>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-400">No blog posts found.</p>
                </div>
              ) : (
                <div className="grid gap-8">
                  {posts.map((post) => (
                    <div key={post.id} className="rounded-lg border border-slate-700/50 p-6 hover:border-slate-700 transition">
                      {post.cover_image && (
                        <img 
                          src={post.cover_image} 
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">{post.title}</h3>
                      <p className="text-slate-400 mb-4">{post.description}</p>
                      <div className="flex items-center text-sm text-slate-500 mb-4">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {post.readable_publish_date}
                      </div>
                      <a 
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
                      >
                        Read on dev.to
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
