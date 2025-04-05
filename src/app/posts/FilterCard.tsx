import axiosInstance from "@/lib/axios";
import usePostsStore from "@/store/PostsStore";
import { Button, Card, Divider, Select, Space, Tag, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

// 模拟的标签数据
const availableTags = [] as string[];

const FilterCard = () => {
  // 状态管理
  const [selectedSource, setSelectedSources] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);

  const { reload, setFilters } = usePostsStore();

  useEffect(() => {
    const load = async () => {
      const {
        data: { sources },
        status,
      } = await axiosInstance.get(`/api/posts/sources`);

      if (status !== 200) {
        console.error("获取来源列表失败");
        return;
      }
      setSources(sources);
    };
    load();
  }, []);

  // 处理重置筛选条件
  const handleReset = () => {
    setSelectedSources(null);
    setSelectedTags([]);
  };

  // 处理应用筛选条件
  const handleApplyFilter = () => {
    // 这里可以将筛选条件传递给父组件或通过其他方式应用筛选
    const filters = {
      source: selectedSource,
      tags: selectedTags,
    };

    setFilters(filters);
    reload();
  };

  // 处理标签点击
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Card
      style={{
        marginTop: "16px",
        width: "100%",
      }}
      title="筛选条件"
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        {/* 分类筛选 */}
        <div>
          <Title level={5}>文章来源</Title>
          <Select
            style={{ width: "100%" }}
            placeholder="选择文章来源"
            allowClear
            options={sources.map((source) => ({
              value: source,
              label: source,
            }))}
            value={selectedSource}
            onChange={setSelectedSources}
          />
        </div>

        {/* 标签筛选 */}
        {availableTags.length > 0 && (
          <>
            <Divider style={{ margin: "12px 0" }} />

            <div>
              <Title level={5}>文章标签</Title>
              <div style={{ marginTop: 8 }}>
                {availableTags.map((tag) => (
                  <Tag
                    key={tag}
                    color={selectedTags.includes(tag) ? "blue" : "default"}
                    style={{ marginBottom: 8, cursor: "pointer" }}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </>
        )}

        <Divider style={{ margin: "12px 0" }} />

        {/* 操作按钮 */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleReset}>重置</Button>
          <Button type="primary" onClick={handleApplyFilter}>
            应用筛选
          </Button>
        </div>
      </Space>
    </Card>
  );
};

export default FilterCard;
