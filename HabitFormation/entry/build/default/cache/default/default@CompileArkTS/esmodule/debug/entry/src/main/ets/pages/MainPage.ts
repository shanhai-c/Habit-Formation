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
    swiperController?: SwiperController;
}
import router from "@ohos:router";
import type { HabitData, HabitRecord } from '../pages/HabitTypes';
import promptAction from "@ohos:promptAction";
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
        this.swiperController = new SwiperController();
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
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
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
    // 页面控制器
    private swiperController: SwiperController;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F8FAFC');
        }, Column);
        // 顶部导航栏
        this.buildTopBar.bind(this)();
        // 日期和统计信息卡片
        this.buildDateCard.bind(this)();
        // 标签页切换
        this.buildTabBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容区域
            Swiper.create(this.swiperController);
            // 内容区域
            Swiper.autoPlay(false);
            // 内容区域
            Swiper.indicator(false);
            // 内容区域
            Swiper.loop(true);
            // 内容区域
            Swiper.vertical(false);
            // 内容区域
            Swiper.index(this.selectedTab);
            // 内容区域
            Swiper.onChange((index: number) => {
                this.selectedTab = index;
            });
        }, Swiper);
        // 今日习惯
        this.buildTodayHabits.bind(this)();
        // 全部习惯
        this.buildAllHabits.bind(this)();
        // 统计
        this.buildStatisticsPage.bind(this)();
        // 内容区域
        Swiper.pop();
        this.buildFloatingActionButton.bind(this)() //悬浮按钮
        ;
        Column.pop();
    }
    // 顶部导航栏
    buildTopBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ left: 20, right: 20, top: 12, bottom: 12 });
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户信息
            Row.create({ space: 12 });
            // 用户信息
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.width(48);
            Image.height(48);
            Image.borderRadius(24);
            Image.border({ width: 2, color: '#FFFFFF' });
            Image.shadow({ radius: 8, color: '#00000014', offsetX: 0, offsetY: 4 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 根据时间段显示问候语
            Text.create(this.getGreetingByTime());
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
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.onClick(() => {
                // 点击后标记为已读（可选）
                this.hasUnreadNotifications = false;
                router.pushUrl({ url: 'pages/NotificationPage' });
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
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
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
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
            Column.width('92%');
            Column.padding(20);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.margin({ top: 16, bottom: 16 });
            Column.shadow({ radius: 12, color: '#0000000A', offsetX: 0, offsetY: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.currentDate);
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('第28周');
            Text.fontSize(14);
            Text.fontColor('#64748B');
            Text.margin({ left: 12 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 本周统计
            Row.create({ space: 20 });
            // 本周统计
            Row.width('100%');
            // 本周统计
            Row.padding({ top: 16, bottom: 16 });
            // 本周统计
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('7');
            Text.fontSize(24);
            Text.fontColor('#10B981');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已坚持');
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.height(40);
            Divider.color('#E2E8F0');
            Divider.vertical(false);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('21');
            Text.fontSize(24);
            Text.fontColor('#3B82F6');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('总习惯');
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.height(40);
            Divider.color('#E2E8F0');
            Divider.vertical(false);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('86%');
            Text.fontSize(24);
            Text.fontColor('#8B5CF6');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('完成率');
            Text.fontSize(12);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        Column.pop();
        // 本周统计
        Row.pop();
        Column.pop();
    }
    // 标签页切换
    buildTabBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 0 });
            Row.width('92%');
            Row.padding({ top: 8, bottom: 8 });
            Row.backgroundColor('#FFFFFF');
            Row.borderRadius(12);
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 今日习惯
            Column.create();
            // 今日习惯
            Column.layoutWeight(1);
            // 今日习惯
            Column.onClick(() => {
                this.selectedTab = 0;
                this.swiperController.showNext();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今日习惯');
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
            // 全部习惯
            Column.layoutWeight(1);
            // 全部习惯
            Column.onClick(() => {
                this.selectedTab = 1;
                this.swiperController.showNext();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全部习惯');
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
            // 统计
            Column.layoutWeight(1);
            // 统计
            Column.onClick(() => {
                this.selectedTab = 2;
                this.swiperController.showNext();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('统计');
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
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 20, right: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.habits.filter(h => h.isToday).length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 空状态
                        Column.create({ space: 16 });
                        // 空状态
                        Column.width('100%');
                        // 空状态
                        Column.margin({ top: 60 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.width(200);
                        Image.height(200);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('今天没有习惯任务');
                        Text.fontSize(18);
                        Text.fontColor('#64748B');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('休息一下，或者添加新习惯');
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
                        // 习惯列表
                        List.create({ space: 12 });
                        // 习惯列表
                        List.width('100%');
                        // 习惯列表
                        List.height('100%');
                        // 习惯列表
                        List.margin({ top: 8 });
                        // 习惯列表
                        List.edgeEffect(EdgeEffect.Spring);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const habit = _item;
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    ListItem.create(deepRenderFunction, true);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.buildHabitCard.bind(this)(habit, true);
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.habits.filter(h => h.isToday), forEachItemGenFunction, (habit: HabitData) => habit.id.toString(), false, false);
                    }, ForEach);
                    ForEach.pop();
                    // 习惯列表
                    List.pop();
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
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 20, right: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 分类筛选
            Row.create({ space: 8 });
            // 分类筛选
            Row.width('100%');
            // 分类筛选
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const category = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(category);
                    Text.fontSize(14);
                    Text.fontColor('#475569');
                    Text.padding({ left: 16, right: 16, top: 8, bottom: 8 });
                    Text.backgroundColor('#F1F5F9');
                    Text.borderRadius(20);
                    Text.onClick(() => {
                        // 筛选逻辑
                    });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['全部', '健康', '学习', '工作', '生活'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 分类筛选
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯列表
            List.create({ space: 12 });
            // 习惯列表
            List.width('100%');
            // 习惯列表
            List.height('100%');
            // 习惯列表
            List.edgeEffect(EdgeEffect.Spring);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const habit = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.buildHabitCard.bind(this)(habit, false);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.habits, forEachItemGenFunction, (habit: HabitData) => habit.id.toString(), false, false);
        }, ForEach);
        ForEach.pop();
        // 习惯列表
        List.pop();
        Column.pop();
    }
    // 统计页面
    buildStatisticsPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.width('100%');
            Column.padding({ top: 20, bottom: 20 });
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 月度完成率卡片
            Column.create();
            // 月度完成率卡片
            Column.width('92%');
            // 月度完成率卡片
            Column.padding(20);
            // 月度完成率卡片
            Column.backgroundColor('#FFFFFF');
            // 月度完成率卡片
            Column.borderRadius(16);
            // 月度完成率卡片
            Column.shadow({ radius: 12, color: '#0000000A', offsetX: 0, offsetY: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('本月完成率');
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('92%');
            Text.fontSize(20);
            Text.fontColor('#10B981');
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ left: 'auto' });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度条
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 背景
            Row.create();
            // 背景
            Row.width('100%');
            // 背景
            Row.height(12);
            // 背景
            Row.backgroundColor('#E2E8F0');
            // 背景
            Row.borderRadius(6);
        }, Row);
        // 背景
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度
            Row.create();
            // 进度
            Row.width('92%');
            // 进度
            Row.height(12);
            // 进度
            Row.backgroundColor('#10B981');
            // 进度
            Row.borderRadius(6);
        }, Row);
        // 进度
        Row.pop();
        // 进度条
        Stack.pop();
        // 月度完成率卡片
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯坚持天数排行
            Column.create();
            // 习惯坚持天数排行
            Column.width('92%');
            // 习惯坚持天数排行
            Column.padding(20);
            // 习惯坚持天数排行
            Column.backgroundColor('#FFFFFF');
            // 习惯坚持天数排行
            Column.borderRadius(16);
            // 习惯坚持天数排行
            Column.shadow({ radius: 12, color: '#0000000A', offsetX: 0, offsetY: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('习惯坚持排行');
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ bottom: 16 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const habit = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('100%');
                    Row.padding({ top: 12, bottom: 12 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 排名
                    Text.create((index + 1).toString());
                    // 排名
                    Text.fontSize(18);
                    // 排名
                    Text.fontColor('#64748B');
                    // 排名
                    Text.fontWeight(FontWeight.Bold);
                    // 排名
                    Text.margin({ right: 16 });
                }, Text);
                // 排名
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 习惯图标
                    Image.create({ "id": -1, "type": -1, params: ['app.media.' + habit.icon], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                    // 习惯图标
                    Image.width(40);
                    // 习惯图标
                    Image.height(40);
                    // 习惯图标
                    Image.margin({ right: 12 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 习惯信息
                    Column.create({ space: 4 });
                    // 习惯信息
                    Column.layoutWeight(1);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(habit.name);
                    Text.fontSize(16);
                    Text.fontColor('#1E293B');
                    Text.fontWeight(FontWeight.Medium);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('已坚持 ' + habit.currentStreak + ' 天');
                    Text.fontSize(12);
                    Text.fontColor('#64748B');
                }, Text);
                Text.pop();
                // 习惯信息
                Column.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getTopHabits(3), forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        // 习惯坚持天数排行
        Column.pop();
        Column.pop();
    }
    // 习惯卡片组件
    buildHabitCard(habit: HabitData, isToday: boolean, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.padding(16);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(16);
            Column.shadow({ radius: 8, color: '#0000000A', offsetX: 0, offsetY: 2 });
            Column.onClick(() => {
                router.pushUrl({
                    url: 'pages/HabitDetailPage',
                    params: { habitId: habit.id }
                });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯图标和名称
            Row.create({ space: 12 });
            // 习惯图标和名称
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 图标背景
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.width(48);
            Circle.height(48);
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": -1, params: ['app.media.' + habit.icon], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
        }, Image);
        // 图标背景
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(habit.name);
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(habit.reminder);
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
                        Button.width(80);
                        Button.height(36);
                        Button.fontColor('#FFFFFF');
                        Button.fontSize(14);
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
                        // 已打卡状态
                        Row.padding({ left: 12, right: 12, top: 8, bottom: 8 });
                        // 已打卡状态
                        Row.backgroundColor('#D1FAE5');
                        // 已打卡状态
                        Row.borderRadius(18);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.width(16);
                        Image.height(16);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('已完成');
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
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 坚持天数
            Text.create('已坚持 ' + habit.currentStreak + ' 天');
            // 坚持天数
            Text.fontSize(12);
            // 坚持天数
            Text.fontColor('#64748B');
        }, Text);
        // 坚持天数
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('目标 ' + habit.targetDays + ' 天');
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
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 背景条
            Row.create();
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
            // 进度条
            Row.width(this.calculateProgress(habit) + '%');
            // 进度条
            Row.height(6);
            // 进度条
            Row.borderRadius(3);
        }, Row);
        // 进度条
        Row.pop();
        // 进度条
        Stack.pop();
        Column.pop();
    }
    getCategoryColor(category: string) {
        throw new Error('Method not implemented.');
    }
    // 悬浮操作按钮
    buildFloatingActionButton(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.End });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 主按钮
            Button.createWithLabel('', { type: ButtonType.Circle });
            // 主按钮
            Button.width(56);
            // 主按钮
            Button.height(56);
            // 主按钮
            Button.backgroundColor('#3B82F6');
            // 主按钮
            Button.shadow({ radius: 16, color: '#3B82F680', offsetX: 0, offsetY: 8 });
            // 主按钮
            Button.onClick(() => {
                this.showAddHabitDialog = true;
            });
            // 主按钮
            Button.position({ x: '85%', y: '85%' });
        }, Button);
        // 主按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 加号图标
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            // 加号图标
            Image.width(24);
            // 加号图标
            Image.height(24);
            // 加号图标
            Image.position({ x: '85%', y: '85%' });
            // 加号图标
            Image.margin({ left: 16, top: 16 });
        }, Image);
        Stack.pop();
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
    // private getCategoryColor(category: string): any {
    //   const colors: any = {
    //     '健康': { primary: '#10B981', background: '#D1FAE5', icon: '#059669' },
    //     '学习': { primary: '#8B5CF6', background: '#EDE9FE', icon: '#7C3AED' },
    //     '工作': { primary: '#3B82F6', background: '#DBEAFE', icon: '#1D4ED8' },
    //     '生活': { primary: '#F59E0B', background: '#FEF3C7', icon: '#D97706' }
    //   };
    //   return colors[category] || colors['生活'];
    // }
    private calculateProgress(habit: HabitData): number {
        return Math.min(100, (habit.currentStreak / habit.targetDays) * 100);
    }
    private getMockHabits(): HabitData[] {
        return [
        // {
        //   id: 1,
        //   name: '早起',
        //   description: '每天早上6点前起床',
        //   icon: 'sunrise',
        //   category: '健康',
        //   targetDays: 30,
        //   currentStreak: 15,
        //   completed: false,
        //   isToday: true,
        //   reminder: '每天 06:00'
        // },
        // {
        //   id: 2,
        //   name: '阅读30分钟',
        //   description: '每天阅读书籍30分钟',
        //   icon: 'book',
        //   category: '学习',
        //   targetDays: 365,
        //   currentStreak: 45,
        //   completed: true,
        //   isToday: true,
        //   reminder: '每天 20:00'
        // },
        // {
        //   id: 3,
        //   name: '运动锻炼',
        //   description: '每天运动30分钟',
        //   icon: 'fitness',
        //   category: '健康',
        //   targetDays: 90,
        //   currentStreak: 28,
        //   completed: false,
        //   isToday: true,
        //   reminder: '每天 19:00'
        // },
        // {
        //   id: 4,
        //   name: '学习英语',
        //   description: '背单词30个',
        //   icon: 'language',
        //   category: '学习',
        //   targetDays: 180,
        //   currentStreak: 65,
        //   completed: false,
        //   isToday: false,
        //   reminder: '每天 09:00'
        // },
        // {
        //   id: 5,
        //   name: '写日记',
        //   description: '记录每天的生活',
        //   icon: 'journal',
        //   category: '生活',
        //   targetDays: 100,
        //   currentStreak: 42,
        //   completed: false,
        //   isToday: false,
        //   reminder: '每天 22:00'
        // }
        ];
    }
    private getTopHabits(count: number): HabitData[] {
        return [...this.habits]
            .sort((a, b) => b.currentStreak - a.currentStreak)
            .slice(0, count);
    }
    private checkInHabit(habitId: number): void {
        // 直接修改数组中的对象
        const habitIndex = this.habits.findIndex(h => h.id === habitId);
        if (habitIndex >= 0) {
            // 直接更新对象的属性
            this.habits[habitIndex].completed = true;
            this.habits[habitIndex].currentStreak += 1;
            // 需要触发界面更新
            this.habits = [...this.habits];
        }
        // 显示打卡成功提示
        promptAction.showToast({
            message: '习惯打卡成功！',
            duration: 2000
        });
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
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MainPage";
    }
}
registerNamedRoute(() => new MainPage(undefined, {}), "", { bundleName: "com.example.habitformation", moduleName: "entry", pagePath: "pages/MainPage", pageFullPath: "entry/src/main/ets/pages/MainPage", integratedHsp: "false", moduleType: "followWithHap" });
