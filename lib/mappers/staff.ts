/**
 * microCMSのスタッフ紹介データを内部型にマッピング
 */

import type { MicroCMSStaff } from "../types/microcms";
import type { Staff, StaffMember } from "../types";

/**
 * microCMSのスタッフデータを内部型にマッピング
 */
export function mapMicroCMSStaff(data: MicroCMSStaff): Staff {
  return {
    id: data.id,
    name: data.name,
    position: data.position,
    photo: data.photo?.url,
    bio: data.bio,
    displayOrder: data.displayOrder,
  };
}

/**
 * microCMSのスタッフ配列を内部型にマッピング
 */
export function mapMicroCMSStaffList(data: MicroCMSStaff[]): Staff[] {
  return data.map(mapMicroCMSStaff);
}

/**
 * Staff型をStaffMember型に変換（ひろば紹介セクション用）
 */
export function mapStaffToStaffMember(staff: Staff): StaffMember {
  return {
    name: staff.name,
    role: staff.position || "",
    image: staff.photo || "/images/default-avatar.png",
    description: staff.bio || "",
  };
}

/**
 * Staff配列をStaffMember配列に変換
 */
export function mapStaffListToStaffMemberList(staffList: Staff[]): StaffMember[] {
  return staffList.map(mapStaffToStaffMember);
}
