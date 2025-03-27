"use client";
import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import {Card} from "@/app/components/card";
import Link from "next/link";
import {Navigation} from "../components/nav";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbackData = [
    {
        name: "Stefan Dolenc",
        feedback: "Pavlo consistently delivers elegant and scalable solutions to complex problems. His mastery of full-stack development and modern architectures like microservices and event-driven systems has made him a go-to expert on our team. His ability to balance clean code with business needs is exceptional.",
        photo: "/images/feedback/s.dolenc.jpeg",
        linkedin: "https://www.linkedin.com/in/stefan-dolenc",
        description: "Senior Projektmanager @ PITERION Group",
    },
    {
        name: "Nataliya Moroz - van Houdt",
        feedback: "Pavlo is a powerhouse full-stack engineer with deep expertise in both Web2 and Web3 ecosystems. He’s highly dependable and always delivers.",
        photo: "/images/feedback/moroz.jpeg",
        linkedin: "https://www.linkedin.com/in/nataliya-moroz-van-houdt-ba5198183",
        description: "10+ years experience in IT field",
    },
    {
        name: "Nazar Boyko",
        feedback: "Pavlo fosters a collaborative and innovative team culture. His leadership style is grounded in trust and empowerment, which motivates engineers to take ownership and continuously push the boundaries of what’s possible.",
        photo: "/images/feedback/boyko.jpeg",
        linkedin: "https://www.linkedin.com/in/nazar-boyko",
        description: "Senior Software Engineer @MN, USA | PHP, Go, JS | Database Expert (PostgreSQL, MySQL, ElasticSearch) | AWS Specialist",
    },
    {
        name: "Raj Chhatrala",
        feedback: "As a mentor, He has been instrumental in my professional growth. His patience, deep technical knowledge, and leadership style create an environment where learning is constant, and innovation is encouraged.",
        photo: "/images/feedback/raj.jpeg",
        linkedin: "https://www.linkedin.com/in/raj-chhatrala-516355163",
        description: "Senior Software Engineer, Ahmedabad.",
    },
    {
        name: "Falk Raudies",
        feedback: "Pavlo has a rare ability to align technical execution with strategic business objectives. He doesn’t just build software—he builds products that drive real value. His leadership and commitment to delivery excellence consistently exceed expectations.",
        photo: "/images/feedback/f.raudies.jpeg",
        linkedin: "https://linkedin.com/in/falkraudies",
        description: "Gründer & Vorstand FCR Immobilien AG | einer der führenden Immobilien-Investoren in Deutschland | Profitabel, wachstumsstark – und das seit Jahren | fcr-immobilien.de",
    },
    {
        name: "Jenyo Johnson",
        feedback: "Working with Pavlo across teams has been seamless. He communicates complex technical concepts clearly to non-technical stakeholders and always collaborates with empathy and professionalism. His problem-solving ability stands out in cross-functional projects.",
        photo: "/images/feedback/jenyo.jpeg",
        linkedin: "https://www.linkedin.com/in/jenyo-johnson-6b58b4135",
        description: "Software Engineer",
    },
    {
        name: "Sviatoslav Terletskyi",
        feedback: "His DevOps mindset has transformed our delivery pipelines. He automated deployments, optimized CI/CD workflows, and implemented containerization strategies that significantly improved system reliability and release velocity.",
        photo: "/images/feedback/s.terl.jpeg",
        linkedin: "https://www.linkedin.com/in/sviatoslav-terletskyi-124053121",
        description: "Front end engineer (React, Typescript) | Mentor | Leader",
    },
    {
        name: "Oleh Sulzhenko",
        feedback: "Pavlo is at the cutting edge of blockchain engineering. His smart contract work and seamless dApp integrations showcase his ability to merge traditional web development with decentralized technologies, delivering secure and scalable solutions in the Web3 space.",
        photo: "/images/feedback/oleh.jpeg",
        linkedin: "https://www.linkedin.com/in/oleh-sulzhenko",
        description: "Senior JS Developer",
    },
    {
        name: "Remco Geerdink",
        feedback: "Pavlo is more than just a developer—he's a strategic partner. His ability to translate business requirements into robust, user-friendly systems has had a direct impact on our bottom line. He’s also a great communicator who ensures stakeholders are always in the loop.",
        photo: "/images/feedback/remco.jpeg",
        linkedin: "https://www.linkedin.com/in/remcogeerdink",
        description: "Founder/CTO",
    },
    {
        name: "Oleksandr Bilan",
        feedback: "Beyond his technical excellence, Pavlo is someone who brings integrity, curiosity, and a continuous improvement mindset to everything he does. Whether he's solving engineering challenges or mentoring younger developers, his positive energy is contagious.",
        photo: "/images/feedback/bilan.jpeg",
        linkedin: "https://www.linkedin.com/in/oleksandr-bilan",
        description: "Backend Software Engineer | 7+ years in Laravel & API Development",
    },
    {
        name: "iLLia Goncharov",
        feedback: "Pavlo has an architect’s mind. He approaches every system with a long-term vision, ensuring scalability and resilience. His understanding of patterns like DDD, CQRS, and event sourcing has been critical in building systems that are not only functional but also future-proof.",
        photo: "/images/feedback/illia.jpeg",
        linkedin: "https://www.linkedin.com/in/illia-goncharov-a438a7104",
        description: "JavaScript | TypeScript | Vue | React | Node | Express | Laravel | php | Mysql | Python | Tailwind | Docker",
    },
    {
        name: "Olexii Dubanovskyi",
        feedback: "Pavlo thrives in agile environments. He’s adept at breaking down complex projects into manageable sprints and consistently delivers high-quality results on time. His adaptability and calm under pressure make him an invaluable asset to any team.",
        photo: "/images/feedback/o.duban.jpeg",
        linkedin: "https://www.linkedin.com/in/olexii-dubanovskyi-312a1887",
        description: "PHP Web Developer – Velia.net",
    },
];

