import Image from "next/image";
import type { HirobaIntroductionProps } from "@/lib/types";
import { Carousel, CarouselItem } from "./carousel";

export type { HirobaIntroductionProps };

export function HirobaIntroductionSection({
  concept,
  staff,
  mapImage,
}: HirobaIntroductionProps) {
  return (
    <section id="about" className="common-section hiroba-introduction">
      <div className="common-section__inner">
        {/* コンセプト */}
        <header className="section-header">
          <h2 className="section-header__title">{concept.title}</h2>
          <p className="section-header__subtitle">{concept.description}</p>
        </header>

        {/* スタッフ紹介 */}
        <div className="hiroba-introduction__staff">
          <h3 className="hiroba-introduction__subtitle">スタッフ紹介</h3>
          <Carousel itemWidth={280}>
            {staff.map((member, index) => (
              <CarouselItem key={index}>
                <div className="staff-card">
                  <div className="staff-card__image-wrapper">
                    <Image
                      src={member.image}
                      alt={`${member.name}の写真`}
                      width={200}
                      height={200}
                      className="staff-card__image"
                    />
                  </div>
                  <div className="staff-card__info">
                    <h4 className="staff-card__name">{member.name}</h4>
                    <p className="staff-card__role">{member.role}</p>
                    {member.description && (
                      <p className="staff-card__description">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* 室内まっぷ */}
        <div className="hiroba-introduction__facility">
          <div className="hiroba-introduction__map-section">
            <h3 className="hiroba-introduction__subtitle">
              はないろ 室内まっぷ
            </h3>
            <div className="hiroba-introduction__map-image-wrapper">
              <Image
                src={mapImage}
                alt="はないろ室内まっぷ"
                width={600}
                height={600}
                className="hiroba-introduction__map-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
