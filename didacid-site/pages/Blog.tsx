import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import PageMeta from '../components/PageMeta';
import AnimatedBanner from '../components/AnimatedBanner';

const Blog: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Blog - Didacid"
        description="Articles, guides et astuces sur le dépannage informatique, la sécurité et les nouvelles technologies."
      />
      <div className="animate-fadeIn">
        <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Mon Blog</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Retrouvez mes derniers articles, guides et astuces pour mieux comprendre et maîtriser votre environnement numérique.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <Link 
                  to={`/blog/${post.slug}`} 
                  key={post.slug}
                  className="block bg-surface rounded-lg shadow-lg overflow-hidden hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">{post.description}</p>
                    <span className="text-primary font-semibold mt-4 inline-block">Lire l'article &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
