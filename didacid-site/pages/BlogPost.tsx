import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import PageMeta from '../components/PageMeta';
import { Calendar, User, Twitter, Linkedin, Facebook } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <PageMeta 
        title={`${post.title} - Didacid`}
        description={post.description}
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="text-primary hover:underline mb-8 inline-block">&larr; Retour au blog</Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-text-secondary mb-6">
                <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                </div>
            </div>

            <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg shadow-lg mb-8" />

            <div className="bg-surface p-8 rounded-lg shadow-lg">
                <article className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-primary prose-h3:text-text-primary prose-a:text-primary">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-bold text-text-primary">Partager cet article :</h3>
                <div className="flex gap-4">
                     <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full hover:bg-primary transition-colors"><Linkedin size={20} /></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
                </div>
            </div>

             <div className="mt-16">
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">À lire également</h3>
                 <div className="grid md:grid-cols-3 gap-8">
                    {otherPosts.map(p => (
                         <Link 
                          to={`/blog/${p.slug}`} 
                          key={p.slug}
                          className="block bg-surface rounded-lg shadow-lg overflow-hidden hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                        >
                          <img src={p.imageUrl} alt={p.title} className="w-full h-40 object-cover" />
                          <div className="p-4">
                            <h4 className="text-md font-bold text-text-primary mb-2">{p.title}</h4>
                            <span className="text-primary font-semibold text-sm">Lire la suite &rarr;</span>
                          </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
