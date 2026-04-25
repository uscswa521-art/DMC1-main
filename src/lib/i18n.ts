export type LangCode = 'ar' | 'zh-CN' | 'zh-TW' | 'nl' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'es';

export interface LangMeta {
  code: LangCode;
  label: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LangMeta[] = [
  { code: 'en',    label: 'English',    dir: 'ltr' },
  { code: 'zh-TW', label: '繁體中文',   dir: 'ltr' },
  { code: 'zh-CN', label: '简体中文',   dir: 'ltr' },
  { code: 'ar',    label: 'العربية',    dir: 'rtl' },
  { code: 'de',    label: 'Deutsch',    dir: 'ltr' },
  { code: 'es',    label: 'Español',    dir: 'ltr' },
  { code: 'fr',    label: 'Français',   dir: 'ltr' },
  { code: 'it',    label: 'Italiano',   dir: 'ltr' },
  { code: 'nl',    label: 'Nederlands', dir: 'ltr' },
  { code: 'pt',    label: 'Português',  dir: 'ltr' },
  { code: 'ru',    label: 'Русский',    dir: 'ltr' },
];

export interface Translations {
  nav: {
    about: string;
    advantages: string;
    indicators: string;
    training: string;
    bitunix: string;
    testimonials: string;
    faq: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaRegister: string;
  };
  about: {
    heading: string;
    log001: string;
    log002: string;
    log003: string;
    log004: string;
    warningTitle: string;
    warningDesc: string;
  };
  advantages: {
    heading: string;
    subheading: string;
    items: { title: string; desc: string }[];
  };
  indicators: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    coreModules: string[];
    riskManagement: string[];
    requirementLabel: string;
    requirementText: string;
  };
  training: {
    heading: string;
    subheading: string;
    videos: { title: string; category: string }[];
  };
  bitunix: {
    heading: string;
    features: { title: string; desc: string }[];
  };
  testimonials: {
    badge: string;
    heading: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    uidPlaceholder: string;
    submitButton: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<LangCode, Translations> = {
  'zh-TW': {
    nav: {
      about: '關於大衛',
      advantages: 'DMC優勢',
      indicators: '獨家指標',
      training: '實戰教學',
      bitunix: 'Bitunix專區',
      testimonials: '群友見證',
      faq: 'FAQ',
    },
    hero: {
      headline: '機構交易思維',
      subheadline: '透視成交量：精準定位聰明錢\n量化合約實戰：主力追蹤系統',
      body: '沒接觸過交易也能學會加密貨幣合約交易！\n1秒教你如何用「DMC策略」',
      ctaPrimary: '加入社群 | 看每日盤面策略+免費教學',
      ctaSecondary: '點我私訊 | 直送交易策略+入門影片',
      ctaRegister: '點我註冊 Bitunix｜進 DMC 社群領完整實戰教學',
    },
    about: {
      heading: '我是誰？認識大衛',
      log001: '曾是普通上班族，深感時間被買斷的焦慮',
      log002: '走過 3 年交易彎路，曾因輕信假指標損失慘重',
      log003: '整合多方實戰技術，研發出這套專屬 DMC 核心策略',
      log004: '目前致力於幫助新手縮短摸索期，建立正確主力思維',
      warningTitle: 'WARNING: 為什麼選擇 DMC 而非 SMC / SNR?',
      warningDesc: '傳統理論在教科書中完美，但在實戰盤面中往往因為「延遲」與「假突破」讓交易者反覆止損。DMC 專注於即時流動性，讓你跟隨主力腳步，而非成為主力的流動性。',
    },
    advantages: {
      heading: 'DMC 的優勢：直接捕捉主力真實意圖',
      subheading: '我們拒絕複雜且無效的疊加指標，只教你真正能在多變盤面中存活並獲利的「底層邏輯」。',
      items: [
        { title: '裸K精準判讀', desc: '徹底排除延遲指標，回歸價格本質，第一時間捕捉進場訊號。' },
        { title: '價格行為洞察', desc: '看懂市場推動節奏，分辨盤整與突破，避免在震盪區間反覆橫跳。' },
        { title: '成交量分布分析', desc: '獨家量價合一分析，精確辨別吸籌與派發區間，鎖定主力防守位。' },
        { title: '適用全行情', desc: '不論是大趨勢還是極短線震盪，DMC 系統皆能提供清晰的博弈視角。' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: '只送加入社群的交易者！現在開通',
      headingPart2: '《終極指標禮包》',
      coreModules: [
        '極短線高頻交易策略',
        'ICT 時間窗口提醒',
        'FVG 流動性缺口自動標註',
        '主力吸籌/派發區間追蹤',
      ],
      riskManagement: [
        'ATR 動態止損建議',
        '風險收益比 (RR) 自動計算',
        '多週期趨勢共振過濾',
        '市場結構轉變 (MSB) 警報',
      ],
      requirementLabel: 'Requirement:',
      requirementText: '指標目前僅限 DMC 官方社群成員使用。註冊 Bitunix 並填寫 UID 即可解鎖權限。',
    },
    training: {
      heading: '免費學會這些實戰技巧',
      subheading: '從零基礎到實戰應用，大衛親自錄製的課程矩陣。在加入社群前，先建立你的第一道防護網。',
      videos: [
        { title: '機構主力行為解析', category: '核心概念' },
        { title: '日內交易實戰思維', category: '思維認知' },
        { title: '加密貨幣實戰精華', category: '實戰技術' },
        { title: '【實況精華】', category: '直播精華' },
        { title: '【DMC實戰必備技巧】', category: 'DMC策略' },
      ],
    },
    bitunix: {
      heading: '換個平台，第一筆交易你就能體會「什麼叫公平」',
      features: [
        { title: '滑點最小，不亂掃單', desc: '插針行情精準控制，保護你的停損位不被惡意觸發。' },
        { title: '合法監管認證', desc: '美國 MSB 牌照認證，資金安全有保障，全球合規運營。' },
        { title: '每月送真U', desc: '打單即送真U福利，槓桿收益最大化，社群專屬獎勵。' },
        { title: '多視窗功能天花板', desc: '同時顯示 16 張圖表數據，掌握全市場脈動，絕不漏單。' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: '群友見證 (Community Profit Logs)',
    },
    faq: {
      heading: '常見問題 FAQ',
      items: [
        { q: '加入 DMC 社群會收費嗎？', a: '目前社群對外開放完全免費！你只需要完成 Bitunix 註冊並填寫 UID，即可領取指標與基礎教學影片。' },
        { q: '如何正式加入群組？', a: '點擊本頁面的「加入社群」按鈕，系統會引導你至專屬 Telegram 或 Line 群組，由管理員協助你開通權限。' },
        { q: '社群可以學到什麼？', a: '你將學會主力如何利用流動性進行吸籌與派發、如何判斷盤整區間、以及正確的風險管理與交易心態。' },
        { q: '有問題去哪發問？', a: '社群內有 24 小時活躍的群友與助教。大衛本人也會定期在盤中進行解析，解決大家對行情的所有疑惑。' },
        { q: '系統適用哪些市場？', a: 'DMC 核心邏輯適用於所有具備流動性的市場，包括加密貨幣、美股、黃金以及外匯市場。' },
        { q: '何時有線下聚會？', a: '我們每季都會舉辦實體線下聚會，讓大家除了在線上交流，更能面對面討論交易心得與生活。' },
      ],
    },
    cta: {
      heading: '領取大衛交易訊號',
      namePlaceholder: '你的暱稱',
      emailPlaceholder: '你的電子郵件',
      uidPlaceholder: '你的 Bitunix UID',
      submitButton: 'EXECUTE: 點我註冊 Bitunix 領取 DMC 指標',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'zh-CN': {
    nav: {
      about: '关于大卫',
      advantages: 'DMC优势',
      indicators: '独家指标',
      training: '实战教学',
      bitunix: 'Bitunix专区',
      testimonials: '群友见证',
      faq: 'FAQ',
    },
    hero: {
      headline: '交易是什么?',
      subheadline: '我们不是教你画线\n而是让你真正看懂主力思维 ，跟着聪明钱走。',
      body: '没接触过交易也能学会加密货币合约交易！\n1秒教你如何用「DMC策略」',
      ctaPrimary: '加入社群 | 看每日盘面策略+免费教学',
      ctaSecondary: '点我私信 | 直送交易策略+入门视频',
      ctaRegister: '点我注册 Bitunix｜进 DMC 社群领完整实战教学',
    },
    about: {
      heading: '我是谁？认识大卫',
      log001: '曾是普通上班族，深感时间被买断的焦虑',
      log002: '走过 3 年交易弯路，曾因轻信假指标损失惨重',
      log003: '整合多方实战技术，研发出这套专属 DMC 核心策略',
      log004: '目前致力于帮助新手缩短摸索期，建立正确主力思维',
      warningTitle: 'WARNING: 为什么选择 DMC 而非 SMC / SNR?',
      warningDesc: '传统理论在教科书中完美，但在实战盘面中往往因为「延迟」与「假突破」让交易者反复止损。DMC 专注于即时流动性，让你跟随主力脚步，而非成为主力的流动性。',
    },
    advantages: {
      heading: 'DMC 的优势：直接捕捉主力真实意图',
      subheading: '我们拒绝复杂且无效的叠加指标，只教你真正能在多变盘面中存活并获利的「底层逻辑」。',
      items: [
        { title: '裸K精准判读', desc: '彻底排除延迟指标，回归价格本质，第一时间捕捉进场讯号。' },
        { title: '价格行为洞察', desc: '看懂市场推动节奏，分辨盘整与突破，避免在震荡区间反复横跳。' },
        { title: '成交量分布分析', desc: '独家量价合一分析，精确辨别吸筹与派发区间，锁定主力防守位。' },
        { title: '适用全行情', desc: '不论是大趋势还是极短线震荡，DMC 系统皆能提供清晰的博弈视角。' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: '只送加入社群的交易者！现在开通',
      headingPart2: '《终极指标礼包》',
      coreModules: [
        '极短线高频交易策略',
        'ICT 时间窗口提醒',
        'FVG 流动性缺口自动标注',
        '主力吸筹/派发区间追踪',
      ],
      riskManagement: [
        'ATR 动态止损建议',
        '风险收益比 (RR) 自动计算',
        '多周期趋势共振过滤',
        '市场结构转变 (MSB) 警报',
      ],
      requirementLabel: 'Requirement:',
      requirementText: '指标目前仅限 DMC 官方社群成员使用。注册 Bitunix 并填写 UID 即可解锁权限。',
    },
    training: {
      heading: '免费学会这些实战技巧',
      subheading: '从零基础到实战应用，大卫亲自录制的课程矩阵。在加入社群前，先建立你的第一道防护网。',
      videos: [
        { title: '机构主力行为解析', category: '核心概念' },
        { title: '日内交易实战思维', category: '思维认知' },
        { title: '加密货币实战精华', category: '实战技术' },
        { title: '【实况精华】', category: '直播精华' },
        { title: '【DMC实战必备技巧】', category: 'DMC策略' },
      ],
    },
    bitunix: {
      heading: '换个平台，第一笔交易你就能体会「什么叫公平」',
      features: [
        { title: '滑点最小，不乱扫单', desc: '插针行情精准控制，保护你的停损位不被恶意触发。' },
        { title: '合法监管认证', desc: '美国 MSB 牌照认证，资金安全有保障，全球合规运营。' },
        { title: '每月送真U', desc: '打单即送真U福利，杠杆收益最大化，社群专属奖励。' },
        { title: '多视窗功能天花板', desc: '同时显示 16 张图表数据，掌握全市场脉动，绝不漏单。' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: '群友见证 (Community Profit Logs)',
    },
    faq: {
      heading: '常见问题 FAQ',
      items: [
        { q: '加入 DMC 社群会收费吗？', a: '目前社群对外开放完全免费！你只需要完成 Bitunix 注册并填写 UID，即可领取指标与基础教学视频。' },
        { q: '如何正式加入群组？', a: '点击本页面的「加入社群」按钮，系统会引导你至专属 Telegram 或 Line 群组，由管理员协助你开通权限。' },
        { q: '社群可以学到什么？', a: '你将学会主力如何利用流动性进行吸筹与派发、如何判断盘整区间、以及正确的风险管理与交易心态。' },
        { q: '有问题去哪发问？', a: '社群内有 24 小时活跃的群友与助教。大卫本人也会定期在盘中进行解析，解决大家对行情的所有疑惑。' },
        { q: '系统适用哪些市场？', a: 'DMC 核心逻辑适用于所有具备流动性的市场，包括加密货币、美股、黄金以及外汇市场。' },
        { q: '何时有线下聚会？', a: '我们每季都会举办实体线下聚会，让大家除了在线上交流，更能面对面讨论交易心得与生活。' },
      ],
    },
    cta: {
      heading: '领取大卫交易信号',
      namePlaceholder: '你的昵称',
      emailPlaceholder: '你的电子邮件',
      uidPlaceholder: '你的 Bitunix UID',
      submitButton: 'EXECUTE: 点我注册 Bitunix 领取 DMC 指标',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'ar': {
    nav: {
      about: 'عن ديفيد',
      advantages: 'مزايا DMC',
      indicators: 'مؤشرات حصرية',
      training: 'التدريب العملي',
      bitunix: 'منطقة Bitunix',
      testimonials: 'شهادات الأعضاء',
      faq: 'FAQ',
    },
    hero: {
      headline: 'ما هو التداول؟',
      subheadline: 'نحن لا نعلمك رسم الخطوط، بل نعلمك فهم الأموال الذكية حقًا واتباعها.',
      body: 'يمكن لأي شخص تعلم تداول عقود العملات المشفرة — حتى بدون خبرة!\nنعلمك كيفية استخدام «استراتيجية DMC» في ثانية واحدة',
      ctaPrimary: 'انضم للمجتمع | استراتيجيات يومية + دروس مجانية',
      ctaSecondary: 'راسلنا | استراتيجيات التداول + فيديوهات للمبتدئين',
      ctaRegister: 'سجّل في Bitunix｜انضم لمجتمع DMC واحصل على الدليل الكامل',
    },
    about: {
      heading: 'من أنا؟ تعرف على ديفيد',
      log001: 'كنت موظفًا عاديًا، أشعر بقلق عميق من بيع وقتي',
      log002: 'قضيت 3 سنوات في مسارات خاطئة، وخسرت بسبب مؤشرات زائفة',
      log003: 'دمجت تقنيات متعددة لتطوير استراتيجية DMC الحصرية',
      log004: 'مكرس الآن لمساعدة المبتدئين على تقليص منحنى التعلم وبناء عقلية صحيحة',
      warningTitle: 'تحذير: لماذا تختار DMC بدلاً من SMC / SNR؟',
      warningDesc: 'النظريات التقليدية مثالية في الكتب، لكنها تسبب خسائر متكررة في الأسواق الحية بسبب "التأخر" و"الاختراقات الزائفة". يركز DMC على السيولة الفورية.',
    },
    advantages: {
      heading: 'مزايا DMC: التقاط النوايا الحقيقية للأموال الذكية مباشرة',
      subheading: 'نرفض المؤشرات المعقدة وغير الفعالة. نعلمك فقط المنطق الأساسي للبقاء والربح في الأسواق المتغيرة.',
      items: [
        { title: 'قراءة الأسعار الصريحة', desc: 'القضاء التام على المؤشرات المتأخرة والعودة إلى جوهر السعر للتقاط إشارات الدخول.' },
        { title: 'فهم سلوك السعر', desc: 'فهم زخم السوق، التمييز بين التوحيد والاختراق، تجنب الضربات المتكررة في مناطق التذبذب.' },
        { title: 'تحليل توزيع الحجم', desc: 'تحليل حجم السعر الحصري لتحديد مناطق التراكم والتوزيع بدقة وتحديد مستويات دفاع الأموال الذكية.' },
        { title: 'ينطبق على جميع الأسواق', desc: 'سواء كانت اتجاهات كبيرة أو تذبذبات قصيرة المدى، يوفر نظام DMC منظورًا واضحًا لنظرية الألعاب.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'حصريًا لأعضاء المجتمع! افتح الآن',
      headingPart2: 'حزمة المؤشرات الكاملة',
      coreModules: [
        'استراتيجية التداول عالي التردد',
        'تنبيهات نافذة الوقت ICT',
        'تحديد فجوة السيولة FVG تلقائيًا',
        'تتبع تراكم/توزيع الأموال الذكية',
      ],
      riskManagement: [
        'اقتراح وقف الخسارة الديناميكي ATR',
        'الحساب التلقائي لنسبة المخاطرة/المكافأة',
        'تصفية رنين الاتجاه متعدد الأطر',
        'تنبيه كسر هيكل السوق (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'المؤشرات متاحة حاليًا فقط لأعضاء مجتمع DMC الرسمي. سجل في Bitunix وأدخل معرفك لفتح الوصول.',
    },
    training: {
      heading: 'تعلم هذه المهارات العملية مجانًا',
      subheading: 'من الصفر إلى التطبيق العملي — مصفوفة الدورات المسجلة شخصيًا من ديفيد. ابن خط دفاعك الأول قبل الانضمام.',
      videos: [
        { title: 'إتقان دفتر الطلبات', category: 'الأساسيات' },
        { title: 'أسرار التداول قصير المدى', category: 'استراتيجية التداول' },
        { title: 'وقت ICT', category: 'تقنيات متقدمة' },
        { title: 'طريقة ساكاتا', category: 'طرق كلاسيكية' },
        { title: 'سحابة إيشيموكو', category: 'تطبيق المؤشر' },
        { title: 'فهم منطق DMC', category: 'العقلية' },
      ],
    },
    bitunix: {
      heading: 'غيّر منصتك — اشعر بما تعنيه "عدالة التداول" من أول صفقة',
      features: [
        { title: 'أدنى انزلاق، بدون صيد', desc: 'التحكم الدقيق في الشمعات يحمي وقف الخسارة من التفعيل الخبيث.' },
        { title: 'معتمد ومرخص قانونيًا', desc: 'مرخص MSB الأمريكي، أمان رأس المال مضمون، عمليات متوافقة عالميًا.' },
        { title: 'مكافآت USDT شهرية حقيقية', desc: 'تداول واكسب USDT حقيقية، تعظيم العوائد الرافعة، مكافآت مجتمع حصرية.' },
        { title: 'سقف ميزة النوافذ المتعددة', desc: 'عرض 16 مخططًا في وقت واحد، إتقان ديناميكيات السوق الكاملة، لا تفوت أي صفقة.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'سجلات أرباح المجتمع',
    },
    faq: {
      heading: 'الأسئلة الشائعة',
      items: [
        { q: 'هل هناك رسوم للانضمام لمجتمع DMC؟', a: 'المجتمع مفتوح تمامًا مجانًا! تحتاج فقط إلى إكمال تسجيل Bitunix وتقديم معرفك للحصول على المؤشرات ومقاطع الفيديو.' },
        { q: 'كيف أنضم رسميًا للمجموعة؟', a: 'انقر على زر \'انضم للمجتمع\'. سيرشدك النظام إلى مجموعة Telegram أو Line مخصصة حيث سيساعدك المسؤول في تفعيل وصولك.' },
        { q: 'ماذا أتعلم في المجتمع؟', a: 'ستتعلم كيف تستخدم الأموال الذكية السيولة للتراكم والتوزيع، وكيفية تحديد مناطق التوحيد، وإدارة المخاطر الصحيحة.' },
        { q: 'أين أطرح الأسئلة؟', a: 'المجتمع يضم أعضاء ومدرسين نشطين على مدار الساعة. ديفيد نفسه يقدم بانتظام تحليلات مباشرة للسوق، مما يحل جميع الشكوك.' },
        { q: 'على أي أسواق ينطبق النظام؟', a: 'المنطق الأساسي لـ DMC ينطبق على جميع الأسواق السائلة، بما في ذلك العملات المشفرة والأسهم الأمريكية والذهب والفوركس.' },
        { q: 'متى تُعقد اللقاءات غير المتصلة؟', a: 'نستضيف لقاءات مادية كل ربع سنة، مما يتيح للأعضاء مناقشة رؤى التداول والحياة شخصيًا.' },
      ],
    },
    cta: {
      heading: 'احصل على إشارات تداول ديفيد',
      namePlaceholder: 'لقبك',
      emailPlaceholder: 'بريدك الإلكتروني',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'تنفيذ: سجل في Bitunix واحصل على مؤشرات DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'nl': {
    nav: {
      about: 'Over David',
      advantages: 'DMC Voordelen',
      indicators: 'Exclusieve Indicatoren',
      training: 'Praktijktraining',
      bitunix: 'Bitunix Zone',
      testimonials: 'Getuigenissen',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Wat is Trading?',
      subheadline: 'We leren je geen lijnen tekenen — we leren je slim geld echt begrijpen en volgen.',
      body: 'Iedereen kan crypto futures trading leren — ook zonder ervaring!\nLeer de "DMC Strategie" in slechts 1 seconde',
      ctaPrimary: 'Lid worden | Dagelijkse Strategieën + Gratis Lessen',
      ctaSecondary: 'Stuur Bericht | Handelsstrategieën + Introductievideo\'s',
      ctaRegister: 'Registreer op Bitunix｜Word lid van de DMC Community',
    },
    about: {
      heading: 'Wie Ben Ik? Leer David Kennen',
      log001: 'Was een gewone kantoorbediende, diep bezorgd over mijn weggegeven tijd',
      log002: '3 jaar omwegen in de handel gemaakt, zware verliezen door nep-indicatoren',
      log003: 'Meerdere beproefde technieken geïntegreerd om de exclusieve DMC-kernstrategie te ontwikkelen',
      log004: 'Nu toegewijd aan het helpen van beginners om de leercurve te verkorten',
      warningTitle: 'WAARSCHUWING: Waarom DMC Kiezen Boven SMC / SNR?',
      warningDesc: 'Traditionele theorieën zien er perfect uit in boeken, maar veroorzaken herhaalde stop-outs door "vertraging" en "valse uitbraken." DMC richt zich op realtime liquiditeit.',
    },
    advantages: {
      heading: 'DMC Voordelen: Directe Capture van Smart Money\'s Ware Intenties',
      subheading: 'Wij verwerpen complexe en ineffectieve indicatoren. Wij leren u alleen de "fundamentele logica" om te overleven en winst te maken in veranderende markten.',
      items: [
        { title: 'Naakte Prijsactie Lezen', desc: 'Elimineer volledig laggardige indicatoren, keer terug naar de essentie van prijs en leg entry-signalen als eerste vast.' },
        { title: 'Prijsgedrag Inzicht', desc: 'Begrijp marktmomentum, onderscheid consolidatie van uitbraken en vermijd herhaalde zweepslagen in zijwaartse zones.' },
        { title: 'Volume Distributie Analyse', desc: 'Exclusieve volume-prijs analyse om accumulatie- en distributiezone\'s nauwkeurig te identificeren en smart money defensieniveaus vast te leggen.' },
        { title: 'Van Toepassing op Alle Markten', desc: 'Of het nu grote trends zijn of extreme kortetermijnschommelingen, het DMC-systeem biedt een duidelijk speltheoretisch perspectief.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Exclusief voor Communityleden! Ontgrendel het',
      headingPart2: 'Ultieme Indicatorpakket',
      coreModules: [
        'Ultra Kortetermijn HFT Strategie',
        'ICT Tijdvenster Meldingen',
        'FVG Liquiditeitskloof Auto-Markering',
        'Smart Money Accumulatie/Distributie Tracking',
      ],
      riskManagement: [
        'ATR Dynamische Stop-Loss Suggestie',
        'Risico-Rendement (RR) Auto Berekening',
        'Multi-Tijdframe Trend Resonantie Filter',
        'Marktstructuurbreuk (MSB) Alarm',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Indicatoren zijn momenteel beperkt tot officiële DMC-communityleden. Registreer bij Bitunix en dien uw UID in om toegang te ontgrendelen.',
    },
    training: {
      heading: 'Leer Deze Praktische Vaardigheden Gratis',
      subheading: 'Van nul tot live trading — David\'s persoonlijk opgenomen cursusmatrix. Bouw uw eerste verdedigingslinie op voor u de community join.',
      videos: [
        { title: 'Orderboek Mastery', category: 'Kernbasis' },
        { title: 'Kortetermijn Handelsgeheimen', category: 'Handelsstrategie' },
        { title: 'ICT Tijd', category: 'Geavanceerde Technieken' },
        { title: 'Sakata Methode', category: 'Klassieke Methoden' },
        { title: 'Ichimoku Wolk', category: 'Indicator Toepassing' },
        { title: 'DMC Logica Begrijpen', category: 'Mindset' },
      ],
    },
    bitunix: {
      heading: 'Verander van Platform — Voel Wat "Eerlijk Handelen" Betekent bij Uw Eerste Trade',
      features: [
        { title: 'Minimale Slippage, Geen Stop Hunting', desc: 'Precisiecontrole beschermt uw stop-loss tegen kwaadaardige activering.' },
        { title: 'Wettelijk Gereguleerd & Gecertificeerd', desc: 'US MSB gelicenseerd, kapitaalveiligheid gegarandeerd, wereldwijd conform.' },
        { title: 'Maandelijkse Echte USDT Beloningen', desc: 'Handel en verdien echte USDT, maximaliseer gehefboomde rendementen, exclusieve community-beloningen.' },
        { title: 'Multi-Window Functieplafond', desc: 'Toon 16 grafieken tegelijkertijd, beheers alle marktbewegingen, mis nooit een trade.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Community Winst Logs',
    },
    faq: {
      heading: 'Veelgestelde Vragen',
      items: [
        { q: 'Is er een vergoeding om de DMC-community te joinen?', a: 'De community is momenteel volledig gratis! Je hoeft alleen Bitunix te registreren en je UID in te dienen om indicatoren en basis tutorialvideo\'s te ontvangen.' },
        { q: 'Hoe word ik officieel lid van de groep?', a: 'Klik op de knop \'Community Joining\'. U wordt geleid naar een speciale Telegram- of Line-groep waar een admin uw toegang activeert.' },
        { q: 'Wat kan ik leren in de community?', a: 'U leert hoe smart money liquiditeit gebruikt voor accumulatie en distributie, hoe u consolidatiezones kunt identificeren en de juiste risicobeheer en handelsmindset.' },
        { q: 'Waar kan ik vragen stellen?', a: 'De community heeft actieve leden en tutors beschikbaar 24 uur per dag. David zelf geeft regelmatig live marktanalyse, waarbij alle twijfels worden opgelost.' },
        { q: 'Op welke markten is het systeem van toepassing?', a: 'De DMC-kernlogica is van toepassing op alle liquide markten, inclusief cryptocurrencies, Amerikaanse aandelen, goud en forexmarkten.' },
        { q: 'Wanneer worden offline bijeenkomsten gehouden?', a: 'We organiseren elk kwartaal fysieke offline bijeenkomsten, zodat leden persoonlijk handelsideeën en het leven kunnen bespreken.' },
      ],
    },
    cta: {
      heading: 'Claim David\'s Handelssignalen',
      namePlaceholder: 'Uw Bijnaam',
      emailPlaceholder: 'Uw E-mailadres',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'UITVOEREN: Registreer op Bitunix & Krijg DMC Indicatoren',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'en': {
    nav: {
      about: 'About David',
      advantages: 'DMC Advantages',
      indicators: 'Exclusive Indicators',
      training: 'Live Training',
      bitunix: 'Bitunix Zone',
      testimonials: 'Testimonials',
      faq: 'FAQ',
    },
    hero: {
      headline: 'What is Trading?',
      subheadline: 'We don\'t teach you to draw lines — we teach you to truly understand smart money and follow it.',
      body: 'Anyone can learn crypto futures trading — even with zero experience!\nLearn the "DMC Strategy" in just 1 second',
      ctaPrimary: 'Join Community | Daily Strategies + Free Lessons',
      ctaSecondary: 'Message Us | Trading Strategies + Intro Videos',
      ctaRegister: 'Register on Bitunix｜Join DMC Community & Get Full Trading Guide',
    },
    about: {
      heading: 'Who Am I? Meet David',
      log001: 'Once a regular office worker, deeply anxious about having my time sold out',
      log002: 'Took 3 years of trading detours, suffered heavy losses from fake indicators',
      log003: 'Integrated multiple battle-tested techniques to develop the exclusive DMC core strategy',
      log004: 'Now dedicated to helping beginners shorten the learning curve and build the right smart money mindset',
      warningTitle: 'WARNING: Why Choose DMC Over SMC / SNR?',
      warningDesc: 'Traditional theories look perfect in textbooks, but in live markets they cause repeated stop-outs due to "lag" and "fake breakouts." DMC focuses on real-time liquidity, letting you follow smart money rather than becoming their liquidity.',
    },
    advantages: {
      heading: 'DMC Advantages: Directly Capture Smart Money\'s True Intentions',
      subheading: 'We reject complex and ineffective overlay indicators. We only teach you the "foundational logic" that truly allows you to survive and profit in changing markets.',
      items: [
        { title: 'Naked Price Action Reading', desc: 'Completely eliminate lagging indicators, return to price essence, and capture entry signals at the first moment.' },
        { title: 'Price Behavior Insight', desc: 'Understand market momentum, distinguish consolidation from breakouts, avoid repeated whipsaws in ranging zones.' },
        { title: 'Volume Distribution Analysis', desc: 'Exclusive volume-price analysis to precisely identify accumulation and distribution zones and lock in smart money defense levels.' },
        { title: 'Applicable to All Markets', desc: 'Whether in major trends or extreme short-term swings, the DMC system provides a clear game theory perspective.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Exclusive for Community Members! Unlock the',
      headingPart2: 'Ultimate Indicator Bundle',
      coreModules: [
        'Ultra Short-term HFT Strategy',
        'ICT Time Window Alerts',
        'FVG Liquidity Gap Auto-Marking',
        'Smart Money Accumulation/Distribution Tracking',
      ],
      riskManagement: [
        'ATR Dynamic Stop-Loss Suggestion',
        'Risk-Reward (RR) Auto Calculation',
        'Multi-Timeframe Trend Resonance Filter',
        'Market Structure Break (MSB) Alert',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Indicators are currently restricted to DMC official community members. Register on Bitunix and submit your UID to unlock access.',
    },
    training: {
      heading: 'Learn These Practical Skills for Free',
      subheading: 'From zero to live trading — David\'s personally recorded course matrix. Build your first line of defense before joining the community.',
      videos: [
        { title: 'Order Book Mastery', category: 'Core Basics' },
        { title: 'Short-Term Trading Secrets', category: 'Trading Strategy' },
        { title: 'ICT Time', category: 'Advanced Techniques' },
        { title: 'Sakata Method', category: 'Classic Methods' },
        { title: 'Ichimoku Cloud', category: 'Indicator Application' },
        { title: 'Understanding DMC Logic', category: 'Mindset & Cognition' },
      ],
    },
    bitunix: {
      heading: 'Switch Platforms — Feel What "Fair Trading" Means on Your Very First Trade',
      features: [
        { title: 'Minimal Slippage, No Stop Hunting', desc: 'Precision spike control protects your stop-loss from being maliciously triggered.' },
        { title: 'Legally Regulated & Certified', desc: 'US MSB licensed, capital safety guaranteed, globally compliant operations.' },
        { title: 'Monthly Real USDT Rewards', desc: 'Trade and earn real USDT, maximize leveraged returns, exclusive community bonuses.' },
        { title: 'Multi-Window Feature Ceiling', desc: 'Display 16 charts simultaneously, grasp all market movements, never miss a trade.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Community Profit Logs',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        { q: 'Is there a fee to join the DMC community?', a: 'The community is currently completely free! You just need to complete Bitunix registration and submit your UID to receive indicators and basic tutorial videos.' },
        { q: 'How do I officially join the group?', a: 'Click the \'Join Community\' button on this page. You will be guided to a dedicated Telegram or Line group where an admin will help you activate access.' },
        { q: 'What can I learn in the community?', a: 'You\'ll learn how smart money uses liquidity for accumulation and distribution, how to identify consolidation zones, and proper risk management and trading mindset.' },
        { q: 'Where do I ask questions?', a: 'The community has active members and tutors available 24 hours. David himself regularly provides live market analysis, resolving all doubts about market movements.' },
        { q: 'Which markets does the system apply to?', a: 'The DMC core logic applies to all liquid markets, including cryptocurrencies, US stocks, gold, and forex markets.' },
        { q: 'When are offline meetups held?', a: 'We host physical offline meetups every quarter, allowing members to not only communicate online but also discuss trading insights and life in person.' },
      ],
    },
    cta: {
      heading: 'Claim David\'s Trading Signals',
      namePlaceholder: 'Your Nickname',
      emailPlaceholder: 'Your Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'EXECUTE: Register on Bitunix & Get DMC Indicators',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'fr': {
    nav: {
      about: 'À propos de David',
      advantages: 'Avantages DMC',
      indicators: 'Indicateurs Exclusifs',
      training: 'Formation Pratique',
      bitunix: 'Zone Bitunix',
      testimonials: 'Témoignages',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Qu\'est-ce que le Trading?',
      subheadline: 'Nous ne vous apprenons pas à tracer des lignes — nous vous apprenons à comprendre les institutionnels et à les suivre.',
      body: 'Tout le monde peut apprendre le trading de crypto futures — même sans expérience!\nApprenez la "Stratégie DMC" en seulement 1 seconde',
      ctaPrimary: 'Rejoindre la Communauté | Stratégies quotidiennes + Cours gratuits',
      ctaSecondary: 'Nous Contacter | Stratégies de Trading + Vidéos d\'Introduction',
      ctaRegister: 'S\'inscrire sur Bitunix｜Rejoindre la Communauté DMC',
    },
    about: {
      heading: 'Qui Suis-Je? Rencontrez David',
      log001: 'Ancien salarié ordinaire, profondément anxieux de vendre mon temps',
      log002: '3 ans de détours dans le trading, de lourdes pertes à cause de faux indicateurs',
      log003: 'Intégré plusieurs techniques éprouvées pour développer la stratégie DMC exclusive',
      log004: 'Désormais dédié à aider les débutants à raccourcir la courbe d\'apprentissage',
      warningTitle: 'ATTENTION: Pourquoi Choisir DMC Plutôt que SMC / SNR?',
      warningDesc: 'Les théories traditionnelles semblent parfaites dans les livres, mais causent des sorties répétées à cause du "retard" et des "faux breakouts." DMC se concentre sur la liquidité en temps réel.',
    },
    advantages: {
      heading: 'Avantages DMC: Capturer Directement les Vraies Intentions du Smart Money',
      subheading: 'Nous rejetons les indicateurs complexes et inefficaces. Nous vous enseignons uniquement la "logique fondamentale" pour survivre et profiter dans des marchés changeants.',
      items: [
        { title: 'Lecture du Prix Brut', desc: 'Éliminez complètement les indicateurs en retard, revenez à l\'essence du prix et capturez les signaux d\'entrée en premier.' },
        { title: 'Compréhension du Comportement des Prix', desc: 'Comprenez l\'élan du marché, distinguez la consolidation des cassures, évitez les fausses sorties répétées.' },
        { title: 'Analyse de Distribution du Volume', desc: 'Analyse volume-prix exclusive pour identifier précisément les zones d\'accumulation et de distribution et verrouiller les niveaux de défense du smart money.' },
        { title: 'Applicable à Tous les Marchés', desc: 'Que ce soit dans les grandes tendances ou les oscillations à court terme, le système DMC offre une perspective de théorie des jeux claire.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Exclusif aux Membres! Débloquez le',
      headingPart2: 'Pack d\'Indicateurs Ultime',
      coreModules: [
        'Stratégie HFT Ultra Court Terme',
        'Alertes Fenêtre Temporelle ICT',
        'Auto-Marquage Gap de Liquidité FVG',
        'Suivi Accumulation/Distribution Smart Money',
      ],
      riskManagement: [
        'Suggestion de Stop-Loss Dynamique ATR',
        'Calcul Auto Ratio Risque/Récompense (RR)',
        'Filtre de Résonance de Tendance Multi-Période',
        'Alerte Rupture de Structure de Marché (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Les indicateurs sont réservés aux membres officiels de DMC. Inscrivez-vous sur Bitunix et soumettez votre UID pour débloquer l\'accès.',
    },
    training: {
      heading: 'Apprenez Ces Compétences Pratiques Gratuitement',
      subheading: 'De zéro à la pratique — la matrice de cours enregistrée personnellement par David. Établissez votre première ligne de défense avant de rejoindre la communauté.',
      videos: [
        { title: 'Maîtrise du Carnet d\'Ordres', category: 'Bases Fondamentales' },
        { title: 'Secrets du Trading Court Terme', category: 'Stratégie de Trading' },
        { title: 'Temps ICT', category: 'Techniques Avancées' },
        { title: 'Méthode Sakata', category: 'Méthodes Classiques' },
        { title: 'Nuage Ichimoku', category: 'Application d\'Indicateurs' },
        { title: 'Comprendre la Logique DMC', category: 'Mentalité' },
      ],
    },
    bitunix: {
      heading: 'Changez de Plateforme — Ressentez Ce que "Trading Équitable" Signifie dès Votre Première Transaction',
      features: [
        { title: 'Glissement Minimal, Pas de Stop Hunting', desc: 'Contrôle précis des pics protège votre stop-loss d\'une activation malveillante.' },
        { title: 'Légalement Réglementé & Certifié', desc: 'Licencié MSB américain, sécurité des fonds garantie, opérations mondiales conformes.' },
        { title: 'Récompenses USDT Réelles Mensuelles', desc: 'Tradez et gagnez de vraies USDT, maximisez les rendements leviers, bonus communautaires exclusifs.' },
        { title: 'Plafond de Fonctionnalités Multi-Fenêtres', desc: 'Affichez 16 graphiques simultanément, maîtrisez tous les mouvements du marché, ne manquez jamais une transaction.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Journaux de Profits de la Communauté',
    },
    faq: {
      heading: 'Questions Fréquemment Posées',
      items: [
        { q: 'Y a-t-il des frais pour rejoindre la communauté DMC?', a: 'La communauté est entièrement gratuite! Vous devez simplement compléter l\'inscription Bitunix et soumettre votre UID pour recevoir des indicateurs et des vidéos tutoriels.' },
        { q: 'Comment rejoindre officiellement le groupe?', a: 'Cliquez sur le bouton \'Rejoindre\'. Vous serez guidé vers un groupe Telegram ou Line dédié où un administrateur activera votre accès.' },
        { q: 'Que puis-je apprendre dans la communauté?', a: 'Vous apprendrez comment le smart money utilise la liquidité pour l\'accumulation et la distribution, comment identifier les zones de consolidation et la bonne gestion des risques.' },
        { q: 'Où puis-je poser des questions?', a: 'La communauté dispose de membres actifs et de tuteurs disponibles 24h/24. David lui-même fournit régulièrement des analyses de marché en direct, résolvant tous les doutes.' },
        { q: 'À quels marchés le système s\'applique-t-il?', a: 'La logique centrale DMC s\'applique à tous les marchés liquides, y compris les cryptomonnaies, les actions américaines, l\'or et le marché des changes.' },
        { q: 'Quand ont lieu les rencontres hors ligne?', a: 'Nous organisons des rencontres physiques chaque trimestre, permettant aux membres de discuter d\'insights de trading en personne.' },
      ],
    },
    cta: {
      heading: 'Réclamez les Signaux de Trading de David',
      namePlaceholder: 'Votre Pseudo',
      emailPlaceholder: 'Votre Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'EXÉCUTER: Inscrivez-vous sur Bitunix & Obtenez les Indicateurs DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'de': {
    nav: {
      about: 'Über David',
      advantages: 'DMC Vorteile',
      indicators: 'Exklusive Indikatoren',
      training: 'Praxistraining',
      bitunix: 'Bitunix Bereich',
      testimonials: 'Erfahrungsberichte',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Was ist Trading?',
      subheadline: 'Wir lehren Sie nicht, Linien zu zeichnen — wir lehren Sie, das Smart Money wirklich zu verstehen und zu folgen.',
      body: 'Jeder kann Krypto-Futures-Trading lernen — auch ohne Erfahrung!\nLernen Sie die "DMC-Strategie" in nur 1 Sekunde',
      ctaPrimary: 'Community Beitreten | Tägliche Strategien + Kostenlose Lektionen',
      ctaSecondary: 'Nachricht Senden | Handelsstrategien + Einführungsvideos',
      ctaRegister: 'Bei Bitunix Registrieren｜DMC Community Beitreten',
    },
    about: {
      heading: 'Wer Bin Ich? Treffe David',
      log001: 'Ehemaliger normaler Büroangestellter, tief besorgt über den Verkauf meiner Zeit',
      log002: '3 Jahre Umwege im Trading, schwere Verluste durch falsche Indikatoren',
      log003: 'Mehrere erprobte Techniken integriert, um die exklusive DMC-Kernstrategie zu entwickeln',
      log004: 'Jetzt dem Helfen von Anfängern gewidmet, die Lernkurve zu verkürzen',
      warningTitle: 'WARNUNG: Warum DMC Statt SMC / SNR Wählen?',
      warningDesc: 'Traditionelle Theorien sehen in Büchern perfekt aus, verursachen aber wiederholte Stop-Outs durch "Verzögerung" und "falsche Ausbrüche." DMC konzentriert sich auf Echtzeit-Liquidität.',
    },
    advantages: {
      heading: 'DMC Vorteile: Smart Money\'s Wahre Absichten Direkt Erfassen',
      subheading: 'Wir lehnen komplexe und ineffektive Indikatoren ab. Wir lehren Sie nur die "Grundlogik" um in veränderlichen Märkten zu überleben und zu profitieren.',
      items: [
        { title: 'Nackter Preisaktion-Analyse', desc: 'Eliminieren Sie vollständig verzögerte Indikatoren, kehren Sie zur Preisessenz zurück und erfassen Sie Einstiegssignale sofort.' },
        { title: 'Preisverhalten Einblick', desc: 'Verstehen Sie Marktmomentum, unterscheiden Sie Konsolidierung von Ausbrüchen und vermeiden Sie wiederholte Peitschenhiebe.' },
        { title: 'Volumenverteilungsanalyse', desc: 'Exklusive Volumen-Preis-Analyse zur präzisen Identifizierung von Akkumulations- und Distributionszonen und Sicherung der Smart Money-Verteidigungsebenen.' },
        { title: 'Auf Alle Märkte Anwendbar', desc: 'Ob in großen Trends oder extremen kurzfristigen Schwankungen, das DMC-System bietet eine klare spieltheoretische Perspektive.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Exklusiv für Community-Mitglieder! Schalten Sie frei:',
      headingPart2: 'Das Ultimative Indikator-Paket',
      coreModules: [
        'Ultra-Kurzzeit HFT-Strategie',
        'ICT Zeitfenster-Alarme',
        'FVG Liquiditätslücken Auto-Markierung',
        'Smart Money Akkumulations/Distributions-Tracking',
      ],
      riskManagement: [
        'ATR Dynamischer Stop-Loss-Vorschlag',
        'Risiko-Belohnungs (RR) Auto-Berechnung',
        'Multi-Zeitrahmen Trendresonanz-Filter',
        'Marktstrukturbruch (MSB) Alarm',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Indikatoren sind auf offizielle DMC-Community-Mitglieder beschränkt. Registrieren Sie sich bei Bitunix und senden Sie Ihre UID, um den Zugang zu entsperren.',
    },
    training: {
      heading: 'Lernen Sie Diese Praktischen Fähigkeiten Kostenlos',
      subheading: 'Von Null zur Praxis — David\'s persönlich aufgezeichnete Kursmatrix. Bauen Sie Ihre erste Verteidigungslinie auf, bevor Sie der Community beitreten.',
      videos: [
        { title: 'Order Book Meisterschaft', category: 'Kerngrundlagen' },
        { title: 'Kurzzeit-Trading-Geheimnisse', category: 'Handelsstrategie' },
        { title: 'ICT-Zeit', category: 'Fortgeschrittene Techniken' },
        { title: 'Sakata-Methode', category: 'Klassische Methoden' },
        { title: 'Ichimoku-Wolke', category: 'Indikatoranwendung' },
        { title: 'DMC-Logik Verstehen', category: 'Denkweise' },
      ],
    },
    bitunix: {
      heading: 'Wechseln Sie die Plattform — Spüren Sie Was "Faires Trading" bei Ihrem Ersten Trade Bedeutet',
      features: [
        { title: 'Minimaler Slippage, Kein Stop Hunting', desc: 'Präzisionssteuerung schützt Ihren Stop-Loss vor bösartiger Auslösung.' },
        { title: 'Rechtlich Reguliert & Zertifiziert', desc: 'US MSB lizenziert, Kapitalsicherheit garantiert, weltweit konforme Operationen.' },
        { title: 'Monatliche Echte USDT-Prämien', desc: 'Handeln Sie und verdienen Sie echte USDT, maximieren Sie gehebelte Erträge, exklusive Community-Boni.' },
        { title: 'Multi-Window-Funktionsdecke', desc: 'Zeigen Sie 16 Diagramme gleichzeitig an, beherrschen Sie alle Marktbewegungen, verpassen Sie nie einen Trade.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Community Gewinn-Logs',
    },
    faq: {
      heading: 'Häufig Gestellte Fragen',
      items: [
        { q: 'Gibt es eine Gebühr, der DMC-Community beizutreten?', a: 'Die Community ist völlig kostenlos! Sie müssen nur die Bitunix-Registrierung abschließen und Ihre UID einreichen, um Indikatoren und Tutorial-Videos zu erhalten.' },
        { q: 'Wie trete ich der Gruppe offiziell bei?', a: 'Klicken Sie auf \'Community Beitreten\'. Sie werden zu einer dedizierten Telegram- oder Line-Gruppe geführt, wo ein Admin Ihren Zugang aktiviert.' },
        { q: 'Was kann ich in der Community lernen?', a: 'Sie lernen, wie Smart Money Liquidität für Akkumulation und Distribution nutzt, wie Sie Konsolidierungszonen identifizieren und das richtige Risikomanagement.' },
        { q: 'Wo kann ich Fragen stellen?', a: 'Die Community hat aktive Mitglieder und Tutoren rund um die Uhr. David selbst bietet regelmäßig Live-Marktanalysen an und löst alle Zweifel über Marktbewegungen.' },
        { q: 'Auf welche Märkte ist das System anwendbar?', a: 'Die DMC-Kernlogik ist auf alle liquiden Märkte anwendbar, einschließlich Kryptowährungen, US-Aktien, Gold und Devisenmärkten.' },
        { q: 'Wann finden Offline-Treffen statt?', a: 'Wir veranstalten jedes Quartal physische Offline-Treffen, damit Mitglieder Trading-Einsichten persönlich besprechen können.' },
      ],
    },
    cta: {
      heading: 'Holen Sie Sich Davids Trading-Signale',
      namePlaceholder: 'Ihr Spitzname',
      emailPlaceholder: 'Ihre E-Mail',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'AUSFÜHREN: Auf Bitunix Registrieren & DMC-Indikatoren Erhalten',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'it': {
    nav: {
      about: 'Chi è David',
      advantages: 'Vantaggi DMC',
      indicators: 'Indicatori Esclusivi',
      training: 'Formazione Pratica',
      bitunix: 'Zona Bitunix',
      testimonials: 'Testimonianze',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Cos\'è il Trading?',
      subheadline: 'Non ti insegniamo a disegnare linee — ti insegniamo a capire davvero lo smart money e a seguirlo.',
      body: 'Chiunque può imparare il trading di futures crypto — anche senza esperienza!\nImpara la "Strategia DMC" in soli 1 secondo',
      ctaPrimary: 'Unisciti alla Community | Strategie Quotidiane + Lezioni Gratuite',
      ctaSecondary: 'Contattaci | Strategie di Trading + Video Introduttivi',
      ctaRegister: 'Registrati su Bitunix｜Unisciti alla Community DMC',
    },
    about: {
      heading: 'Chi Sono? Conosci David',
      log001: 'Ex impiegato normale, profondamente ansioso di vendere il mio tempo',
      log002: '3 anni di deviazioni nel trading, pesanti perdite per indicatori falsi',
      log003: 'Integrate più tecniche per sviluppare la strategia DMC esclusiva',
      log004: 'Ora dedicato ad aiutare i principianti ad accorciare la curva di apprendimento',
      warningTitle: 'AVVISO: Perché Scegliere DMC Rispetto a SMC / SNR?',
      warningDesc: 'Le teorie tradizionali sembrano perfette nei libri, ma causano stop-out ripetuti a causa del "ritardo" e dei "falsi breakout." DMC si concentra sulla liquidità in tempo reale.',
    },
    advantages: {
      heading: 'Vantaggi DMC: Cattura Direttamente le Vere Intenzioni dello Smart Money',
      subheading: 'Rifiutiamo indicatori complessi e inefficaci. Insegniamo solo la "logica fondamentale" per sopravvivere e guadagnare nei mercati in cambiamento.',
      items: [
        { title: 'Lettura dell\'Azione del Prezzo', desc: 'Elimina completamente gli indicatori in ritardo, torna all\'essenza del prezzo e cattura i segnali di ingresso per primo.' },
        { title: 'Intuizione sul Comportamento dei Prezzi', desc: 'Comprendi il momentum del mercato, distingui consolidamento da breakout ed evita oscillazioni ripetute nelle zone laterali.' },
        { title: 'Analisi della Distribuzione del Volume', desc: 'Analisi esclusiva volume-prezzo per identificare con precisione le zone di accumulo e distribuzione e bloccare i livelli di difesa dello smart money.' },
        { title: 'Applicabile a Tutti i Mercati', desc: 'Che si tratti di grandi tendenze o oscillazioni estreme a breve termine, il sistema DMC offre una chiara prospettiva di teoria dei giochi.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Esclusivo per i Membri! Sblocca il',
      headingPart2: 'Pacchetto Indicatori Definitivo',
      coreModules: [
        'Strategia HFT Ultra Breve Termine',
        'Avvisi Finestra Temporale ICT',
        'Auto-Marcatura Gap Liquidità FVG',
        'Tracking Accumulo/Distribuzione Smart Money',
      ],
      riskManagement: [
        'Suggerimento Stop-Loss Dinamico ATR',
        'Calcolo Auto Rapporto Rischio/Ricompensa (RR)',
        'Filtro Risonanza Tendenza Multi-Periodo',
        'Avviso Rottura Struttura di Mercato (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Gli indicatori sono limitati ai membri ufficiali della community DMC. Registrati su Bitunix e invia il tuo UID per sbloccare l\'accesso.',
    },
    training: {
      heading: 'Impara Gratuitamente Queste Competenze Pratiche',
      subheading: 'Da zero alla pratica — la matrice di corsi registrata personalmente da David. Costruisci la tua prima linea di difesa prima di unirti alla community.',
      videos: [
        { title: 'Padronanza del Libro Ordini', category: 'Basi Fondamentali' },
        { title: 'Segreti del Trading a Breve Termine', category: 'Strategia di Trading' },
        { title: 'Tempo ICT', category: 'Tecniche Avanzate' },
        { title: 'Metodo Sakata', category: 'Metodi Classici' },
        { title: 'Nuvola Ichimoku', category: 'Applicazione Indicatori' },
        { title: 'Comprendere la Logica DMC', category: 'Mentalità' },
      ],
    },
    bitunix: {
      heading: 'Cambia Piattaforma — Senti Cosa Significa "Trading Equo" al Primo Trade',
      features: [
        { title: 'Slippage Minimo, Nessun Stop Hunting', desc: 'Controllo preciso protegge il tuo stop-loss da attivazioni dannose.' },
        { title: 'Regolamentato e Certificato Legalmente', desc: 'Licenza MSB USA, sicurezza del capitale garantita, operazioni globali conformi.' },
        { title: 'Premi USDT Reali Mensili', desc: 'Fai trading e guadagna USDT reali, massimizza i rendimenti con leva, bonus esclusivi della community.' },
        { title: 'Soffitto delle Funzionalità Multi-Finestra', desc: 'Visualizza 16 grafici contemporaneamente, padroneggia tutti i movimenti del mercato, non perdere mai un trade.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Log dei Profitti della Community',
    },
    faq: {
      heading: 'Domande Frequenti',
      items: [
        { q: 'C\'è una quota per aderire alla community DMC?', a: 'La community è completamente gratuita! Devi solo completare la registrazione Bitunix e inviare il tuo UID per ricevere indicatori e video tutorial.' },
        { q: 'Come mi unisco ufficialmente al gruppo?', a: 'Fai clic su \'Unisciti alla Community\'. Sarai guidato a un gruppo dedicato su Telegram o Line dove un admin attiverà il tuo accesso.' },
        { q: 'Cosa posso imparare nella community?', a: 'Imparerai come il smart money usa la liquidità per accumulo e distribuzione, come identificare zone di consolidamento e la corretta gestione del rischio.' },
        { q: 'Dove posso fare domande?', a: 'La community ha membri attivi e tutor disponibili 24 ore su 24. David stesso fornisce regolarmente analisi di mercato dal vivo, risolvendo tutti i dubbi.' },
        { q: 'A quali mercati si applica il sistema?', a: 'La logica centrale DMC si applica a tutti i mercati liquidi, incluse criptovalute, azioni americane, oro e mercati forex.' },
        { q: 'Quando si tengono i meetup offline?', a: 'Organizziamo incontri fisici ogni trimestre, consentendo ai membri di discutere approfondimenti sul trading e sulla vita di persona.' },
      ],
    },
    cta: {
      heading: 'Richiedi i Segnali di Trading di David',
      namePlaceholder: 'Il Tuo Soprannome',
      emailPlaceholder: 'La Tua Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'ESEGUIRE: Registrati su Bitunix & Ottieni Indicatori DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'pt': {
    nav: {
      about: 'Sobre David',
      advantages: 'Vantagens DMC',
      indicators: 'Indicadores Exclusivos',
      training: 'Treinamento Prático',
      bitunix: 'Zona Bitunix',
      testimonials: 'Depoimentos',
      faq: 'FAQ',
    },
    hero: {
      headline: 'O que é o Trading?',
      subheadline: 'Não te ensinamos a desenhar linhas — ensinamos a entender o smart money de verdade e a segui-lo.',
      body: 'Qualquer pessoa pode aprender a negociar futuros de criptomoedas — mesmo sem experiência!\nAprenda a "Estratégia DMC" em apenas 1 segundo',
      ctaPrimary: 'Entrar na Comunidade | Estratégias Diárias + Aulas Gratuitas',
      ctaSecondary: 'Enviar Mensagem | Estratégias de Trading + Vídeos Introdutórios',
      ctaRegister: 'Registrar no Bitunix｜Entre na Comunidade DMC',
    },
    about: {
      heading: 'Quem Sou Eu? Conheça David',
      log001: 'Ex-funcionário comum, profundamente ansioso por vender meu tempo',
      log002: '3 anos de desvios no trading, perdas pesadas por indicadores falsos',
      log003: 'Integrou múltiplas técnicas para desenvolver a estratégia exclusiva DMC',
      log004: 'Agora dedicado a ajudar iniciantes a encurtar a curva de aprendizado',
      warningTitle: 'AVISO: Por Que Escolher DMC Sobre SMC / SNR?',
      warningDesc: 'As teorias tradicionais parecem perfeitas nos livros, mas causam stop-outs repetidos devido a "atraso" e "falsos rompimentos." DMC foca na liquidez em tempo real.',
    },
    advantages: {
      heading: 'Vantagens DMC: Capturar Diretamente as Verdadeiras Intenções do Smart Money',
      subheading: 'Rejeitamos indicadores complexos e ineficazes. Ensinamos apenas a "lógica fundamental" para sobreviver e lucrar em mercados em mudança.',
      items: [
        { title: 'Leitura de Price Action', desc: 'Elimine completamente os indicadores atrasados, retorne à essência do preço e capture sinais de entrada primeiro.' },
        { title: 'Insights de Comportamento de Preço', desc: 'Entenda o momentum do mercado, distingua consolidação de rompimentos, evite whipsaws repetidos em zonas laterais.' },
        { title: 'Análise de Distribuição de Volume', desc: 'Análise exclusiva de volume-preço para identificar precisamente zonas de acumulação e distribuição e bloquear níveis de defesa do smart money.' },
        { title: 'Aplicável a Todos os Mercados', desc: 'Seja em grandes tendências ou oscilações extremas de curto prazo, o sistema DMC fornece uma perspectiva clara de teoria dos jogos.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Exclusivo para Membros! Desbloqueie o',
      headingPart2: 'Pacote de Indicadores Definitivo',
      coreModules: [
        'Estratégia HFT Ultra Curto Prazo',
        'Alertas de Janela de Tempo ICT',
        'Marcação Automática de Gap de Liquidez FVG',
        'Rastreamento de Acumulação/Distribuição Smart Money',
      ],
      riskManagement: [
        'Sugestão de Stop-Loss Dinâmico ATR',
        'Cálculo Automático de Risco/Retorno (RR)',
        'Filtro de Ressonância de Tendência Multi-Período',
        'Alerta de Quebra de Estrutura de Mercado (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Os indicadores são restritos a membros oficiais da comunidade DMC. Registre-se no Bitunix e envie seu UID para desbloquear o acesso.',
    },
    training: {
      heading: 'Aprenda Estas Habilidades Práticas Gratuitamente',
      subheading: 'Do zero à prática — a matriz de cursos gravada pessoalmente por David. Construa sua primeira linha de defesa antes de entrar na comunidade.',
      videos: [
        { title: 'Domínio do Livro de Ordens', category: 'Bases Fundamentais' },
        { title: 'Segredos de Trading de Curto Prazo', category: 'Estratégia de Trading' },
        { title: 'Tempo ICT', category: 'Técnicas Avançadas' },
        { title: 'Método Sakata', category: 'Métodos Clássicos' },
        { title: 'Nuvem Ichimoku', category: 'Aplicação de Indicadores' },
        { title: 'Entendendo a Lógica DMC', category: 'Mentalidade' },
      ],
    },
    bitunix: {
      heading: 'Mude de Plataforma — Sinta o que Significa "Trading Justo" na Sua Primeira Negociação',
      features: [
        { title: 'Slippage Mínimo, Sem Stop Hunting', desc: 'Controle preciso protege seu stop-loss de ativação maliciosa.' },
        { title: 'Regulamentado e Certificado Legalmente', desc: 'Licença MSB dos EUA, segurança do capital garantida, operações globais em conformidade.' },
        { title: 'Recompensas Reais de USDT Mensais', desc: 'Negocie e ganhe USDT reais, maximize retornos alavancados, bônus exclusivos da comunidade.' },
        { title: 'Teto de Funcionalidades Multi-Janela', desc: 'Exiba 16 gráficos simultaneamente, domine todos os movimentos do mercado, nunca perca uma negociação.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Registros de Lucro da Comunidade',
    },
    faq: {
      heading: 'Perguntas Frequentes',
      items: [
        { q: 'Há uma taxa para entrar na comunidade DMC?', a: 'A comunidade é completamente gratuita! Você só precisa completar o registro no Bitunix e enviar seu UID para receber indicadores e vídeos tutoriais.' },
        { q: 'Como me junto oficialmente ao grupo?', a: 'Clique no botão \'Entrar na Comunidade\'. Você será guiado para um grupo dedicado no Telegram ou Line onde um admin ativará seu acesso.' },
        { q: 'O que posso aprender na comunidade?', a: 'Você aprenderá como o smart money usa liquidez para acumulação e distribuição, como identificar zonas de consolidação e a gestão adequada de risco.' },
        { q: 'Onde posso fazer perguntas?', a: 'A comunidade tem membros ativos e tutores disponíveis 24 horas. O próprio David fornece regularmente análise de mercado ao vivo, resolvendo todas as dúvidas.' },
        { q: 'A quais mercados o sistema se aplica?', a: 'A lógica central DMC se aplica a todos os mercados líquidos, incluindo criptomoedas, ações dos EUA, ouro e mercados forex.' },
        { q: 'Quando são realizados os encontros offline?', a: 'Realizamos encontros físicos a cada trimestre, permitindo que os membros discutam insights de trading pessoalmente.' },
      ],
    },
    cta: {
      heading: 'Reivindique os Sinais de Trading de David',
      namePlaceholder: 'Seu Apelido',
      emailPlaceholder: 'Seu Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'EXECUTAR: Registre-se no Bitunix & Obtenha Indicadores DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'ru': {
    nav: {
      about: 'О Дэвиде',
      advantages: 'Преимущества DMC',
      indicators: 'Эксклюзивные Индикаторы',
      training: 'Практическое Обучение',
      bitunix: 'Зона Bitunix',
      testimonials: 'Отзывы',
      faq: 'FAQ',
    },
    hero: {
      headline: 'Что такое трейдинг?',
      subheadline: 'Мы не учим рисовать линии — мы учим понимать умные деньги по-настоящему и следовать за ними.',
      body: 'Каждый может научиться торговле крипто-фьючерсами — даже без опыта!\nУзнайте «Стратегию DMC» всего за 1 секунду',
      ctaPrimary: 'Присоединиться | Ежедневные стратегии + Бесплатные уроки',
      ctaSecondary: 'Написать нам | Торговые стратегии + Вводные видео',
      ctaRegister: 'Зарегистрироваться на Bitunix｜Присоединиться к сообществу DMC',
    },
    about: {
      heading: 'Кто я? Знакомьтесь — Дэвид',
      log001: 'Обычный офисный работник, глубоко обеспокоенный продажей своего времени',
      log002: '3 года окольных путей в трейдинге, тяжёлые потери из-за ложных индикаторов',
      log003: 'Интегрировал несколько проверенных техник для разработки эксклюзивной стратегии DMC',
      log004: 'Теперь посвящён помощи начинающим в сокращении кривой обучения',
      warningTitle: 'ПРЕДУПРЕЖДЕНИЕ: Почему выбрать DMC, а не SMC / SNR?',
      warningDesc: 'Традиционные теории выглядят идеально в учебниках, но в реальных рынках вызывают повторные stop-outs из-за "запаздывания" и "ложных пробоев." DMC фокусируется на ликвидности в реальном времени.',
    },
    advantages: {
      heading: 'Преимущества DMC: Напрямую улавливать истинные намерения умных денег',
      subheading: 'Мы отвергаем сложные и неэффективные индикаторы. Мы учим только "фундаментальной логике" для выживания и прибыли на меняющихся рынках.',
      items: [
        { title: 'Чтение чистого прайс-экшн', desc: 'Полностью устраните запаздывающие индикаторы, вернитесь к сущности цены и первыми улавливайте сигналы входа.' },
        { title: 'Понимание ценового поведения', desc: 'Понимайте рыночный импульс, различайте консолидацию и прорывы, избегайте повторных ложных движений.' },
        { title: 'Анализ распределения объёма', desc: 'Эксклюзивный анализ объёма и цены для точного определения зон накопления и распределения и фиксации уровней защиты умных денег.' },
        { title: 'Применимо ко всем рынкам', desc: 'Будь то крупные тренды или экстремальные краткосрочные колебания, система DMC предоставляет чёткую перспективу теории игр.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: 'Только для участников! Разблокируйте',
      headingPart2: 'Ультимативный Пакет Индикаторов',
      coreModules: [
        'Ультракороткосрочная HFT-стратегия',
        'Оповещения временного окна ICT',
        'Авто-маркировка разрыва ликвидности FVG',
        'Отслеживание накопления/распределения умных денег',
      ],
      riskManagement: [
        'Динамический стоп-лосс ATR',
        'Авторасчёт соотношения риск/прибыль (RR)',
        'Фильтр резонанса тренда на нескольких ТФ',
        'Оповещение о смене структуры рынка (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Индикаторы ограничены официальными членами сообщества DMC. Зарегистрируйтесь на Bitunix и отправьте UID для разблокировки доступа.',
    },
    training: {
      heading: 'Изучите эти практические навыки бесплатно',
      subheading: 'От нуля до практики — матрица курсов, лично записанных Дэвидом. Постройте первую линию защиты перед вступлением в сообщество.',
      videos: [
        { title: 'Мастерство книги заявок', category: 'Базовые основы' },
        { title: 'Секреты краткосрочной торговли', category: 'Торговая стратегия' },
        { title: 'Время ICT', category: 'Продвинутые техники' },
        { title: 'Метод Сакаты', category: 'Классические методы' },
        { title: 'Облако Ишимоку', category: 'Применение индикаторов' },
        { title: 'Понимание логики DMC', category: 'Мышление' },
      ],
    },
    bitunix: {
      heading: 'Смените платформу — почувствуйте, что значит "честный трейдинг" с первой сделки',
      features: [
        { title: 'Минимальный слиппадж, без охоты', desc: 'Точный контроль защищает стоп-лосс от злонамеренного срабатывания.' },
        { title: 'Официально регулируемый и сертифицированный', desc: 'Лицензия MSB США, безопасность капитала гарантирована, глобальные операции.' },
        { title: 'Ежемесячные реальные награды USDT', desc: 'Торгуйте и зарабатывайте реальные USDT, максимизируйте прибыль с плечом, эксклюзивные бонусы.' },
        { title: 'Потолок многооконных функций', desc: 'Отображайте 16 графиков одновременно, контролируйте все движения рынка, никогда не пропускайте сделку.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Журналы прибыли сообщества',
    },
    faq: {
      heading: 'Часто задаваемые вопросы',
      items: [
        { q: 'Есть ли плата за вступление в сообщество DMC?', a: 'Сообщество полностью бесплатное! Вам нужно только завершить регистрацию на Bitunix и отправить UID для получения индикаторов и обучающих видео.' },
        { q: 'Как официально вступить в группу?', a: 'Нажмите кнопку \'Присоединиться\'. Вы будете направлены в группу Telegram или Line, где администратор активирует ваш доступ.' },
        { q: 'Что я могу научиться в сообществе?', a: 'Вы научитесь, как умные деньги используют ликвидность для накопления и распределения, как определять зоны консолидации и правильному управлению рисками.' },
        { q: 'Где задавать вопросы?', a: 'В сообществе есть активные участники и наставники круглосуточно. Сам Дэвид регулярно проводит анализ рынка в реальном времени, разрешая все сомнения.' },
        { q: 'К каким рынкам применяется система?', a: 'Основная логика DMC применима ко всем ликвидным рынкам, включая криптовалюты, акции США, золото и форекс.' },
        { q: 'Когда проводятся офлайн-встречи?', a: 'Мы проводим физические офлайн-встречи каждый квартал, позволяя участникам обсуждать торговые идеи и жизнь лично.' },
      ],
    },
    cta: {
      heading: 'Получите торговые сигналы Дэвида',
      namePlaceholder: 'Ваш Никнейм',
      emailPlaceholder: 'Ваш Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'ВЫПОЛНИТЬ: Зарегистрируйтесь на Bitunix и получите индикаторы DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },

  'es': {
    nav: {
      about: 'Sobre David',
      advantages: 'Ventajas DMC',
      indicators: 'Indicadores Exclusivos',
      training: 'Entrenamiento Práctico',
      bitunix: 'Zona Bitunix',
      testimonials: 'Testimonios',
      faq: 'FAQ',
    },
    hero: {
      headline: '¿Qué es el Trading?',
      subheadline: 'No te enseñamos a trazar líneas — te enseñamos a entender el dinero inteligente de verdad y a seguirlo.',
      body: '¡Cualquiera puede aprender a operar futuros de criptomonedas — incluso sin experiencia!\nAprende la "Estrategia DMC" en solo 1 segundo',
      ctaPrimary: 'Unirse a la Comunidad | Estrategias Diarias + Lecciones Gratuitas',
      ctaSecondary: 'Enviar Mensaje | Estrategias de Trading + Videos Introductorios',
      ctaRegister: 'Regístrate en Bitunix｜Únete a la Comunidad DMC',
    },
    about: {
      heading: '¿Quién Soy? Conoce a David',
      log001: 'Ex empleado de oficina, profundamente ansioso por vender mi tiempo',
      log002: '3 años de rodeos en el trading, grandes pérdidas por indicadores falsos',
      log003: 'Integré múltiples técnicas para desarrollar la estrategia exclusiva DMC',
      log004: 'Ahora dedicado a ayudar a principiantes a acortar la curva de aprendizaje',
      warningTitle: 'ADVERTENCIA: ¿Por Qué Elegir DMC Sobre SMC / SNR?',
      warningDesc: 'Las teorías tradicionales parecen perfectas en los libros, pero causan stop-outs repetidos debido al "retraso" y los "falsos rompimientos." DMC se centra en la liquidez en tiempo real.',
    },
    advantages: {
      heading: 'Ventajas DMC: Capturar Directamente las Verdaderas Intenciones del Smart Money',
      subheading: 'Rechazamos indicadores complejos e ineficaces. Solo enseñamos la "lógica fundamental" para sobrevivir y ganar en mercados cambiantes.',
      items: [
        { title: 'Lectura de Precio Puro', desc: 'Elimina completamente los indicadores rezagados, regresa a la esencia del precio y captura señales de entrada primero.' },
        { title: 'Comprensión del Comportamiento del Precio', desc: 'Entiende el momentum del mercado, distingue consolidación de rupturas, evita whipsaws repetidos en zonas laterales.' },
        { title: 'Análisis de Distribución de Volumen', desc: 'Análisis exclusivo de volumen-precio para identificar precisamente zonas de acumulación y distribución y bloquear niveles de defensa del smart money.' },
        { title: 'Aplicable a Todos los Mercados', desc: 'Ya sea en grandes tendencias o movimientos extremos a corto plazo, el sistema DMC proporciona una perspectiva clara de teoría de juegos.' },
      ],
    },
    indicators: {
      badge: 'EXCLUSIVE BUNDLE',
      headingPart1: '¡Exclusivo para Miembros! Desbloquea el',
      headingPart2: 'Paquete de Indicadores Definitivo',
      coreModules: [
        'Estrategia HFT Ultra Corto Plazo',
        'Alertas de Ventana de Tiempo ICT',
        'Marcado Automático de Brecha de Liquidez FVG',
        'Rastreo de Acumulación/Distribución Smart Money',
      ],
      riskManagement: [
        'Sugerencia Dinámica de Stop-Loss ATR',
        'Cálculo Automático de Riesgo/Recompensa (RR)',
        'Filtro de Resonancia de Tendencia Multi-Período',
        'Alerta de Ruptura de Estructura de Mercado (MSB)',
      ],
      requirementLabel: 'Requirement:',
      requirementText: 'Los indicadores están restringidos a miembros oficiales de la comunidad DMC. Regístrate en Bitunix y envía tu UID para desbloquear el acceso.',
    },
    training: {
      heading: 'Aprende Estas Habilidades Prácticas Gratis',
      subheading: 'De cero a la práctica — la matriz de cursos grabados personalmente por David. Construye tu primera línea de defensa antes de unirte a la comunidad.',
      videos: [
        { title: 'Dominio del Libro de Órdenes', category: 'Bases Fundamentales' },
        { title: 'Secretos del Trading a Corto Plazo', category: 'Estrategia de Trading' },
        { title: 'Tiempo ICT', category: 'Técnicas Avanzadas' },
        { title: 'Método Sakata', category: 'Métodos Clásicos' },
        { title: 'Nube Ichimoku', category: 'Aplicación de Indicadores' },
        { title: 'Entendiendo la Lógica DMC', category: 'Mentalidad' },
      ],
    },
    bitunix: {
      heading: 'Cambia de Plataforma — Siente lo que Significa "Trading Justo" en Tu Primera Operación',
      features: [
        { title: 'Deslizamiento Mínimo, Sin Stop Hunting', desc: 'Control preciso protege su stop-loss de activación maliciosa.' },
        { title: 'Regulado y Certificado Legalmente', desc: 'Licencia MSB de EE.UU., seguridad del capital garantizada, operaciones globales.' },
        { title: 'Recompensas Reales de USDT Mensuales', desc: 'Opera y gana USDT reales, maximiza retornos apalancados, bonos exclusivos de la comunidad.' },
        { title: 'Techo de Funciones Multi-Ventana', desc: 'Muestra 16 gráficos simultáneamente, domina todos los movimientos del mercado, nunca pierdas una operación.' },
      ],
    },
    testimonials: {
      badge: 'Uplink Verified Data',
      heading: 'Registros de Ganancias de la Comunidad',
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      items: [
        { q: '¿Hay una tarifa para unirse a la comunidad DMC?', a: '¡La comunidad es completamente gratuita! Solo necesitas completar el registro en Bitunix y enviar tu UID para recibir indicadores y videos tutoriales.' },
        { q: '¿Cómo me uno oficialmente al grupo?', a: 'Haz clic en \'Unirse a la Comunidad\'. Serás guiado a un grupo dedicado de Telegram o Line donde un administrador activará tu acceso.' },
        { q: '¿Qué puedo aprender en la comunidad?', a: 'Aprenderás cómo el smart money usa la liquidez para acumulación y distribución, cómo identificar zonas de consolidación y la gestión adecuada del riesgo.' },
        { q: '¿Dónde puedo hacer preguntas?', a: 'La comunidad tiene miembros activos y tutores disponibles las 24 horas. El propio David proporciona regularmente análisis de mercado en vivo, resolviendo todas las dudas.' },
        { q: '¿A qué mercados se aplica el sistema?', a: 'La lógica central de DMC se aplica a todos los mercados líquidos, incluyendo criptomonedas, acciones de EE.UU., oro y mercados de divisas.' },
        { q: '¿Cuándo se realizan las reuniones offline?', a: 'Organizamos reuniones físicas offline cada trimestre, permitiendo a los miembros discutir ideas de trading y vida en persona.' },
      ],
    },
    cta: {
      heading: 'Reclama las Señales de Trading de David',
      namePlaceholder: 'Tu Apodo',
      emailPlaceholder: 'Tu Email',
      uidPlaceholder: 'Your Bitunix UID',
      submitButton: 'EJECUTAR: Regístrate en Bitunix y Obtén Indicadores DMC',
    },
    footer: {
      rights: 'SYS_YEAR {year} DMC TRADING GROUP. ALL RIGHTS RESERVED.',
    },
  },
};

export default translations;
