"use client"
import React, { useState } from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const GridView = () => {

  return (
    <section id="about">
      <BentoGrid>
        {
          gridItems?.map(({
            id,
            title,
            titleClassName,
            description,
            className,
            img,
            imgClassName,
            spareImg
          })=>(
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          ))
        }
      </BentoGrid>
    </section>
  )
}

export default GridView;