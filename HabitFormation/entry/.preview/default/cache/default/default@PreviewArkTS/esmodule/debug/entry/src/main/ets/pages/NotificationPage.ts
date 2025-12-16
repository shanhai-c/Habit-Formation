if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NotificationPage_Params {
    notifications?: NotificationItem[];
}
import router from "@ohos:router";
import type { NotificationItem } from './HabitTypes';
class NotificationPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__notifications = new ObservedPropertyObjectPU(this.getMockNotifications(), this, "notifications");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NotificationPage_Params) {
        if (params.notifications !== undefined) {
            this.notifications = params.notifications;
        }
    }
    updateStateVars(params: NotificationPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__notifications.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__notifications.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __notifications: ObservedPropertyObjectPU<NotificationItem[]>;
    get notifications() {
        return this.__notifications.get();
    }
    set notifications(newValue: NotificationItem[]) {
        this.__notifications.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/NotificationPage.ets(11:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F8FAFC');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部标题栏
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/NotificationPage.ets(13:7)", "entry");
            // 顶部标题栏
            Row.width('100%');
            // 顶部标题栏
            Row.padding({ left: 20, right: 20, top: 12, bottom: 12 });
            // 顶部标题栏
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/NotificationPage.ets(14:9)", "entry");
            Image.width(24);
            Image.height(24);
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('通知中心');
            Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(21:9)", "entry");
            Text.fontSize(20);
            Text.fontColor('#1E293B');
            Text.fontWeight(FontWeight.Bold);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全部已读');
            Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(27:9)", "entry");
            Text.fontSize(14);
            Text.fontColor('#3B82F6');
            Text.onClick(() => {
                this.markAllAsRead();
            });
        }, Text);
        Text.pop();
        // 顶部标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 通知列表
            if (this.notifications.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 20 });
                        Column.debugLine("entry/src/main/ets/pages/NotificationPage.ets(40:9)", "entry");
                        Column.width('100%');
                        Column.height('100%');
                        Column.justifyContent(FlexAlign.Center);
                        Column.alignItems(HorizontalAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/pages/NotificationPage.ets(41:11)", "entry");
                        Image.width(120);
                        Image.height(120);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('暂无通知');
                        Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(44:11)", "entry");
                        Text.fontSize(16);
                        Text.fontColor('#64748B');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('当有新的消息时会在这里显示');
                        Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(47:11)", "entry");
                        Text.fontSize(14);
                        Text.fontColor('#94A3B8');
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: 12 });
                        List.debugLine("entry/src/main/ets/pages/NotificationPage.ets(56:9)", "entry");
                        List.width('100%');
                        List.height('100%');
                        List.padding(20);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
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
                                    ListItem.debugLine("entry/src/main/ets/pages/NotificationPage.ets(58:13)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.buildNotificationItem.bind(this)(item);
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.notifications, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    buildNotificationItem(item: NotificationItem, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/NotificationPage.ets(75:5)", "entry");
            Row.width('100%');
            Row.padding(16);
            Row.backgroundColor('#FFFFFF');
            Row.borderRadius(16);
            Row.shadow({ radius: 8, color: '#0000000A', offsetX: 0, offsetY: 2 });
            Row.onClick(() => {
                this.markAsRead(item.id);
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 通知图标
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/NotificationPage.ets(77:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.debugLine("entry/src/main/ets/pages/NotificationPage.ets(78:9)", "entry");
            Circle.width(48);
            Circle.height(48);
            Circle.fill(item.type === 'reminder' ? '#3B82F620' :
                item.type === 'achievement' ? '#10B98120' :
                    '#8B5CF620');
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.getNotificationIcon(item.type));
            Image.debugLine("entry/src/main/ets/pages/NotificationPage.ets(85:9)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        // 通知图标
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 通知内容
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/NotificationPage.ets(91:7)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/NotificationPage.ets(92:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.title);
            Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(93:11)", "entry");
            Text.fontSize(16);
            Text.fontColor('#1E293B');
            Text.fontWeight(item.read ? FontWeight.Normal : FontWeight.Bold);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.time);
            Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(99:11)", "entry");
            Text.fontSize(12);
            Text.fontColor('#94A3B8');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.content);
            Text.debugLine("entry/src/main/ets/pages/NotificationPage.ets(104:9)", "entry");
            Text.fontSize(14);
            Text.fontColor('#64748B');
            Text.maxLines(2);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        // 通知内容
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 未读标记
            if (!item.read) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Circle.create();
                        Circle.debugLine("entry/src/main/ets/pages/NotificationPage.ets(113:9)", "entry");
                        Circle.width(8);
                        Circle.height(8);
                        Circle.fill('#EF4444');
                        Circle.margin({ left: 12 });
                    }, Circle);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    private getNotificationIcon(type: string): Resource {
        switch (type) {
            case 'reminder': return { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" };
            case 'achievement': return { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" };
            case 'system': return { "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" };
            default: return { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" };
        }
    }
    private markAsRead(id: number): void {
        this.notifications = this.notifications.map((notification: NotificationItem): NotificationItem => {
            if (notification.id === id) {
                // 明确创建新的 NotificationItem 对象
                const updatedNotification: NotificationItem = {
                    id: notification.id,
                    title: notification.title,
                    content: notification.content,
                    type: notification.type,
                    time: notification.time,
                    read: true // 修改为已读
                };
                return updatedNotification;
            }
            return notification;
        });
    }
    private markAllAsRead(): void {
        this.notifications = this.notifications.map((notification: NotificationItem): NotificationItem => {
            // 明确创建新的 NotificationItem 对象
            const updatedNotification: NotificationItem = {
                id: notification.id,
                title: notification.title,
                content: notification.content,
                type: notification.type,
                time: notification.time,
                read: true // 修改为已读
            };
            return updatedNotification;
        });
    }
    private getMockNotifications(): NotificationItem[] {
        return [
            {
                id: 1,
                title: '习惯提醒',
                content: '今天是坚持阅读的第30天，继续保持！',
                type: 'achievement',
                time: '10:30',
                read: false
            },
            {
                id: 2,
                title: '运动时间',
                content: '别忘了今天的30分钟运动',
                type: 'reminder',
                time: '今天 19:00',
                read: false
            },
            {
                id: 3,
                title: '系统通知',
                content: '新版本已发布，点击查看更新内容',
                type: 'system',
                time: '昨天',
                read: true
            }
        ];
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "NotificationPage";
    }
}
registerNamedRoute(() => new NotificationPage(undefined, {}), "", { bundleName: "com.example.habitformation", moduleName: "entry", pagePath: "pages/NotificationPage", pageFullPath: "entry/src/main/ets/pages/NotificationPage", integratedHsp: "false", moduleType: "followWithHap" });
