"use client";

import { useState } from "react";
import { Select, Switch, Button, message, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

const { Option } = Select;

interface StatusControllerProps {
  id: string;
  initialStatus: string;
  initialApproved: boolean;
  initialCleaned: boolean;
  initialHasCover: boolean;
  initialCoverImage?: string;
  onStatusChange?: (newStatus: any) => void;
}

export default function StatusController({
  id,
  initialStatus,
  initialApproved,
  initialCleaned,
  initialHasCover,
  initialCoverImage,
  onStatusChange,
}: StatusControllerProps) {
  const [status, setStatus] = useState(initialStatus);
  const [isApproved, setIsApproved] = useState(initialApproved);
  const [isCleaned, setIsCleaned] = useState(initialCleaned);
  const [hasCoverImage, setHasCoverImage] = useState(initialHasCover);
  const [coverImage, setCoverImage] = useState(initialCoverImage || "");
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/status?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setStatus(newStatus);
        message.success("文章状态已更新");
        if (onStatusChange) onStatusChange({ status: newStatus });
      } else {
        throw new Error("更新失败");
      }
    } catch (error) {
      message.error("更新文章状态失败");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprovedChange = async (checked: boolean) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/status?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isApproved: checked }),
      });

      if (response.ok) {
        setIsApproved(checked);
        message.success(checked ? "文章已审核通过" : "文章已取消审核状态");
        if (onStatusChange) onStatusChange({ isApproved: checked });
      } else {
        throw new Error("更新失败");
      }
    } catch (error) {
      message.error("更新审核状态失败");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCleanedChange = async (checked: boolean) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/status?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCleaned: checked }),
      });

      if (response.ok) {
        setIsCleaned(checked);
        message.success(
          checked ? "文章已标记为清理完成" : "文章已取消清理标记"
        );
        if (onStatusChange) onStatusChange({ isCleaned: checked });
      } else {
        throw new Error("更新失败");
      }
    } catch (error) {
      message.error("更新清理状态失败");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCoverImageChange = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/status?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hasCoverImage: true,
          coverImage: coverImage,
        }),
      });

      if (response.ok) {
        setHasCoverImage(true);
        message.success("文章封面图片已更新");
        if (onStatusChange) onStatusChange({ hasCoverImage: true, coverImage });
      } else {
        throw new Error("更新失败");
      }
    } catch (error) {
      message.error("更新封面图片失败");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="status-controller space-y-4 border p-4 rounded-md">
      <h3 className="text-lg font-medium">文章状态管理</h3>

      <div className="flex items-center space-x-4">
        <span className="w-20">状态:</span>
        <Select
          value={status}
          onChange={handleStatusChange}
          style={{ width: 200 }}
          disabled={loading}
        >
          <Option value="DRAFT">草稿</Option>
          <Option value="PENDING">待审核</Option>
          <Option value="PUBLISHED">已发布</Option>
          <Option value="REJECTED">已拒绝</Option>
          <Option value="ARCHIVED">已归档</Option>
        </Select>
      </div>

      <div className="flex items-center space-x-4">
        <span className="w-20">审核状态:</span>
        <Switch
          checked={isApproved}
          onChange={handleApprovedChange}
          disabled={loading}
        />
        <span>{isApproved ? "已审核" : "未审核"}</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="w-20">清理状态:</span>
        <Switch
          checked={isCleaned}
          onChange={handleCleanedChange}
          disabled={loading}
        />
        <span>{isCleaned ? "已清理" : "未清理"}</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="w-20">封面图片:</span>
          <Switch
            checked={hasCoverImage}
            onChange={(checked) => setHasCoverImage(checked)}
            disabled={loading}
          />
          <span>{hasCoverImage ? "有封面" : "无封面"}</span>
        </div>

        {hasCoverImage && (
          <div className="ml-24 space-y-2">
            <Input
              placeholder="输入封面图片URL"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              disabled={loading}
            />
            <Button
              type="primary"
              onClick={handleCoverImageChange}
              loading={loading}
              disabled={!coverImage}
            >
              更新封面图片
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
