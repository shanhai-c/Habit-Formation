if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    username?: string;
    password?: string;
    isRemember?: boolean;
    isPasswordVisible?: boolean;
    isLogging?: boolean;
}
import router from "@ohos:router";
import promptAction from "@ohos:promptAction";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__username = new ObservedPropertySimplePU('', this, "username");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__isRemember = new ObservedPropertySimplePU(false, this, "isRemember");
        this.__isPasswordVisible = new ObservedPropertySimplePU(false, this, "isPasswordVisible");
        this.__isLogging = new ObservedPropertySimplePU(false, this, "isLogging");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.username !== undefined) {
            this.username = params.username;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isRemember !== undefined) {
            this.isRemember = params.isRemember;
        }
        if (params.isPasswordVisible !== undefined) {
            this.isPasswordVisible = params.isPasswordVisible;
        }
        if (params.isLogging !== undefined) {
            this.isLogging = params.isLogging;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__username.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__isRemember.purgeDependencyOnElmtId(rmElmtId);
        this.__isPasswordVisible.purgeDependencyOnElmtId(rmElmtId);
        this.__isLogging.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__username.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__isRemember.aboutToBeDeleted();
        this.__isPasswordVisible.aboutToBeDeleted();
        this.__isLogging.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __username: ObservedPropertySimplePU<string>;
    get username() {
        return this.__username.get();
    }
    set username(newValue: string) {
        this.__username.set(newValue);
    }
    private __password: ObservedPropertySimplePU<string>;
    get password() {
        return this.__password.get();
    }
    set password(newValue: string) {
        this.__password.set(newValue);
    }
    private __isRemember: ObservedPropertySimplePU<boolean>;
    get isRemember() {
        return this.__isRemember.get();
    }
    set isRemember(newValue: boolean) {
        this.__isRemember.set(newValue);
    }
    private __isPasswordVisible: ObservedPropertySimplePU<boolean>;
    get isPasswordVisible() {
        return this.__isPasswordVisible.get();
    }
    set isPasswordVisible(newValue: boolean) {
        this.__isPasswordVisible.set(newValue);
    }
    private __isLogging: ObservedPropertySimplePU<boolean>;
    get isLogging() {
        return this.__isLogging.get();
    }
    set isLogging(newValue: boolean) {
        this.__isLogging.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(14:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F5F5F5');
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部Logo和标题
            Column.create({ space: 15 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(16:7)", "entry");
            // 顶部Logo和标题
            Column.width('100%');
            // 顶部Logo和标题
            Column.alignItems(HorizontalAlign.Center);
            // 顶部Logo和标题
            Column.margin({ bottom: 50 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(17:9)", "entry");
            Image.width(120);
            Image.height(120);
            Image.borderRadius(60);
            Image.margin({ top: 40 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('习惯养成');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(23:9)", "entry");
            Text.fontSize(28);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('高效养成习惯');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(28:9)", "entry");
            Text.fontSize(16);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        // 顶部Logo和标题
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 登录表单
            Column.create({ space: 25 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(37:7)", "entry");
            // 登录表单
            Column.width('85%');
            // 登录表单
            Column.padding({ left: 20, right: 20, top: 30, bottom: 30 });
            // 登录表单
            Column.backgroundColor('#FFFFFF');
            // 登录表单
            Column.borderRadius(16);
            // 登录表单
            Column.shadow({ radius: 20, color: '#0000000D', offsetX: 0, offsetY: 4 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户名输入框
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(39:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('用户名');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(40:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#333333');
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入用户名或邮箱' });
            TextInput.debugLine("entry/src/main/ets/pages/Index.ets(45:11)", "entry");
            TextInput.width('100%');
            TextInput.height(50);
            TextInput.backgroundColor('#FFFFFF');
            TextInput.borderRadius(8);
            TextInput.border({ width: 1, color: '#E4E4E4' });
            TextInput.padding({ left: 15, right: 15 });
            TextInput.fontSize(16);
            TextInput.onChange((value: string) => {
                this.username = value;
            });
        }, TextInput);
        // 用户名输入框
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 密码输入框
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(59:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(60:11)", "entry");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('密码');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(61:13)", "entry");
            Text.fontSize(14);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('忘记密码?');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(65:13)", "entry");
            Text.fontSize(14);
            Text.fontColor('#007DFF');
            Text.margin({ left: 'auto' });
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/ForgotPassword'
                });
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入密码' });
            TextInput.debugLine("entry/src/main/ets/pages/Index.ets(77:11)", "entry");
            TextInput.width('100%');
            TextInput.height(50);
            TextInput.backgroundColor('#FFFFFF');
            TextInput.borderRadius(8);
            TextInput.border({ width: 1, color: '#E4E4E4' });
            TextInput.padding({ left: 15, right: 15 });
            TextInput.fontSize(16);
            TextInput.type(this.isPasswordVisible ? InputType.Normal : InputType.Password);
            TextInput.onChange((value: string) => {
                this.password = value;
            });
        }, TextInput);
        // 密码输入框
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 记住密码选项
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(93:9)", "entry");
            // 记住密码选项
            Row.width('100%');
            // 记住密码选项
            Row.margin({ top: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create();
            Checkbox.debugLine("entry/src/main/ets/pages/Index.ets(94:11)", "entry");
            Checkbox.select(this.isRemember);
            Checkbox.selectedColor('#007DFF');
            Checkbox.onChange((value: boolean) => {
                this.isRemember = value;
            });
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('记住密码');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(101:11)", "entry");
            Text.fontSize(14);
            Text.fontColor('#333333');
            Text.margin({ left: 10 });
            Text.onClick(() => {
                this.isRemember = !this.isRemember;
            });
        }, Text);
        Text.pop();
        // 记住密码选项
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 登录按钮
            Button.createWithLabel('登录', { type: ButtonType.Capsule });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(113:9)", "entry");
            // 登录按钮
            Button.width('100%');
            // 登录按钮
            Button.height(50);
            // 登录按钮
            Button.backgroundColor(this.username && this.password ? '#007DFF' : '#CCCCCC');
            // 登录按钮
            Button.fontColor('#FFFFFF');
            // 登录按钮
            Button.fontSize(18);
            // 登录按钮
            Button.fontWeight(FontWeight.Medium);
            // 登录按钮
            Button.onClick(() => {
                this.login();
            });
            // 登录按钮
            Button.margin({ top: 20 });
        }, Button);
        // 登录按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 加载状态
            if (this.isLogging) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        LoadingProgress.create();
                        LoadingProgress.debugLine("entry/src/main/ets/pages/Index.ets(128:11)", "entry");
                        LoadingProgress.color('#007DFF');
                        LoadingProgress.margin({ top: 10 });
                    }, LoadingProgress);
                });
            }
            // 其他登录方式
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 其他登录方式
            Column.create({ space: 20 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(134:9)", "entry");
            // 其他登录方式
            Column.width('100%');
            // 其他登录方式
            Column.alignItems(HorizontalAlign.Center);
            // 其他登录方式
            Column.margin({ top: 30 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(135:11)", "entry");
            Row.width('100%');
            Row.margin({ top: 30 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/Index.ets(136:13)", "entry");
            Divider.color('#E4E4E4');
            Divider.height(1);
            Divider.layoutWeight(1);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('其他登录方式');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(137:13)", "entry");
            Text.fontSize(14);
            Text.fontColor('#999999');
            Text.margin({ left: 15, right: 15 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/Index.ets(141:13)", "entry");
            Divider.color('#E4E4E4');
            Divider.height(1);
            Divider.layoutWeight(1);
        }, Divider);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 30 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(146:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 微信登录
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(148:13)", "entry");
            // 微信登录
            Column.onClick(() => {
                this.wechatLogin();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(149:15)", "entry");
            Image.width(40);
            Image.height(40);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('微信');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(152:15)", "entry");
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.margin({ top: 5 });
        }, Text);
        Text.pop();
        // 微信登录
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // QQ登录
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(162:13)", "entry");
            // QQ登录
            Column.onClick(() => {
                this.qqLogin();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(163:15)", "entry");
            Image.width(40);
            Image.height(40);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('QQ');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(166:15)", "entry");
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.margin({ top: 5 });
        }, Text);
        Text.pop();
        // QQ登录
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 手机验证码登录
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(176:13)", "entry");
            // 手机验证码登录
            Column.onClick(() => {
                router.pushUrl({
                    url: 'pages/PhoneLogin'
                });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.habitformation", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(177:15)", "entry");
            Image.width(40);
            Image.height(40);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('手机验证码');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(180:15)", "entry");
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.margin({ top: 5 });
        }, Text);
        Text.pop();
        // 手机验证码登录
        Column.pop();
        Row.pop();
        // 其他登录方式
        Column.pop();
        // 登录表单
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 注册链接
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(203:7)", "entry");
            // 注册链接
            Row.margin({ top: 30, bottom: 40 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('还没有账号？');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(204:9)", "entry");
            Text.fontSize(14);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('立即注册');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(208:9)", "entry");
            Text.fontSize(14);
            Text.fontColor('#007DFF');
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ left: 5 });
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/Register'
                });
            });
        }, Text);
        Text.pop();
        // 注册链接
        Row.pop();
        Column.pop();
    }
    // 登录方法
    private async login(): Promise<void> {
        this.isLogging = true;
        // 模拟登录请求
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // 实际开发中这里应该调用后端API
        // const success = await this.callLoginApi(this.username, this.password);
        const success = true; // 模拟登录成功
        if (success) {
            // 保存登录状态
            if (this.isRemember) {
                // 使用Preferences保存登录信息
                // const preferences = await dataPreferences.getPreferences(this.context, 'userInfo');
                // await preferences.put('username', this.username);
                // await preferences.put('password', this.password);
                // await preferences.flush();
            }
            // 跳转到主页面
            router.replaceUrl({
                url: 'pages/MainPage'
            });
        }
        else {
            // 显示错误提示
            promptAction.showToast({
                message: '用户名或密码错误',
                duration: 2000
            });
        }
        this.isLogging = false;
    }
    // 微信登录
    private wechatLogin(): void {
        // 实际开发中需要集成微信SDK
        promptAction.showToast({
            message: '微信登录功能开发中',
            duration: 2000
        });
    }
    // QQ登录
    private qqLogin(): void {
        // 实际开发中需要集成QQ SDK
        promptAction.showToast({
            message: 'QQ登录功能开发中',
            duration: 2000
        });
    }
    // 组件挂载时检查记住的密码
    async aboutToAppear() {
        //     检查是否有保存的登录信息
        //     const preferences = await dataPreferences.getPreferences(this.context, 'userInfo');
        //     const savedUsername = await preferences.get('username', '');
        //     const savedPassword = await preferences.get('password', '');
        //
        //     if (savedUsername && savedPassword) {
        //       this.username = savedUsername as string;
        //       this.password = savedPassword as string;
        //       this.isRemember = true;
        //     }
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.habitformation", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
