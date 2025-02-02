import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';  // 需要安装: npm install marked

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const decodedSlug = decodeURIComponent(params.slug);
    const filePath = path.join(process.cwd(), 'public', 'archives', `${decodedSlug}.md`);
    console.log(filePath)
    const fileContent = await fs.readFile(filePath, 'utf-8');
    console.log('234',fileContent)
    const htmlContent = marked(fileContent);
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <article 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  } catch (error) {
    notFound();
  }
}