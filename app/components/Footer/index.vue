<template>
  <footer class="bg-white border-t border-slate-200 py-12 mt-12">
    <div class="max-w-6xl mx-auto px-4 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div class="col-span-1 md:col-span-2">
          <span
            class="text-2xl font-display font-extrabold tracking-tight text-[#1e3a8a] mb-4 block"
          >
            Flash Sport
          </span>
          <p
            class="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed"
          >
            O seu portal de referência para todas as novidades do desporto
            angolano. Notícias com rigor e paixão.
          </p>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-slate-900">Categorias</h4>
          <ul class="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Futebol</a
              >
            </li>
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Basquetebol</a
              >
            </li>
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Judo</a
              >
            </li>
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Desporto Comunitário</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-slate-900">Legal</h4>
          <ul class="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Termos de Uso</a
              >
            </li>
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Privacidade</a
              >
            </li>
            <li>
              <a class="hover:text-[#1e3a8a] transition-colors" href="#"
                >Contactos</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs text-center md:text-left"
      >
        <p>© 2026 Flash Sport. Todos os direitos reservados.</p>

        <div class="flex space-x-6 mt-6 md:mt-0">
          <a
            class="hover:text-[#1e3a8a] transition-colors flex items-center gap-1"
            href="#"
          >
            <Facebook :size="18" />
          </a>
          <a
            class="hover:text-[#1e3a8a] transition-colors flex items-center gap-1"
            href="#"
          >
            <Share2 :size="18" />
          </a>
          <a
            class="hover:text-[#1e3a8a] transition-colors flex items-center gap-1"
            href="#"
          >
            <Rss :size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Substituí os ícones de texto (material-icons) por componentes Lucide para melhor performance
import { Facebook, Share2, Rss } from 'lucide-vue-next'
</script>
