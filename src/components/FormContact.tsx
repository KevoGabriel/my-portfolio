'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card.tsx'
import { Button } from './ui/button.tsx'
import { Input } from './ui/input.tsx'
import { Textarea } from './ui/textarea.tsx'

export function FormContact() {
    return (
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
            <Card className="p-8 bg-zinc-900/60 border-white/10">
              <h3 className="text-2xl text-white mb-6">Me mande uma mensagem!</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Nome</label>
                    <Input
                      placeholder="Como posso te chamar?"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Sobrenome</label>
                    <Input
                      placeholder="Seu sobrenome"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Assunto</label>
                  <Input
                    placeholder="Sobre o que você quer falar..."
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500"
                    />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Me conte mais sobre sua ideia..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500 resize-none"
                    />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-yellow-600 text-white py-3">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </motion.div>
        )
    }