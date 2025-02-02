import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// 支持的文件类型
const SUPPORTED_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|md|ttf)$/i

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    // 跳过 art 目录
    if (path.basename(dirPath) === 'art') {
      return
    }
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
    } else if (SUPPORTED_EXTENSIONS.test(file)) {
      // 只添加支持的文件类型
      const relativePath = filePath
        .replace(path.join(process.cwd(), 'public'), '')
        .replace(/\\/g, '/')
      arrayOfFiles.push(relativePath)
    }
  })

  return arrayOfFiles
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public')
    const assets = getAllFiles(publicDir)
    
    return NextResponse.json({ assets })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get assets' }, { status: 500 })
  }
} 