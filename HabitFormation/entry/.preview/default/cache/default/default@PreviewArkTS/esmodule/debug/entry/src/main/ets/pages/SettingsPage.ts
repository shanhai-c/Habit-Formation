if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SettingsPage_Params {
    notificationsEnabled?: boolean;
    darkMode?: boolean;
    vibrationFeedback?: boolean;
    autoBackup?: boolean;
    userName?: string;
    reminderTime?: string;
}
import router from "@ohos:router";
import promptAction from "@ohos:promptAction";
import type { DialogButton, ShowDialogOptions, DialogResponse } from './HabitTypes';
class SettingsPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__notificationsEnabled = new ObservedPropertySimplePU(true, this, "notificationsEnabled");
        this.__darkMode = new ObservedPropertySimplePU(false, this, "darkMode");
        this.__vibrationFeedback = new ObservedPropertySimplePU(true, this, "vibrationFeedback");
        this.__autoBackup = new ObservedPropertySimplePU(false, this, "autoBackup");
        this.__userName = new ObservedPropertySimplePU('习惯达人', this, "userName");
        this.__reminderTime = new ObservedPropertySimplePU('20:00', this, "reminderTime");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingsPage_Params) {
        if (params.notificationsEnabled !== undefined) {
            this.notificationsEnabled = params.notificationsEnabled;
        }
        if (params.darkMode !== undefined) {
            this.darkMode = params.darkMode;
        }
        if (params.vibrationFeedback !== undefined) {
            this.vibrationFeedback = params.vibrationFeedback;
        }
        if (params.autoBackup !== undefined) {
            this.autoBackup = params.autoBackup;
        }
        if (params.userName !== undefined) {
            this.userName = params.userName;
        }
        if (params.reminderTime !== undefined) {
            this.reminderTime = params.reminderTime;
        }
    }
    updateStateVars(params: SettingsPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__notificationsEnabled.purgeDependencyOnElmtId(rmElmtId);
        this.__darkMode.purgeDependencyOnElmtId(rmElmtId);
        this.__vibrationFeedback.purgeDependencyOnElmtId(rmElmtId);
        this.__autoBackup.purgeDependencyOnElmtId(rmElmtId);
        this.__userName.purgeDependencyOnElmtId(rmElmtId);
        this.__reminderTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__notificationsEnabled.aboutToBeDeleted();
        this.__darkMode.aboutToBeDeleted();
        this.__vibrationFeedback.aboutToBeDeleted();
        this.__autoBackup.aboutToBeDeleted();
        this.__userName.aboutToBeDeleted();
        this.__reminderTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __notificationsEnabled: ObservedPropertySimplePU<boolean>;
    get notificationsEnabled() {
        return this.__notificationsEnabled.get();
    }
    set notificationsEnabled(newValue: boolean) {
        this.__notificationsEnabled.set(newValue);
    }
    private __darkMode: ObservedPropertySimplePU<boolean>;
    get darkMode() {
        return this.__darkMode.get();
    }
    set darkMode(newValue: boolean) {
        this.__darkMode.set(newValue);
    }
    private __vibrationFeedback: ObservedPropertySimplePU<boolean>;
    get vibrationFeedback() {
        return this.__vibrationFeedback.get();
    }
    set vibrationFeedback(newValue: boolean) {
        this.__vibrationFeedback.set(newValue);
    }
    private __autoBackup: ObservedPropertySimplePU<boolean>;
    get autoBackup() {
        return this.__autoBackup.get();
    }
    set autoBackup(newValue: boolean) {
        this.__autoBackup.set(newValue);
    }
    private __userName: ObservedPropertySimplePU<string>;
    get userName() {
        return this.__userName.get();
    }
    set userName(newValue: string) {
        this.__userName.set(newValue);
    }
    private __reminderTime: ObservedPropertySimplePU<string>;
    get reminderTime() {
        return this.__reminderTime.get();
    }
    set reminderTime(newValue: string) {
        this.__reminderTime.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SettingsPage.ets(17:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F8FAFC');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部标题栏
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/SettingsPage.ets(19:7)", "entry");
            // 顶部标题栏
            Row.width('100%');
            // 顶部标题栏
            Row.padding({ left: 20, right: 20, top: 12, bottom: 12 });
            // 顶部标题栏
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/SettingsPage.ets(20:9)", "entry");
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('设置');
            Text.debugLine("entry/src/main/ets/pages/SettingsPage.ets(27:9)", "entry");
            Text.fontSize(20);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        // 顶部标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设置列表
            List.create({ space: 0 });
            List.debugLine("entry/src/main/ets/pages/SettingsPage.ets(38:7)", "entry");
            // 设置列表
            List.width('100%');
            // 设置列表
            List.height('100%');
            // 设置列表
            List.padding(20);
            // 设置列表
            List.divider({ strokeWidth: 1, color: '#E2E8F0', startMargin: 72, endMargin: 20 });
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 个人信息
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(40:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '个人信息', subtitle: () => '修改头像、昵称等信息', icon: () => ({ "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasArrow: () => true, onTap: () => () => {
                        this.editProfile();
                    } }));
                // 个人信息
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 个人信息
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 通知设置
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(53:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '通知提醒', subtitle: () => '开启/关闭习惯提醒', icon: () => ({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasSwitch: () => true, switchValue: () => (this["__notificationsEnabled"] ? this["__notificationsEnabled"] : this["notificationsEnabled"]), onSwitchChange: () => (value: boolean) => {
                        this.notificationsEnabled = value;
                    } }));
                // 通知设置
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 通知设置
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 提醒时间
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(67:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '提醒时间', subtitle: () => (this["__reminderTime"] ? this["__reminderTime"] : this["reminderTime"]), icon: () => ({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasArrow: () => true, onTap: () => () => {
                        this.selectReminderTime();
                    } }));
                // 提醒时间
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 提醒时间
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 主题设置
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(80:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '主题模式', subtitle: () => this.darkMode ? '深色模式' : '浅色模式', icon: () => ({ "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasSwitch: () => true, switchValue: () => (this["__darkMode"] ? this["__darkMode"] : this["darkMode"]), onSwitchChange: () => (value: boolean) => {
                        this.darkMode = value;
                    } }));
                // 主题设置
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 主题设置
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 振动反馈
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(94:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '振动反馈', subtitle: () => '操作时的振动提示', icon: () => ({ "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasSwitch: () => true, switchValue: () => (this["__vibrationFeedback"] ? this["__vibrationFeedback"] : this["vibrationFeedback"]), onSwitchChange: () => (value: boolean) => {
                        this.vibrationFeedback = value;
                    } }));
                // 振动反馈
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 振动反馈
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 数据备份
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(108:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '数据备份', subtitle: () => '自动备份习惯数据', icon: () => ({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasSwitch: () => true, switchValue: () => (this["__autoBackup"] ? this["__autoBackup"] : this["autoBackup"]), onSwitchChange: () => (value: boolean) => {
                        this.autoBackup = value;
                    } }));
                // 数据备份
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 数据备份
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 关于我们
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(122:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.buildSettingItem.bind(this)(makeBuilderParameterProxy("buildSettingItem", { title: () => '关于我们', subtitle: () => '版本 1.0.0', icon: () => ({ "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" }), hasArrow: () => true, onTap: () => () => {
                        router.pushUrl({ url: 'pages/AboutPage' });
                    } }));
                // 关于我们
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 关于我们
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    // 退出登录
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/pages/SettingsPage.ets(135:9)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel('退出登录', { type: ButtonType.Normal });
                    Button.debugLine("entry/src/main/ets/pages/SettingsPage.ets(136:11)", "entry");
                    Button.width('90%');
                    Button.height(48);
                    Button.fontColor('#EF4444');
                    Button.backgroundColor('#FEE2E2');
                    Button.margin({ top: 40 });
                    Button.onClick(() => {
                        this.logout();
                    });
                }, Button);
                Button.pop();
                // 退出登录
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            // 退出登录
            ListItem.pop();
        }
        // 设置列表
        List.pop();
        Column.pop();
    }
    buildSettingItem(config: SettingItemConfig, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/SettingsPage.ets(159:5)", "entry");
            Row.width('100%');
            Row.padding({ top: 16, bottom: 16 });
            Row.onClick(() => {
                if (!config.hasSwitch) {
                    config.onTap?.();
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 图标
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/SettingsPage.ets(161:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.debugLine("entry/src/main/ets/pages/SettingsPage.ets(162:9)", "entry");
            Circle.width(48);
            Circle.height(48);
            Circle.fill('#F1F5F9');
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(config.icon);
            Image.debugLine("entry/src/main/ets/pages/SettingsPage.ets(166:9)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        // 图标
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 文本内容
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/SettingsPage.ets(172:7)", "entry");
            // 文本内容
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(config.title);
            Text.debugLine("entry/src/main/ets/pages/SettingsPage.ets(173:9)", "entry");
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (config.subtitle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(config.subtitle);
                        Text.debugLine("entry/src/main/ets/pages/SettingsPage.ets(178:11)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#64748B');
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
        // 文本内容
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 右侧控件
            if (config.hasSwitch) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Toggle.create({ type: ToggleType.Switch, isOn: config.switchValue });
                        Toggle.debugLine("entry/src/main/ets/pages/SettingsPage.ets(187:9)", "entry");
                        Toggle.onChange((value: boolean) => {
                            config.onSwitchChange?.(value);
                        });
                    }, Toggle);
                    Toggle.pop();
                });
            }
            else if (config.hasArrow) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/pages/SettingsPage.ets(192:9)", "entry");
                        Image.width(16);
                        Image.height(16);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    private editProfile(): void {
        // 创建对话框配置对象
        const dialogOptions: ShowDialogOptions = {
            title: '修改个人信息',
            message: '功能开发中...',
            buttons: [
                {
                    text: '确定',
                    color: '#007DFF'
                } as DialogButton
            ]
        };
        promptAction.showDialog(dialogOptions)
            .then((data: DialogResponse) => {
            if (data.index === 0) {
                console.log('用户点击了确定按钮');
            }
        })
            .catch((error: Error) => {
            console.error('对话框错误:', error);
        });
    }
    private selectReminderTime(): void {
        // 创建对话框配置对象
        const dialogOptions: ShowDialogOptions = {
            title: '选择提醒时间',
            message: '功能开发中...',
            buttons: [
                {
                    text: '确定',
                    color: '#007DFF'
                } as DialogButton
            ]
        };
        promptAction.showDialog(dialogOptions)
            .then((data: DialogResponse) => {
            if (data.index === 0) {
                console.log('用户点击了确定按钮');
            }
        })
            .catch((error: Error) => {
            console.error('对话框错误:', error);
        });
    }
    private logout(): void {
        // 创建对话框配置对象
        const dialogOptions: ShowDialogOptions = {
            title: '退出登录',
            message: '确定要退出登录吗？',
            buttons: [
                {
                    text: '取消',
                    color: '#64748B'
                } as DialogButton,
                {
                    text: '确定',
                    color: '#EF4444'
                } as DialogButton
            ]
        };
        promptAction.showDialog(dialogOptions)
            .then((data: DialogResponse) => {
            if (data.index === 1) {
                // 执行退出登录逻辑
                promptAction.showToast({
                    message: '已退出登录',
                    duration: 2000
                });
                router.back();
            }
        })
            .catch((error: Error) => {
            console.error('对话框错误:', error);
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SettingsPage";
    }
}
interface SettingItemConfig {
    title: string;
    subtitle?: string;
    icon: Resource;
    hasSwitch?: boolean;
    hasArrow?: boolean;
    switchValue?: boolean;
    onSwitchChange?: (value: boolean) => void;
    onTap?: () => void;
}
registerNamedRoute(() => new SettingsPage(undefined, {}), "", { bundleName: "com.example.habitformation", moduleName: "entry", pagePath: "pages/SettingsPage", pageFullPath: "entry/src/main/ets/pages/SettingsPage", integratedHsp: "false", moduleType: "followWithHap" });
