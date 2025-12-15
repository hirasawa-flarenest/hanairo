/**
 * microCMS型定義
 */

// microCMS共通フィールド
export interface MicroCMSBase {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

// microCMS画像フィールド
export interface MicroCMSImage {
  url: string;
  height: number;
  width: number;
}

// お知らせ
export interface MicroCMSAnnouncement extends MicroCMSBase {
  title: string;
  content: string; // リッチエディタの本文（HTML）
  category: string[]; // セレクトフィールド（複数選択可能な配列形式）
}

// 活動紹介
export interface MicroCMSActivity extends MicroCMSBase {
  title: string;
  description: string; // 一覧表示用の要約
  activityDate: string; // 活動日（日時フィールド）
  content: string; // リッチエディタの本文（HTML）
  image?: MicroCMSImage; // アイキャッチ画像（任意）
}

// 月間スケジュール
export interface MicroCMSMonthSchedule extends MicroCMSBase {
  year: string; // 日時フィールド（ISO形式の文字列）
  scheduleImage?: MicroCMSImage; // 任意フィールド
}

// ヘッダーお知らせバナー（単一コンテンツ）
export interface MicroCMSClosureNotice {
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

// スタッフ紹介
export interface MicroCMSStaff extends MicroCMSBase {
  name: string; // 名前
  position?: string; // 役職（任意）
  photo?: MicroCMSImage; // プロフィール写真（任意）
  bio?: string; // 紹介文（任意）
  displayOrder: number; // 表示順
}
