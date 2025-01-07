import React, { useState } from "react";
import { Tag, Space } from "@minerva/lib-core";
import {
  FaHeart,
  FaStar,
  FaCheck,
  FaUser,
  FaCode,
  FaBug,
  FaBookmark,
  FaFlag,
  FaClock,
  FaLock,
  FaGithub,
  FaPlus,
} from "react-icons/fa";
import styles from "./section.module.scss";

const TagSection: React.FC = () => {
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3", "Tag 4"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleClose = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Tag 标签</h2>
        <p className={styles.description}>进行标记和分类的小标签</p>
      </div>

      <h3>基础用法</h3>
      <p className={styles.description}>
        基础的标签用法，可以通过设置 variant 来展示不同的状态。
      </p>
      <div className={styles.group}>
        <Tag>Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="info">Info</Tag>
      </div>

      <h3>组合展示</h3>
      <p className={styles.description}>不同属性的组合展示效果。</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Space wrap>
            <Tag bordered variant="primary">
              边框标签
            </Tag>
            <Tag elevation variant="success">
              阴影标签
            </Tag>
            <Tag icon={<FaBookmark />} variant="warning">
              图标标签
            </Tag>
            <Tag closable variant="error">
              可关闭
            </Tag>
          </Space>
          <Space wrap>
            <Tag bordered elevation>
              边框+阴影
            </Tag>
            <Tag icon={<FaFlag />} closable>
              图标+关闭
            </Tag>
            <Tag bordered icon={<FaClock />}>
              边框+图标
            </Tag>
            <Tag elevation closable variant="primary">
              阴影+关闭
            </Tag>
          </Space>
        </Space>
      </div>

      <h3>状态标签</h3>
      <p className={styles.description}>用于表示状态的标签组合。</p>
      <div className={styles.group}>
        <Space wrap>
          <Tag icon={<FaCheck />} variant="success">
            已完成
          </Tag>
          <Tag icon={<FaClock />} variant="warning">
            进行中
          </Tag>
          <Tag icon={<FaLock />} variant="error">
            已锁定
          </Tag>
          <Tag icon={<FaBug />} variant="error">
            Bug
          </Tag>
          <Tag icon={<FaCode />} variant="info">
            开发中
          </Tag>
          <Tag icon={<FaUser />} variant="primary">
            已分配
          </Tag>
        </Space>
      </div>

      <h3>可选择标签</h3>
      <p className={styles.description}>点击可选择，再次点击取消选择。</p>
      <div className={styles.group}>
        <Space wrap>
          {["设计", "前端", "后端", "测试", "运维"].map((tag) => (
            <Tag
              key={tag}
              clickable
              variant={selectedTags.includes(tag) ? "primary" : "default"}
              bordered={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Tag>
          ))}
        </Space>
      </div>

      <h3>动态编辑标签</h3>
      <p className={styles.description}>动态添加和删除标签。</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Space wrap>
            {tags.map((tag) => (
              <Tag
                key={tag}
                closable
                onClose={() => handleClose(tag)}
                variant="primary"
              >
                {tag}
              </Tag>
            ))}
            <Tag
              clickable
              icon={<FaPlus />}
              onClick={() => {
                const newTag = `Tag ${tags.length + 1}`;
                setTags([...tags, newTag]);
              }}
            >
              新建标签
            </Tag>
          </Space>
        </Space>
      </div>

      <h3>社交标签</h3>
      <p className={styles.description}>用于社交媒体的标签样式。</p>
      <div className={styles.group}>
        <Space wrap>
          <Tag icon={<FaGithub />} bgColor="#24292e" textColor="#ffffff">
            GitHub
          </Tag>
          <Tag icon={<FaHeart />} bgColor="#ff4081" textColor="#ffffff">
            喜欢
          </Tag>
          <Tag icon={<FaStar />} bgColor="#ffd700" textColor="#000000">
            收藏
          </Tag>
        </Space>
      </div>

      <h3>渐变效果标签</h3>
      <p className={styles.description}>使用渐变背景的标签。</p>
      <div className={styles.group}>
        <Space wrap>
          <Tag
            style={{
              background: "linear-gradient(45deg, #ff6b6b, #feca57)",
              color: "#ffffff",
            }}
          >
            渐变标签
          </Tag>
          <Tag
            style={{
              background: "linear-gradient(45deg, #4834d4, #686de0)",
              color: "#ffffff",
            }}
          >
            渐变标签
          </Tag>
          <Tag
            style={{
              background: "linear-gradient(45deg, #6ab04c, #badc58)",
              color: "#ffffff",
            }}
          >
            渐变标签
          </Tag>
        </Space>
      </div>

      <h3>尺寸与形状组合</h3>
      <p className={styles.description}>不同尺寸和形状的组合展示。</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Space wrap align="center">
            <Tag size="small" shape="square">
              小方形
            </Tag>
            <Tag size="medium" shape="square">
              中方形
            </Tag>
            <Tag size="large" shape="square">
              大方形
            </Tag>
          </Space>
          <Space wrap align="center">
            <Tag size="small" shape="rounded">
              小圆角
            </Tag>
            <Tag size="medium" shape="rounded">
              中圆角
            </Tag>
            <Tag size="large" shape="rounded">
              大圆角
            </Tag>
          </Space>
          <Space wrap align="center">
            <Tag size="small" shape="circle">
              小圆形
            </Tag>
            <Tag size="medium" shape="circle">
              中圆形
            </Tag>
            <Tag size="large" shape="circle">
              大圆形
            </Tag>
          </Space>
        </Space>
      </div>

      <h3>带计数器的标签</h3>
      <p className={styles.description}>显示数量的标签组合。</p>
      <div className={styles.group}>
        <Space wrap>
          <Tag variant="primary">
            未读消息{" "}
            <Tag size="small" shape="circle">
              99+
            </Tag>
          </Tag>
          <Tag variant="success">
            完成任务{" "}
            <Tag size="small" shape="circle">
              23
            </Tag>
          </Tag>
          <Tag variant="warning">
            待处理{" "}
            <Tag size="small" shape="circle">
              5
            </Tag>
          </Tag>
        </Space>
      </div>
    </div>
  );
};

export default TagSection;
