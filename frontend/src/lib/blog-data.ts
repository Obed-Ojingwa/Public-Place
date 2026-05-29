// FILE 1: Blog Data Structure & Helper
// Path: C:\Users\Melody\Documents\nerdpace\frontend\src\lib\blog-data.ts
 
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: 'technical-seo' | 'local-seo' | 'content-seo' | 'performance' | 'business';
  author: string;
  readTime: number;
  featured_image_url: string;
  tags: string[];
  published_at: string;
  views: number;
}
 
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ultimate-guide-to-technical-seo',
    title: 'The Ultimate Guide to Technical SEO in 2024',
    description: 'Master technical SEO with our comprehensive guide covering site architecture, mobile optimization, and more.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'technical-seo',
    author: 'NerdPace Team',
    readTime: 15,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Technical SEO', 'Site Architecture', 'Mobile Optimization'],
    published_at: '2024-05-15',
    views: 2340
  },
    {id: '2',
    slug: 'local-seo-strategies',
    title: 'Top Local SEO Strategies for Small Businesses', 
    description: 'Boost your local search presence with proven local SEO strategies for small businesses.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'local-seo',  
    author: 'NerdPace Team',
    readTime: 10,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Local SEO', 'Small Business', 'Search Engine Optimization'],
    published_at: '2024-05-10',
    views: 1890
  },
  {
    id: '3',
    slug: 'content-seo-tips',
    title: 'Effective Content SEO Tips for 2024',
    description: 'Discover the latest content SEO strategies to improve your website’s visibility and ranking.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'content-seo',
    author: 'NerdPace Team',
    readTime: 12,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Content SEO', 'Keyword Research', 'On-Page Optimization'],
    published_at: '2024-05-05',
    views: 1560
  },
  {
    id: '4',
    slug: 'performance-seo-techniques',
    title: 'Advanced Performance SEO Techniques',
    description: 'Learn how to optimize your website’s performance for better search engine rankings.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'performance',
    author: 'NerdPace Team',
    readTime: 14,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Performance SEO', 'Site Speed', 'User Experience'],
    published_at: '2024-04-28',
    views: 1230
  },
  {
    id: '5',
    slug: 'business-seo-tactics',
    title: 'Effective Business SEO Tactics for 2024',
    description: 'Discover the latest business SEO strategies to drive growth and increase visibility.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'business',
    author: 'NerdPace Team',
    readTime: 16,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Business SEO', 'Growth Strategies', 'Online Visibility'],
    published_at: '2024-04-20',
    views: 1100
  },
];