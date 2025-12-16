import router from '@ohos.router';
import { HabitData, HabitRecord, StatisticsData, CategoryColorConfig, CategoryStatData,} from '../pages/HabitTypes';
import { promptAction } from '@kit.ArkUI';

interface GeneratedTypeLiteralInterface_1 {
  index: number;
}

@Entry
@Component
struct MainPage {
  // 状态管理
  @State currentDate: string = this.getCurrentDate();
  @State currentHour: number = new Date().getHours();
  @State hasUnreadNotifications: boolean = true;
  @State selectedTab: number = 0; // 0:今日习惯, 1:全部习惯, 2:统计
  @State habits: HabitData[] = this.getMockHabits();
  @State todayRecords: HabitRecord[] = [];
  @State isLoading: boolean = false;
  @State showAddHabitDialog: boolean = false;
  @State showStatistics: boolean = false;
  @State userName: string = '习惯达人';
  @State selectedCategory: string = '全部';
  @State newHabitName: string = '';
  @State newHabitCategory: string = '健康';
  @State newHabitTarget: number = 30;
  @State statistics: StatisticsData = this.getDefaultStatistics();
  // 页面控制器
  private swiperController: SwiperController = new SwiperController();

  build() {
    Column() {
      // 顶部导航栏
      this.buildTopBar()

      // 日期和统计信息卡片
      this.buildDateCard()

      // 标签页切换
      this.buildTabBar()

      // 内容区域
      Swiper(this.swiperController) {
        // 今日习惯
        this.buildTodayHabits()

        // 全部习惯
        this.buildAllHabits()

        // 统计
        this.buildStatisticsPage()

      }
      .autoPlay(false) //自动轮播
      .indicator(false) //导航点
      .loop(true) //允许第一页直接轮播到最后一页或最后一页直接轮播到第一页
      .vertical(false) //控制轮播方向，默认水平方向轮播
      //.displayArrow导航点箭头
      //根据文档中示例可以做一个页面导航
      // .displayCount(2)同时显示两个页面
      //.customContentTransition自定义切换动画
      .index(this.selectedTab) //绑定当前的索引
      .onChange((index: number) => {
        this.selectedTab = index;
      }) //Tabs页签的切换

      this.buildFloatingActionButton() //悬浮按钮
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F8FAFC')
  }

  // 顶部导航栏
  @Builder
  buildTopBar() {
    Row() {
      // 用户信息
      Row({ space: 12 }) {
        Image($r('app.media.logo'))
          .width(48)
          .height(48)
          .borderRadius(24)
          .border({ width: 2, color: '#FFFFFF' })
          .shadow({
            radius: 8,
            color: '#00000014',
            offsetX: 0,
            offsetY: 4
          })
        Column({ space: 4 }) {
          // 根据时间段显示问候语
          Text(this.getGreetingByTime())
            .fontSize(14)
            .fontColor('#64748B')

          // 用户名
          Text(this.userName)
            .fontSize(18)
            .fontColor('#1E293B')
            .fontWeight(FontWeight.Bold)
        }

        // 在 buildTopBar() 方法的合适位置添加：
        TextClock()
          .format('H') // 监听小时
          .onDateChange(() => {
            this.currentHour = new Date().getHours();
          })
          .opacity(0) // 隐藏显示
          .height(0) // 不占用布局空间

      }
      .layoutWeight(1)

      // 通知和设置按钮
      Row({ space: 16 }) {

        Stack() {
          Image($r('app.media.notification'))
            .width(24)
            .height(24)

          // 根据是否有未读通知显示红点
          if (this.getUnreadNotificationCount() > 0) {
            Circle({ width: 8, height: 8 })
              .fill('#EF4444')
              .position({ x: 14, y: 2 })
          }
        }
        .onClick(() => {
          // 点击后标记为已读（可选）
          this.hasUnreadNotifications = false;
          router.pushUrl({ url: 'pages/NotificationPage' });
        })

        Image($r('app.media.settings'))
          .width(24)
          .height(24)
          .onClick(() => {
            router.pushUrl({ url: 'pages/SettingsPage' });
          })
      }

    }
    .width('100%')
    .padding({
      left: 20,
      right: 20,
      top: 12,
      bottom: 12
    })
    .backgroundColor('#FFFFFF')
  }

  // 日期卡片
  @Builder
  buildDateCard() {
    Column() {
      Row() {
        Text(this.currentDate)
          .fontSize(16)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Medium)

        Text('第' + this.getWeekNumber() + '周')
          .fontSize(14)
          .fontColor('#64748B')
          .margin({ left: 12 })
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)

      // 本周统计 - 使用实际数据
      Row({ space: 20 }) {
        Column({ space: 4 }) {
          Text(this.getTodayCompletion().toString())
            .fontSize(24)
            .fontColor('#10B981')
            .fontWeight(FontWeight.Bold)
          Text('今日完成')
            .fontSize(12)
            .fontColor('#64748B')
        }

        Divider().height(40).color('#E2E8F0').vertical(false)

        Column({ space: 4 }) {
          Text(this.statistics.totalHabits.toString())
            .fontSize(24)
            .fontColor('#3B82F6')
            .fontWeight(FontWeight.Bold)
          Text('总习惯')
            .fontSize(12)
            .fontColor('#64748B')
        }

        Divider().height(40).color('#E2E8F0').vertical(false)

        Column({ space: 4 }) {
          Text(this.statistics.monthlyCompletionRate + '%')
            .fontSize(24)
            .fontColor('#8B5CF6')
            .fontWeight(FontWeight.Bold)
          Text('完成率')
            .fontSize(12)
            .fontColor('#64748B')
        }
      }
      .width('100%')
      .padding({ top: 16, bottom: 16 })
      .justifyContent(FlexAlign.SpaceAround)
    }
    .width('92%')
    .padding(20)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .margin({ top: 16, bottom: 16 })
    .shadow({
      radius: 12,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 4
    })
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
  @Builder
  buildTabBar() {
    Row({ space: 0 }) {
      // 今日习惯
      Column() {
        Text('今日习惯')
          .fontSize(16)
          .fontColor(this.selectedTab === 0 ? '#3B82F6' : '#64748B')
          .fontWeight(this.selectedTab === 0 ? FontWeight.Bold : FontWeight.Normal)

        if (this.selectedTab === 0) {
          Divider()
            .color('#3B82F6')
            .height(3)
            .width(24)
            .margin({ top: 8 })
        }
      }
      .layoutWeight(1)
      .onClick(() => {
        this.selectedTab = 0; // 只需要更新selectedTab，Swiper会自动切换
      })

      // 全部习惯
      Column() {
        Text('全部习惯')
          .fontSize(16)
          .fontColor(this.selectedTab === 1 ? '#3B82F6' : '#64748B')
          .fontWeight(this.selectedTab === 1 ? FontWeight.Bold : FontWeight.Normal)

        if (this.selectedTab === 1) {
          Divider()
            .color('#3B82F6')
            .height(3)
            .width(24)
            .margin({ top: 8 })
        }
      }
      .layoutWeight(1)
      .onClick(() => {
        this.selectedTab = 1;
      })

      // 统计
      Column() {
        Text('统计')
          .fontSize(16)
          .fontColor(this.selectedTab === 2 ? '#3B82F6' : '#64748B')
          .fontWeight(this.selectedTab === 2 ? FontWeight.Bold : FontWeight.Normal)

        if (this.selectedTab === 2) {
          Divider()
            .color('#3B82F6')
            .height(3)
            .width(24)
            .margin({ top: 8 })
        }
      }
      .layoutWeight(1)
      .onClick(() => {
        this.selectedTab = 2;
      })
    }
    .width('92%')
    .padding({ top: 8, bottom: 8 })
    .backgroundColor('#FFFFFF')
    .borderRadius(12)
    .margin({ bottom: 16 })
  }

  // 今日习惯页面
  @Builder
  buildTodayHabits() {
    Column() {
      if (this.habits.filter(h => h.isToday).length === 0) {
        // 空状态
        Column({ space: 16 }) {
          Image($r('app.media.empty_state'))
            .width(200)
            .height(200)
          Text('今天没有习惯任务')
            .fontSize(18)
            .fontColor('#64748B')
          Text('休息一下，或者添加新习惯')
            .fontSize(14)
            .fontColor('#94A3B8')
        }
        .width('100%')
        .margin({ top: 60 })
      } else {
        // 习惯列表
        List({ space: 12 }) {
          ForEach(this.habits.filter(h => h.isToday), (habit: HabitData) => {
            ListItem() {
              this.buildHabitCard(habit, true)
            }
          }, (habit: HabitData) => habit.id.toString())
        }
        .width('100%')
        .height('100%')
        .margin({ top: 8 })
        .edgeEffect(EdgeEffect.Spring)
      }
    }
    .width('100%')
    .height('100%')
    .padding({ left: 20, right: 20 })
  }

  // 全部习惯页面
  @Builder
  buildAllHabits() {
    Column() {
      // 分类筛选 - 使用 Scroll 组件实现水平滚动
      Scroll() {
        Row({ space: 8 }) {
          ForEach(['全部', '健康', '学习', '工作', '生活'], (category: string) => {
            Text(category)
              .fontSize(14)
              .fontColor(this.selectedCategory === category ? '#FFFFFF' : '#475569')
              .padding({ left: 16, right: 16, top: 8, bottom: 8 })
              .backgroundColor(this.selectedCategory === category ? '#3B82F6' : '#F1F5F9')
              .borderRadius(20)
              .onClick(() => {
                this.selectedCategory = category;
              })
          })
        }
        .width('100%')
        .padding({ right: 20 })
      }
      .width('100%')
      .scrollable(ScrollDirection.Horizontal)
      .scrollBar(BarState.Off)
      .margin({ bottom: 16 })

      // 习惯列表
      if (this.getFilteredHabits().length === 0) {
        Column({ space: 16 }) {
          Image($r('app.media.empty_state'))
            .width(200)
            .height(200)
          Text('暂无习惯')
            .fontSize(18)
            .fontColor('#64748B')
          Text('点击下方按钮添加新习惯')
            .fontSize(14)
            .fontColor('#94A3B8')
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
      } else {
        List({ space: 12 }) {
          ForEach(this.getFilteredHabits(), (habit: HabitData) => {
            ListItem() {
              this.buildHabitCard(habit, false)
            }
          }, (habit: HabitData) => habit.id.toString())
        }
        .width('100%')
        .height('100%')
        .edgeEffect(EdgeEffect.Spring)
      }
    }
    .width('100%')
    .height('100%')
    .padding({ left: 20, right: 20 })
  }

  // 获取筛选后的习惯列表
  private getFilteredHabits(): HabitData[] {
    if (this.selectedCategory === '全部') {
      return this.habits;
    } else {
      return this.habits.filter(h => h.category === this.selectedCategory);
    }
  }

  // 统计页面
  @Builder
  buildStatisticsPage() {
    Column({ space: 20 }) {
      // 统计概览卡片
      this.buildStatsOverview()

      // 习惯坚持天数排行
      this.buildHabitRanking()

      // 分类统计
      this.buildCategoryStats()
    }
    .width('100%')
    .padding({ top: 20, bottom: 20 })
    .alignItems(HorizontalAlign.Center)
    // .scrollable(ScrollDirection.Vertical)
  }

  @Builder
  buildStatsOverview() {
    Column({ space: 16 }) {
      Row() {
        Text('统计概览')
          .fontSize(18)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')

      Grid() {
        GridItem() {
          Column({ space: 4 }) {
            Text(this.statistics.totalHabits.toString())
              .fontSize(24)
              .fontColor('#3B82F6')
              .fontWeight(FontWeight.Bold)
            Text('总习惯')
              .fontSize(12)
              .fontColor('#64748B')
          }
          .width('100%')
          .height(80)
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({
            radius: 8,
            color: '#0000000A',
            offsetX: 0,
            offsetY: 2
          })
        }

        GridItem() {
          Column({ space: 4 }) {
            Text(this.statistics.completedToday.toString())
              .fontSize(24)
              .fontColor('#10B981')
              .fontWeight(FontWeight.Bold)
            Text('今日完成')
              .fontSize(12)
              .fontColor('#64748B')
          }
          .width('100%')
          .height(80)
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({
            radius: 8,
            color: '#0000000A',
            offsetX: 0,
            offsetY: 2
          })
        }

        GridItem() {
          Column({ space: 4 }) {
            Text(this.statistics.currentStreak.toString())
              .fontSize(24)
              .fontColor('#F59E0B')
              .fontWeight(FontWeight.Bold)
            Text('最长连续')
              .fontSize(12)
              .fontColor('#64748B')
          }
          .width('100%')
          .height(80)
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({
            radius: 8,
            color: '#0000000A',
            offsetX: 0,
            offsetY: 2
          })
        }

        GridItem() {
          Column({ space: 4 }) {
            Text(this.statistics.monthlyCompletionRate + '%')
              .fontSize(24)
              .fontColor('#8B5CF6')
              .fontWeight(FontWeight.Bold)
            Text('完成率')
              .fontSize(12)
              .fontColor('#64748B')
          }
          .width('100%')
          .height(80)
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({
            radius: 8,
            color: '#0000000A',
            offsetX: 0,
            offsetY: 2
          })
        }
      }
      .columnsTemplate('1fr 1fr')
      .rowsTemplate('1fr 1fr')
      .columnsGap(12)
      .rowsGap(12)
      .width('92%')
    }
    .width('92%')
    .padding(20)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .shadow({
      radius: 12,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 4
    })
  }

  @Builder
  buildAddHabitDialog() {
    if (this.showAddHabitDialog) {
      // 使用Stack来叠加遮罩层和对话框
      Stack() {
        // 遮罩层
        Column()
          .width('100%')
          .height('100%')
          .backgroundColor('#00000040')
          .onClick(() => {
            this.showAddHabitDialog = false;
          })

        // 对话框内容
        Column({ space: 24 }) {
          Text('添加新习惯')
            .fontSize(20)
            .fontColor('#1E293B')
            .fontWeight(FontWeight.Bold)

          // 习惯名称
          Column({ space: 8 }) {
            Text('习惯名称')
              .fontSize(14)
              .fontColor('#475569')
              .width('100%')
              .textAlign(TextAlign.Start)

            TextInput({ placeholder: '请输入习惯名称' })
              .width('100%')
              .height(48)
              .fontSize(16)
              .padding({ left: 16, right: 16 })
              .backgroundColor('#F8FAFC')
              .borderRadius(8)
              .onChange((value: string) => {
                this.newHabitName = value;
              })
          }

          // 分类选择
          Column({ space: 8 }) {
            Text('分类')
              .fontSize(14)
              .fontColor('#475569')
              .width('100%')
              .textAlign(TextAlign.Start)

            Row({ space: 8 }) {
              ForEach(['健康', '学习', '工作', '生活'], (category: string) => {
                Text(category)
                  .fontSize(14)
                  .fontColor(this.newHabitCategory === category ? '#FFFFFF' : '#475569')
                  .padding({
                    left: 16,
                    right: 16,
                    top: 8,
                    bottom: 8
                  })
                  .backgroundColor(this.newHabitCategory === category ? '#3B82F6' : '#F1F5F9')
                  .borderRadius(20)
                  .onClick(() => {
                    this.newHabitCategory = category;
                  })
              })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)
          }

          // 目标天数
          Column({ space: 8 }) {
            Text('目标天数')
              .fontSize(14)
              .fontColor('#475569')
              .width('100%')
              .textAlign(TextAlign.Start)

            Scroll() {
              Row({ space: 8 }) {
                ForEach([7, 21, 30, 60, 90], (days: number) => {
                  Text(days + '天')
                    .fontSize(14)
                    .fontColor(this.newHabitTarget === days ? '#FFFFFF' : '#475569')
                    .padding({
                      left: 16,
                      right: 16,
                      top: 8,
                      bottom: 8
                    })
                    .backgroundColor(this.newHabitTarget === days ? '#3B82F6' : '#F1F5F9')
                    .borderRadius(20)
                    .onClick(() => {
                      this.newHabitTarget = days;
                    })
                })
              }
            }
            .width('100%')
            .scrollable(ScrollDirection.Horizontal)
            .scrollBar(BarState.Off)
          }

          // 按钮
          Row({ space: 12 }) {
            Button('取消')
              .layoutWeight(1)
              .height(48)
              .fontColor('#64748B')
              .backgroundColor('#F1F5F9')
              .onClick(() => {
                this.showAddHabitDialog = false;
                this.newHabitName = '';
              })

            Button('添加')
              .layoutWeight(1)
              .height(48)
              .fontColor('#FFFFFF')
              .backgroundColor('#3B82F6')
              .onClick(() => {
                this.addNewHabit();
              })
          }
          .width('100%')
        }
        .width('80%')
        .padding(24)
        .backgroundColor('#FFFFFF')
        .borderRadius(24)
        .shadow({
          radius: 24,
          color: '#00000020',
          offsetX: 0,
          offsetY: 8
        })
        .alignSelf(ItemAlign.Center)
        .margin({ top: '20%' })
      }
      .width('100%')
      .height('100%')
    }
  }

  @Builder
  buildHabitRanking() {
    Column({ space: 16 }) {
      Text('习惯坚持排行')
        .fontSize(18)
        .fontColor('#1E293B')
        .fontWeight(FontWeight.Bold)
        .width('100%')

      if (this.habits.length === 0) {
        Text('暂无习惯数据')
          .fontSize(14)
          .fontColor('#94A3B8')
          .width('100%')
          .textAlign(TextAlign.Center)
          .padding(20)
      } else {
        ForEach(this.getTopHabits(5), (habit: HabitData, index: number) => {
          Row({ space: 12 }) {
            // 排名
            Column({ space: 4 }) {
              Text((index + 1).toString())
                .fontSize(16)
                .fontColor('#64748B')
                .fontWeight(FontWeight.Bold)

              if (index < 3) {
                Text(['🥇', '🥈', '🥉'][index])
                  .fontSize(12)
              }
            }
            .width(40)
            .alignItems(HorizontalAlign.Center)

            // 习惯图标
            Stack() {
              Circle()
                .width(48)
                .height(48)
                .fill(this.getCategoryColor(habit.category).background)

              Image($r('app.media.' + habit.icon))
                .width(24)
                .height(24)
            }

            // 习惯信息
            Column({ space: 4 }) {
              Text(habit.name)
                .fontSize(16)
                .fontColor('#1E293B')
                .fontWeight(FontWeight.Medium)

              Row({ space: 8 }) {
                Text(habit.category)
                  .fontSize(12)
                  .fontColor('#64748B')

                Text('目标' + habit.targetDays + '天')
                  .fontSize(12)
                  .fontColor('#94A3B8')
              }
            }
            .layoutWeight(1)

            // 连续天数
            Column({ space: 2 }) {
              Text(habit.currentStreak.toString())
                .fontSize(18)
                .fontColor('#10B981')
                .fontWeight(FontWeight.Bold)
              Text('天')
                .fontSize(12)
                .fontColor('#94A3B8')
            }
          }
          .width('100%')
          .padding(16)
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .margin({ bottom: 8 })
        })
      }
    }
    .width('92%')
    .padding(20)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .shadow({
      radius: 12,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 4
    })
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
  @Builder
  buildCategoryStats() {
    Column({ space: 16 }) {
      Text('分类统计')
        .fontSize(18)
        .fontColor('#1E293B')
        .fontWeight(FontWeight.Bold)
        .width('100%')

      // 使用组件方法获取统计数据
      if (this.getCategoryStatsData().length === 0) {
        Text('暂无分类数据')
          .fontSize(14)
          .fontColor('#94A3B8')
          .width('100%')
          .textAlign(TextAlign.Center)
          .padding(20)
      } else {
        ForEach(this.getCategoryStatsData(), (stat: CategoryStatData) => {  // 添加类型注解
          Column({ space: 8 }) {
            Row() {
              Text(stat.category)
                .fontSize(16)
                .fontColor('#1E293B')
                .fontWeight(FontWeight.Medium)

              Text(stat.count + '个习惯')
                .fontSize(14)
                .fontColor('#64748B')
                .margin({ left: 'auto' })
            }

            // 进度条
            Stack() {
              Row()
                .width('100%')
                .height(8)
                .backgroundColor('#E2E8F0')
                .borderRadius(4)

              Row()
                .width(stat.completionRate + '%')
                .height(8)
                .backgroundColor(stat.color)
                .borderRadius(4)
            }

            Row() {
              Text('完成率 ' + stat.completionRate + '%')
                .fontSize(14)
                .fontColor('#475569')

              Text(stat.completed + '/' + stat.count + ' 完成')
                .fontSize(12)
                .fontColor('#94A3B8')
                .margin({ left: 'auto' })
            }
          }
          .width('100%')
          .padding({ top: 12, bottom: 12 })
        })
      }
    }
    .width('92%')
    .padding(20)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .shadow({
      radius: 12,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 4
    })
  }

  // 习惯卡片组件
  @Builder
  buildHabitCard(habit: HabitData, isToday: boolean) {
    Column({ space: 12 }) {
      Row() {
        // 习惯图标和名称
        Row({ space: 12 }) {
          // 图标背景
          Stack() {
            Circle()
              .width(48)
              .height(48)

            Image($r('app.media.' + habit.icon))
              .width(24)
              .height(24)

          }

          Column({ space: 4 }) {
            Text(habit.name)
              .fontSize(16)
              .fontColor('#1E293B')
              .fontWeight(FontWeight.Medium)
            Text(habit.reminder)
              .fontSize(12)
              .fontColor('#64748B')
          }
        }
        .layoutWeight(1)

        // 打卡按钮
        if (isToday && !habit.completed) {
          Button('打卡', { type: ButtonType.Capsule })
            .width(80)
            .height(36)
            .fontColor('#FFFFFF')
            .fontSize(14)
            .onClick(() => {
              this.checkInHabit(habit.id);
            })
        } else if (habit.completed) {
          // 已打卡状态
          Row({ space: 4 }) {
            Image($r('app.media.check'))
              .width(16)
              .height(16)

            Text('已完成')
              .fontSize(14)
              .fontColor('#10B981')
          }
          .padding({
            left: 12,
            right: 12,
            top: 8,
            bottom: 8
          })
          .backgroundColor('#D1FAE5')
          .borderRadius(18)
        }
      }

      // 进度信息
      Row() {
        // 坚持天数
        Text('已坚持 ' + habit.currentStreak + ' 天')
          .fontSize(12)
          .fontColor('#64748B')

        Text('目标 ' + habit.targetDays + ' 天')
          .fontSize(12)
          .fontColor('#64748B')
          .margin({ left: 'auto' })
      }

      // 进度条
      Stack() {
        // 背景条
        Row()
          .width('100%')
          .height(6)
          .backgroundColor('#E2E8F0')
          .borderRadius(3)

        // 进度条
        Row()
          .width(this.calculateProgress(habit) + '%')
          .height(6)
          .borderRadius(3)
      }
    }
    .width('100%')
    .padding(16)
    .backgroundColor('#FFFFFF')
    .borderRadius(16)
    .shadow({
      radius: 8,
      color: '#0000000A',
      offsetX: 0,
      offsetY: 2
    })
    .onClick(() => {
      router.pushUrl({
        url: 'pages/HabitDetailPage',
        params: { habitId: habit.id }
      });
    })
  }

  // 悬浮操作按钮
  @Builder
  buildFloatingActionButton() {
    // 使用Stack并设置对齐方式为右下角
    Stack({ alignContent: Alignment.BottomEnd }) {
      // 主按钮
      Button('', { type: ButtonType.Circle })
        .width(56)
        .height(56)
        .backgroundColor('#3B82F6')
        .shadow({
          radius: 16,
          color: '#3B82F680',
          offsetX: 0,
          offsetY: 8
        })
        .onClick(() => {
          this.showAddHabitDialog = true;
        })
        .margin({ right: 20, bottom: 20 })

      // 加号图标
      Image($r('app.media.add'))
        .width(24)
        .height(24)
        .position({ x: 16, y: 16 })
    }
    .width('100%')
    .height('100%')
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
    } else if (hour >= 5 && hour < 8) {
      return '早上好'; // 05:00 - 08:00
    } else if (hour >= 8 && hour < 11) {
      return '上午好'; // 08:00 - 11:00
    } else if (hour >= 11 && hour < 13) {
      return '中午好'; // 11:00 - 13:00
    } else if (hour >= 13 && hour < 17) {
      return '下午好'; // 13:00 - 17:00
    } else if (hour >= 17 && hour < 18) {
      return '傍晚好'; // 17:00 - 18:00
    } else {
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
    if (habitIndex === -1) return;

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

    // 更新习惯 - 不使用扩展运算符
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


}
