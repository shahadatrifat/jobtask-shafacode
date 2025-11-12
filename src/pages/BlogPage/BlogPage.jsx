import { useState } from "react";
import BlogCard from "../../components/Blog/BlogCard";
import { blogData, blogCategories } from "../../api/blogData";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Search } from "lucide-react";
import { Card } from "../../components/ui/card";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const featuredBlog = blogData[0];
  const recentPosts = blogData.slice(1, 5);

  return (
    <div className="min-h-screen mt-[72px] bg-background">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Featured + Blog Grid) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Page Title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-foreground">
              The TriGardening Journal
            </h1>
            <p className="text-muted-foreground mt-2">
              Your slogan goes here
            </p>
          </div>

          {/* Featured Blog */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{featuredBlog.title}</h2>
              <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                {featuredBlog.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <span>{featuredBlog.author}</span>
                <span>•</span>
                <span>{featuredBlog.date}</span>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Load More Articles
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6 self-start">
          {/* Search Blog */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Search Blog</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-9"
              />
            </div>
          </Card>

          {/* Blog Categories */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Blog Categories</h3>
            <div className="space-y-2">
              {blogCategories.map((category) => (
                <button
                  key={category.name}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-left"
                >
                  <span className="text-sm text-foreground">
                    {category.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          {/* Recent Posts */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default BlogPage;