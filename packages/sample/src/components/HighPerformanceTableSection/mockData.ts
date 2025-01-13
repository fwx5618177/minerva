import { TableRow } from "@minerva/lib-core";

const FIRST_NAMES = [
  "张",
  "李",
  "王",
  "赵",
  "刘",
  "陈",
  "杨",
  "黄",
  "周",
  "吴",
];
const LAST_NAMES = [
  "伟",
  "芳",
  "娜",
  "秀英",
  "敏",
  "静",
  "丽",
  "强",
  "磊",
  "洋",
];
const CITIES = [
  "北京",
  "上海",
  "广州",
  "深圳",
  "杭州",
  "南京",
  "成都",
  "武汉",
  "西安",
  "重庆",
];
const STREETS = [
  "中山路",
  "人民路",
  "解放路",
  "建设路",
  "和平路",
  "新华路",
  "长江路",
  "黄河路",
  "青年路",
  "文化路",
];
const DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "qq.com",
  "163.com",
];

const getRandomElement = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const generateName = (): string =>
  getRandomElement(FIRST_NAMES) + getRandomElement(LAST_NAMES);

const generateAddress = (): string =>
  `${getRandomElement(CITIES)}市${getRandomElement(STREETS)}${Math.floor(Math.random() * 1000)}号`;

const generateEmail = (name: string): string =>
  `${name}${Math.floor(Math.random() * 1000)}@${getRandomElement(DOMAINS)}`;

/**
 * 生成模拟数据
 * @param count 数据条数
 * @returns 模拟数据数组
 */
export const generateMockData = (count: number): TableRow[] => {
  console.time("Generate Mock Data");

  // 使用 Array.from 而不是循环，提高性能
  const data = Array.from({ length: count }, (_, index) => {
    const name = generateName();
    return {
      id: { number: index + 1 },
      name: { text: name },
      age: { number: Math.floor(Math.random() * 50) + 18 },
      address: { text: generateAddress() },
      email: { text: generateEmail(name) },
    };
  });

  console.timeEnd("Generate Mock Data");
  return data;
};
