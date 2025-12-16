
import router from '@ohos.router';
import { promptAction } from '@kit.ArkUI';
import { DialogButton, ShowDialogOptions, DialogResponse } from './HabitTypes';

@Entry
@Component
struct SettingsPage {
  @State notificationsEnabled: boolean = true;
  @State darkMode: boolean = false;
  @State vibrationFeedback: boolean = true;
  @State autoBackup: boolean = false;
  @State userName: string = '习惯达人';
  @State reminderTime: string = '20:00';

  build() {
    Column() {
      // 顶部标题栏
      Row({ space: 12 }) {
        Image($r('app.media.back'))
          .width(24)
          .height(24)
          .onClick(() => {
            router.back();
          })

        Text('设置')
          .fontSize(20)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)
      }
      .width('100%')
      .padding({ left: 20, right: 20, top: 12, bottom: 12 })
      .backgroundColor('#FFFFFF')

      // 设置列表
      List({ space: 0 }) {
        // 个人信息
        ListItem() {
          this.buildSettingItem({
            title: '个人信息',
            subtitle: '修改头像、昵称等信息',
            icon: $r('app.media.user'),
            hasArrow: true,
            onTap: () => {
              this.editProfile();
            }
          })
        }

        // 通知设置
        ListItem() {
          this.buildSettingItem({
            title: '通知提醒',
            subtitle: '开启/关闭习惯提醒',
            icon: $r('app.media.bell'),
            hasSwitch: true,
            switchValue: this.notificationsEnabled,
            onSwitchChange: (value: boolean) => {
              this.notificationsEnabled = value;
            }
          })
        }

        // 提醒时间
        ListItem() {
          this.buildSettingItem({
            title: '提醒时间',
            subtitle: this.reminderTime,
            icon: $r('app.media.clock'),
            hasArrow: true,
            onTap: () => {
              this.selectReminderTime();
            }
          })
        }

        // 主题设置
        ListItem() {
          this.buildSettingItem({
            title: '主题模式',
            subtitle: this.darkMode ? '深色模式' : '浅色模式',
            icon: $r('app.media.theme'),
            hasSwitch: true,
            switchValue: this.darkMode,
            onSwitchChange: (value: boolean) => {
              this.darkMode = value;
            }
          })
        }

        // 振动反馈
        ListItem() {
          this.buildSettingItem({
            title: '振动反馈',
            subtitle: '操作时的振动提示',
            icon: $r('app.media.vibration'),
            hasSwitch: true,
            switchValue: this.vibrationFeedback,
            onSwitchChange: (value: boolean) => {
              this.vibrationFeedback = value;
            }
          })
        }

        // 数据备份
        ListItem() {
          this.buildSettingItem({
            title: '数据备份',
            subtitle: '自动备份习惯数据',
            icon: $r('app.media.backup'),
            hasSwitch: true,
            switchValue: this.autoBackup,
            onSwitchChange: (value: boolean) => {
              this.autoBackup = value;
            }
          })
        }

        // 关于我们
        ListItem() {
          this.buildSettingItem({
            title: '关于我们',
            subtitle: '版本 1.0.0',
            icon: $r('app.media.info'),
            hasArrow: true,
            onTap: () => {
              router.pushUrl({ url: 'pages/AboutPage' });
            }
          })
        }

        // 退出登录
        ListItem() {
          Button('退出登录', { type: ButtonType.Normal })
            .width('90%')
            .height(48)
            .fontColor('#EF4444')
            .backgroundColor('#FEE2E2')
            .margin({ top: 40 })
            .onClick(() => {
              this.logout();
            })
        }
      }
      .width('100%')
      .height('100%')
      .padding(20)
      .divider({ strokeWidth: 1, color: '#E2E8F0', startMargin: 72, endMargin: 20 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFC')
  }

  @Builder
  buildSettingItem(config: SettingItemConfig) {
    Row({ space: 12 }) {
      // 图标
      Stack() {
        Circle()
          .width(48)
          .height(48)
          .fill('#F1F5F9')
        Image(config.icon)
          .width(24)
          .height(24)
      }

      // 文本内容
      Column({ space: 4 }) {
        Text(config.title)
          .fontSize(16)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Medium)
        if (config.subtitle) {
          Text(config.subtitle)
            .fontSize(14)
            .fontColor('#64748B')
        }
      }
      .layoutWeight(1)

      // 右侧控件
      if (config.hasSwitch) {
        Toggle({ type: ToggleType.Switch, isOn: config.switchValue })
          .onChange((value: boolean) => {
            config.onSwitchChange?.(value);
          })
      } else if (config.hasArrow) {
        Image($r('app.media.arrow_right'))
          .width(16)
          .height(16)
      }
    }
    .width('100%')
    .padding({ top: 16, bottom: 16 })
    .onClick(() => {
      if (!config.hasSwitch) {
        config.onTap?.();
      }
    })
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