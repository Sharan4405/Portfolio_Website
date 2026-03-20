import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="home" className="relative w-full min-h-screen bg-black flex flex-col">
      {/* Spline 3D Animation Container */}
      <div className="relative w-full h-[80vh] flex-shrink-0">
        <Spline 
          scene="https://prod.spline.design/gUcrYwDRyDdz71G5/scene.splinecode"
          onLoad={() => setIsLoading(false)}
          style={{ width: '100%', height: '100%' }}
        />
        {/* Watermark Hider */}
        <div className="absolute bottom-0 right-0 w-60 h-28 bg-black z-10" />
      </div>
      
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-40 bg-black">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin-slow" />
        </div>
      )}

      {/* CTA Buttons - Below Animation */}
      {!isLoading && (
        <motion.div
          className="w-full flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-center cursor-pointer"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-center cursor-pointer"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-4"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}