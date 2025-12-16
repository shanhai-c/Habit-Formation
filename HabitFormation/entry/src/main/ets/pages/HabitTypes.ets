export interface HabitData {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  targetDays: number;
  currentStreak: number;
  completed: boolean;
  isToday: boolean;
  reminder: string;
  createdAt: Date;
  lastCheckInDate?: Date;
  totalCheckIns: number;
}

export interface HabitRecord {
  id: number;
  habitId: number;
  checkInDate: Date;
  notes?: string;
  mood?: string;
}

export interface StatisticsData {
  totalHabits: number;
  completedToday: number;
  totalCheckIns: number;
  currentStreak: number;
  monthlyCompletionRate: number;
}

export interface NotificationItem {
  id: number;
  title: string;
  content: string;
  type: 'reminder' | 'achievement' | 'system';
  time: string;
  read: boolean;
}

export interface DialogButton {
  text: string;
  color: string;
}

export interface DialogResponse {
  index: number;
}

export interface CategoryColorConfig {
  primary: string;
  background: string;
  icon: string;
}

// 在 HabitTypes.ts 中添加
export interface CategoryStatData {
  category: string;
  count: number;
  completed: number;
  completionRate: number;
  color: string;
}

export type CategoryKey = '健康' | '学习' | '工作' | '生活';

// HabitTypes.ts 末尾补充以下代码
export interface ShowDialogOptions {
  title?: string;        // 对话框标题
  message?: string;      // 对话框内容
  buttons: DialogButton[]; // 按钮列表（必填）
  autoCancel?: boolean;  // 点击外部是否关闭（可选）
}