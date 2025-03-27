"use client";
import Link from "next/link";
import {Navigation} from "../components/nav";
import React, {useState, useEffect} from "react";
import Image from "next/image";

export default function Example() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return (
            <div
                className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex items-center justify-center">
                <div className="ring" data-pulse-speed="0.05s">
                    <span className="loading-text">Loading</span>
                    <span></span>
                    <style jsx>{`
                        .ring {
                            position: relative;
                            width: 150px;
                            height: 150px;
                            background: transparent;
                            border: 3px solid rgba(255, 255, 255, 0.3);
                            border-radius: 50%;
                            text-align: center;
                            line-height: 150px;
                            font-family: sans-serif;
                            font-size: 20px;
                            color: rgba(255, 255, 255, 0);
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            text-shadow: 0 0 10px rgba(255, 255, 255, 0);
                            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                            animation: fadeIn 0.4s forwards;
                        }

                        .loading-text {
                            animation: blink 1s infinite;
                            color: rgba(255, 255, 255, 1);
                        }

                        @keyframes blink {
                            0%, 100% {
                                opacity: 1;
                            }
                            50% {
                                opacity: 0;
                            }
                        }

                        .ring:before {
                            content: "";
                            position: absolute;
                            top: -3px;
                            left: -3px;
                            width: 100%;
                            height: 100%;
                            border: 3px solid transparent;
                            border-top: 3px solid rgba(255, 255, 255, 0);
                            border-right: 3px solid rgba(255, 255, 255, 0);
                            border-radius: 50%;
                            animation: animateC 2s linear infinite, fadeIn 0.4s forwards;
                        }

                        @keyframes animateC {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                color: rgba(255, 255, 255, 0);
                                border-color: rgba(255, 255, 255, 0);
                            }
                            100% {
                                opacity: 1;
                                color: rgba(255, 255, 255, 1);
                                border-color: rgba(255, 255, 255, 1);
                            }
                        }
                    `}</style>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 min-h-screen to-zinc-900/0">
            <Navigation/>
            <div className="mx-auto hidden sm:block max-w-7xl lg:px-8 md:space-y-16 md:pt-14 lg:pt-42 pb-2">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-6">
                    About Me
                </h2>
            </div>
            <div className="container mx-auto max-w-7x">
                <div className="w-full h-px bg-zinc-800"/>
            </div>
            <div className="container flex items-center justify-center px-4 mx-auto pt-8 pb-4">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-2 sm:mt-0 sm:grid-cols-1 lg:gap-16">
                    <article className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-1/3 h-64 sm:h-auto overflow-hidden">
                            <Image
                                src="/images/avatar/pavlo.png"
                                alt="Pavlo Medynskyi"
                                fill
                                className="object-cover animate-scale-in"
                                priority
                            />
                        </div>
                        <div className="p-6 flex-1 text-zinc-200 max-h-[calc(100vh-16rem)] overflow-y-auto">
                            <h3 className="text-2xl font-semibold mb-4">
                                <ins>Intro</ins>
                            </h3>
                            <p className="text-base animate-slide-up-delayed">
                                <p className="text-gray-300 leading-relaxed">I’m a senior software developer and tech leader with over 20 years of experience
                                    designing and delivering innovative, high-performance software systems. My
                                    background spans a wide range of technologies and industries, from web development
                                    and enterprise systems to blockchain and decentralized applications.</p>
                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>My Journey as a Developer & Leader</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">I began my career during the early days of the internet, cutting my teeth on PHP
                                    development when dynamic websites were transforming the digital landscape. Since
                                    then, my skillset has grown alongside the industry itself. Today, I specialize in
                                    full-stack development, working extensively with JavaScript, TypeScript, Node.js,
                                    and ReactJS, among other modern frameworks and tools.
                                </p>

                                <p className="text-gray-300 leading-relaxed">Over the years, I’ve architected and implemented CRM systems, ERP solutions,
                                    custom web applications, microservices, and complex RPC-based distributed
                                    systems. Whether it's crafting intuitive frontend interfaces in ReactJS with
                                    TypeScript, building resilient backend APIs in Node.js, Golang, or Python,
                                    or designing distributed, event-driven systems, I enjoy solving challenges
                                    that require both creativity and technical precision.</p>
                                <wbr/>

                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>My Expertise</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">I have deep knowledge of data structures, algorithms, and software design
                                    principles, which enables me to approach problems with a well-rounded,
                                    strategic mindset. I am a strong advocate of applying design patterns and
                                    architectural patterns such as microservices, event sourcing, CQRS,
                                    domain-driven design (DDD), and RESTful/GraphQL APIs to create scalable,
                                    maintainable, and robust applications.</p>

                                <p className="text-gray-300 leading-relaxed">My technical foundation is paired with a keen eye for software architecture,
                                    which I’ve applied to various business-critical systems across sectors like
                                    e-commerce, logistics, finance, SaaS platforms, and Web3 projects.</p>

                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>Blockchain & Web3</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">In recent years, I have stepped into the world of blockchain and
                                    decentralized applications. From Ethereum smart contract development in
                                    Solidity to integrating dApps with traditional web systems using Web3.js,
                                    Ethers.js, and Hardhat, I’ve enjoyed contributing to the next wave of
                                    digital transformation.
                                </p>

                                <p className="text-gray-300 leading-relaxed">I’m passionate about blockchain engineering, including NFTs, DeFi
                                    protocols, and exploring innovative ways to blend web2 and web3
                                    technologies for secure, trustless applications.</p>

                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>Tech Lead & DevOps Mindset</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">With more than 10 years of leadership experience, I have served as a
                                    tech lead and team manager, mentoring engineers, driving
                                    architectural decisions, and ensuring that software aligns with both
                                    business and technical goals. I take pride in fostering
                                    collaborative environments where teams feel empowered to innovate
                                    and continuously improve.</p>

                                <p className="text-gray-300 leading-relaxed">In addition, I have a strong DevOps culture mindset. I’ve built and
                                    optimized CI/CD pipelines, automated deployments, containerized
                                    applications with Docker, and worked with Kubernetes for
                                    orchestration, ensuring that delivery pipelines are smooth,
                                    reliable, and fast.</p>

                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>My Toolbox</ins>
                                </h3>
                                <ul>
                                    <li><b>Languages</b>: <em>PHP, JavaScript (ES6+), TypeScript, Golang, Python,
                                        Solidity</em>
                                    </li>
                                    <li><b>Frontend</b>: <em>ReactJS (with TypeScript), Vue.js, HTML5, CSS3,
                                        TailwindCSS</em>
                                    </li>
                                    <li><b>Backend</b>: <em>Node.js (Express, NestJS), Laravel, Golang
                                        microservices, Python APIs</em>
                                    </li>
                                    <li><b>Blockchain & Web3</b>: <em>Ethereum, Solidity, smart contracts, Web3.js,
                                        Ethers.js, dApp integration</em>
                                    </li>
                                    <li><b>Enterprise Systems</b>: <em>CRM & ERP development, RPC frameworks, custom
                                        business solutions</em>
                                    </li>
                                    <li><b>Architecture</b>: <em>Microservices, RESTful APIs, GraphQL, CQRS, DDD,
                                        Event-Driven Architecture</em>
                                    </li>
                                    <li><b>DevOps & CI/CD</b>: <em>Docker, Kubernetes, GitLab CI/CD, GitHub Actions,
                                        AWS, Terraform, Linux</em>
                                    </li>
                                    <li><b>Databases</b>: <em>MySQL, PostgreSQL, MongoDB, Redis</em></li>
                                    <li><b>Soft Skills</b>: <em>Leadership, mentoring, cross-functional collaboration,
                                        problem-solving, communication, project management</em>
                                    </li>
                                </ul>

                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>My Development Philosophy</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">I believe that great software starts with a solid architectural
                                    foundation, clean code, and a deep understanding of the problem domain.
                                    My focus is on building solutions that are scalable, resilient, and easy
                                    to maintain.</p>

                                <p className="text-gray-300 leading-relaxed">Whether I’m writing code, designing systems, or leading teams, I always
                                    bring a balanced approach between technical depth and pragmatic
                                    execution. I’m deeply committed to best practices, continuous learning,
                                    and empowering teams to deliver software that makes a difference.
                                </p>
                                <wbr/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    <ins>Life Beyond Tech</ins>
                                </h3>
                                <p className="text-gray-300 leading-relaxed">Outside of the tech world, I am a family man who values time with loved
                                    ones and a balanced, active lifestyle. I’m passionate about staying fit
                                    and healthy, whether it’s hitting the gym, running, swimming, or
                                    engaging in sports activities to stay sharp both mentally and
                                    physically.</p>

                                <p className="text-gray-300 leading-relaxed">Above all, I am a lifelong technology enthusiast. I’m driven by
                                    curiosity, and I get excited about engineering challenges, cutting-edge
                                    tools, and the endless possibilities that come with being part of this
                                    ever-evolving industry.</p>
                            </p>
                            <div className="mt-4">
                                <a
                                    href="https://drive.google.com/file/d/1dt5ga4EmpKbuQyPPn1OuMlpmtoVBecmm/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2 bg-zinc-700 text-zinc-200 rounded-lg hover:bg-zinc-600 transition-colors duration-300"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className="container mx-auto max-w-7x pt-2 pb-4">
                <div className="w-full h-px bg-zinc-800"/>
            </div>
            <footer className="absolute text-center w-full text-sm text-zinc-500">
                <p>
                    Made by{" "}
                    <Link
                        target="_blank"
                        href="https://nextjs.org"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Pavlo Medynskiy
                    </Link>
                    . Powered by{" "}
                    <span className="font-semibold">
                        <Link
                            target="_blank"
                            href="https://nextjs.org"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            NextJS
                        </Link>
                    </span>{" "}
                    © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}