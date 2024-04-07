import fs from 'node:fs'
import path, { dirname } from 'node:path'

import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcPath = path.join(__dirname, '../src/icon')
const distPath = path.join(__dirname, '../dist/icon')

// 创建目标文件夹
fs.mkdirSync(distPath, { recursive: true })

// 读取源文件夹中的文件列表
const files = fs.readdirSync(srcPath)

// 遍历文件列表并复制文件
files.forEach((file) => {
  const srcFile = path.join(srcPath, file)
  const distFile = path.join(distPath, file)
  fs.copyFileSync(srcFile, distFile)
})
