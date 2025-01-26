import { SVGProps } from 'react';

// 导入所有SVG文件
import ReactSvg from '@/public/about/react.svg';
import TsSvg from '@/public/about/ts.svg';
import NextSvg from '@/public/about/next.svg';
import AiSvg from '@/public/about/ai.svg';
import PsSvg from '@/public/about/ps.svg';
// ... 导入其他SVG文件

interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
}

export const Icons = {
  react: (props: IconProps) => <ReactSvg {...props} />,
  ts: (props: IconProps) => <TsSvg {...props} />,
  next: (props: IconProps) => <NextSvg {...props} />,
  ai: (props: IconProps) => <AiSvg {...props} />,
  ps: (props: IconProps) => <PsSvg {...props} />,
  // ... 其他图标
} as const;

// 导出类型
export type IconName = keyof typeof Icons;

// 创建一个Icon组件用于统一调用
interface IconComponentProps extends IconProps {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = Icons[name];
  return <IconComponent {...props} />;
}; 