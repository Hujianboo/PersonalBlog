import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const archivesPath = path.join(process.cwd(), 'public', 'archives');
    const files = await fs.readdir(archivesPath);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        title: file.replace('.md', ''),
        path: `/archives/${file}`
      }));
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error reading archives:', error);
    return NextResponse.json({ error: 'Failed to fetch archives' }, { status: 500 });
  }
} 