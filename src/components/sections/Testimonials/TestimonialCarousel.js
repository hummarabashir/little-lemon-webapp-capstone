import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Star from '../../../../src/assets/star.png';
import './Testimonials.css';

export default function TestimonialCarousel() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
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
             </Carousel>
    )
}
