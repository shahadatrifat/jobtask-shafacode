import { Link } from "react-router";
import { Calendar, User, Clock } from "lucide-react";
import { Badge } from "../ui/badge";

 function BlogCard({ blog }) {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
          {blog.category}
        </Badge>
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;