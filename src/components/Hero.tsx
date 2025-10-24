'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button.tsx'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() { 
  const scrollToProjects = () => { // Função para rolar até a seção de projetos
    const element = document.getElementById('projetos')
    if (element) { // Verifica se o elemento existe
      element.scrollIntoView({ behavior: 'smooth' }) // Rola suavemente até o elemento
    }
  }

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => ( // Logica das "estrelas" de fundo
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full" // Estilo dos pontos de fundo
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Duração entre 2 e 5 segundos
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`, // Posição horizontal aleatória
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div // Container principal do conteúdo
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 // Saudação inicial
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-300 text-xl tracking-wider"
          >
            Olá! Meu nome é
          </motion.h2>
          
          <motion.h1 // h1 com o nome
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white mb-6"
          >
            Kevin Gabriel Sehnem
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            Eu sou{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-300">
              programador e desenvolvedor{' '}
            </span>
            especializado em aplicações e design web.
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
           Transformo ideias em código eficiente com React, Node.js e Ruby. 
           Guiado por design, lógica e propósito, crio soluções que simplificam o dia a dia e impulsionam o trabalho.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-amber-600 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Veja meu trabalho
            </Button>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/KevoGabriel' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kevinsehnem' },
                { icon: Mail, href: 'mailto: kevinsehnem123@gmail.com'}
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}