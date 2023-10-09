import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  createdAt: string;
  slug: string;
}

export default function PostCard({ slug, title, description, createdAt }: PostCardProps) {
  return (
    <div className="border-b-[0.5px] pb-3 mb-5 border-gray-300 hover:opacity-50">
      <Link href={`/posts/${slug}`} className="flex-col">
        <h2 className="text-gray-900 text-xl font-semibold">{title}</h2>
        <h3 className="text-gray-600 italic text-sm">{description}</h3>
        <h4 className="text-blue-500 italic text-xs text-end">{createdAt}</h4>
      </Link>
    </div>
  )
}