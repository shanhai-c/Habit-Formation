if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AddHabitDialog_Params {
    showDialog?: boolean;
    habitName?: string;
    selectedCategory?: string;
    selectedIcon?: string;
    targetDays?: number;
    reminderTime?: string;
    categories?;
    icons?;
}
import promptAction from "@ohos:promptAction";
export class AddHabitDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__showDialog = new SynchedPropertySimpleTwoWayPU(params.showDialog, this, "showDialog");
        this.__habitName = new ObservedPropertySimplePU('', this, "habitName");
        this.__selectedCategory = new ObservedPropertySimplePU('健康', this, "selectedCategory");
        this.__selectedIcon = new ObservedPropertySimplePU('sunrise', this, "selectedIcon");
        this.__targetDays = new ObservedPropertySimplePU(21, this, "targetDays");
        this.__reminderTime = new ObservedPropertySimplePU('08:00', this, "reminderTime");
        this.categories = ['健康', '学习', '工作', '生活'];
        this.icons = ['sunrise', 'book', 'fitness', 'language', 'journal', 'meditation'];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AddHabitDialog_Params) {
        if (params.habitName !== undefined) {
            this.habitName = params.habitName;
        }
        if (params.selectedCategory !== undefined) {
            this.selectedCategory = params.selectedCategory;
        }
        if (params.selectedIcon !== undefined) {
            this.selectedIcon = params.selectedIcon;
        }
        if (params.targetDays !== undefined) {
            this.targetDays = params.targetDays;
        }
        if (params.reminderTime !== undefined) {
            this.reminderTime = params.reminderTime;
        }
        if (params.categories !== undefined) {
            this.categories = params.categories;
        }
        if (params.icons !== undefined) {
            this.icons = params.icons;
        }
    }
    updateStateVars(params: AddHabitDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__showDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__habitName.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedCategory.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedIcon.purgeDependencyOnElmtId(rmElmtId);
        this.__targetDays.purgeDependencyOnElmtId(rmElmtId);
        this.__reminderTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__showDialog.aboutToBeDeleted();
        this.__habitName.aboutToBeDeleted();
        this.__selectedCategory.aboutToBeDeleted();
        this.__selectedIcon.aboutToBeDeleted();
        this.__targetDays.aboutToBeDeleted();
        this.__reminderTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __showDialog: SynchedPropertySimpleTwoWayPU<boolean>;
    get showDialog() {
        return this.__showDialog.get();
    }
    set showDialog(newValue: boolean) {
        this.__showDialog.set(newValue);
    }
    private __habitName: ObservedPropertySimplePU<string>;
    get habitName() {
        return this.__habitName.get();
    }
    set habitName(newValue: string) {
        this.__habitName.set(newValue);
    }
    private __selectedCategory: ObservedPropertySimplePU<string>;
    get selectedCategory() {
        return this.__selectedCategory.get();
    }
    set selectedCategory(newValue: string) {
        this.__selectedCategory.set(newValue);
    }
    private __selectedIcon: ObservedPropertySimplePU<string>;
    get selectedIcon() {
        return this.__selectedIcon.get();
    }
    set selectedIcon(newValue: string) {
        this.__selectedIcon.set(newValue);
    }
    private __targetDays: ObservedPropertySimplePU<number>;
    get targetDays() {
        return this.__targetDays.get();
    }
    set targetDays(newValue: number) {
        this.__targetDays.set(newValue);
    }
    private __reminderTime: ObservedPropertySimplePU<string>;
    get reminderTime() {
        return this.__reminderTime.get();
    }
    set reminderTime(newValue: string) {
        this.__reminderTime.set(newValue);
    }
    private categories;
    private icons;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(17:5)", "entry");
            Column.width('90%');
            Column.padding(24);
            Column.backgroundColor('#FFFFFF');
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题栏
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(19:7)", "entry");
            // 标题栏
            Row.width('100%');
            // 标题栏
            Row.margin({ bottom: 24 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('添加新习惯');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(20:9)", "entry");
            Text.fontSize(18);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(26:9)", "entry");
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                this.showDialog = false;
            });
        }, Image);
        // 标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 表单内容
            Column.create({ space: 20 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(37:7)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 习惯名称
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(39:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('习惯名称');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(40:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '输入习惯名称，如：早起' });
            TextInput.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(44:11)", "entry");
            TextInput.width('100%');
            TextInput.height(48);
            TextInput.backgroundColor('#F8FAFC');
            TextInput.borderRadius(8);
            TextInput.fontSize(16);
            TextInput.onChange((value: string) => {
                this.habitName = value;
            });
        }, TextInput);
        // 习惯名称
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 选择分类
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(56:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('选择分类');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(57:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(61:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const category = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(category);
                    Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(63:15)", "entry");
                    Text.fontSize(14);
                    Text.padding({ left: 16, right: 16, top: 8, bottom: 8 });
                    Text.backgroundColor(this.selectedCategory === category ? '#3B82F6' : '#F1F5F9');
                    Text.fontColor(this.selectedCategory === category ? '#FFFFFF' : '#475569');
                    Text.borderRadius(20);
                    Text.onClick(() => {
                        this.selectedCategory = category;
                    });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.categories, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        // 选择分类
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 选择图标
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(78:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('选择图标');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(79:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(83:11)", "entry");
            Grid.columnsTemplate('1fr 1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap(12);
            Grid.rowsGap(12);
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const icon = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(85:15)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": -1, params: ['app.media.' + icon], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                            Image.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(86:17)", "entry");
                            Image.width(32);
                            Image.height(32);
                            Image.padding(12);
                            Image.backgroundColor(this.selectedIcon === icon ? '#DBEAFE' : '#F8FAFC');
                            Image.borderRadius(12);
                            Image.onClick(() => {
                                this.selectedIcon = icon;
                            });
                        }, Image);
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.icons, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        // 选择图标
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 目标天数
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(105:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(106:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('目标天数');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(107:13)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.targetDays + ' 天');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(112:13)", "entry");
            Text.fontSize(16);
            Text.fontColor('#3B82F6');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                value: this.targetDays,
                min: 7,
                max: 365,
                step: 1,
                style: SliderStyle.OutSet
            });
            Slider.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(118:11)", "entry");
            Slider.width('100%');
            Slider.onChange((value: number) => {
                this.targetDays = value;
            });
        }, Slider);
        // 目标天数
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 提醒时间
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(132:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('提醒时间');
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(133:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(137:11)", "entry");
            Row.width('100%');
            Row.padding({ left: 16, right: 16, top: 12, bottom: 12 });
            Row.backgroundColor('#F8FAFC');
            Row.borderRadius(8);
            Row.onClick(() => {
                // 打开时间选择器
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(138:13)", "entry");
            Image.width(20);
            Image.height(20);
            Image.margin({ right: 12 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.reminderTime);
            Text.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(143:13)", "entry");
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        Row.pop();
        // 提醒时间
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 按钮区域
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(158:9)", "entry");
            // 按钮区域
            Row.width('100%');
            // 按钮区域
            Row.margin({ top: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('取消', { type: ButtonType.Normal });
            Button.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(159:11)", "entry");
            Button.layoutWeight(1);
            Button.height(48);
            Button.backgroundColor('#F1F5F9');
            Button.fontColor('#64748B');
            Button.onClick(() => {
                this.showDialog = false;
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('创建习惯', { type: ButtonType.Capsule });
            Button.debugLine("entry/src/main/ets/pages/AddHabitDialog.ets(168:11)", "entry");
            Button.layoutWeight(1);
            Button.height(48);
            Button.backgroundColor('#3B82F6');
            Button.fontColor('#FFFFFF');
            Button.enabled(this.habitName.length > 0);
            Button.onClick(() => {
                this.createHabit();
            });
        }, Button);
        Button.pop();
        // 按钮区域
        Row.pop();
        // 表单内容
        Column.pop();
        Column.pop();
    }
    private createHabit(): void {
        // 创建习惯的逻辑
        promptAction.showToast({
            message: '习惯创建成功！',
            duration: 2000
        });
        this.showDialog = false;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
