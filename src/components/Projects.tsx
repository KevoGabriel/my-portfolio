'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card.tsx'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './ui/ImageWithFallback.tsx'

export function Projects() {
  const projects = [
    {
      title: 'PostUp - Um clone do Trello',
      description: 'Um aplicativo web de gerenciamento de tarefas inspirado no Trello, ainda em desenvolvimento. Possui landingpage, autenticação pelo Clerk, criação e gererenciamento de quadros, colaboração, planos e muito mais.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind', 'Clerk', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/KevoGabriel/postup',
      isLive: true,
      live: '/',
      featured: true
    },
    {
      title: 'Esse Portfólio',
      description: 'Um portfólio moderno e responsivo construído a base de React, Framer Motion e Tailwind CSS, apresentando projetos e habilidades de forma prática e visualmente atraente.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/KevoGabriel/my-portfolio',
      isLive: true,
      live: '/',
      featured: true
    },
    {
      title: 'Simon Game',
      description: 'Um clone simples do clássico jogo "Simon Says", desenvolvido com HTML, CSS e JavaScript puro. O jogador deve repetir sequências de luzes e sons com cores diferentes. A cada rodada, a sequência aumenta em um item, testando sua memória e atenção.',
      image: '../assets/simongame.jpg',
      technologies: ['JavaScript', 'DOM Manipulation', 'CSS', 'jQuery'],
      github: 'https://github.com/KevoGabriel/simongame',
      isLive: true,
      live: 'https://kevogabriel.github.io/simongame/',
      featured: false
    },
    {
      title: 'Tindog - Tinder para cães',
      description: 'Uma landing page fictícia e divertida para um aplicativo de encontros para cães, apresentando design divertido e fiel ao tema. Um projeto inicial para fins acadêmicos com pratica em HTML e Bootstrap.',
      image: '../assets/tindog.jpg',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/KevoGabriel/kevintindog',
      isLive: true,
      live: 'https://kevogabriel.github.io/kevintindog/',
      featured: false
    },
    {
      title: 'Medieval Cause',
      description: 'Um jogo 2D de plataforma e ação desenvolvido em Python e Pygame. Jogo simples com temática medieval, onde foi praticado conceitos em desenvolvimento de jogos, POO e manipulação de assets gráficos e sonoros.',
      image: '../assets/medievalCause.jpg',
      technologies: ['Python', 'Pygame' , 'Assets Grátis'],
      github: 'https://github.com/KevoGabriel/medievalCause',
      isLive: false,
      live: '#',
      featured: false
    },
    {
      title: 'Test de API Restful com Node.js',
      description: 'Este é um projeto básico utilizando Node.js, Express e EJS. Ele serve como uma aplicação web simples que renderiza páginas dinâmicas, com finalidade de consultar uma API externa de Segredos da App Brewery. Projeto com fins acadêmicos e demonstração prática com experiencia em Express e API consumption.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'EJS', 'API Consumption'],
      github: 'https://github.com/KevoGabriel/TestAPI-Rest',
      isLive: false,
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)


  return (
    <section id="projetos" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Principais projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Alguns projetos feitos com ❤️ para mostrar minhas habilidades e experiências.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-amber-500 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {/* Lógica para link se estiver ativo */}
                    {project.isLive && (
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Outros projetos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Outros projetos</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {/* Lógica para link se estiver ativo */}
                    {project.isLive && (
                    <a
                      href={project.live}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300"
                    >
                    <ExternalLink className="w-5 h-5" />
                    </a>)}

                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}