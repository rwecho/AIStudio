import OSS from "ali-oss";

// 创建阿里云 OSS 客户端
export function createOSSClient() {
  return new OSS({
    endpoint: process.env.ALIYUN_OSS_ENDPOINT || "",
    region: process.env.ALIYUN_OSS_REGION || "",
    accessKeyId: process.env.ALIYUN_OSS_ACCESS_KEY || "",
    accessKeySecret: process.env.ALIYUN_OSS_SECRET_KEY || "",
    bucket: process.env.ALIYUN_OSS_BUCKET_NAME || "",
  });
}

// 上传文件到阿里云 OSS
export async function uploadToAliyun(
  fileBuffer: Buffer,
  filePath: string
): Promise<string> {
  try {
    const client = createOSSClient();
    const result = await client.put(filePath, fileBuffer);
    return result.name;
  } catch (error) {
    console.error("上传到阿里云OSS失败:", error);
    throw new Error("文件上传失败");
  }
}

// 获取文件url
export async function getAliyunFileUrl(filePath: string): Promise<string> {
  try {
    const client = createOSSClient();
    const url = client.signatureUrl(filePath, {
      expires: 60 * 60, // 1小时有效期
    });
    return url;
  } catch (error) {
    console.error("获取阿里云OSS文件URL失败:", error);
    throw new Error("获取文件URL失败");
  }
}

// 从阿里云 OSS 删除文件
export async function deleteFromAliyun(filePath: string): Promise<void> {
  try {
    const client = createOSSClient();
    await client.delete(filePath);
  } catch (error) {
    console.error("从阿里云OSS删除文件失败:", error);
    throw new Error("文件删除失败");
  }
}
