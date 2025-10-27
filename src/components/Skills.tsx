'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card.tsx'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-gray-400 to-white-700' },
        { name: 'TypeScript/JavaScript', level: 90, color: 'from-blue-400 to-blue-700' },
        { name: 'Tailwind CSS', level: 80, color: 'from-cyan-400 to-cyan-700' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 95, color: 'from-green-400 to-green-700' },
        { name: 'Express.js', level: 70, color: 'from-orange-400 to-orange-700' },
        { name: 'Ruby', level: 70, color: 'from-red-400 to-red-700' }
      ]
    },
    {
      title: 'Banco de Dados',
      skills: [
        { name: 'MySQL', level: 75, color: 'from-rose-400 to-rose-700' },
        { name: 'PostgreSQL', level: 60, color: 'from-indigo-400 to-indigo-700' }
      ]
    }
  ]

  return (
    <section id="habilidades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Animação ao entrar na viewport
          className="text-center mb-16" // Torna central o texto e add margem inferior
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Conhecimento e Tecnologias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Aqui as ferramentas e tecnologias que uso para tornar ideias em realidade
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}