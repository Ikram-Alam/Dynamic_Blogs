import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CommentSection({ }: { postId: string }) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');
  
    const handleAddComment = () => {
      if (newComment.trim()) {
        setComments([...comments, newComment]);
        setNewComment('');
      }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>

      {/* Existing Comments */}
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Card key={index}>
              <CardContent className='pt-4'>{comment}</CardContent>
            </Card>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      {/* New Comment Input */}
      <div className="mt-6">
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full"
        />
        <Button onClick={handleAddComment} className="mt-4">
          Submit
        </Button>
      </div>
    </div>
  );
}
