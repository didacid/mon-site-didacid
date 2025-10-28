import React from 'react';

const Robots: React.FC = () => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://didacid.fr/sitemap.xml
`;

    // This component is likely not used in the main app routes but could be
    // used by a server-side rendering framework to generate the actual robots.txt file.
    // For a standard CRA, you'd place a robots.txt file in the public/ folder.
    return (
        <pre>{robotsTxt}</pre>
    );
};

export default Robots;
