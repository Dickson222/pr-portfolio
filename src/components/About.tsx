import Image from 'next/image';
import React from 'react';

const About = (): JSX.Element => {
    return (
        <section id="about" className="container-max hero">
            <div className="left">
                <h1 className="title">Hi, I'm Dickson Godwin <span aria-hidden>👋</span></h1>
                <p className="subtitle">Software Engineer | JavaScript | TypeScript.</p>

                <div className="about-section">
                    <h2 className="about-heading">About</h2>
                    <p className="about">
                        I am Dickson Godwin, a Frontend engineer with over 4 years of experience solving real world problems with technology. I have a diploma degree in software engineering and also Political science. Over the years I have specialized in building pixel perfect applications using JavaScript, Typescript, React, Next.js amongst other tools. I collaborate with a cross-functional team to build successful products that meets the needs of our clients. I pay attention to detail and practice good code for better user experience and optimization. I have the ability to learn fast and I am currently learning Node.js. In addition to my developer role, I love to write technical articles, teaching what I know and helping others.
                    </p>
                </div>

                <div className="ctas">
                    <a href="/resume.pdf" className="btn btn-dark" aria-label="Download resume">Download resume</a>
                    <a href="#contact" className="btn btn-outline">Contact</a>
                </div>
            </div>

            <div className="avatar-wrap" aria-hidden>
                <div className="avatar">
                    <Image src="/images/avatar.png" alt="avatar" width={144} height={144} />
                </div>
            </div>
        </section>
    );
};

export default About;