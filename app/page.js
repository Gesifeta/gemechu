"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/styles/landing.css";
import {icons} from "@/public";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
    <div className="landing">
      <div className="hero">
        <Image
          className="hero-image"
          src="/gemechu.jpg"
          width={150}
          height={150}
          alt="gemechu"
        />
        <h3>Hi, I'm Gemechu.</h3>
        <h1>A full stack developer who crafts seamless digital experiences.</h1>
        <Link href="#" className="cta">
          Explore
        </Link>
      </div>
      <div className="stacks">
        <ul>
          {[
            { name: "html", icon: icons.html },
            { name: "css", icon: icons.css },
            { name: "javascript", icon: icons.javascript },
            { name: "reactjs", icon: icons.react },
            { name: "nextjs", icon: icons.react },
            { name: "aws", icon: icons.aws },
            { name: "docker", icon: icons.docker },
            { name: "graphql", icon: icons.graphql },
          ].map((stack, index) => (
            <li key={`${stack}-${index}`}><Image src={stack.icon} alt={`${stack.name}`} width={30} />{stack.name.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </div>
    <Projects/>
    </main>
  );
}
