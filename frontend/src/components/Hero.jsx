import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToReg = () => {
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <motion.div
                        className="hero-date-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        24 • 04 • 2026 // BENGALURU, IN
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        INTELLIGENT <br />
                        <span className="text-outline">MACHINES</span> <br />
                        CONVERGE.
                    </motion.h1>

                    <motion.div
                        className="hero-bottom"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <p className="hero-subtitle">
                            Acharya Robo Habba returns. Experience the premier showcase of mechatronics, engineering, and tactical robotics.
                        </p>

                        <button className="premium-btn" onClick={scrollToReg}>
                            Register Now <ArrowUpRight size={18} />
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
