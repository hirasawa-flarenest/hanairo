"use client";

import Image from "next/image";
import type { Staff } from "@/lib/types";

export interface StaffSectionProps {
  title: string;
  subtitle: string;
  staff: Staff[];
}

export function StaffSection({
  title,
  subtitle,
  staff,
}: StaffSectionProps) {
  return (
    <section className="common-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div className="staff-grid">
          {staff.map((member) => (
            <div key={member.id} className="staff-card">
              {member.photo && (
                <div className="staff-card__photo">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="staff-card__image"
                  />
                </div>
              )}
              <div className="staff-card__content">
                <h3 className="staff-card__name">{member.name}</h3>
                {member.position && (
                  <p className="staff-card__position">{member.position}</p>
                )}
                {member.bio && (
                  <p className="staff-card__bio">{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
