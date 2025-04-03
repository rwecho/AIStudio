/**
 * 不区分大小写获取URL参数
 * @param params URLSearchParams对象
 * @param key 要获取的参数名
 * @returns 参数值或null
 */
export function getParamCaseInsensitive(
  params: URLSearchParams,
  key: string
): string | null {
  // 直接尝试获取原始key
  const directValue = params.get(key);
  if (directValue !== null) return directValue;

  // 转换key为小写后比较
  const keyLower = key.toLowerCase();

  // 遍历所有参数名，查找不区分大小写的匹配
  for (const [paramKey] of params.entries()) {
    if (paramKey.toLowerCase() === keyLower) {
      return params.get(paramKey);
    }
  }

  return null;
}
