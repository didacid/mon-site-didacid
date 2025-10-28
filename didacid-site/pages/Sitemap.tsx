import React from 'react';
import { servicesList } from '../data/servicesData';
import { blogPosts } from '../data/blogPosts';

const Sitemap: React.FC = () => {
    const baseUrl = 'https://didacid.fr';

    const staticPages = [
        '/',
        '/services',
        '/ai-support',
        '/blog',
        '/about',
        '/pricing',
        '/contact',
        '/booking',
        '/legal',
        '/privacy',
        '/terms'
    ];

    const today = new Date().toISOString().split('T')[0];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(path => `
    <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${today}</lastmod>
        <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}
    ${servicesList.map(service => `
    <url>
        <loc>${baseUrl}/services/${service.slug}</loc>
        <lastmod>${today}</lastmod>
        <priority>0.7</priority>
    </url>`).join('')}
    ${blogPosts.map(post => `
    <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${today}</lastmod>
        <priority>0.6</priority>
    </url>`).join('')}
</urlset>`;

    // This component is likely not used in the main app routes but could be
    // used by a server-side rendering framework to generate the actual sitemap.xml file.
    return (
        <pre>{sitemapXml.trim()}</pre>
    );
};

export default Sitemap;
