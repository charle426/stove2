import Hero from './components/Hero';
import Features from './components/Features';
import { BlogSome } from './components/blog';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <BlogSome />
    </div>
  );
}
