"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Boxes, Laptop, Shield, Users } from "lucide-react";
import Image from "next/image";
const Features = () => {
  return (
    <div>
      <section className="relative py-20 bg-light overflow-hidden" id="features">
      {/* Background Decorations */}
      <div className="hidden lg:block">
        <div className="absolute top-[-10%] right-[-5%] animate-pulse-slow opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
            alt="Circle decoration" 
            className="w-40 h-40 object-cover rounded-full"
            width={300}
            height={300}       
          />
        </div>
        <div className="absolute bottom-[-20%] left-[-10%] animate-float opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
            alt="Wave pattern" 
            className="w-60 h-32 object-cover"
            width={400}
            height={200}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-dark mb-4">
            SmartHR Providing You Best Features
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-body leading-relaxed">
              Looking to automate HR management? SmartHR is for you. This is a project management and HR automation solution that can transform your HRMS system.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Features */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="feature-icon w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 hover:scale-110 transition-transform">
                  <Boxes className="text-yellow-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Advanced Features</h3>
                <p className="text-body leading-relaxed">
                  Advanced feature tools like graphs, charts, invoices, video & audio calls, projects, and more.
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="feature-icon w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 hover:scale-110 transition-transform">
                  <Laptop className="text-pink-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">More Flexible</h3>
                <p className="text-body leading-relaxed">
                  Flexible and adaptable system that grows with your business needs and requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <Image 
                src="/feature.png" 
                alt="SmartHR Features Dashboard" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div className="text-center lg:text-right">
                <div className="feature-icon w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 mb-4 hover:scale-110 transition-transform">
                  <Shield className="text-blue-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Secure & Reliable</h3>
                <p className="text-body leading-relaxed">
                  Enterprise-grade security with reliable data protection and backup systems.
                </p>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="feature-icon w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 mb-4 hover:scale-110 transition-transform">
                  <Users className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Team Collaboration</h3>
                <p className="text-body leading-relaxed">
                  Enhanced team collaboration tools for better communication and productivity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features
