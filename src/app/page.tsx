import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <section id="stats"><Stats /></section>
            <section id="work"><Experience /></section>
            <section id="education"><Education /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </>
    );
}