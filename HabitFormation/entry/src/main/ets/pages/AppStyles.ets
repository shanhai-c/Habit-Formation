
interface GeneratedObjectLiteralInterface_1 {
  primary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;

  // 文字颜色
  textPrimary: string;
  textSecondary: string;
  textHint: string;

  // 背景颜色
  background: string;
  surface: string;
  divider: string;
}

interface GeneratedObjectLiteralInterface_2 {
  xxs: number;
  xs: number;
  sm: number;
  base: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

interface GeneratedObjectLiteralInterface_3 {
  xs: number;
  sm: number;
  base: number;
  lg: number;
  xl: number;
  xxl: number;
}

interface GeneratedObjectLiteralInterface_4 {
  sm: number;
  base: number;
  lg: number;
  xl: number;
  xxl: number;
  full: number;
}

interface GeneratedObjectLiteralInterface_5 {
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
}

interface GeneratedObjectLiteralInterface_6 {
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
}

interface GeneratedObjectLiteralInterface_7 {
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
}

interface GeneratedObjectLiteralInterface_8 {
  sm: GeneratedObjectLiteralInterface_5;
  base: GeneratedObjectLiteralInterface_6;
  lg: GeneratedObjectLiteralInterface_7;
}

export class AppStyles {
  // 颜色系统
  static colors: GeneratedObjectLiteralInterface_1 = {
    primary: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#8B5CF6',

    // 文字颜色
    textPrimary: '#1E293B',
    textSecondary: '#64748B',
    textHint: '#94A3B8',

    // 背景颜色
    background: '#F8FAFC',
    surface: '#FFFFFF',
    divider: '#E2E8F0'
  };

  // 字体大小
  static fontSize: GeneratedObjectLiteralInterface_2 = {
    xxs: 10,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30
  };

  // 间距
  static spacing: GeneratedObjectLiteralInterface_3 = {
    xs: 4,
    sm: 8,
    base: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  };

  // 圆角
  static borderRadius: GeneratedObjectLiteralInterface_4 = {
    sm: 4,
    base: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999
  };

  // 阴影
  static shadow: GeneratedObjectLiteralInterface_8 = {
    sm: ({
      radius: 4,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 2
    } as GeneratedObjectLiteralInterface_5),
    base: ({
      radius: 8,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 4
    } as GeneratedObjectLiteralInterface_6),
    lg: ({
      radius: 12,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 6
    } as GeneratedObjectLiteralInterface_7)
  };
}