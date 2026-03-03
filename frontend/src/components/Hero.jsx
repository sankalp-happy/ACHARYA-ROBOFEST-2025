import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const scrollToReg = () => {
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-grid">
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
                            ROBO <br />
                            <span className="text-outline">HABBA</span> <br />
                            2026.
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

                    <div className="hero-spline-container">
                        <Suspense fallback={<div className="spline-loading"><Loader2 className="spin" size={32} /></div>}>
                            <Spline scene="https://prod.spline.design/Rrojc7WHeMNwq65L/scene.splinecode" />
                        </Suspense>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
