"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card.tsx";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

function getExperience() {
  const initial = 2023;
  const today = new Date().getFullYear();
  return today - initial;
}

export function About() {
  const experience = getExperience();
  const features = [
    {
      icon: Code,
      title: "Código Limpo",
      description:
        "Escrever código limpo, escalável e eficiente que resiste ao tempo, essa é a regra.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Sempre explorando novas tecnologias e soluções criativas para problemas complexos.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description:
        "Acredito que a união entre pensamentos e pontos de vista geram resultados e soluções excepcionais.",
    },
    {
      icon: Coffee,
      title: "Dedicação",
      description:
        `"Kevin, você tem PHD em força de vontade.".Um dos elogios mais importantes para mim, hoje faço deste meu slogan.`,
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-700 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Passionate about creating digital experiences that
              matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With over {experience} years of experience in web
              development, I've had the privilege of working
              with startups and established companies to bring
              their digital visions to life. My journey began
              with a curiosity about how websites work, and it
              has evolved into a passion for creating seamless,
              performant applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in React, Node.js, and modern
              JavaScript frameworks, but I'm always eager to
              learn new technologies that can help me build
              better solutions. When I'm not coding, you'll find
              me contributing to open-source projects, writing
              technical articles, or exploring the latest in web
              technologies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {[
                "Resolutivo",
                "Trabalho em equipe",
                "Aprendiz nato",
                "Orientado a resultados",
              ].map((trait, index) => ( // trait é o item do array para cada iteração do map
                <span
                  key={trait} // Usando trait como chave única para cada span
                  className="px-4 py-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full text-sm"
                >
                  {trait} 
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}