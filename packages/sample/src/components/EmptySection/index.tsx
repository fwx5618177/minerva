import React from "react";
import { Empty, Button } from "@minerva/lib-core";
import {
  FaInbox,
  FaSearch,
  FaFileAlt,
  FaExclamationTriangle,
  FaImage,
  FaDatabase,
} from "react-icons/fa";
import styles from "./section.module.scss";

const EmptySection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Basic Empty State</h3>
      <p className={styles.description}>基础的空状态展示</p>
      <div className={styles.group}>
        <Empty description="No Data" />
        <Empty description="使用 SVG 图标" useSvg />
      </div>

      <h3>Icon Variants</h3>
      <p className={styles.description}>不同图标类型的展示</p>
      <div className={styles.group}>
        <Empty description="默认图标" />
        <Empty description="SVG 图标" useSvg />
        <Empty icon={<FaInbox size={40} />} description="自定义图标" />
      </div>

      <h3>Custom Icons</h3>
      <p className={styles.description}>自定义图标的空状态</p>
      <div className={styles.group}>
        <Empty icon={<FaInbox size={40} />} description="收件箱为空" />
        <Empty icon={<FaSearch size={40} />} description="未找到搜索结果" />
        <Empty icon={<FaFileAlt size={40} />} description="暂无文档" />
        <Empty icon={<FaImage size={40} />} description="暂无图片" />
      </div>

      <h3>With Actions</h3>
      <p className={styles.description}>带操作按钮的空状态</p>
      <div className={styles.group}>
        <Empty description="购物车为空" useSvg>
          <Button variant="primary">去购物</Button>
        </Empty>

        <Empty description="暂无文件" icon={<FaFileAlt size={40} />}>
          <Button variant="primary">上传文件</Button>
        </Empty>

        <Empty description="数据为空" icon={<FaDatabase size={40} />}>
          <div className={styles.actions}>
            <Button variant="primary">导入数据</Button>
            <Button>刷新</Button>
          </div>
        </Empty>
      </div>

      <h3>Custom Styles</h3>
      <p className={styles.description}>自定义样式的空状态</p>
      <div className={styles.group}>
        <Empty
          icon={<FaExclamationTriangle size={40} color="#faad14" />}
          description="出错了"
          className={styles.warningEmpty}
        >
          <Button variant="warning">重试</Button>
        </Empty>

        <Empty
          useSvg
          description={
            <div className={styles.customDescription}>
              <h4>暂无数据</h4>
              <p>请稍后再试</p>
            </div>
          }
          className={styles.infoEmpty}
        />
      </div>

      <h3>Complex Empty States</h3>
      <p className={styles.description}>复杂的空状态展示</p>
      <div className={styles.group}>
        <Empty
          icon={<FaSearch size={40} />}
          description={
            <div className={styles.complexDescription}>
              <h4>未找到匹配结果</h4>
              <p>试试其他搜索条件</p>
              <ul>
                <li>检查输入是否正确</li>
                <li>使用更少的筛选条件</li>
                <li>使用更通用的关键词</li>
              </ul>
            </div>
          }
          className={styles.searchEmpty}
        >
          <div className={styles.actions}>
            <Button variant="primary">清除筛选</Button>
            <Button>返回</Button>
          </div>
        </Empty>

        <Empty
          useSvg
          description={
            <div className={styles.complexDescription}>
              <h4>数据加载失败</h4>
              <p>可能的原因：</p>
              <ul>
                <li>网络连接不稳定</li>
                <li>服务器暂时不可用</li>
                <li>数据权限不足</li>
              </ul>
            </div>
          }
          className={styles.errorEmpty}
        >
          <Button variant="primary">重新加载</Button>
        </Empty>

        <Empty
          useSvg
          showShadow
          description={
            <div className={styles.complexDescription}>
              <h4>数据加载失败</h4>
              <p>可能的原因：</p>
              <ul>
                <li>网络连接不稳定</li>
                <li>服务器暂时不可用</li>
                <li>数据权限不足</li>
              </ul>
            </div>
          }
          className={styles.errorEmpty}
        >
          <Button variant="primary">重新加载</Button>
        </Empty>

        <Empty
          useSvg
          showShadow
          backgroundColor="#ff9800"
          color="#fff"
          description={
            <div className={styles.complexDescription}>
              <h4>数据加载失败</h4>
              <p>可能的原因：</p>
              <ul>
                <li>网络连接不稳定</li>
                <li>服务器暂时不可用</li>
                <li>数据权限不足</li>
              </ul>
            </div>
          }
          className={styles.errorEmpty}
        >
          <Button variant="primary">重新加载</Button>
        </Empty>
      </div>
    </div>
  );
};

export default EmptySection;
