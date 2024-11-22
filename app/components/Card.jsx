"use client";
import React from "react";
import Image from "next/image";

import "@/app/styles/card.css";

const Cards = ({ title, description, image, stacks }) => {
  return (
    <div className="project-card">
      <Image src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="project-stacks">
        {stacks.map((stack, index) => (
          <span key={`${stack}-${index}`}>{stack.toUpperCase()}</span>
        ))}
      </div>
    </div>
  );
};

export default Cards;
