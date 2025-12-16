// pages/NotificationPage.ets
import router from '@ohos.router';
import { NotificationItem } from './HabitTypes';

@Entry
@Component
struct NotificationPage {
  @State notifications: NotificationItem[] = this.getMockNotifications();

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

        Text('通知中心')
          .fontSize(20)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)

        Text('全部已读')
          .fontSize(14)
          .fontColor('#3B82F6')
          .onClick(() => {
            this.markAllAsRead();
          })
      }
      .width('100%')
      .padding({ left: 20, right: 20, top: 12, bottom: 12 })
      .backgroundColor('#FFFFFF')

      // 通知列表
      if (this.notifications.length === 0) {
        Column({ space: 20 }) {
          Image($r('app.media.no_notifications'))
            .width(120)
            .height(120)
          Text('暂无通知')
            .fontSize(16)
            .fontColor('#64748B')
          Text('当有新的消息时会在这里显示')
            .fontSize(14)
            .fontColor('#94A3B8')
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else {
        List({ space: 12 }) {
          ForEach(this.notifications, (item: NotificationItem) => {
            ListItem() {
              this.buildNotificationItem(item)
            }
          })
        }
        .width('100%')
        .height('100%')
        .padding(20)
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFC')
  }

  @Builder
  buildNotificationItem(item: NotificationItem) {
    Row({ space: 12 }) {
      // 通知图标
      Stack() {
        Circle()
          .width(48)
          .height(48)
          .fill(item.type === 'reminder' ? '#3B82F620' :
            item.type === 'achievement' ? '#10B98120' :
              '#8B5CF620')

        Image(this.getNotificationIcon(item.type))
          .width(24)
          .height(24)
      }

      // 通知内容
      Column({ space: 4 }) {
        Row() {
          Text(item.title)
            .fontSize(16)
            .fontColor('#1E293B')
            .fontWeight(item.read ? FontWeight.Normal : FontWeight.Bold)
            .layoutWeight(1)

          Text(item.time)
            .fontSize(12)
            .fontColor('#94A3B8')
        }

        Text(item.content)
          .fontSize(14)
          .fontColor('#64748B')
          .maxLines(2)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }

      // 未读标记
      if (!item.read) {
        Circle()
          .width(8)
          .height(8)
          .fill('#EF4444')
          .margin({ left: 12 })
      }
    }
    .width('100%')
    .padding(16)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .shadow({ radius: 8, color: '#0000000A', offsetX: 0, offsetY: 2 })
    .onClick(() => {
      this.markAsRead(item.id);
    })
  }

  private getNotificationIcon(type: string): Resource {
    switch (type) {
      case 'reminder': return $r('app.media.bell');
      case 'achievement': return $r('app.media.trophy');
      case 'system': return $r('app.media.info');
      default: return $r('app.media.bell');
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
}