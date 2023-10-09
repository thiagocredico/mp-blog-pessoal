import PostCard from '@/components/post-card'
import orderPostsByDate from '@/utils/orderPostByDate';
import fs from 'fs';
import path from 'path';

export default async function Home() {

  const postsPath = "src/app/posts";
  const allFiles = fs.readdirSync(postsPath);
  const folders = allFiles.filter((file) => fs.statSync(path.join(postsPath, file)).isDirectory());

  const postsPromises = folders.map(async (folder) => {
    const { meta } = await import(`${postsPath}/${folder}/page.mdx`);
    return {
      meta,
      folder,
    };
  })
  
  const posts = await Promise.all(postsPromises);

  return (
    <div>
      {
        orderPostsByDate(posts).map((post) => (
          <PostCard
           createdAt={post.meta.createdAt}
           description={post.meta.description} 
           title={post.meta.title}
           key={post.meta.title}
           slug={post.folder}
          />
        ))
      }
    </div>
  )
}
