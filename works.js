const publishedWorks=[
  {
    "id": "catalog-attendance",
    "title": "学生考勤管理系统",
    "category": "Web 应用",
    "description": "基于 Spring Boot、Spring Security、Thymeleaf 与 JPA 的三角色考勤管理系统，支持 H2 / PostgreSQL 和 Flyway 迁移。\n主要功能：课程与选课管理、课次名单快照、动态二维码签到、请假审批、关闭课次缺勤结算、补签审计、统一统计与导入预览。\n2026-10-27 完整自动化测试 133 项通过；已完成浏览器扫码登录回跳、重复签到时间一致、请假审批、关闭课次及报表核对，并验证合成数据备份恢复。\n截图使用合成学生数据；移动页面为 375px 浏览器视口，并非实体手机实测。目前为本地验收版本，现场网络、实体手机和生产部署仍待验收。",
    "status": "本地验收通过",
    "url": "documents/attendance-system.html",
    "materialLabel": "查看项目介绍与验收结果",
    "cover": "assets/attendance-report.png",
    "date": "2026-10-27",
    "gallery": [
      {
        "src": "assets/attendance-report.png",
        "caption": "考勤统计与关闭结算（合成数据，实际浏览器截图）",
        "kind": "screenshot"
      },
      {
        "src": "assets/attendance-mobile.png",
        "caption": "重复签到保留首次时间（375px浏览器视口，非真机）",
        "kind": "screenshot"
      }
    ]
  },
  {
    "id": "catalog-shuyun",
    "title": "蜀韵灵境——川西高原的三重文化秘境",
    "category": "Web 应用",
    "description": "藏、羌、彝非遗文化展示网站，包含文化问答、数字史诗、建筑展示、纹样生成和社区等模块。\n相关获奖：2026 年（第 19 届）中国大学生计算机设计大赛二等奖，作品编号 2026091801。\n材料：网站源码、答辩 PPT；证书与奖牌归入竞赛获奖。",
    "status": "已有作品",
    "url": "",
    "cover": "assets/catalog-shuyun-cover.jpg",
    "date": "2026-10-17",
    "gallery": [
      {
        "src": "assets/catalog-shuyun-0.jpg",
        "caption": "羌族文化首页",
        "kind": "screenshot"
      },
      {
        "src": "assets/catalog-shuyun-1.jpg",
        "caption": "彝族文化首页",
        "kind": "screenshot"
      },
      {
        "src": "assets/catalog-shuyun-2.jpg",
        "caption": "藏族文化首页",
        "kind": "screenshot"
      }
    ]
  },
  {
    "title": "灵视安护 · 适老健康监测小程序",
    "category": "微信小程序",
    "description": "大创适老项目，家属端提供监测信息、趋势、告警和设备管理，老人端提供健康信息与求助入口。\n微信小程序 + Flask + SQLite，配合 K230 与传感设备联调。现有资料标明部分设备指标、微信推送与真机链路仍待验收。",
    "url": "",
    "status": "进行中",
    "id": "catalog-elderly",
    "cover": "assets/catalog-elderly-cover.png",
    "date": "2026/10/17",
    "gallery": [
      {
        "caption": "角色选择（源码预览）",
        "kind": "source",
        "src": "assets/catalog-elderly-0.jpg"
      },
      {
        "caption": "家属首页（源码预览）",
        "kind": "source",
        "src": "assets/catalog-elderly-1.jpg"
      },
      {
        "caption": "设备中心（源码预览）",
        "kind": "source",
        "src": "assets/catalog-elderly-2.jpg"
      }
    ]
  },
  {
    "title": "student_travel · 大学生结伴旅行",
    "category": "微信小程序",
    "description": "基于 Voyager AI 改造，保留上游 MIT 与第三方许可。包含按天行程、地点搜索、预算、AA 记账、旅行海报、备份及多人协作。\n后端为 Spring Boot + H2；本地记录与协作副本独立。真实微信登录、双手机验收及公网部署仍待完成。\n代码仓库：https://github.com/Z200589/student_travel",
    "url": "https://github.com/Z200589/student_travel",
    "status": "进行中",
    "id": "catalog-travel",
    "cover": "assets/catalog-travel-cover.png",
    "date": "2026/10/17",
    "gallery": [
      {
        "caption": "旅行首页（源码预览）",
        "kind": "source",
        "src": "assets/catalog-travel-0.jpg"
      },
      {
        "caption": "旅行列表（源码预览）",
        "kind": "source",
        "src": "assets/catalog-travel-1.jpg"
      },
      {
        "caption": "个人中心（源码预览）",
        "kind": "source",
        "src": "assets/catalog-travel-2.jpg"
      }
    ]
  },
  {
    "id": "catalog-zhixue",
    "title": "智学派 · 女娲教育智能体",
    "category": "AI 智能体",
    "description": "面向学习者的智能学习助理，基于女娲平台构建，围绕对话答疑、知识库检索、学习规划与学情资源组织功能。\n实际展示：2026-10-21 在女娲平台项目预览中拍摄了首页、能力中心，以及“帮我梳理二次函数重点”的真实问答与知识引用；HR 无需登录即可在此查看图片。\n前端采用 React、TypeScript、Vite 与 Tailwind CSS，包含会话列表、知识来源展示和能力中心；本地 Python 内核代码包含 ReAct 任务拆解、分层记忆、教学技能调度与多工具调用模块。\n项目仍处于开发与联调阶段。本次验证了一个学习问答示例及界面展示，不代表所有能力、跨会话同步或本地内核集成均已验收；此前曾出现平台接口授权问题。\n前四张为真实平台预览截图，仅裁取作品区域；最后一张为结构示意图。个人分工与量化效果尚未补充。\n平台链接为项目开发入口，访问需要女娲账号及对应项目权限。",
    "status": "开发与联调中",
    "url": "https://agent.nuwax.com/space/53261087/app-dev/7653583926398976",
    "materialLabel": "女娲平台项目（需登录及权限）",
    "cover": "assets/zhixue-home.png",
    "gallery": [
      {
        "src": "assets/zhixue-home.png",
        "caption": "智学派首页与学习入口（2026-10-21 平台预览实拍）",
        "kind": "screenshot"
      },
      {
        "src": "assets/zhixue-capabilities.png",
        "caption": "能力中心：答疑、检索与学习规划（2026-10-21 平台预览实拍）",
        "kind": "screenshot"
      },
      {
        "src": "assets/zhixue-answer.png",
        "caption": "实际问答：帮我梳理二次函数重点（2026-10-21 平台预览实拍）",
        "kind": "screenshot"
      },
      {
        "src": "assets/zhixue-sources.png",
        "caption": "实际回答中的知识点与常见问答引用（2026-10-21 平台预览实拍）",
        "kind": "screenshot"
      },
      {
        "src": "assets/zhixue-structure.svg",
        "caption": "功能结构示意（依据代码整理，非运行截图）",
        "kind": "document"
      }
    ],
    "date": "2026-10-21"
  },
  {
    "id": "catalog-design-award",
    "title": "2026 计算机设计大赛 · 二等奖",
    "category": "竞赛获奖",
    "description": "2026 年（第 19 届）中国大学生计算机设计大赛二等奖。\n获奖作品：《蜀韵灵境——川西高原的三重文化秘境》，作品编号 2026091801。\n证书与奖牌属于同一项荣誉，合并归档，计为 1 项。",
    "status": "证书已核对",
    "url": "",
    "cover": "assets/catalog-design-award-cover.jpg",
    "date": "2026-10-17",
    "gallery": [
      {
        "src": "assets/catalog-design-award-0.jpg",
        "caption": "获奖证书",
        "kind": "document"
      },
      {
        "src": "assets/catalog-design-award-1.jpg",
        "caption": "二等奖奖牌",
        "kind": "document"
      }
    ]
  },
  {
    "id": "catalog-math-award",
    "title": "2025 数学建模竞赛 · 四川省二等奖",
    "category": "数学建模",
    "description": "2025 年全国大学生数学建模竞赛四川省二等奖。\n论文材料：《烟幕干扰弹投放策略的时空协同优化模型》。\n已将论文 PDF 与获奖证书集中归档，点击查看项目可分别打开。\n论文与获奖证书的具体对应关系仍待确认。",
    "status": "证书已核对",
    "url": "documents/modeling-paper.pdf",
    "cover": "assets/catalog-math-award-cover.jpg",
    "date": "2026-10-17",
    "gallery": [
      {
        "src": "assets/catalog-math-award-0.jpg",
        "caption": "四川省二等奖证书",
        "kind": "document"
      },
      {
        "src": "assets/catalog-math-award-1.jpg",
        "caption": "论文首页",
        "kind": "document"
      },
      {
        "src": "assets/catalog-math-award-2.jpg",
        "caption": "论文第二页",
        "kind": "document"
      }
    ]
  },
  {
    "title": "2024—2025 学年第一学期丙等奖学金",
    "category": "奖学金",
    "description": "西南财经大学学期奖学金，获奖人：张桐尧。",
    "url": "",
    "status": "已完成",
    "id": "catalog-scholarship-2024",
    "cover": "assets/catalog-scholarship-2024-cover.jpg",
    "date": "2026/10/17",
    "gallery": [
      {
        "src": "assets/catalog-scholarship-2024-0.jpg",
        "caption": "2024—2025 学年第一学期奖学金证书",
        "kind": "document"
      }
    ]
  },
  {
    "id": "catalog-scholarship-2025",
    "title": "2025—2026 学年第一学期乙等奖学金",
    "category": "奖学金",
    "description": "西南财经大学 2025—2026 学年第一学期乙等奖学金，获奖人：张桐尧。\n证书署期：2026 年 4 月 28 日。",
    "status": "证书已核对",
    "url": "",
    "cover": "assets/catalog-scholarship-2025-cover.jpg",
    "date": "2026-10-17",
    "gallery": [
      {
        "src": "assets/catalog-scholarship-2025-0.jpg",
        "caption": "2025—2026 学年第一学期奖学金证书",
        "kind": "document"
      }
    ]
  }
];

