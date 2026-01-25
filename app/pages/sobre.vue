<template>
  <section>
    <div
      class="relative h-[400px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          alt="Hero background"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO_l_zXwc9N75SMTKyljmmfs5qqKhJCX6G_p1GMFWu5s7M-SVhrGUZWEYRc_mfngg8NVlEo-1Txuq_e0VcFA8z6OSj_ts7Qt1wZD9gLguT3jPb6fUQcUO7D4SAmoMWjjL8wUiYJ-HxXDoKfnT4k_ghKxPK-rop53ieyIWAjKxxYHeuUdGRdifKKrOh3zVsFKookCX_8Q2TNMXSbZ89tdiaec1nMw3mc98Lv0IS9cF0957Xtw8GpERu65LSvvVU552RIILspJbv2WwL"
        />
        <div
          class="absolute inset-0 bg-slate-900/60 backdrop-brightness-75"
        ></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1
          class="text-5xl md:text-7xl font-display font-extrabold text-white mb-4 tracking-tight"
        >
          Quem Somos
        </h1>
        <p class="text-xl text-slate-200 max-w-2xl mx-auto">
          A voz autoritária do desporto, unindo paixão e rigor jornalístico em
          cada jogada.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-7 space-y-8">
          <section>
            <h2 class="text-3xl font-display font-bold text-primary mb-6">
              Nossa História
            </h2>
            <div
              class="prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed"
            >
              <p>
                Fundado com o propósito de transformar a cobertura desportiva, o
                <strong>Flash Sport</strong> nasceu do desejo de oferecer uma
                perspectiva profunda e analítica sobre o panorama atlético
                global. Desde o início, focamos em ir além dos resultados,
                contando as histórias humanas que moldam cada competição.
              </p>
              <p>
                Ao longo dos anos, evoluímos de um blog local para um portal de
                referência, cobrindo desde o futebol de elite até o impacto do
                desporto nas comunidades. Nosso compromisso permanece
                inabalável: levar a emoção do campo para a tela do leitor com
                integridade e paixão.
              </p>
            </div>
          </section>
          <section class="bg-slate-50 rounded-3xl border border-slate-100">
            <h2 class="text-2xl font-display font-bold text-primary mb-4">
              Missão &amp; Valores
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div>
                  <h4 class="font-bold">Excelência Editorial</h4>
                  <p class="text-slate-600 text-sm">
                    Garantimos que cada artigo seja fundamentado em factos e
                    análises precisas.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div>
                  <h4 class="font-bold">Diversidade Atlética</h4>
                  <p class="text-slate-600 text-sm">
                    Do futebol ao judo, valorizamos todas as modalidades que
                    inspiram superação.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div>
                  <h4 class="font-bold">Impacto Comunitário</h4>
                  <p class="text-slate-600 text-sm">
                    Acreditamos no desporto como ferramenta de transformação
                    social.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <aside class="lg:col-span-5">
          <div class="sticky top-24">
            <div class="flex items-center space-x-3 mb-8">
              <h3 class="text-3xl font-display font-bold">Nossa Equipa</h3>
            </div>
            <div class="space-y-8">
              <div class="flex items-center space-x-6 group">
                <div class="relative">
                  <div
                    class="absolute inset-0 bg-primary/20 rounded-full scale-110 blur group-hover:bg-primary/40 transition-colors"
                  ></div>
                  <img
                    alt="Pedro Makengo"
                    class="relative w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-900"
                    src="https://avatars.githubusercontent.com/u/61626420?v=4"
                  />
                </div>
                <div>
                  <h4
                    class="text-xl font-bold group-hover:text-primary transition-colors"
                  >
                    Pedro Makengo
                  </h4>
                  <p class="text-primary font-medium text-sm mb-1">
                    Editor-Chefe
                  </p>
                  <p class="text-slate-500 text-sm">
                    Especialista em Futebol Internacional e Análise Tática.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mt-12 p-6 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-center"
            >
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">
                Quer fazer parte da nossa redação?
              </p>
              <a
                class="inline-flex items-center text-primary font-bold hover:underline"
                href="#"
              >
                Ver vagas disponíveis
                <span class="material-symbols-outlined text-sm ml-1"
                  >arrow_forward</span
                >
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
