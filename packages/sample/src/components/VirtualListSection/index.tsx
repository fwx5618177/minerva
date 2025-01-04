import React, { useState, useCallback } from "react";
import { VirtualList, Button, Avatar } from "@minerva/lib-core";
import type { VirtualListItem } from "@minerva/lib-core";
import { FaUser, FaClock, FaTag } from "react-icons/fa";
import styles from "./section.module.scss";

// 生成更丰富的模拟数据
const generateItems = (start: number, count: number): VirtualListItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: start + i,
    metadata: {
      title: `Item ${start + i}`,
      description: `This is the description for item ${start + i}`,
      timestamp: Date.now() - Math.floor(Math.random() * 10000000),
      status: i % 3 === 0 ? "active" : i % 3 === 1 ? "inactive" : "pending",
      author: `User ${i % 5}`,
      category: `Category ${i % 3}`,
      priority: i % 4 === 0 ? "high" : i % 4 === 1 ? "medium" : "low",
      avatar: `https://i.pravatar.cc/150?u=${i}`,
    },
  }));

const VirtualListSection: React.FC = () => {
  // 基础列表状态
  const [basicItems] = useState<VirtualListItem[]>(() => generateItems(0, 100));

  // 无限滚动状态
  const [infiniteItems, setInfiniteItems] = useState<VirtualListItem[]>(() =>
    generateItems(0, 50),
  );
  const [infiniteLoading, setInfiniteLoading] = useState(false);

  // 高性能模式状态
  const [performanceItems, setPerformanceItems] = useState<VirtualListItem[]>(
    () => generateItems(0, 1000),
  );
  const [performanceLoading, setPerformanceLoading] = useState(false);

  // 无限滚动处理函数
  const handleLoadMore = useCallback(async () => {
    setInfiniteLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setInfiniteItems((prev) => [...prev, ...generateItems(prev.length, 20)]);
    } finally {
      setInfiniteLoading(false);
    }
  }, []);

  // 高性能模式数据加载
  const loadLargeDataset = useCallback(async (count: number) => {
    setPerformanceLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPerformanceItems(generateItems(0, count));
    } finally {
      setPerformanceLoading(false);
    }
  }, []);

  // 基础列表项渲染
  const renderBasicItem = useCallback(
    (item: VirtualListItem) => (
      <div className={styles.listItem}>
        <div className={styles.itemHeader}>
          <Avatar size="small" src={item.metadata?.avatar as string} />
          <div className={styles.itemTitle}>{item?.metadata?.title}</div>
        </div>
        <div className={styles.description}>{item?.metadata?.description}</div>
      </div>
    ),
    [],
  );

  // 详细信息列表项渲染
  const renderDetailItem = useCallback(
    (item: VirtualListItem) => (
      <div className={styles.listItem}>
        <div className={styles.itemHeader}>
          <Avatar size="medium" src={item.metadata?.avatar as string} />
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{item?.metadata?.title}</div>
            <div className={styles.itemMeta}>
              <span className={styles.author}>
                <FaUser size={12} />
                {item.metadata?.author}
              </span>
              <span className={styles.timestamp}>
                <FaClock size={12} />
                {new Date(item?.metadata?.timestamp as number).toLocaleString()}
              </span>
            </div>
          </div>
          {item?.metadata?.status && (
            <div
              className={`${styles.status} ${styles[item?.metadata?.status as string]}`}
            >
              {item?.metadata?.status}
            </div>
          )}
        </div>
        <div className={styles.description}>{item?.metadata?.description}</div>
        <div className={styles.metadata}>
          <span className={styles.category}>
            <FaTag size={12} />
            {item?.metadata?.category}
          </span>
          <span
            className={`${styles.priority} ${styles[(item?.metadata?.priority as string) || ""]}`}
          >
            Priority: {item?.metadata?.priority}
          </span>
        </div>
      </div>
    ),
    [],
  );

  return (
    <div className={styles.section}>
      <h3>Basic Virtual List</h3>
      <p className={styles.description}>简单列表项展示</p>
      <div className={styles.group}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <VirtualList
            items={basicItems}
            maxHeight={320}
            renderItem={renderBasicItem}
          />
        </div>
      </div>

      <h3>Detailed Virtual List</h3>
      <p className={styles.description}>展示更多元数据和复杂布局</p>
      <div className={styles.group}>
        <div style={{ width: "100%", maxWidth: 500 }}>
          <VirtualList
            style={{
              background: "#d3d3d3",
            }}
            items={infiniteItems}
            maxHeight={360}
            renderItem={renderDetailItem}
          />
        </div>
      </div>

      <h3>Infinite Scroll with Rich Content</h3>
      <p className={styles.description}>无限滚动加载更多数据，展示丰富的内容</p>
      <div className={styles.group}>
        <div style={{ width: "100%", maxWidth: 500 }}>
          <VirtualList
            items={infiniteItems}
            maxHeight={360}
            onLoadMore={handleLoadMore}
            loading={infiniteLoading}
            loadMoreThreshold={150}
            renderItem={renderDetailItem}
          />
        </div>
        <div className={styles.info}>已加载: {infiniteItems.length} 条数据</div>
      </div>

      <h3>High Performance Mode</h3>
      <p className={styles.description}>
        大数据集的高性能渲染模式，支持不同布局切换
      </p>
      <div className={styles.group}>
        <div style={{ width: "100%", maxWidth: 500 }}>
          <VirtualList
            items={performanceItems}
            maxHeight={400}
            highPerformance
            renderItem={renderDetailItem}
          />
        </div>
        <div className={styles.controls}>
          <Button
            onClick={() => loadLargeDataset(20000)}
            variant="primary"
            loading={performanceLoading}
          >
            加载 20,000 条数据
          </Button>
          <Button
            onClick={() => loadLargeDataset(50000)}
            variant="warning"
            loading={performanceLoading}
          >
            加载 50,000 条数据
          </Button>
          <div className={styles.count}>
            当前数据量: {performanceItems.length.toLocaleString()} 条
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualListSection;
