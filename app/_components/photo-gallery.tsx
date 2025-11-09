"use client";

import Image from "next/image";
import type { PhotoItem } from "@/lib/types";
import { Carousel, CarouselItem } from "./carousel";

export interface PhotoGalleryProps {
  photos: PhotoItem[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery">
      <Carousel itemWidth={280}>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={280}
              height={280}
              className="photo-gallery__image"
              sizes="280px"
            />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}
