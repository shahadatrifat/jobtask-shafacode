import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

const ReviewLoginDialog = ({ isOpen, onClose, onGoogleLogin }) =>{
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Write a Review
          </DialogTitle>
          <DialogDescription className="text-center">
            Please login to your account to write a review
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>

          {/* Login Button with Social Icons */}
          <div className="flex items-center gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Login to Write Review
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-muted"
              onClick={onGoogleLogin}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-muted"
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
            </Button>
          </div>

          {/* Signup Text */}
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button className="text-primary hover:underline font-medium">
              Sign up
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReviewLoginDialog