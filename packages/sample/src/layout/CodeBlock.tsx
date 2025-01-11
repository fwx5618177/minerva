import React, { useState, useEffect, useRef } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";
import Prism from "prismjs";

// 基础主题
import "prismjs/themes/prism-tomorrow.css";

// 添加更多语言支持
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-shell-session";

import styles from "@styles/layout/code-block.module.scss";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  live?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "typescript",
  showLineNumbers = true,
  live = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [preview, setPreview] = useState<React.ReactNode>(null);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  useEffect(() => {
    if (live && language === "jsx") {
      try {
        const Component = new Function("React", `return ${code}`).call(
          null,
          React,
        ).default;
        setPreview(<Component />);
      } catch (error) {
        console.error("Live preview error:", error);
      }
    }
  }, [code, live, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const formatCode = (code: string) => {
    return code.trim().replace(/\n$/, "");
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.header}>
        <span className={styles.language}>{language}</span>
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? (
            <IoCheckmarkOutline className={styles.icon} />
          ) : (
            <IoCopyOutline className={styles.icon} />
          )}
        </button>
      </div>
      <div className={styles.codeWrapper}>
        <pre
          className={`${styles.pre} ${showLineNumbers ? "line-numbers" : ""}`}
        >
          <code
            ref={codeRef}
            className={`language-${language}`}
            style={{ whiteSpace: "pre" }}
          >
            {formatCode(code)}
          </code>
        </pre>
      </div>
      {live && preview && <div className={styles.preview}>{preview}</div>}
    </div>
  );
};

export default CodeBlock;
