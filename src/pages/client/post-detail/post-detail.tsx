import { _posts as fakePosts } from '@/_mocks/_posts';
import { ComposerInput } from '@/components/composer-input';
import { Post as PostComponent } from '@/components/post';
import type { Comment, Post } from '@interfaces/post';
import { useParams } from 'react-router-dom';
import { Comment as CommentComponent, SubHeader } from './components';

//--------------------------------------------------------------------------------------------------------------------------------

export default function PostDetail() {
  const { id } = useParams();

  const post = fakePosts.find((post: Post) => post.id === Number(id));

  return (
    <SubHeader>
      <div className="h-full flex flex-col gap-2 items-center w-full">
        {post ? <PostComponent post={post} /> : <p>Post not found</p>}
        <section className="w-full max-h-screen grow flex flex-col justify-between items-start gap-2 bg-neutral2-2 rounded-[1.25rem] mb-3">
          <div className="flex flex-col gap-2 p-3 w-full overflow-y-auto">
            {post?.comments?.length &&
              post.comments.map((comment: Comment, index) => (
                <CommentComponent
                  key={comment.id}
                  comment={comment}
                  isLast={index === post.comments.length - 1}
                />
              ))}
          </div>

          <ComposerInput usedBy="reply" />
        </section>
      </div>
    </SubHeader>
  );
}
