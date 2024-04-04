import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostCard({ post: { path, title }, type }: Props) {
  const postType = type === 'prev' ? 'Previous' : 'Next';

  return (
    <Link href={`/posts/${path}`}>
      <p className="text-sm mb-1 font-newsreader text-custom-textDesc1">{postType}</p>
      <p className="text-sm font-gowun">{title}</p>
    </Link>
  );
}
