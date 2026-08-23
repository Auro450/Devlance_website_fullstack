import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import path from 'path'
import fs from 'fs'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getDbUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL
  }

  const projectDbPath = path.resolve(process.cwd(), 'dev.db')

  // On Vercel / serverless environments, root directory is read-only.
  // Copy dev.db to /tmp/dev.db where SQLite has read/write permissions.
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const tmpDbPath = '/tmp/dev.db'
    if (!fs.existsSync(tmpDbPath) && fs.existsSync(projectDbPath)) {
      try {
        fs.copyFileSync(projectDbPath, tmpDbPath)
      } catch (err) {
        console.error('Failed to copy dev.db to /tmp:', err)
      }
    }
    return `file:${tmpDbPath}`
  }

  return `file:${projectDbPath}`
}

let prismaClient: PrismaClient

if (globalForPrisma.prisma) {
  prismaClient = globalForPrisma.prisma
} else {
  const adapter = new PrismaBetterSqlite3({ 
    url: getDbUrl()
  })
  
  prismaClient = new PrismaClient({ adapter })
}

export const prisma = prismaClient

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
