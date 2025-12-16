if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MainPage_Params {
    currentDate?: string;
    currentHour?: number;
    hasUnreadNotifications?: boolean;
    selectedTab?: number;
    habits?: HabitData[];
    todayRecords?: HabitRecord[];
    isLoading?: boolean;
    showAddHabitDialog?: boolean;
    showStatistics?: boolean;
    userName?: string;
    selectedCategory?: string;
    newHabitName?: string;
    newHabitCategory?: string;
    newHabitTarget?: number;
    statistics?: StatisticsData;
    buttonClickScale?: number;
}
import router from "@ohos:router";
import type { HabitData, HabitRecord, StatisticsData, CategoryColorConfig, CategoryStatData } from '../pages/HabitTypes';
import promptAction from "@ohos:promptAction";
interface GeneratedTypeLiteralInterface_1 {
    index: number;
}
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDate = new ObservedPropertySimplePU(this.getCurrentDate(), this, "currentDate");
        this.__currentHour = new ObservedPropertySimplePU(new Date().getHours(), this, "currentHour");
        this.__hasUnreadNotifications = new ObservedPropertySimplePU(true, this, "hasUnreadNotifications");
        this.__selectedTab = new ObservedPropertySimplePU(0, this, "selectedTab");
        this.__habits = new ObservedPropertyObjectPU(this.getMockHabits(), this, "habits");
        this.__todayRecords = new ObservedPropertyObjectPU([], this, "todayRecords");
        this.__isLoading = new ObservedPropertySimplePU(false, this, "isLoading");
        this.__showAddHabitDialog = new ObservedPropertySimplePU(false, this, "showAddHabitDialog");
        this.__showStatistics = new ObservedPropertySimplePU(false, this, "showStatistics");
        this.__userName = new ObservedPropertySimplePU('习惯达人', this, "userName");
        this.__selectedCategory = new ObservedPropertySimplePU('全部', this, "selectedCategory");
        this.__newHabitName = new ObservedPropertySimplePU('', this, "newHabitName");
        this.__newHabitCategory = new ObservedPropertySimplePU('健康', this, "newHabitCategory");
        this.__newHabitTarget = new ObservedPropertySimplePU(30, this, "newHabitTarget");
        this.__statistics = new ObservedPropertyObjectPU(this.getDefaultStatistics(), this, "statistics");
        this.__buttonClickScale = new ObservedPropertySimplePU(1, this, "buttonClickScale");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MainPage_Params) {
        if (params.currentDate !== undefined) {
            this.currentDate = params.currentDate;
        }
        if (params.currentHour !== undefined) {
            this.currentHour = params.currentHour;
        }
        if (params.hasUnreadNotifications !== undefined) {
            this.hasUnreadNotifications = params.hasUnreadNotifications;
        }
        if (params.selectedTab !== undefined) {
            this.selectedTab = params.selectedTab;
        }
        if (params.habits !== undefined) {
            this.habits = params.habits;
        }
        if (params.todayRecords !== undefined) {
            this.todayRecords = params.todayRecords;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.showAddHabitDialog !== undefined) {
            this.showAddHabitDialog = params.showAddHabitDialog;
        }
        if (params.showStatistics !== undefined) {
            this.showStatistics = params.showStatistics;
        }
        if (params.userName !== undefined) {
            this.userName = params.userName;
        }
        if (params.selectedCategory !== undefined) {
            this.selectedCategory = params.selectedCategory;
        }
        if (params.newHabitName !== undefined) {
            this.newHabitName = params.newHabitName;
        }
        if (params.newHabitCategory !== undefined) {
            this.newHabitCategory = params.newHabitCategory;
        }
        if (params.newHabitTarget !== undefined) {
            this.newHabitTarget = params.newHabitTarget;
        }
        if (params.statistics !== undefined) {
            this.statistics = params.statistics;
        }
        if (params.buttonClickScale !== undefined) {
            this.buttonClickScale = params.buttonClickScale;
        }
    }
    updateStateVars(params: MainPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDate.purgeDependencyOnElmtId(rmElmtId);
        this.__currentHour.purgeDependencyOnElmtId(rmElmtId);
        this.__hasUnreadNotifications.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedTab.purgeDependencyOnElmtId(rmElmtId);
        this.__habits.purgeDependencyOnElmtId(rmElmtId);
        this.__todayRecords.purgeDependencyOnElmtId(rmElmtId);
        this.__isLoading.purgeDependencyOnElmtId(rmElmtId);
        this.__showAddHabitDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__showStatistics.purgeDependencyOnElmtId(rmElmtId);
        this.__userName.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedCategory.purgeDependencyOnElmtId(rmElmtId);
        this.__newHabitName.purgeDependencyOnElmtId(rmElmtId);
        this.__newHabitCategory.purgeDependencyOnElmtId(rmElmtId);
        this.__newHabitTarget.purgeDependencyOnElmtId(rmElmtId);
        this.__statistics.purgeDependencyOnElmtId(rmElmtId);
        this.__buttonClickScale.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDate.aboutToBeDeleted();
        this.__currentHour.aboutToBeDeleted();
        this.__hasUnreadNotifications.aboutToBeDeleted();
        this.__selectedTab.aboutToBeDeleted();
        this.__habits.aboutToBeDeleted();
        this.__todayRecords.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__showAddHabitDialog.aboutToBeDeleted();
        this.__showStatistics.aboutToBeDeleted();
        this.__userName.aboutToBeDeleted();
        this.__selectedCategory.aboutToBeDeleted();
        this.__newHabitName.aboutToBeDeleted();
        this.__newHabitCategory.aboutToBeDeleted();
        this.__newHabitTarget.aboutToBeDeleted();
        this.__statistics.aboutToBeDeleted();
        this.__buttonClickScale.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 状态管理
    private __currentDate: ObservedPropertySimplePU<string>;
    get currentDate() {
        return this.__currentDate.get();
    }
    set currentDate(newValue: string) {
        this.__currentDate.set(newValue);
    }
    private __currentHour: ObservedPropertySimplePU<number>;
    get currentHour() {
        return this.__currentHour.get();
    }
    set currentHour(newValue: number) {
        this.__currentHour.set(newValue);
    }
    private __hasUnreadNotifications: ObservedPropertySimplePU<boolean>;
    get hasUnreadNotifications() {
        return this.__hasUnreadNotifications.get();
    }
    set hasUnreadNotifications(newValue: boolean) {
        this.__hasUnreadNotifications.set(newValue);
    }
    private __selectedTab: ObservedPropertySimplePU<number>; // 0:今日习惯, 1:全部习惯, 2:统计
    get selectedTab() {
        return this.__selectedTab.get();
    }
    set selectedTab(newValue: number) {
        this.__selectedTab.set(newValue);
    }
    private __habits: ObservedPropertyObjectPU<HabitData[]>;
    get habits() {
        return this.__habits.get();
    }
    set habits(newValue: HabitData[]) {
        this.__habits.set(newValue);
    }
    private __todayRecords: ObservedPropertyObjectPU<HabitRecord[]>;
    get todayRecords() {
        return this.__todayRecords.get();
    }
    set todayRecords(newValue: HabitRecord[]) {
        this.__todayRecords.set(newValue);
    }
    private __isLoading: ObservedPropertySimplePU<boolean>;
    get isLoading() {
        return this.__isLoading.get();
    }
    set isLoading(newValue: boolean) {
        this.__isLoading.set(newValue);
    }
    private __showAddHabitDialog: ObservedPropertySimplePU<boolean>;
    get showAddHabitDialog() {
        return this.__showAddHabitDialog.get();
    }
    set showAddHabitDialog(newValue: boolean) {
        this.__showAddHabitDialog.set(newValue);
    }
    private __showStatistics: ObservedPropertySimplePU<boolean>;
    get showStatistics() {
        return this.__showStatistics.get();
    }
    set showStatistics(newValue: boolean) {
        this.__showStatistics.set(newValue);
    }
    private __userName: ObservedPropertySimplePU<string>;
    get userName() {
        return this.__userName.get();
    }
    set userName(newValue: string) {
        this.__userName.set(newValue);
    }
    private __selectedCategory: ObservedPropertySimplePU<string>;
    get selectedCategory() {
        return this.__selectedCategory.get();
    }
    set selectedCategory(newValue: string) {
        this.__selectedCategory.set(newValue);
    }
    private __newHabitName: ObservedPropertySimplePU<string>;
    get newHabitName() {
        return this.__newHabitName.get();
    }
    set newHabitName(newValue: string) {
        this.__newHabitName.set(newValue);
    }
    private __newHabitCategory: ObservedPropertySimplePU<string>;
    get newHabitCategory() {
        return this.__newHabitCategory.get();
    }
    set newHabitCategory(newValue: string) {
        this.__newHabitCategory.set(newValue);
    }
    private __newHabitTarget: ObservedPropertySimplePU<number>;
    get newHabitTarget() {
        return this.__newHabitTarget.get();
    }
    set newHabitTarget(newValue: number) {
        this.__newHabitTarget.set(newValue);
    }
    private __statistics: ObservedPropertyObjectPU<StatisticsData>;
    get statistics() {
        return this.__statistics.get();
    }
    set statistics(newValue: StatisticsData) {
        this.__statistics.set(newValue);
    }
    private __buttonClickScale: ObservedPropertySimplePU<number>;
    get buttonClickScale() {
        return this.__buttonClickScale.get();
    }
    set buttonClickScale(newValue: number) {
        this.__buttonClickScale.set(newValue);
    }
    // 计算今日习惯
    private getTodayHabits(): HabitData[] {
        return this.habits.filter(h => h.isToday);
    }
    // 计算筛选后的习惯
    private getFilteredHabits(): HabitData[] {
        if (this.selectedCategory === '全部') {
            return this.habits;
        }
        else {
            return this.habits.filter(h => h.category === this.selectedCategory);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 使用Stack作为唯一根节点
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(46:5)", "entry");
            // 使用Stack作为唯一根节点
            Stack.width('100%');
            // 使用Stack作为唯一根节点
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 主要内容区域
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(48:7)", "entry");
            // 主要内容区域
            Column.width('100%');
            // 主要内容区域
            Column.height('100%');
            // 主要内容区域
            Column.backgroundColor('#F8FAFC');
        }, Column);
        this.buildTopBar.bind(this)();
        this.buildDateCard.bind(this)();
        this.buildTabBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容区域 - 使用Stack包装确保正确布局
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(54:9)", "entry");
            // 内容区域 - 使用Stack包装确保正确布局
            Column.width('100%');
            // 内容区域 - 使用Stack包装确保正确布局
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 根据当前选中的标签页显示不同内容
            if (this.selectedTab === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.buildTodayHabits.bind(this)();
                });
            }
            else if (this.selectedTab === 1) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.buildAllHabits.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.buildStatisticsPage.bind(this)();
                });
            }
        }, If);
        If.pop();
        // 内容区域 - 使用Stack包装确保正确布局
        Column.pop();
        // 主要内容区域
        Column.pop();
        // 悬浮按钮 - 固定在右下角
        this.buildFloatingActionButton.bind(this)();
        // 对话框 - 放在最上层
        this.buildAddHabitDialog.bind(this)();
        // 使用Stack作为唯一根节点
        Stack.pop();
    }
    // 顶部导航栏
    buildTopBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(84:5)", "entry");
            Row.width('100%');
            Row.padding({
                left: 20,
                right: 20,
                top: 12,
                bottom: 12
            });
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户信息
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(86:7)", "entry");
            // 用户信息
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(87:9)", "entry");
            Image.width(48);
            Image.height(48);
            Image.borderRadius(24);
            Image.border({ width: 2, color: '#FFFFFF' });
            Image.shadow({
                radius: 8,
                color: '#00000014',
                offsetX: 0,
                offsetY: 4
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(98:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 根据时间段显示问候语
            Text.create(this.getGreetingByTime());
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(100:11)", "entry");
            // 根据时间段显示问候语
            Text.fontSize(14);
            // 根据时间段显示问候语
            Text.fontColor('#64748B');
        }, Text);
        // 根据时间段显示问候语
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户名
            Text.create(this.userName);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(105:11)", "entry");
            // 用户名
            Text.fontSize(18);
            // 用户名
            Text.fontColor('#1E293B');
            // 用户名
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        // 用户名
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 在 buildTopBar() 方法的合适位置添加：
            TextClock.create();
            TextClock.debugLine("entry/src/main/ets/pages/MainPage.ets(112:9)", "entry");
            // 在 buildTopBar() 方法的合适位置添加：
            TextClock.format('H');
            // 在 buildTopBar() 方法的合适位置添加：
            TextClock.onDateChange(() => {
                this.currentHour = new Date().getHours();
            });
            // 在 buildTopBar() 方法的合适位置添加：
            TextClock.opacity(0);
            // 在 buildTopBar() 方法的合适位置添加：
            TextClock.height(0);
        }, TextClock);
        // 在 buildTopBar() 方法的合适位置添加：
        TextClock.pop();
        // 用户信息
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 通知和设置按钮
            Row.create({ space: 16 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(124:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(126:9)", "entry");
            Stack.onClick(() => {
                // 点击后标记为已读（可选）
                this.hasUnreadNotifications = false;
                router.pushUrl({ url: 'pages/NotificationPage' });
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(127:11)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 根据是否有未读通知显示红点
            if (this.getUnreadNotificationCount() > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Circle.create({ width: 8, height: 8 });
                        Circle.debugLine("entry/src/main/ets/pages/MainPage.ets(133:13)", "entry");
                        Circle.fill('#EF4444');
                        Circle.position({ x: 14, y: 2 });
                    }, Circle);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(144:9)", "entry");
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                router.pushUrl({ url: 'pages/SettingsPage' });
            });
        }, Image);
        // 通知和设置按钮
        Row.pop();
        Row.pop();
    }
    // 日期卡片
    buildDateCard(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(166:5)", "entry");
            Column.width('92%');
            Column.padding(20);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.margin({ top: 16, bottom: 16 });
            Column.shadow({
                radius: 12,
                color: '#0000000A',
                offsetX: 0,
                offsetY: 4
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(167:7)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.currentDate);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(168:9)", "entry");
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('第' + this.getWeekNumber() + '周');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(173:9)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
            Text.margin({ left: 12 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 本周统计 - 使用实际数据
            Row.create({ space: 20 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(182:7)", "entry");
            // 本周统计 - 使用实际数据
            Row.width('100%');
            // 本周统计 - 使用实际数据
            Row.padding({ top: 16, bottom: 16 });
            // 本周统计 - 使用实际数据
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(183:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getTodayCompletion().toString());
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(184:11)", "entry");
            Text.fontSize(24);
            Text.fontColor('#10B981');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日完成');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(188:11)", "entry");
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/MainPage.ets(193:9)", "entry");
            Divider.height(40);
            Divider.color('#E2E8F0');
            Divider.vertical(false);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(195:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.statistics.totalHabits.toString());
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(196:11)", "entry");
            Text.fontSize(24);
            Text.fontColor('#3B82F6');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('总习惯');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(200:11)", "entry");
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/MainPage.ets(205:9)", "entry");
            Divider.height(40);
            Divider.color('#E2E8F0');
            Divider.vertical(false);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(207:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.statistics.monthlyCompletionRate + '%');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(208:11)", "entry");
            Text.fontSize(24);
            Text.fontColor('#8B5CF6');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('完成率');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(212:11)", "entry");
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        // 本周统计 - 使用实际数据
        Row.pop();
        Column.pop();
    }
    // 添加辅助方法
    private getWeekNumber(): number {
        const now = new Date();
        const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
        const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
    private getTodayCompletion(): number {
        const todayHabits = this.habits.filter(h => h.isToday);
        return todayHabits.filter(h => h.completed).length;
    }
    // 标签页切换
    buildTabBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 0 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(250:5)", "entry");
            Row.width('92%');
            Row.padding({ top: 8, bottom: 8 });
            Row.backgroundColor('#FFFFFF');
            Row.borderRadius(12);
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 今日习惯
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(252:7)", "entry");
            // 今日习惯
            Column.layoutWeight(1);
            // 今日习惯
            Column.onClick(() => {
                this.selectedTab = 0;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日习惯');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(253:9)", "entry");
            Text.fontSize(16);
            Text.fontColor(this.selectedTab === 0 ? '#3B82F6' : '#64748B');
            Text.fontWeight(this.selectedTab === 0 ? FontWeight.Bold : FontWeight.Normal);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.selectedTab === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Divider.create();
                        Divider.debugLine("entry/src/main/ets/pages/MainPage.ets(259:11)", "entry");
                        Divider.color('#3B82F6');
                        Divider.height(3);
                        Divider.width(24);
                        Divider.margin({ top: 8 });
                    }, Divider);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // 今日习惯
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 全部习惯
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(272:7)", "entry");
            // 全部习惯
            Column.layoutWeight(1);
            // 全部习惯
            Column.onClick(() => {
                this.selectedTab = 1;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全部习惯');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(273:9)", "entry");
            Text.fontSize(16);
            Text.fontColor(this.selectedTab === 1 ? '#3B82F6' : '#64748B');
            Text.fontWeight(this.selectedTab === 1 ? FontWeight.Bold : FontWeight.Normal);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.selectedTab === 1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Divider.create();
                        Divider.debugLine("entry/src/main/ets/pages/MainPage.ets(279:11)", "entry");
                        Divider.color('#3B82F6');
                        Divider.height(3);
                        Divider.width(24);
                        Divider.margin({ top: 8 });
                    }, Divider);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // 全部习惯
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 统计
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(292:7)", "entry");
            // 统计
            Column.layoutWeight(1);
            // 统计
            Column.onClick(() => {
                this.selectedTab = 2;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('统计');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(293:9)", "entry");
            Text.fontSize(16);
            Text.fontColor(this.selectedTab === 2 ? '#3B82F6' : '#64748B');
            Text.fontWeight(this.selectedTab === 2 ? FontWeight.Bold : FontWeight.Normal);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.selectedTab === 2) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Divider.create();
                        Divider.debugLine("entry/src/main/ets/pages/MainPage.ets(299:11)", "entry");
                        Divider.color('#3B82F6');
                        Divider.height(3);
                        Divider.width(24);
                        Divider.margin({ top: 8 });
                    }, Divider);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // 统计
        Column.pop();
        Row.pop();
    }
    // 今日习惯页面
    buildTodayHabits(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(321:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.getTodayHabits().length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 空状态
                        Column.create({ space: 16 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(324:9)", "entry");
                        // 空状态
                        Column.width('100%');
                        // 空状态
                        Column.margin({ top: 40 });
                        // 空状态
                        Column.alignItems(HorizontalAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777234, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/pages/MainPage.ets(325:11)", "entry");
                        Image.width(160);
                        Image.height(160);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('今天没有习惯任务');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(328:11)", "entry");
                        Text.fontSize(18);
                        Text.fontColor('#64748B');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('休息一下，或者添加新习惯');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(331:11)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#94A3B8');
                    }, Text);
                    Text.pop();
                    // 空状态
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 习惯列表 - 使用Scroll包装，确保可以滚动
                        Scroll.create();
                        Scroll.debugLine("entry/src/main/ets/pages/MainPage.ets(340:9)", "entry");
                        // 习惯列表 - 使用Scroll包装，确保可以滚动
                        Scroll.width('100%');
                        // 习惯列表 - 使用Scroll包装，确保可以滚动
                        Scroll.height('100%');
                        // 习惯列表 - 使用Scroll包装，确保可以滚动
                        Scroll.scrollBar(BarState.Auto);
                    }, Scroll);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 12 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(341:11)", "entry");
                        Column.width('100%');
                        Column.padding({ left: 20, right: 20, top: 0, bottom: 80 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const habit = _item;
                            this.buildHabitCard.bind(this)(habit, true);
                        };
                        this.forEachUpdateFunction(elmtId, this.getTodayHabits(), forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Column.pop();
                    // 习惯列表 - 使用Scroll包装，确保可以滚动
                    Scroll.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 全部习惯页面
    buildAllHabits(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(361:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 分类筛选 - 固定位置
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/MainPage.ets(363:7)", "entry");
            // 分类筛选 - 固定位置
            Scroll.width('100%');
            // 分类筛选 - 固定位置
            Scroll.height(48);
            // 分类筛选 - 固定位置
            Scroll.scrollable(ScrollDirection.Horizontal);
            // 分类筛选 - 固定位置
            Scroll.scrollBar(BarState.Off);
            // 分类筛选 - 固定位置
            Scroll.margin({ bottom: 12 });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(364:9)", "entry");
            Row.width('100%');
            Row.padding({ right: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const category = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(category);
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(366:13)", "entry");
                    Text.fontSize(14);
                    Text.fontColor(this.selectedCategory === category ? '#FFFFFF' : '#475569');
                    Text.padding({ left: 16, right: 16, top: 8, bottom: 8 });
                    Text.backgroundColor(this.selectedCategory === category ? '#3B82F6' : '#F1F5F9');
                    Text.borderRadius(20);
                    Text.onClick(() => {
                        this.selectedCategory = category;
                    });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['全部', '健康', '学习', '工作', '生活'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        // 分类筛选 - 固定位置
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯列表 - 可滚动区域
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/MainPage.ets(387:7)", "entry");
            // 习惯列表 - 可滚动区域
            Scroll.width('100%');
            // 习惯列表 - 可滚动区域
            Scroll.height('100%');
            // 习惯列表 - 可滚动区域
            Scroll.scrollBar(BarState.Auto);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(388:9)", "entry");
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.getFilteredHabits().length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 空状态
                        Column.create({ space: 16 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(391:13)", "entry");
                        // 空状态
                        Column.width('100%');
                        // 空状态
                        Column.margin({ top: 40 });
                        // 空状态
                        Column.alignItems(HorizontalAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777234, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/pages/MainPage.ets(392:15)", "entry");
                        Image.width(160);
                        Image.height(160);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('暂无习惯');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(395:15)", "entry");
                        Text.fontSize(18);
                        Text.fontColor('#64748B');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('点击下方按钮添加新习惯');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(398:15)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#94A3B8');
                    }, Text);
                    Text.pop();
                    // 空状态
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 习惯列表 - 使用Column而不是List，避免换行问题
                        Column.create({ space: 12 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(407:13)", "entry");
                        // 习惯列表 - 使用Column而不是List，避免换行问题
                        Column.width('100%');
                        // 习惯列表 - 使用Column而不是List，避免换行问题
                        Column.padding({ left: 20, right: 20, top: 0, bottom: 80 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const habit = _item;
                            this.buildHabitCard.bind(this)(habit, false);
                        };
                        this.forEachUpdateFunction(elmtId, this.getFilteredHabits(), forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    // 习惯列表 - 使用Column而不是List，避免换行问题
                    Column.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        // 习惯列表 - 可滚动区域
        Scroll.pop();
        Column.pop();
    }
    // 统计页面
    buildStatisticsPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/MainPage.ets(429:5)", "entry");
            Scroll.width('100%');
            Scroll.height('100%');
            Scroll.scrollBar(BarState.Auto);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(430:7)", "entry");
            Column.width('100%');
            Column.padding({ top: 20, bottom: 20 });
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        // 统计概览卡片
        this.buildStatsOverview.bind(this)();
        // 习惯坚持天数排行
        this.buildHabitRanking.bind(this)();
        // 分类统计
        this.buildCategoryStats.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 添加底部空间
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/MainPage.ets(441:9)", "entry");
            // 添加底部空间
            Blank.height(100);
        }, Blank);
        // 添加底部空间
        Blank.pop();
        Column.pop();
        Scroll.pop();
    }
    buildStatsOverview(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(455:5)", "entry");
            Column.width('92%');
            Column.padding(20);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.shadow({
                radius: 12,
                color: '#0000000A',
                offsetX: 0,
                offsetY: 4
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(456:7)", "entry");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('统计概览');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(457:9)", "entry");
            Text.fontSize(18);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/pages/MainPage.ets(464:7)", "entry");
            Grid.columnsTemplate('1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap(12);
            Grid.rowsGap(12);
            Grid.width('92%');
        }, Grid);
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.debugLine("entry/src/main/ets/pages/MainPage.ets(465:9)", "entry");
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.debugLine("entry/src/main/ets/pages/MainPage.ets(466:11)", "entry");
                    Column.width('100%');
                    Column.height(80);
                    Column.justifyContent(FlexAlign.Center);
                    Column.alignItems(HorizontalAlign.Center);
                    Column.backgroundColor('#FFFFFF');
                    Column.borderRadius(12);
                    Column.shadow({
                        radius: 8,
                        color: '#0000000A',
                        offsetX: 0,
                        offsetY: 2
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.statistics.totalHabits.toString());
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(467:13)", "entry");
                    Text.fontSize(24);
                    Text.fontColor('#3B82F6');
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('总习惯');
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(471:13)", "entry");
                    Text.fontSize(12);
                    Text.fontColor('#64748B');
                }, Text);
                Text.pop();
                Column.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.debugLine("entry/src/main/ets/pages/MainPage.ets(489:9)", "entry");
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.debugLine("entry/src/main/ets/pages/MainPage.ets(490:11)", "entry");
                    Column.width('100%');
                    Column.height(80);
                    Column.justifyContent(FlexAlign.Center);
                    Column.alignItems(HorizontalAlign.Center);
                    Column.backgroundColor('#FFFFFF');
                    Column.borderRadius(12);
                    Column.shadow({
                        radius: 8,
                        color: '#0000000A',
                        offsetX: 0,
                        offsetY: 2
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.statistics.completedToday.toString());
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(491:13)", "entry");
                    Text.fontSize(24);
                    Text.fontColor('#10B981');
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('今日完成');
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(495:13)", "entry");
                    Text.fontSize(12);
                    Text.fontColor('#64748B');
                }, Text);
                Text.pop();
                Column.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.debugLine("entry/src/main/ets/pages/MainPage.ets(513:9)", "entry");
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.debugLine("entry/src/main/ets/pages/MainPage.ets(514:11)", "entry");
                    Column.width('100%');
                    Column.height(80);
                    Column.justifyContent(FlexAlign.Center);
                    Column.alignItems(HorizontalAlign.Center);
                    Column.backgroundColor('#FFFFFF');
                    Column.borderRadius(12);
                    Column.shadow({
                        radius: 8,
                        color: '#0000000A',
                        offsetX: 0,
                        offsetY: 2
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.statistics.currentStreak.toString());
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(515:13)", "entry");
                    Text.fontSize(24);
                    Text.fontColor('#F59E0B');
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('最长连续');
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(519:13)", "entry");
                    Text.fontSize(12);
                    Text.fontColor('#64748B');
                }, Text);
                Text.pop();
                Column.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        {
            const itemCreation2 = (elmtId, isInitialRender) => {
                GridItem.create(() => { }, false);
                GridItem.debugLine("entry/src/main/ets/pages/MainPage.ets(537:9)", "entry");
            };
            const observedDeepRender = () => {
                this.observeComponentCreation2(itemCreation2, GridItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.debugLine("entry/src/main/ets/pages/MainPage.ets(538:11)", "entry");
                    Column.width('100%');
                    Column.height(80);
                    Column.justifyContent(FlexAlign.Center);
                    Column.alignItems(HorizontalAlign.Center);
                    Column.backgroundColor('#FFFFFF');
                    Column.borderRadius(12);
                    Column.shadow({
                        radius: 8,
                        color: '#0000000A',
                        offsetX: 0,
                        offsetY: 2
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.statistics.monthlyCompletionRate + '%');
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(539:13)", "entry");
                    Text.fontSize(24);
                    Text.fontColor('#8B5CF6');
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('完成率');
                    Text.debugLine("entry/src/main/ets/pages/MainPage.ets(543:13)", "entry");
                    Text.fontSize(12);
                    Text.fontColor('#64748B');
                }, Text);
                Text.pop();
                Column.pop();
                GridItem.pop();
            };
            observedDeepRender();
        }
        Grid.pop();
        Column.pop();
    }
    buildAddHabitDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showAddHabitDialog) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 使用Stack作为遮罩层
                        Stack.create({ alignContent: Alignment.Center });
                        Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(583:7)", "entry");
                        // 使用Stack作为遮罩层
                        Stack.width('100%');
                        // 使用Stack作为遮罩层
                        Stack.height('100%');
                        // 使用Stack作为遮罩层
                        Stack.position({ x: 0, y: 0 });
                        // 使用Stack作为遮罩层
                        Stack.zIndex(999);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 半透明遮罩层
                        Column.create();
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(585:9)", "entry");
                        // 半透明遮罩层
                        Column.width('100%');
                        // 半透明遮罩层
                        Column.height('100%');
                        // 半透明遮罩层
                        Column.backgroundColor('#00000040');
                        // 半透明遮罩层
                        Column.onClick(() => {
                            this.showAddHabitDialog = false;
                        });
                    }, Column);
                    // 半透明遮罩层
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 对话框内容
                        Column.create({ space: 24 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(594:9)", "entry");
                        // 对话框内容
                        Column.width('80%');
                        // 对话框内容
                        Column.padding(24);
                        // 对话框内容
                        Column.backgroundColor('#FFFFFF');
                        // 对话框内容
                        Column.borderRadius(24);
                        // 对话框内容
                        Column.shadow({
                            radius: 24,
                            color: '#00000020',
                            offsetX: 0,
                            offsetY: 8
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('添加新习惯');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(595:11)", "entry");
                        Text.fontSize(20);
                        Text.fontColor('#1E293B');
                        Text.fontWeight(FontWeight.Bold);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 习惯名称
                        Column.create({ space: 8 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(601:11)", "entry");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('习惯名称');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(602:13)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#475569');
                        Text.width('100%');
                        Text.textAlign(TextAlign.Start);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '请输入习惯名称' });
                        TextInput.debugLine("entry/src/main/ets/pages/MainPage.ets(608:13)", "entry");
                        TextInput.width('100%');
                        TextInput.height(48);
                        TextInput.fontSize(16);
                        TextInput.padding({ left: 16, right: 16 });
                        TextInput.backgroundColor('#F8FAFC');
                        TextInput.borderRadius(8);
                        TextInput.onChange((value: string) => {
                            this.newHabitName = value;
                        });
                    }, TextInput);
                    // 习惯名称
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 分类选择
                        Column.create({ space: 8 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(621:11)", "entry");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('分类');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(622:13)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#475569');
                        Text.width('100%');
                        Text.textAlign(TextAlign.Start);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                        Row.debugLine("entry/src/main/ets/pages/MainPage.ets(628:13)", "entry");
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceBetween);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const category = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(category);
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(630:17)", "entry");
                                Text.fontSize(14);
                                Text.fontColor(this.newHabitCategory === category ? '#FFFFFF' : '#475569');
                                Text.padding({
                                    left: 16,
                                    right: 16,
                                    top: 8,
                                    bottom: 8
                                });
                                Text.backgroundColor(this.newHabitCategory === category ? '#3B82F6' : '#F1F5F9');
                                Text.borderRadius(20);
                                Text.onClick(() => {
                                    this.newHabitCategory = category;
                                });
                            }, Text);
                            Text.pop();
                        };
                        this.forEachUpdateFunction(elmtId, ['健康', '学习', '工作', '生活'], forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
                    // 分类选择
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 目标天数
                        Column.create({ space: 8 });
                        Column.debugLine("entry/src/main/ets/pages/MainPage.ets(651:11)", "entry");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('目标天数');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(652:13)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#475569');
                        Text.width('100%');
                        Text.textAlign(TextAlign.Start);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Scroll.create();
                        Scroll.debugLine("entry/src/main/ets/pages/MainPage.ets(658:13)", "entry");
                        Scroll.width('100%');
                        Scroll.scrollable(ScrollDirection.Horizontal);
                        Scroll.scrollBar(BarState.Off);
                    }, Scroll);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                        Row.debugLine("entry/src/main/ets/pages/MainPage.ets(659:15)", "entry");
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const days = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(days + '天');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(661:19)", "entry");
                                Text.fontSize(14);
                                Text.fontColor(this.newHabitTarget === days ? '#FFFFFF' : '#475569');
                                Text.padding({
                                    left: 16,
                                    right: 16,
                                    top: 8,
                                    bottom: 8
                                });
                                Text.backgroundColor(this.newHabitTarget === days ? '#3B82F6' : '#F1F5F9');
                                Text.borderRadius(20);
                                Text.onClick(() => {
                                    this.newHabitTarget = days;
                                });
                            }, Text);
                            Text.pop();
                        };
                        this.forEachUpdateFunction(elmtId, [7, 21, 30, 60, 90], forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
                    Scroll.pop();
                    // 目标天数
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 按钮
                        Row.create({ space: 12 });
                        Row.debugLine("entry/src/main/ets/pages/MainPage.ets(684:11)", "entry");
                        // 按钮
                        Row.width('100%');
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('取消');
                        Button.debugLine("entry/src/main/ets/pages/MainPage.ets(685:13)", "entry");
                        Button.layoutWeight(1);
                        Button.height(48);
                        Button.fontColor('#64748B');
                        Button.backgroundColor('#F1F5F9');
                        Button.onClick(() => {
                            this.showAddHabitDialog = false;
                            this.newHabitName = '';
                        });
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('添加');
                        Button.debugLine("entry/src/main/ets/pages/MainPage.ets(695:13)", "entry");
                        Button.layoutWeight(1);
                        Button.height(48);
                        Button.fontColor('#FFFFFF');
                        Button.backgroundColor('#3B82F6');
                        Button.onClick(() => {
                            this.addNewHabit();
                        });
                    }, Button);
                    Button.pop();
                    // 按钮
                    Row.pop();
                    // 对话框内容
                    Column.pop();
                    // 使用Stack作为遮罩层
                    Stack.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    buildHabitRanking(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(726:5)", "entry");
            Column.width('92%');
            Column.padding(20);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.shadow({
                radius: 12,
                color: '#0000000A',
                offsetX: 0,
                offsetY: 4
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('习惯坚持排行');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(727:7)", "entry");
            Text.fontSize(18);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.habits.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('暂无习惯数据');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(734:9)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#94A3B8');
                        Text.width('100%');
                        Text.textAlign(TextAlign.Center);
                        Text.padding(20);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = (_item, index: number) => {
                            const habit = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create({ space: 12 });
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(742:11)", "entry");
                                Row.width('100%');
                                Row.padding(16);
                                Row.backgroundColor('#FFFFFF');
                                Row.borderRadius(12);
                                Row.margin({ bottom: 8 });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 排名
                                Column.create({ space: 4 });
                                Column.debugLine("entry/src/main/ets/pages/MainPage.ets(744:13)", "entry");
                                // 排名
                                Column.width(40);
                                // 排名
                                Column.alignItems(HorizontalAlign.Center);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create((index + 1).toString());
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(745:15)", "entry");
                                Text.fontSize(16);
                                Text.fontColor('#64748B');
                                Text.fontWeight(FontWeight.Bold);
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                If.create();
                                if (index < 3) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create(['🥇', '🥈', '🥉'][index]);
                                            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(751:17)", "entry");
                                            Text.fontSize(12);
                                        }, Text);
                                        Text.pop();
                                    });
                                }
                                else {
                                    this.ifElseBranchUpdateFunction(1, () => {
                                    });
                                }
                            }, If);
                            If.pop();
                            // 排名
                            Column.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 习惯图标
                                Stack.create();
                                Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(759:13)", "entry");
                            }, Stack);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Circle.create();
                                Circle.debugLine("entry/src/main/ets/pages/MainPage.ets(760:15)", "entry");
                                Circle.width(48);
                                Circle.height(48);
                                Circle.fill(this.getCategoryColor(habit.category).background);
                            }, Circle);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create({ "id": -1, "type": -1, params: ['app.media.' + habit.icon], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                                Image.debugLine("entry/src/main/ets/pages/MainPage.ets(765:15)", "entry");
                                Image.width(24);
                                Image.height(24);
                            }, Image);
                            // 习惯图标
                            Stack.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 习惯信息
                                Column.create({ space: 4 });
                                Column.debugLine("entry/src/main/ets/pages/MainPage.ets(771:13)", "entry");
                                // 习惯信息
                                Column.layoutWeight(1);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(habit.name);
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(772:15)", "entry");
                                Text.fontSize(16);
                                Text.fontColor('#1E293B');
                                Text.fontWeight(FontWeight.Medium);
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create({ space: 8 });
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(777:15)", "entry");
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(habit.category);
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(778:17)", "entry");
                                Text.fontSize(12);
                                Text.fontColor('#64748B');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('目标' + habit.targetDays + '天');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(782:17)", "entry");
                                Text.fontSize(12);
                                Text.fontColor('#94A3B8');
                            }, Text);
                            Text.pop();
                            Row.pop();
                            // 习惯信息
                            Column.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 连续天数
                                Column.create({ space: 2 });
                                Column.debugLine("entry/src/main/ets/pages/MainPage.ets(790:13)", "entry");
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(habit.currentStreak.toString());
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(791:15)", "entry");
                                Text.fontSize(18);
                                Text.fontColor('#10B981');
                                Text.fontWeight(FontWeight.Bold);
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('天');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(795:15)", "entry");
                                Text.fontSize(12);
                                Text.fontColor('#94A3B8');
                            }, Text);
                            Text.pop();
                            // 连续天数
                            Column.pop();
                            Row.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.getTopHabits(5), forEachItemGenFunction, undefined, true, false);
                    }, ForEach);
                    ForEach.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 获取分类统计数据
    private getCategoryStatsData(): CategoryStatData[] {
        const categories: string[] = ['健康', '学习', '工作', '生活'];
        // 创建统计数组
        const categoryStats = categories.map(category => {
            const habitsInCategory = this.habits.filter(h => h.category === category);
            const completed = habitsInCategory.filter(h => h.completed).length;
            const completionRate = habitsInCategory.length > 0
                ? Math.round((completed / habitsInCategory.length) * 100)
                : 0;
            return {
                category,
                count: habitsInCategory.length,
                completed,
                completionRate,
                color: this.getCategoryColor(category).primary
            } as CategoryStatData; // 添加类型断言
        });
        return categoryStats;
    }
    buildCategoryStats(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(846:5)", "entry");
            Column.width('92%');
            Column.padding(20);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.shadow({
                radius: 12,
                color: '#0000000A',
                offsetX: 0,
                offsetY: 4
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分类统计');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(847:7)", "entry");
            Text.fontSize(18);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 使用组件方法获取统计数据
            if (this.getCategoryStatsData().length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('暂无分类数据');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(855:9)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#94A3B8');
                        Text.width('100%');
                        Text.textAlign(TextAlign.Center);
                        Text.padding(20);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const stat = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create({ space: 8 });
                                Column.debugLine("entry/src/main/ets/pages/MainPage.ets(863:11)", "entry");
                                Column.width('100%');
                                Column.padding({ top: 12, bottom: 12 });
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(864:13)", "entry");
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(stat.category);
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(865:15)", "entry");
                                Text.fontSize(16);
                                Text.fontColor('#1E293B');
                                Text.fontWeight(FontWeight.Medium);
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(stat.count + '个习惯');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(870:15)", "entry");
                                Text.fontSize(14);
                                Text.fontColor('#64748B');
                                Text.margin({ left: 'auto' });
                            }, Text);
                            Text.pop();
                            Row.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 进度条
                                Stack.create();
                                Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(877:13)", "entry");
                            }, Stack);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(878:15)", "entry");
                                Row.width('100%');
                                Row.height(8);
                                Row.backgroundColor('#E2E8F0');
                                Row.borderRadius(4);
                            }, Row);
                            Row.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(884:15)", "entry");
                                Row.width(stat.completionRate + '%');
                                Row.height(8);
                                Row.backgroundColor(stat.color);
                                Row.borderRadius(4);
                            }, Row);
                            Row.pop();
                            // 进度条
                            Stack.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.debugLine("entry/src/main/ets/pages/MainPage.ets(891:13)", "entry");
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('完成率 ' + stat.completionRate + '%');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(892:15)", "entry");
                                Text.fontSize(14);
                                Text.fontColor('#475569');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(stat.completed + '/' + stat.count + ' 完成');
                                Text.debugLine("entry/src/main/ets/pages/MainPage.ets(896:15)", "entry");
                                Text.fontSize(12);
                                Text.fontColor('#94A3B8');
                                Text.margin({ left: 'auto' });
                            }, Text);
                            Text.pop();
                            Row.pop();
                            Column.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.getCategoryStatsData(), forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 习惯卡片组件
    buildHabitCard(habit: HabitData, isToday: boolean, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(922:5)", "entry");
            Column.width('100%');
            Column.padding(16);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.shadow({
                radius: 8,
                color: '#0000000A',
                offsetX: 0,
                offsetY: 2
            });
            Column.onClick(() => {
                router.pushUrl({
                    url: 'pages/HabitDetailPage',
                    params: { habitId: habit.id }
                });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(923:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯图标和名称
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(925:9)", "entry");
            // 习惯图标和名称
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 图标背景
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(927:11)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.debugLine("entry/src/main/ets/pages/MainPage.ets(928:13)", "entry");
            Circle.width(48);
            Circle.height(48);
            Circle.fill(this.getCategoryColor(habit.category).background);
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": -1, params: ['app.media.' + habit.icon], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(933:13)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        // 图标背景
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(938:11)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(habit.name);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(939:13)", "entry");
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(habit.reminder);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(943:13)", "entry");
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        // 习惯图标和名称
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 打卡按钮
            if (isToday && !habit.completed) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('打卡', { type: ButtonType.Capsule });
                        Button.debugLine("entry/src/main/ets/pages/MainPage.ets(952:11)", "entry");
                        Button.width(80);
                        Button.height(36);
                        Button.fontColor('#FFFFFF');
                        Button.fontSize(14);
                        Button.backgroundColor(this.getCategoryColor(habit.category).primary);
                        Button.onClick(() => {
                            this.checkInHabit(habit.id);
                        });
                    }, Button);
                    Button.pop();
                });
            }
            else if (habit.completed) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 已打卡状态
                        Row.create({ space: 4 });
                        Row.debugLine("entry/src/main/ets/pages/MainPage.ets(963:11)", "entry");
                        // 已打卡状态
                        Row.padding({
                            left: 12,
                            right: 12,
                            top: 8,
                            bottom: 8
                        });
                        // 已打卡状态
                        Row.backgroundColor('#D1FAE5');
                        // 已打卡状态
                        Row.borderRadius(18);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/pages/MainPage.ets(964:13)", "entry");
                        Image.width(16);
                        Image.height(16);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('已完成');
                        Text.debugLine("entry/src/main/ets/pages/MainPage.ets(968:13)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#10B981');
                    }, Text);
                    Text.pop();
                    // 已打卡状态
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度信息
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(984:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 坚持天数
            Text.create('已坚持 ' + habit.currentStreak + ' 天');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(986:9)", "entry");
            // 坚持天数
            Text.fontSize(12);
            // 坚持天数
            Text.fontColor('#64748B');
        }, Text);
        // 坚持天数
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('目标 ' + habit.targetDays + ' 天');
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(990:9)", "entry");
            Text.fontSize(12);
            Text.fontColor('#64748B');
            Text.margin({ left: 'auto' });
        }, Text);
        Text.pop();
        // 进度信息
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度条
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/MainPage.ets(997:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 背景条
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(999:9)", "entry");
            // 背景条
            Row.width('100%');
            // 背景条
            Row.height(6);
            // 背景条
            Row.backgroundColor('#E2E8F0');
            // 背景条
            Row.borderRadius(3);
        }, Row);
        // 背景条
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度条
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/MainPage.ets(1006:9)", "entry");
            // 进度条
            Row.width(this.calculateProgress(habit) + '%');
            // 进度条
            Row.height(6);
            // 进度条
            Row.backgroundColor(this.getCategoryColor(habit.category).primary);
            // 进度条
            Row.borderRadius(3);
        }, Row);
        // 进度条
        Row.pop();
        // 进度条
        Stack.pop();
        Column.pop();
    }
    // 悬浮操作按钮
    buildFloatingActionButton(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('', { type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/MainPage.ets(1034:5)", "entry");
            Button.width(56);
            Button.height(56);
            Button.backgroundColor('#3B82F6');
            Button.shadow({
                radius: 16,
                color: '#3B82F680',
                offsetX: 0,
                offsetY: 8
            });
            Button.scale({ x: this.buttonClickScale, y: this.buttonClickScale });
            Button.onClick(() => {
                // 点击时缩小按钮
                this.buttonClickScale = 0.95;
                // 100ms后恢复原大小，模拟按压效果
                setTimeout(() => {
                    this.buttonClickScale = 1;
                    this.showAddHabitDialog = true;
                }, 100);
            });
            Button.position({ x: '85%', y: '85%' });
            Button.zIndex(100);
        }, Button);
        Button.pop();
    }
    // 工具方法
    private getCurrentDate(): string {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        const weekDay = weekDays[now.getDay()];
        return `${year}年${month}月${day}日 星期${weekDay}`;
    }
    // 使用 switch-case 方案（最简单）
    private getCategoryColor(category: string): CategoryColorConfig {
        switch (category) {
            case '健康':
                return {
                    primary: '#10B981',
                    background: '#D1FAE5',
                    icon: '#059669'
                };
            case '学习':
                return {
                    primary: '#8B5CF6',
                    background: '#EDE9FE',
                    icon: '#7C3AED'
                };
            case '工作':
                return {
                    primary: '#3B82F6',
                    background: '#DBEAFE',
                    icon: '#1D4ED8'
                };
            case '生活':
            default:
                return {
                    primary: '#F59E0B',
                    background: '#FEF3C7',
                    icon: '#D97706'
                };
        }
    }
    private calculateProgress(habit: HabitData): number {
        return Math.min(100, (habit.currentStreak / habit.targetDays) * 100);
    }
    private getTopHabits(count: number): HabitData[] {
        return [...this.habits]
            .sort((a, b) => b.currentStreak - a.currentStreak)
            .slice(0, count);
    }
    // 根据当前时间获取问候语
    private getGreetingByTime(): string {
        const hour = this.currentHour; // 0-23
        if (hour >= 0 && hour < 5) {
            return '凌晨好'; // 00:00 - 05:00
        }
        else if (hour >= 5 && hour < 8) {
            return '早上好'; // 05:00 - 08:00
        }
        else if (hour >= 8 && hour < 11) {
            return '上午好'; // 08:00 - 11:00
        }
        else if (hour >= 11 && hour < 13) {
            return '中午好'; // 11:00 - 13:00
        }
        else if (hour >= 13 && hour < 17) {
            return '下午好'; // 13:00 - 17:00
        }
        else if (hour >= 17 && hour < 18) {
            return '傍晚好'; // 17:00 - 18:00
        }
        else {
            return '晚上好'; // 18:00 - 24:00
        }
    }
    // 计算未读通知数量
    private getUnreadNotificationCount(): number {
        // 这里可以连接实际的通知数据
        return this.hasUnreadNotifications ? 1 : 0;
    }
    // 页面显示时加载数据
    onPageShow() {
        this.loadHabits();
        this.updateStatistics();
    }
    // 加载习惯数据
    private loadHabits(): void {
        // 这里可以从本地存储加载数据
        // 暂时使用模拟数据
        this.habits = this.getMockHabits();
        this.updateStatistics();
    }
    // 获取默认统计数据
    private getDefaultStatistics(): StatisticsData {
        return {
            totalHabits: 0,
            completedToday: 0,
            totalCheckIns: 0,
            currentStreak: 0,
            monthlyCompletionRate: 0
        };
    }
    // 更新统计数据
    private updateStatistics(): void {
        const today = new Date();
        const todayHabits = this.habits.filter(h => h.isToday);
        const completedToday = todayHabits.filter(h => h.completed).length;
        // 计算最长连续天数
        const currentStreak = this.habits.length > 0
            ? Math.max(...this.habits.map(h => h.currentStreak))
            : 0;
        // 计算总打卡次数
        const totalCheckIns = this.habits.reduce((sum, habit) => sum + (habit.totalCheckIns || 0), 0);
        // 计算月度完成率（简化版）
        const monthlyCompletionRate = todayHabits.length > 0
            ? Math.round((completedToday / todayHabits.length) * 100)
            : 0;
        this.statistics = {
            totalHabits: this.habits.length,
            completedToday,
            totalCheckIns,
            currentStreak,
            monthlyCompletionRate
        };
    }
    // 更新 getMockHabits 方法
    private getMockHabits(): HabitData[] {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return [
            {
                id: 1,
                name: '早起',
                description: '每天早上6点前起床',
                icon: 'sunrise',
                category: '健康',
                targetDays: 30,
                currentStreak: 15,
                completed: false,
                isToday: true,
                reminder: '06:00',
                createdAt: new Date(2024, 0, 1),
                lastCheckInDate: new Date(2024, 0, 14),
                totalCheckIns: 15
            },
            {
                id: 2,
                name: '阅读30分钟',
                description: '每天阅读书籍30分钟',
                icon: 'book',
                category: '学习',
                targetDays: 365,
                currentStreak: 45,
                completed: true,
                isToday: true,
                reminder: '20:00',
                createdAt: new Date(2023, 11, 1),
                lastCheckInDate: today,
                totalCheckIns: 45
            },
            {
                id: 3,
                name: '运动锻炼',
                description: '每天运动30分钟',
                icon: 'fitness',
                category: '健康',
                targetDays: 90,
                currentStreak: 28,
                completed: false,
                isToday: true,
                reminder: '19:00',
                createdAt: new Date(2024, 0, 15),
                lastCheckInDate: new Date(2024, 0, 14),
                totalCheckIns: 28
            },
            {
                id: 4,
                name: '学习英语',
                description: '背单词30个',
                icon: 'language',
                category: '学习',
                targetDays: 180,
                currentStreak: 65,
                completed: false,
                isToday: false,
                reminder: '09:00',
                createdAt: new Date(2023, 10, 1),
                lastCheckInDate: new Date(2024, 0, 14),
                totalCheckIns: 65
            },
            {
                id: 5,
                name: '写日记',
                description: '记录每天的生活',
                icon: 'journal',
                category: '生活',
                targetDays: 100,
                currentStreak: 42,
                completed: true,
                isToday: false,
                reminder: '22:00',
                createdAt: new Date(2023, 11, 15),
                lastCheckInDate: today,
                totalCheckIns: 42
            }
        ];
    }
    // 打卡方法
    private checkInHabit(habitId: number): void {
        const habitIndex = this.habits.findIndex(h => h.id === habitId);
        if (habitIndex === -1)
            return;
        const habit = this.habits[habitIndex];
        const today = new Date();
        // 检查今天是否已经打卡
        if (habit.completed) {
            promptAction.showToast({
                message: '今天已经打卡过了！',
                duration: 2000
            });
            return;
        }
        // 计算连续天数
        let newStreak = 1;
        if (habit.lastCheckInDate) {
            const lastDate = new Date(habit.lastCheckInDate);
            lastDate.setHours(0, 0, 0, 0);
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            yesterday.setHours(0, 0, 0, 0);
            if (lastDate.getTime() === yesterday.getTime()) {
                // 昨天打卡了，连续天数+1
                newStreak = habit.currentStreak + 1;
            }
        }
        // 更新习惯
        const updatedHabit: HabitData = {
            id: habit.id,
            name: habit.name,
            description: habit.description,
            icon: habit.icon,
            category: habit.category,
            targetDays: habit.targetDays,
            currentStreak: newStreak,
            completed: true,
            isToday: habit.isToday,
            reminder: habit.reminder,
            createdAt: habit.createdAt,
            lastCheckInDate: today,
            totalCheckIns: (habit.totalCheckIns || 0) + 1
        };
        // 更新数组
        this.habits[habitIndex] = updatedHabit;
        this.habits = [...this.habits];
        // 更新统计
        this.updateStatistics();
        promptAction.showToast({
            message: `打卡成功！已连续${newStreak}天`,
            duration: 2000
        });
    }
    // 添加新习惯
    private addNewHabit(): void {
        if (!this.newHabitName.trim()) {
            promptAction.showToast({
                message: '请输入习惯名称',
                duration: 2000
            });
            return;
        }
        const newHabit: HabitData = {
            id: this.habits.length > 0 ? Math.max(...this.habits.map(h => h.id)) + 1 : 1,
            name: this.newHabitName,
            description: '坚持就是胜利！',
            icon: this.getIconByCategory(this.newHabitCategory),
            category: this.newHabitCategory,
            targetDays: this.newHabitTarget,
            currentStreak: 0,
            completed: false,
            isToday: true,
            reminder: '08:00',
            createdAt: new Date(),
            totalCheckIns: 0
        };
        this.habits = [...this.habits, newHabit];
        this.updateStatistics();
        this.newHabitName = '';
        this.showAddHabitDialog = false;
        promptAction.showToast({
            message: '习惯添加成功',
            duration: 2000
        });
    }
    // 根据分类获取图标
    private getIconByCategory(category: string): string {
        const icons: Record<string, string> = {
            '健康': 'sunrise',
            '学习': 'book',
            '工作': 'briefcase',
            '生活': 'journal'
        };
        return icons[category] || 'sunrise';
    }
    // 删除习惯
    private deleteHabit(habitId: number): void {
        promptAction.showDialog({
            title: '删除习惯',
            message: '确定要删除这个习惯吗？删除后将无法恢复。',
            buttons: [
                { text: '取消', color: '#64748B' },
                { text: '删除', color: '#EF4444' }
            ]
        }).then((data: GeneratedTypeLiteralInterface_1) => {
            if (data.index === 1) {
                this.habits = this.habits.filter(h => h.id !== habitId);
                this.updateStatistics();
                promptAction.showToast({
                    message: '习惯已删除',
                    duration: 2000
                });
            }
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MainPage";
    }
}
registerNamedRoute(() => new MainPage(undefined, {}), "", { bundleName: "com.example.habitformation", moduleName: "entry", pagePath: "pages/MainPage", pageFullPath: "entry/src/main/ets/pages/MainPage", integratedHsp: "false", moduleType: "followWithHap" });
