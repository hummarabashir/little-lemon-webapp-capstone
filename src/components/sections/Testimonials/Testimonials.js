import React from 'react';
import Star from '../../../../src/assets/testimonials/star.svg';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <section className="testimonials">
        <article className="testimonials-topbar">
                <h1>Testimonials</h1>
                <h2 class="testimonials-details">read what others have to say</h2>
        </article>


        <section className="testimonials-cards">
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/jane.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Micheal Caldwell</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/andrea.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Alan Chen</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/john.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Casey Lau</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/mark.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>John Rosenblum</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/andrea.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Jim Reynor</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/john.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Brian Dean</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/jane.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Tyler Tohmine</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            <article className="testimonial-card">
                <img src={require('../../../assets/testimonials/mark.jpg')} alt="delivery Icon"></img>
                <div className='testimonials-stars'>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                <img src={Star} alt="delivery Icon"></img>
                </div>
                <h3>Jack Hu</h3>
                <p>This is the best Mediterranean food that I've ever had!</p>
            </article>
            </section>
            </section>
    )
}