export default function Feedback() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

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
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation/>
            <main className="flex-1">
                <div className="mx-auto hidden sm:block max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-42 pb-5">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Feedback
                    </h2>
                </div>
                <div className="container mx-auto max-w-7x">
                    <div className="w-full h-px bg-zinc-800"/>
                </div>
                <div className="container flex items-center justify-center px-4 mx-auto">
                    <div className="w-full max-w-3xl pt-12">
                        <Slider {...settings}>
                            {feedbackData.map((feedback, index) => (
                                <div key={index} className="px-4">
                                    <Card>
                                        <div className="p-6 flex flex-col items-center gap-6 md:p-8">
                                            <div
                                                className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-b-blue-300">
                                                <Image
                                                    src={feedback.photo}
                                                    alt={feedback.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <p className="text-center text-zinc-200 text-lg italic font-medium">
                                                &quot;{feedback.feedback}&quot;
                                            </p>

                                            <div className="text-center">
                                                <h3 className="text-xl font-semibold text-white">{feedback.name}</h3>
                                                <p className="text-sm text-zinc-400">{feedback.description}</p>
                                            </div>

                                            <Link
                                                href={feedback.linkedin}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-200 bg-zinc-800 rounded-full hover:bg-zinc-700 hover:text-white transition-colors duration-300"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.732s.784-1.732 1.75-1.732 1.75.784 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.869 0-2.154 1.459-2.154 2.966v5.701h-3v-10h2.878v1.367h.041c.401-.76 1.381-1.567 2.841-1.567 3.037 0 3.6 2 3.6 4.604v5.596z"/>
                                                </svg>
                                                LinkedIn
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="container mx-auto max-w-7x pt-12">
                    <div className="w-full h-px bg-zinc-800"/>
                </div>
            </main>
            <footer className="hidden sm:block text-center py-4 text-sm text-zinc-500">
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
            <Link target="_blank" href="https://nextjs.org" className="underline duration-500 hover:text-zinc-300">
              NextJS
            </Link>
          </span>{" "}
                    © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}