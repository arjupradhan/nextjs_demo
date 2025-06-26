"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div>
      <section className="relative py-20 overflow-hidden bg-white" id="home">
      {/* Background Images */}
      <div className="hidden lg:block">
        <div className="absolute top-1/4 left-[-10%] animate-float-slow opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
            alt="Decorative background" 
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <div className="absolute top-[10%] right-[-15%] animate-float-reverse opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Tech pattern" 
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
        <div className="absolute bottom-1/4 left-[10%] animate-float opacity-25">
          
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <div className="lg:col-span-5">
            {/* User Testimonials */}
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex -space-x-2 mr-4">
                <span className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="User 1" 
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="User 2" 
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="User 3" 
                    className="w-full h-full object-cover"
                  />
                </span>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex text-primary mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-body mb-0">5.0 Ratings</p>
                </div>
                <h6 className="text-base font-semibold text-dark mb-0">325k Satisfied Customers</h6>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Future-Ready HR for a Dynamic Workplace.
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-lg text-body mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Prepare your HR department for the future with our adaptable HRMS, designed to meet the needs of a dynamic workplace
            </motion.p>
            
            {/* CTA Button */}
            <motion.a 
              href="#" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Book a Demo 
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
          
          <div className="hidden lg:block lg:col-span-7">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image 
                src="/hero-img.png" 
                alt="HR Management Dashboard" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      
    </section>
    </div>
  );
}
