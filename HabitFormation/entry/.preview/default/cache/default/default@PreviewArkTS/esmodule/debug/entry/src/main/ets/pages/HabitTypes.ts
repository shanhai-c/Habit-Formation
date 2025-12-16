// 习惯数据类型定义
export interface HabitData {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string; // 健康、学习、工作、生活
    targetDays: number; // 目标天数
    currentStreak: number; // 当前连续天数
    completed: boolean; // 今日是否完成
    isToday: boolean; // 是否是今日习惯
    reminder: string; // 提醒时间
    createdAt: Date; // 创建时间
}
// 习惯打卡记录
export interface HabitRecord {
    id: number;
    habitId: number;
    checkInDate: Date;
    notes?: string; // 可选备注
    mood?: string; // 心情状态
}
// 统计数据
export interface StatisticsData {
    totalHabits: number;
    completedToday: number;
    totalCheckIns: number;
    currentStreak: number; // 最长连续打卡
    monthlyCompletionRate: number;
}
