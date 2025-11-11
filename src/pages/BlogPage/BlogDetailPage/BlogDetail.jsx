import { useParams } from "react-router";
import { getBlogBySlug, getRecentBlogs, blogCategories } from "../../../api/blogData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { Calendar, User, Clock, MessageCircle, ThumbsUp } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Textarea } from "../../../components/ui/textarea";
import { Separator } from "../../../components/ui/separator";
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const recentBlogs = getRecentBlogs(4);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background mt-[72px] flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Blog not found</p>
      </div>
    );
  }

  const comments = [
    {
      id: 1,
      author: "Sunita Chowdhury",
      verified: true,
      date: "3 days ago | 17 November, 2025",
      comment: "এই ব্লগ পোস্টের জন্য অনেক ধন্যবাদ। আমি নতুন গার্ডেনার এবং এই টিপসগুলো খুবই সাহায্যকারী ছিল। আমার গাছগুলো এখন আগের চেয়ে অনেক ভালো দেখাচ্ছে।",
      likes: 12,
      replies: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{blog.category}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                {blog.category}
              </Badge>
            </div>

            {/* Blog Header */}
            <div className="mb-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">
                {blog.title}
              </h1>

              <p className="text-lg text-muted-foreground">{blog.excerpt}</p>
            </div>

            <Separator className="my-6" />

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Comments Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Comments
              </h2>

              {/* Write Comment */}
              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Write your comment</h3>
                <Textarea
                  placeholder="Share your thoughts..."
                  className="mb-4"
                  rows={4}
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit
                </Button>
              </Card>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <Card key={comment.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{comment.author}</h4>
                          {comment.verified && (
                            <Badge variant="outline" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">
                          {comment.date}
                        </p>
                        <p className="text-sm text-foreground mb-4">
                          {comment.comment}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({comment.likes})</span>
                          </button>
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>Reply ({comment.replies})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {/* Search Blog */}
            <Card className="p-6 mb-6">
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
            <Card className="p-6 mb-6">
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
                {recentBlogs.map((post) => (
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
                      <p className="text-xs text-muted-foreground">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}