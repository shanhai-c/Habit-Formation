import { promptAction } from "@kit.ArkUI";


@Component
export struct AddHabitDialog {
  @Link showDialog: boolean;
  @State habitName: string = '';
  @State selectedCategory: string = '健康';
  @State selectedIcon: string = 'sunrise';
  @State targetDays: number = 21;
  @State reminderTime: string = '08:00';

  private categories = ['健康', '学习', '工作', '生活'];
  private icons = ['sunrise', 'book', 'fitness', 'language', 'journal', 'meditation'];

  build() {
    Column() {
      // 标题栏
      Row() {
        Text('添加新习惯')
          .fontSize(18)
          .fontColor('#1E293B')
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)

        Image($r('app.media.check'))
          .width(24)
          .height(24)
          .onClick(() => {
            this.showDialog = false;
          })
      }
      .width('100%')
      .margin({ bottom: 24 })

      // 表单内容
      Column({ space: 20 }) {
        // 习惯名称
        Column({ space: 8 }) {
          Text('习惯名称')
            .fontSize(14)
            .fontColor('#64748B')

          TextInput({ placeholder: '输入习惯名称，如：早起' })
            .width('100%')
            .height(48)
            .backgroundColor('#F8FAFC')
            .borderRadius(8)
            .fontSize(16)
            .onChange((value: string) => {
              this.habitName = value;
            })
        }

        // 选择分类
        Column({ space: 8 }) {
          Text('选择分类')
            .fontSize(14)
            .fontColor('#64748B')

          Row({ space: 8 }) {
            ForEach(this.categories, (category: string) => {
              Text(category)
                .fontSize(14)
                .padding({ left: 16, right: 16, top: 8, bottom: 8 })
                .backgroundColor(this.selectedCategory === category ? '#3B82F6' : '#F1F5F9')
                .fontColor(this.selectedCategory === category ? '#FFFFFF' : '#475569')
                .borderRadius(20)
                .onClick(() => {
                  this.selectedCategory = category;
                })
            })
          }
          // .wrap(true)
        }

        // 选择图标
        Column({ space: 8 }) {
          Text('选择图标')
            .fontSize(14)
            .fontColor('#64748B')

          Grid() {
            ForEach(this.icons, (icon: string) => {
              GridItem() {
                Image($r('app.media.' + icon))
                  .width(32)
                  .height(32)
                  .padding(12)
                  .backgroundColor(this.selectedIcon === icon ? '#DBEAFE' : '#F8FAFC')
                  .borderRadius(12)
                  .onClick(() => {
                    this.selectedIcon = icon;
                  })
              }
            })
          }
          .columnsTemplate('1fr 1fr 1fr')
          .rowsTemplate('1fr 1fr')
          .columnsGap(12)
          .rowsGap(12)
        }

        // 目标天数
        Column({ space: 8 }) {
          Row() {
            Text('目标天数')
              .fontSize(14)
              .fontColor('#64748B')
              .layoutWeight(1)

            Text(this.targetDays + ' 天')
              .fontSize(16)
              .fontColor('#3B82F6')
              .fontWeight(FontWeight.Medium)
          }

          Slider({
            value: this.targetDays,
            min: 7,
            max: 365,
            step: 1,
            style: SliderStyle.OutSet
          })
            .width('100%')
            .onChange((value: number) => {
              this.targetDays = value;
            })
        }

        // 提醒时间
        Column({ space: 8 }) {
          Text('提醒时间')
            .fontSize(14)
            .fontColor('#64748B')

          Row() {
            Image($r('app.media.check'))
              .width(20)
              .height(20)
              .margin({ right: 12 })

            Text(this.reminderTime)
              .fontSize(16)
              .fontColor('#1E293B')
              .layoutWeight(1)
          }
          .width('100%')
          .padding({ left: 16, right: 16, top: 12, bottom: 12 })
          .backgroundColor('#F8FAFC')
          .borderRadius(8)
          .onClick(() => {
            // 打开时间选择器
          })
        }

        // 按钮区域
        Row({ space: 12 }) {
          Button('取消', { type: ButtonType.Normal })
            .layoutWeight(1)
            .height(48)
            .backgroundColor('#F1F5F9')
            .fontColor('#64748B')
            .onClick(() => {
              this.showDialog = false;
            })

          Button('创建习惯', { type: ButtonType.Capsule })
            .layoutWeight(1)
            .height(48)
            .backgroundColor('#3B82F6')
            .fontColor('#FFFFFF')
            .enabled(this.habitName.length > 0)
            .onClick(() => {
              this.createHabit();
            })
        }
        .width('100%')
        .margin({ top: 8 })
      }
    }
    .width('90%')
    .padding(24)
    .backgroundColor('#FFFFFF')
    .borderRadius(24)
  }

  private createHabit(): void {
    // 创建习惯的逻辑
    promptAction.showToast({
      message: '习惯创建成功！',
      duration: 2000
    });

    this.showDialog = false;
  }
}