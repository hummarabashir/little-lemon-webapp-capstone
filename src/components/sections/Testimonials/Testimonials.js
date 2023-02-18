import React from 'react';
import Star from '../../../../src/assets/star.png';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <section className="testimonials">
        <article className="testimonials-topbar">
                <h1>Testimonials</h1>
        </article>


        <section className="testimonials-cards">
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Micheal Caldwell</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Alan Chen</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Casey Lau</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>John Rosenblum</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Jim Reynor</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Brian Dean</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Tyler Tohmine</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={Star} alt="delivery Icon"></img>
                <h3>Jack Hu</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            </section>
            </section>
    )
}
