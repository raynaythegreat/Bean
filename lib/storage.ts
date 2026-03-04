import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';

export async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR);
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  }
}

export async function saveFile(file: File): Promise<{ filename: string; path: string; url: string }> {
  await ensureUploadDir();

  const ext = file.name.split('.').pop() || 'bin';
  const filename = `${nanoid()}.${ext}`;
  const filePath = path.join(UPLOAD_DIR, filename);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await fs.writeFile(filePath, buffer);

  return {
    filename,
    path: filePath,
    url: `/uploads/${filename}`,
  };
}

export async function deleteFile(filename: string): Promise<void> {
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.unlink(filePath);
  } catch {
    // File might not exist, that's okay
  }
}

export async function fileExists(filename: string): Promise<boolean> {
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export function getFileUrl(filename: string): string {
  return `/uploads/${filename}`;
}