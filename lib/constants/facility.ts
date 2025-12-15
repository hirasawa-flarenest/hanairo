import type {
  ContactMethod,
  CompanyInfo,
  HirobaIntroductionProps,
  FacilityInfoSectionProps,
} from "../types";

/**
 * 施設情報データ定数
 */

export const CONTACT_METHODS: ContactMethod[] = [
  {
    type: "phone",
    title: "お電話でのお問い合わせ",
    description: "お気軽にお電話ください。スタッフが丁寧に対応いたします。",
    link: "tel:0454829036",
    linkText: "045-482-9036",
    hours: "受付時間：平日 10:00〜16:00、土曜 10:00〜15:00",
  },
  {
    type: "line",
    title: "公式LINEでのお問い合わせ",
    description:
      "LINEで友だち追加していただくと、イベント情報やお知らせが届きます。お問い合わせもLINEから受け付けています。",
    link: "https://line.me/R/ti/p/@puanaroom",
    linkText: "友だち追加",
    icon: "/images/LINE_Brand_icon.png",
  },
];

export const COMPANY_INFO: CompanyInfo = {
  title: "運営会社",
  subtitle: "おやこの広場 はないろの運営会社についてご紹介します",
  companyName: "株式会社Puana",
  description:
    "私たちは、地域の子育て支援を通じて、誰もが安心して子育てできる社会づくりを目指しています。おやこの広場 はないろは、地域に根ざした温かい交流の場として、スタッフ一同心を込めて運営しております。",
  postalCode: "〒227-0033",
  address: "横浜市青葉区市ヶ尾町436-1エスポアール市ヶ尾103",
  establishedYear: "2018年4月",
  phoneNumber: "0454829036",
  phoneNumberDisplay: "045-482-9036",
  businessHours: "平日 月〜金 9:30〜16:00",
  accessInfo: [
    { station: "市ヶ尾駅", walkingTime: "徒歩17分" },
    { station: "市営【下根】バス停", walkingTime: "徒歩3分" },
    { station: "東急【東市が尾小学校前】バス停", walkingTime: "徒歩6分" },
  ],
};

export const HIROBA_INTRODUCTION: HirobaIntroductionProps = {
  concept: {
    title: "ひろば紹介",
    description:
      "おやこの広場 はないろは、未就学児（主に0〜3歳）のお子さまと保護者の方が気軽に集い、交流や子育て情報を入手したり、子育て相談がいつでもできる常設型の広場です！スタッフには子育て経験者や、現在子育て真っ只中のママ、保育士などがいます！毎月、様々なイベントも開催しています！毎日の子育ての日常の中に、ホッとひと息つける♡ ような居心地の良さを大切にした地域に寄り添う広場です♪",
  },
  staff: [], // microCMSから取得
  mapImage: "/images/hanairo_map_20251203.png",
};

export const FACILITY_INFO: FacilityInfoSectionProps = {
  title: "ご利用案内",
  subtitle: "ご利用方法や料金についてご案内します",
  targetUsers: [
    "未就学児（主に0〜3歳）のお子様と保護者",
    "妊娠中の方（利用料無料）",
  ],
  businessHours: {
    weekdays: "10:00〜16:00",
    weekends: "10:00〜15:00",
    holidays: "日曜日・祝日・年末年始",
  },
  access: {
    address: "横浜市青葉区市ヶ尾町436-1エスポアール市ヶ尾103",
    nearestStations: [
      { name: "市ヶ尾駅", walkingTime: "徒歩17分" },
      { name: "市営【下根】バス停", walkingTime: "徒歩3分" },
      { name: "東急【東市が尾小学校前】バス停", walkingTime: "徒歩6分" },
    ],
    parking: {
      onsite: false,
      nearby: true,
    },
    bicycleParking: true,
    strollerParking: true,
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.9!2d139.5435803!3d35.5417013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f709af176945%3A0x41d798c3e8cd7d63!2z44GK44KE44GT44Gu5bqD5aC0IOOBr-OBquOBhOOCjQ!5e0!3m2!1sja!2sjp!4v1",
    googleMapsAppUrl: "https://maps.app.goo.gl/7k2oaouQdedqz5z28",
  },
  openingHours: {
    weekdays: "月〜金 9:30〜16:00",
    holidays: "土曜日・日曜日・祝日・年末年始",
  },
  pricing: {
    membershipFee: {
      price: "1家族500円／年度",
      note: "年会費として毎年度お支払いいただきます。",
    },
    usageFee: {
      member: "100円／1回",
      nonMember: "300円／1回",
    },
  },
  noReservationText: "予約不要",
  welcomeText: "ご自由にお越しください",
  notes: [
    "体調不良のお子さまはご利用をお控えください",
    "飲食物の持ち込みは可能ですが、においの強いものはご遠慮ください",
    "ゴミは各自お持ち帰りください",
  ],
};
