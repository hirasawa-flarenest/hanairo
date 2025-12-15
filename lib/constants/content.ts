import type {
  PhotoItem,
  Activity,
  Announcement,
  FAQ,
  MonthSchedule,
  SectionContent,
} from "../types";

/**
 * コンテンツデータ定数
 */

export const PHOTO_GALLERY_PHOTOS: PhotoItem[] = [
  {
    src: "/images/gallery/S__24068103.jpg",
    alt: "入口",
  },
  {
    src: "/images/gallery/S__24068105.jpg",
    alt: "案内看板",
  },
  {
    src: "/images/gallery/S__24068106.jpg",
    alt: "プレイルーム",
  },
  {
    src: "/images/gallery/S__24068107.jpg",
    alt: "赤ちゃんスペース",
  },
  {
    src: "/images/gallery/S__24068108.jpg",
    alt: "おままごとコーナー",
  },
  {
    src: "/images/gallery/S__24068109.jpg",
    alt: "表札",
  },
  {
    src: "/images/gallery/S__24068111_0.jpg",
    alt: "子育て情報コーナー",
  },
  {
    src: "/images/gallery/S__24068113_0.jpg",
    alt: "絵本コーナー",
  },
  {
    src: "/images/gallery/S__24068114_0.jpg",
    alt: "ウォーターサーバー",
  },
  {
    src: "/images/gallery/S__24068115_0.jpg",
    alt: "おむつ替えスペース",
  },
];

// 活動紹介データはmicroCMSから取得するため空配列
export const ACTIVITIES: Activity[] = [];

// 月間スケジュールデータはmicroCMSから取得するため空配列
export const MONTHLY_SCHEDULES: MonthSchedule[] = [];

// お知らせデータはmicroCMSから取得するため空配列
export const ANNOUNCEMENTS: Announcement[] = [];

// よくあるご質問データはmicroCMSから取得するため空配列
export const FAQS: FAQ[] = [];

export const SECTIONS: SectionContent[] = [
  {
    id: "guide",
    title: "ご利用案内",
    summary:
      "初めて利用する方が安心できるように、利用方法や料金、注意事項をまとめる実務的な内容です。",
    groups: [
      {
        title: "押さえておきたいポイント",
        items: [
          {
            label: "利用方法（登録制／自由利用）",
            description:
              "初回来館時の登録手順と、予約が不要な自由利用枠の案内を分かりやすく記載します。",
          },
          {
            label: "開館日時・利用時間",
            description:
              "平日・土曜の開館時間、休館日、混雑しやすい時間帯などをタイムテーブル形式で掲載予定です。",
          },
          {
            label: "利用料金",
            description:
              "ひろば利用料、イベント参加費、親子セット料金などの目安を表にまとめます。",
            note: "料金改定の可能性があるため、最新情報更新日も併記します。",
          },
          {
            label: "一時預かり／予約制サービス",
            description:
              "一時預かりの利用枠や予約フォームへの導線。キャンセルポリシーもここで案内します。",
          },
          {
            label: "注意事項（持ち物・安全面）",
            description:
              "必要な持ち物、アレルギー対応、体調不良時のお願いなど安全面のガイドラインを箇条書きで掲載します。",
          },
          {
            label: "LINE／電話での予約案内",
            description:
              "公式LINEの友だち追加QRコードや、予約専用電話番号の受付時間を記載する予定です。",
          },
        ],
      },
    ],
  },
  {
    id: "news",
    title: "最新情報・お知らせ",
    summary:
      "イベントや休館情報など、最新のトピックスを更新するニュースエリアです。",
    groups: [
      {
        title: "更新予定のトピック",
        items: [
          {
            label: "新着イベント",
            description:
              "申し込み受付中のイベントをカード形式で3件ほど表示し、詳細ページへ誘導予定です。",
          },
          {
            label: "休館日・特別開館日",
            description:
              "祝日やメンテナンスによる休館情報、講座前後の特別開館時間をカレンダーと連動させます。",
          },
          {
            label: "お知らせ一覧",
            description:
              "ブログ形式の記事一覧を作成し、カテゴリーやタグで絞り込みできる仕様を想定しています。",
          },
        ],
      },
    ],
  },
];
