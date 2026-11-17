export type ProjectId =
  | 'defensoria-publica'
  | 'gui-reinke'
  | 'sib-tabuleiro'
  | 'nova-cidade'
  | 'este-portfolio';

export interface CaseSectionNav {
  number: string;
  label: string;
  targetId: string;
}

export interface CaseSummaryItem {
  label: string;
  value: string;
}

export interface CompactEvidenceGallery {
  kind: 'compact-5';
  main: {
    src: string;
    caption: string;
  };
  secondary: [
    { src: string; caption: string },
    { src: string; caption: string },
    { src: string; caption: string },
    { src: string; caption: string },
  ];
}

export interface GridEvidenceGallery {
  kind: 'grid-9';
  title: string;
  subtitle: string;
  items: Array<{
    src: string;
    caption: string;
  }>;
}

export interface CaseSection {
  id: string;
  heading: string;
  paragraphs: string[];
  compactGallery?: CompactEvidenceGallery;
}

export interface ProjectCaseData {
  id: ProjectId;
  indexLabel: string;
  shortTitle: string;
  categoryTag: string;
  title: string;
  introParagraphs: string[];
  bannerType: 'dpu' | 'gui-reinke' | 'sib' | 'nova-cidade' | 'portfolio';
  bannerTitle: string;
  bannerSubtitle: string;
  navLinks: CaseSectionNav[];
  summaryRow1: [CaseSummaryItem, CaseSummaryItem, CaseSummaryItem];
  summaryRow2: [CaseSummaryItem, CaseSummaryItem, CaseSummaryItem];
  sections: CaseSection[];
  gridGallery?: GridEvidenceGallery;
  closingSection?: CaseSection;
}

export const PROJECTS: ProjectCaseData[] = [
  {
    id: 'defensoria-publica',
    indexLabel: '01 / 05',
    shortTitle: 'Defensoria Pública',
    categoryTag: 'ESTUDO DE CASO · PRODUCT DESIGN',
    title: 'Transformando dados institucionais em uma experiência integrada',
    introParagraphs: [
      'A Assessoria de Planejamento da Defensoria Pública da União precisava reunir indicadores e dados produzidos por unidades de todo o Brasil. O processo dependia de ferramentas de terceiros, exigia tratamento demorado e entregava uma experiência pouco intuitiva no ambiente interno.',
      'Entrei no projeto como estagiário de TI e passei a atuar em Product Design e Product Ownership ao lado da minha supervisora. Juntos, traduzimos necessidades institucionais em user stories, fluxos e interfaces para o Observatório Estratégico. Durante a licença-maternidade da supervisora, tornei-me o principal ponto de contato operacional da DPU com a equipe de desenvolvimento da SONDA.',
    ],
    bannerType: 'dpu',
    bannerTitle: 'Observatório Estratégico',
    bannerSubtitle: '',
    navLinks: [
      { number: '01', label: 'Contexto e desafio', targetId: 'case-sec-01' },
      { number: '02', label: 'Processo e decisões', targetId: 'case-sec-02' },
      { number: '03', label: 'Solução e experiência final', targetId: 'case-sec-03' },
      { number: '04', label: 'Resultados e aprendizados', targetId: 'case-sec-04' },
    ],
    summaryRow1: [
      {
        label: 'PAPEL',
        value: 'Product Designer e apoio de Product Owner, exercidos durante estágio de TI',
      },
      {
        label: 'EQUIPE',
        value: 'CIEST e ASPLAN/DPU, desenvolvedores e Scrum Master da SONDA',
      },
      {
        label: 'PERÍODO',
        value: '2022–2024',
      },
    ],
    summaryRow2: [
      {
        label: 'ESCOPO',
        value:
          'Discovery, arquitetura da informação, user stories, user flows, identidade visual, interfaces, prototipação, handoff, validação funcional e QA de design',
      },
      {
        label: 'FERRAMENTAS',
        value: 'Figma, Miro, Trello e Microsoft Teams',
      },
      {
        label: 'CONTEXTO',
        value: 'Plataforma institucional de visualização e administração de indicadores estratégicos',
      },
    ],
    sections: [
      {
        id: 'case-sec-01',
        heading: '01 / Contexto e desafio',
        paragraphs: [
          'A ASPLAN acompanha metas e indicadores usados para orientar e aferir o desempenho das unidades da DPU em território nacional. O volume e a diversidade desses dados faziam com que a equipe dependesse de diferentes ferramentas para receber, tratar, consolidar e publicar as informações. Além de demorado, o processo deixava o conteúdo pouco visível e difícil de acessar no sistema interno.',
          'O Observatório surgiu como uma iniciativa de modernização. A DPU contratou a SONDA para desenvolver a plataforma, mas o projeto não contava com um designer dedicado. Minha entrada na CIEST coincidiu com esse momento, e eu e minha supervisora assumimos a responsabilidade de estruturar a experiência do produto e representar as necessidades da organização junto ao desenvolvimento.',
          'O desafio era organizar diferentes áreas, indicadores, perfis de acesso e possibilidades de edição em uma experiência coerente, sem perder de vista as particularidades de quem produzia, administrava ou consultava os dados.',
        ],
      },
      {
        id: 'case-sec-02',
        heading: '02 / Processo e práticas de UX',
        paragraphs: [
          'Conduzi entrevistas semiestruturadas por videochamada com chefias de setores da ASPLAN. Eu partia de um roteiro breve, mas mantinha a conversa aberta para compreender tarefas, dúvidas e necessidades específicas. As principais preocupações envolviam acesso, edição e clareza na apresentação das informações.',
          'As descobertas eram transformadas em user stories no formato “Como [usuário], quero [necessidade] para [objetivo]”, associadas às telas e tarefas do backlog. Também construíamos user flows e critérios de aceite. No início das sprints, as histórias eram discutidas e estimadas com a equipe de desenvolvimento.',
          'O fluxo de trabalho conectava pesquisa e implementação: necessidade identificada, user story, fluxo, layout, handoff, desenvolvimento, validação e correção. Os materiais eram apresentados em reuniões pelo Teams e documentados no Miro e no Trello, incluindo orientações sobre estados, animações e comportamentos esperados.',
          'Durante a licença-maternidade da minha supervisora, passei a conduzir as reuniões recorrentes com a SONDA, entrevistar stakeholders, explicar layouts aos desenvolvedores, documentar validações e orientar a supervisão institucional responsável pelas aprovações formais.',
        ],
      },
      {
        id: 'case-sec-03',
        heading: '03 / Solução e experiência final',
        paragraphs: [
          'Criamos do zero a identidade e as interfaces do Observatório, usando as cores predominantes da comunicação oficial da DPU como referência de continuidade institucional.',
          'A plataforma passou a reunir áreas como identidade estratégica, indicadores, publicações, estatísticas por PAJs, iniciativas estratégicas, monitoramento do plano de integridade e gerenciamento de processos. Cards, carrosséis, filtros, tabelas e diferentes tipos de gráfico permitiam resumir grandes conjuntos de dados e aprofundar a consulta quando necessário.',
          'Uma necessidade identificada nas entrevistas levou à criação de cards em um carrossel navegável, com informações complementares apresentadas em modais. Como o conteúdo precisava ser atualizado pela própria organização, também desenhamos áreas administrativas para criação e edição dos indicadores e de outros elementos da plataforma.',
          'Após a implementação, eu verificava fidelidade visual, responsividade, dados, comportamentos e funcionamento das telas. Inconsistências eram registradas por escrito e em vídeos, encaminhadas à equipe de desenvolvimento e acompanhadas até a validação. Servidores também interagiam com o sistema e solicitavam alterações, novas telas ou mecanismos, alimentando ciclos adicionais de melhoria.',
        ],
        compactGallery: {
          kind: 'compact-5',
          main: {
            src: '/assets/dpu-ev-1-visao-geral.png',
            caption: 'Visão geral · ambiente de homologação',
          },
          secondary: [
            { src: '/assets/dpu-ev-2-carrossel.png', caption: 'Carrossel de indicadores' },
            { src: '/assets/dpu-ev-3-filtros.png', caption: 'Filtros e gráficos' },
            { src: '/assets/dpu-ev-4-admin.png', caption: 'Administração de conteúdo' },
            { src: '/assets/dpu-ev-5-qa.png', caption: 'QA e homologação' },
          ],
        },
      },
      {
        id: 'case-sec-04',
        heading: '04 / Resultados e aprendizados',
        paragraphs: [
          'Ao final do meu estágio, o Observatório havia evoluído de uma iniciativa em estruturação para uma plataforma ampla e funcional, próxima da conclusão. As correções restantes foram documentadas em texto e vídeo para facilitar a transição para a nova equipe.',
          'Minha atuação foi reconhecida pela comunicação, organização e capacidade de conduzir a participação da DPU no projeto. Mais do que desenhar telas, trabalhei como elo entre necessidades institucionais, experiência do usuário e implementação técnica.',
          'O projeto também marcou uma mudança importante na minha formação. Ainda no início da carreira, precisei dialogar e tomar decisões com profissionais de tecnologia muito mais experientes. Hoje, eu desenvolveria protótipos mais completos e estruturaria as etapas de Design Thinking e participação dos usuários de maneira mais sistemática. Essa percepção passou a orientar a forma como conduzo processos de produto: com maior clareza, documentação e centralidade nas pessoas.',
        ],
      },
    ],
  },
  {
    id: 'gui-reinke',
    indexLabel: '02 / 05',
    shortTitle: 'Gui Reinke',
    categoryTag: 'ESTUDO DE CASO · BRAND DESIGN',
    title: 'Transformando experiência esportiva em uma marca profissional',
    introParagraphs: [
      'Guilherme Reinke é técnico de vôlei certificado pela CBV no Nível II. Atua com adolescentes em treinos particulares, colégios e equipes próprias para campeonatos, além de oferecer preparação física, consultoria esportiva e acompanhamento voltado ao desempenho e à prevenção de lesões.',
      'Apesar da experiência profissional, sua comunicação ainda dependia do boca a boca. Não havia identidade visual, manual de marca ou um sistema coerente de divulgação. O principal material existente era um cartão criado com IA, com excesso de informações e pouca hierarquia.',
      'Em aproximadamente um mês, conduzi um processo de descoberta, posicionamento e construção visual. Estruturei personas e user stories, realizei uma auditoria competitiva, defini conceitos e referências, desenvolvi a logo e consolidei a identidade em um manual e em peças reutilizáveis para diferentes canais.',
    ],
    bannerType: 'gui-reinke',
    bannerTitle: 'Gui Reinke Vôlei',
    bannerSubtitle:
      'Uma identidade esportiva criada para comunicar alta performance, cuidado e confiança a jovens atletas e suas famílias.',
    navLinks: [
      { number: '01', label: 'Contexto e desafio', targetId: 'case-sec-01' },
      { number: '02', label: 'Pesquisa e definição estratégica', targetId: 'case-sec-02' },
      { number: '03', label: 'Conceito e construção da identidade', targetId: 'case-sec-03' },
      { number: '04', label: 'Sistema visual e aplicações', targetId: 'case-sec-04' },
      { number: 'E', label: 'Evidências selecionadas', targetId: 'case-sec-evidencias' },
      { number: '05', label: 'Resultados e continuidade', targetId: 'case-sec-05' },
    ],
    summaryRow1: [
      {
        label: 'PAPEL',
        value: 'Brand Designer, pesquisador e responsável pela direção visual',
      },
      {
        label: 'EQUIPE',
        value: 'Projeto conduzido diretamente com Guilherme Reinke como cliente',
      },
      {
        label: 'PERÍODO',
        value: '2026 — aproximadamente um mês',
      },
    ],
    summaryRow2: [
      {
        label: 'ESCOPO',
        value:
          'Discovery, públicos, personas, user stories, auditoria, posicionamento, moodboard, logo, sistema visual, manual e aplicações',
      },
      {
        label: 'FERRAMENTAS',
        value: 'Figma, Miro, Canva, Google Drive e planilha de auditoria competitiva',
      },
      {
        label: 'CONTEXTO',
        value: 'Identidade visual e comunicação para um treinador de vôlei e preparação esportiva',
      },
    ],
    sections: [
      {
        id: 'case-sec-01',
        heading: '01 / Contexto e desafio',
        paragraphs: [
          'Guilherme já possuía experiência, certificação e diferentes formatos de atendimento, mas esses atributos não estavam organizados em uma marca capaz de representá-lo. A divulgação acontecia principalmente por indicação, e os materiais existentes não transmitiam com clareza a qualidade, a personalização ou a amplitude do trabalho oferecido.',
          'O desafio não era apenas criar uma logo. Era construir uma linguagem que conversasse com dois grupos diferentes: adolescentes interessados em evolução esportiva, competição ou pertencimento e pais que precisavam perceber segurança, responsabilidade e profissionalismo antes de contratar o serviço.',
          'A identidade também precisava funcionar em contextos variados. Guilherme atende individualmente, trabalha com pequenos grupos, participa de projetos escolares e conduz equipes próprias. O sistema deveria preservar reconhecimento e coerência em peças informativas, anúncios, documentos e futuras extensões da marca.',
        ],
      },
      {
        id: 'case-sec-02',
        heading: '02 / Pesquisa e definição estratégica',
        paragraphs: [
          'Comecei pelo processo de empatia e pela organização das dores, objetivos e características do serviço. A partir dessas informações, formulei problem e hypothesis statements, defini públicos e criei personas primárias e secundárias.',
          'As personas representavam três necessidades centrais. Bernardo buscava acompanhamento profissional para evoluir e competir formalmente. Renata se interessava pelo vôlei como prática, convivência e estilo de vida. Jorge e Talita representavam os pais, preocupados com segurança, organização, disciplina e com o impacto positivo do esporte na vida dos filhos.',
          'Transformei essas necessidades em user stories para manter as decisões ligadas ao que cada público precisava experimentar: preparação técnica para competir, ambientação acolhedora para praticar o esporte e confiança para que os responsáveis apoiassem a participação dos adolescentes.',
          'Também realizei uma auditoria competitiva com referências diretas e indiretas do vôlei e do treinamento esportivo. Analisei autoridade, responsividade, quantidade de texto, navegação, apresentação de preços, identidade visual e clareza na apresentação do profissional. A pesquisa mostrou a importância de equilibrar energia e movimento com leitura rápida, transmitir autoridade sem criar uma comunicação distante e dar visibilidade ao treinador por trás do serviço.',
          'O moodboard reuniu referências de vôlei, marcas esportivas, páginas de treinadores e composições de alto contraste. Em paralelo, pesquisei códigos cromáticos associados ao esporte no Brasil e combinações atraentes para os jovens sem perder credibilidade diante dos pais.',
        ],
      },
      {
        id: 'case-sec-03',
        heading: '03 / Conceito e construção da identidade',
        paragraphs: [
          'O mapa mental conectou o trabalho de Guilherme a conceitos como personalização, disciplina, alta performance, cuidado físico, prevenção de lesões, acessibilidade, ensino, trabalho em equipe e pertencimento.',
          'A partir desses conceitos, desenhei diferentes possibilidades à mão. Os sketches exploraram o nome “Gui”, a letra G como estrutura principal, a presença de um atleta e a bola de vôlei como elemento de reconhecimento imediato. O objetivo não era transformar a marca em uma ilustração do esporte, mas integrar movimento e modalidade à própria construção tipográfica.',
          'Usei IA como apoio durante a exploração formal, sem transferir a ela a decisão de design. Selecionei as direções mais coerentes, refinei proporções, redesenhei os elementos e vetorizei integralmente a solução no Figma.',
          'Na versão final, a letra G estrutura o conjunto, enquanto a silhueta de um atleta em saque cria direção e dinamismo. A bola posicionada sobre a letra i reforça o vínculo com o vôlei. O lettering inclinado e expandido sustenta a percepção de velocidade, esforço e evolução.',
        ],
      },
      {
        id: 'case-sec-04',
        heading: '04 / Sistema visual e aplicações',
        paragraphs: [
          'O azul #274198 tornou-se a base da identidade por comunicar confiança e proximidade. O laranja #FB8303 acrescenta energia e movimento, enquanto o amarelo #FDC202 cria foco e remete diretamente ao universo visual do vôlei. O sistema é complementado pelo cinza-escuro #151515 e pelo branco suave #F9F9F9.',
          'A Geom foi escolhida para títulos, chamadas e destaques por sua construção geométrica e caráter dinâmico. A Work Sans funciona como tipografia complementar, garantindo legibilidade nos textos informativos e equilíbrio diante do peso visual dos títulos.',
          'Desenvolvi versões principal, secundária, vazada e reduzida da marca para assegurar aplicação sobre fundos claros, escuros, imagens e áreas de menor dimensão. Essas regras foram reunidas em um manual com posicionamento, missão, valores, conceito, tipografia, paleta e orientações de uso.',
          'A identidade foi aplicada em folder, cartão interativo, peças para WhatsApp, feed e stories do Instagram. Os materiais organizaram serviços, modalidades, preços e formas de contato em composições reutilizáveis. Ao final, entreguei os arquivos editáveis e as variações da marca pelo Google Drive, permitindo que Guilherme continuasse utilizando o sistema em diferentes canais.',
        ],
      },
    ],
    gridGallery: {
      kind: 'grid-9',
      title: 'Evidências selecionadas',
      subtitle:
        'Da definição dos públicos à aplicação comercial, os recortes abaixo documentam as decisões que estruturaram a marca.',
      items: [
        { src: '/assets/gui-ev-1-personas.png', caption: 'Personas e user stories' },
        { src: '/assets/gui-ev-2-moodboard.png', caption: 'Moodboard' },
        { src: '/assets/gui-ev-3-mapa-mental.png', caption: 'Mapa mental' },
        { src: '/assets/gui-ev-4-sketches.png', caption: 'Sketches iniciais' },
        { src: '/assets/gui-ev-5-evolucao-logo.png', caption: 'Evolução da logo no Figma' },
        { src: '/assets/gui-ev-6-sistema-logo.png', caption: 'Sistema de logo' },
        { src: '/assets/gui-ev-7-tipografia.png', caption: 'Tipografia' },
        { src: '/assets/gui-ev-8-paleta.png', caption: 'Paleta de cores' },
        { src: '/assets/gui-ev-9-feed.png', caption: 'Aplicação para feed' },
      ],
    },
    closingSection: {
      id: 'case-sec-05',
      heading: '05 / Resultados e continuidade',
      paragraphs: [
        'O projeto transformou uma comunicação fragmentada em uma identidade consistente e pronta para ser reutilizada. Guilherme passou a contar com uma marca própria, regras de aplicação e materiais adequados aos principais canais usados para apresentar seus serviços.',
        'Ao receber o projeto, ele relatou surpresa com a qualidade da entrega e avaliou que a nova identidade elevava o profissionalismo percebido de seu trabalho. Também manifestou interesse em manter a parceria e produzir novos designs posteriormente. Como reconhecimento pela entrega, presenteou-me ao final do processo.',
        'Sem atribuir ao projeto resultados comerciais que não foram medidos, o retorno do cliente demonstra valor percebido e aprovação do sistema criado. Para mim, o trabalho reforçou a importância de tratar branding como um processo centrado nas pessoas: compreender quem oferece o serviço, quem o contrata e quais sinais visuais ajudam esses públicos a construir confiança.',
      ],
    },
  },
  {
    id: 'sib-tabuleiro',
    indexLabel: '03 / 05',
    shortTitle: 'SIB Tabuleiro',
    categoryTag: 'ESTUDO DE CASO · UX/UI DESIGN E FRONT-END',
    title: 'Reorganizando a presença digital de uma comunidade',
    introParagraphs: [
      'A Segunda Igreja Batista do Tabuleiro mantinha suas informações em um site criado no Google Sites. Embora reunisse conteúdos importantes, a experiência tinha pouca personalização, não consolidava a identidade visual da igreja e organizava documentos segundo uma lógica mais burocrática do que centrada nas pessoas.',
      'Como membro da igreja e amigo do pastor há cerca de dez anos, transformei meu conhecimento da comunidade em ponto de partida para investigar o site anterior, levantar necessidades e analisar como outras igrejas estruturavam suas experiências digitais.',
      'Em aproximadamente duas semanas, planejei e executei sozinho arquitetura da informação, prototipação, interface, desenvolvimento front-end, acessibilidade, responsividade, validação e deploy.',
    ],
    bannerType: 'sib',
    bannerTitle: 'SIB Tabuleiro',
    bannerSubtitle: 'Site institucional acessível e responsivo para a comunidade.',
    navLinks: [
      { number: '01', label: 'Contexto e desafio', targetId: 'case-sec-01' },
      { number: '02', label: 'Processo e decisões', targetId: 'case-sec-02' },
      { number: '03', label: 'Solução e experiência final', targetId: 'case-sec-03' },
      { number: '04', label: 'Resultados e aprendizados', targetId: 'case-sec-04' },
    ],
    summaryRow1: [
      {
        label: 'PAPEL',
        value: 'UX/UI Designer e desenvolvedor front-end responsável pelo projeto completo',
      },
      {
        label: 'EQUIPE',
        value: 'Projeto individual, desenvolvido em diálogo e validado com o pastor e a comunidade',
      },
      {
        label: 'PERÍODO',
        value: 'Novembro de 2025 · aproximadamente duas semanas',
      },
    ],
    summaryRow2: [
      {
        label: 'ESCOPO',
        value:
          'Pesquisa contextual, auditoria competitiva, arquitetura da informação, prototipação, interface, desenvolvimento, acessibilidade, testes, refatoração e deploy',
      },
      {
        label: 'FERRAMENTAS',
        value: 'Figma, HTML, CSS, Tailwind CSS, JavaScript, GitHub e Vercel',
      },
      {
        label: 'CONTEXTO',
        value: 'Site institucional desenvolvido como projeto de extensão em Engenharia de Software',
      },
    ],
    sections: [
      {
        id: 'case-sec-01',
        heading: '01 / Contexto e desafio',
        paragraphs: [
          'O site anterior da SIB Tabuleiro havia sido montado no Google Sites. A solução cumpria uma função básica de armazenamento, mas não transmitia a identidade da igreja e apresentava informações com pouca hierarquia. Encontrar documentos, materiais de ensino ou conteúdos recorrentes exigia percorrer uma estrutura fragmentada e pouco intuitiva.',
          'O desafio era transformar esse repositório institucional em uma experiência realmente útil para visitantes, irmãos, professores da Escola Bíblica Dominical e participantes de Pequenos Grupos. Ao mesmo tempo, o site deveria preservar a identidade existente e transmitir o caráter familiar da SIB Tabuleiro.',
          'Minha proximidade com a comunidade acelerou o entendimento inicial, mas não substituiu a pesquisa. Analisei o site antigo, conversei com o pastor, observei necessidades dos irmãos e realizei uma auditoria de sites de outras igrejas.',
        ],
      },
      {
        id: 'case-sec-02',
        heading: '02 / Processo e práticas de UX',
        paragraphs: [
          'Comecei revisando a identidade visual, os requisitos já levantados e os ativos disponíveis. Em seguida, estudei o site antigo e comparei abordagens adotadas por outras igrejas para apresentar crenças, mensagens, atividades, materiais de ensino, localização e formas de contribuição.',
          'A principal decisão de arquitetura da informação aconteceu em Ensino. Crenças, catecismos, Escola Bíblica, Pequenos Grupos, planos de leitura e outros recursos estavam distribuídos entre diferentes páginas. Reuni esses conteúdos em uma experiência única, eliminando fragmentações e criando uma navegação coerente com as tarefas dos usuários.',
          'Também reorganizei a estrutura em quatro áreas: a página inicial apresenta a igreja e seus principais acessos; Ensino concentra crenças e materiais; Atividades comunica cultos e encontros; e Contribua reúne envelope, transferência e PIX. A lógica dos arquivos foi substituída pela lógica de uso.',
          'Depois da aprovação da base visual, organizei a implementação em ciclos curtos: issue, estrutura HTML, estilização, responsividade, interatividade, validação, refatoração e integração à branch principal.',
        ],
      },
      {
        id: 'case-sec-03',
        heading: '03 / Solução e experiência final',
        paragraphs: [
          'A igreja já possuía identidade visual. Minha responsabilidade foi consolidá-la no ambiente digital e aplicá-la de forma consistente às páginas, componentes e estados da interface. O azul institucional cria continuidade, enquanto fotografias reais aproximam a experiência das pessoas e evitam a aparência impessoal de uma plataforma administrativa.',
          'Na página de Atividades, diferentes frentes da igreja foram transformadas em cartões com público, dia e horário. Em Ensino, acordeões e abas reduzem a densidade aparente e permitem consultar materiais sem abandonar a página. Em Contribua, as opções são apresentadas lado a lado e o QR Code recebe destaque.',
          'Desenvolvi as páginas com HTML, Tailwind CSS compilado localmente e JavaScript. Implementei links para saltar ao conteúdo, atributos ARIA, navegação das abas por teclado, fechamento do menu móvel com Escape, devolução do foco e respeito à preferência por movimento reduzido.',
          'O repositório preserva 40 commits, 17 issues concluídas e 12 pull requests integradas. Ao final, refatorei o código, conectei a branch principal ao deploy da Vercel e produzi um vídeo de apresentação.',
        ],
        compactGallery: {
          kind: 'compact-5',
          main: {
            src: '/assets/sib-ev-1-home.png',
            caption: 'Home · comunidade e identidade',
          },
          secondary: [
            { src: '/assets/sib-ev-2-ensino.png', caption: 'Ensino · arquitetura' },
            { src: '/assets/sib-ev-3-atividades.png', caption: 'Atividades' },
            { src: '/assets/sib-ev-4-contribua.png', caption: 'Contribua' },
            { src: '/assets/sib-ev-5-responsividade.png', caption: 'Responsividade' },
          ],
        },
      },
      {
        id: 'case-sec-04',
        heading: '04 / Resultados e aprendizados',
        paragraphs: [
          'O projeto transformou uma estrutura genérica e pouco hierarquizada em um site próprio, responsivo e acessível. As informações passaram a refletir as necessidades da comunidade, e a identidade da igreja ganhou uma aplicação digital consistente, com uma atmosfera mais familiar do que burocrática.',
          'O pastor agradeceu pela facilidade com que os conteúdos foram reorganizados e destacou que as informações haviam se tornado mais acessíveis aos irmãos. O retorno valida especialmente as decisões de arquitetura da informação, hierarquia e clareza, sem atribuir ao site métricas que não foram acompanhadas.',
          'Entreguei também as orientações necessárias para a configuração do domínio. Como a reserva e a administração estavam sob responsabilidade do pastor, o apontamento final permaneceu com ele.',
          'O projeto consolidou um aprendizado: conhecer profundamente um contexto não elimina a necessidade de projetar de forma centrada no usuário. O conhecimento prévio acelera a descoberta; organização, validação e testes transformam familiaridade em uma experiência clara e útil.',
        ],
      },
    ],
  },
  {
    id: 'nova-cidade',
    indexLabel: '04 / 05',
    shortTitle: 'Nova Cidade',
    categoryTag: 'ESTUDO DE CASO · BRANDING E CONTEÚDO',
    title: 'Construindo uma marca e uma presença editorial desde o primeiro culto',
    introParagraphs: [
      'A Igreja Batista Nova Cidade iniciou sua plantação sem uma presença digital ou um sistema de comunicação consolidado. Desde o começo, assumi voluntariamente a coordenação da equipe criativa responsável por construir sua identidade e transformar atividades, crenças e relações comunitárias em uma comunicação reconhecível.',
      'Lidero mais dois voluntários na organização da identidade visual, da linha editorial e da produção de fotografias, avisos, carrosséis, stories e vídeos. Meu trabalho se concentra na direção do sistema, na distribuição das entregas e na produção audiovisual.',
      'Em aproximadamente um ano, o Instagram saiu de zero para quase 600 seguidores. O crescimento foi praticamente orgânico e transformou o perfil em um portal transparente sobre a vida, os valores e as atividades da comunidade.',
    ],
    bannerType: 'nova-cidade',
    bannerTitle: 'Igreja Batista Nova Cidade',
    bannerSubtitle: 'Identidade, conteúdo e liderança para uma igreja em formação.',
    navLinks: [
      { number: '01', label: 'Contexto e desafio', targetId: 'case-sec-01' },
      { number: '02', label: 'Processo e decisões', targetId: 'case-sec-02' },
      { number: '03', label: 'Solução e experiência final', targetId: 'case-sec-03' },
      { number: '04', label: 'Resultados e aprendizados', targetId: 'case-sec-04' },
    ],
    summaryRow1: [
      {
        label: 'PAPEL',
        value: 'Coordenador de Social Media, Brand Designer e editor audiovisual',
      },
      {
        label: 'EQUIPE',
        value: 'Equipe voluntária de três pessoas, liderada de forma colaborativa',
      },
      {
        label: 'PERÍODO',
        value: '2025–presente — aproximadamente um ano',
      },
    ],
    summaryRow2: [
      {
        label: 'ESCOPO',
        value:
          'Direção de marca, identidade visual, governança, estratégia editorial, fotografia, design gráfico, gestão de conteúdo, edição de vídeo, tratamento de cor e áudio',
      },
      {
        label: 'FERRAMENTAS',
        value: 'Trello, Canva, CapCut e Claude',
      },
      {
        label: 'CONTEXTO',
        value: 'Comunicação voluntária para uma igreja em processo de plantação e formação de comunidade',
      },
    ],
    sections: [
      {
        id: 'case-sec-01',
        heading: '01 / Contexto e desafio',
        paragraphs: [
          'A Nova Cidade começou sua história sem materiais, linguagem visual ou canais consolidados. A comunicação precisava nascer junto com a própria igreja e cumprir duas funções: formar uma identidade reconhecível para quem já participava e permitir que pessoas de fora compreendessem a comunidade antes de uma primeira visita.',
          'O desafio não era apenas publicar uma agenda. Precisávamos traduzir centralidade bíblica, simplicidade, contemporaneidade e acolhimento em um sistema visual consistente. O Instagram também deveria funcionar como um portal de informações, apresentando crenças, horários, localização, contribuições, Pequenos Grupos, conteúdos de ensino e a vida cotidiana da igreja.',
          'Como trabalho voluntário, a equipe precisava conciliar disponibilidade, diferentes especialidades e produção constante sem orçamento ou estrutura profissional dedicada. Minha função passou a ser criar sustentação para que o trabalho coletivo permanecesse organizado, coerente e sustentável.',
        ],
      },
      {
        id: 'case-sec-02',
        heading: '02 / Liderança e construção da marca',
        paragraphs: [
          'A equipe atual é formada por três pessoas. Uma voluntária trabalha principalmente com fotografias e avisos; outro integrante desenvolve carrosséis e artes mais elaboradas; eu coordeno o sistema e concentro a maior parte da produção audiovisual, além de criar fotografias, thumbnails e peças gráficas.',
          'Minha liderança não funciona como centralização permanente. Todos podem propor pautas, formatos e ideias. Organizo a distribuição das tarefas, preservo a coerência da comunicação e atuo como decisão final apenas quando existe desacordo.',
          'Na construção da marca, concebi a direção inicial da logo e do símbolo. Vinícius refinou a simetria, aplicou grids e produziu o manual de marca. O sistema utiliza marrom profundo, terracota, bege e cinza-claro; Montserrat nos títulos e mídias digitais; e Aptos em textos longos e documentos. O manual também define versões da assinatura, patterns, reduções, área de segurança, aplicações e usos indevidos.',
        ],
      },
      {
        id: 'case-sec-03',
        heading: '03 / Sistema editorial e produção audiovisual',
        paragraphs: [
          'Transformamos a marca em uma linha editorial capaz de acomodar registros fotográficos, avisos, conteúdos bíblicos, carrosséis de ensino, convites, programação e vídeos curtos sem perder reconhecimento. Os destaques organizam agenda, localização, crenças, contribuições, Pequenos Grupos e apresentação da igreja.',
          'O princípio de transparência orienta essa arquitetura: quem acessa o perfil deve compreender o que a igreja crê, quando se reúne, onde está e como sua comunidade vive. As peças funcionam como partes de um sistema de informação e relacionamento.',
          'No audiovisual, edito gravações das pregações, realizo tratamento de cor, trato e equalizo o áudio e seleciono trechos para Instagram e YouTube Shorts, adaptando ritmo, duração, enquadramento e legibilidade. Usamos Trello para pautas e tarefas, Canva para produção gráfica, CapCut para edição e Claude como apoio ao processo.',
        ],
        compactGallery: {
          kind: 'compact-5',
          main: {
            src: '/assets/nc-ev-1-coordenacao.png',
            caption: 'Sistema de logo',
          },
          secondary: [
            { src: '/assets/nc-ev-2-paleta.png', caption: 'Coordenação e linha editorial' },
            { src: '/assets/nc-ev-3-sistema-logo.png', caption: 'Aplicações da identidade' },
            { src: '/assets/nc-ev-4-aplicacoes.png', caption: 'Paleta da marca' },
            { src: '/assets/nc-ev-5-presenca-digital.png', caption: 'Presença digital' },
          ],
        },
      },
      {
        id: 'case-sec-04',
        heading: '04 / Resultados e aprendizados',
        paragraphs: [
          'Em aproximadamente um ano, construímos do zero uma identidade aplicada, uma rotina editorial e uma presença digital próxima de 600 seguidores. A captura selecionada registra 562 seguidores e 214 publicações. O crescimento foi cerca de 99% orgânico: houve impulsionamento somente durante um mês.',
          'As publicações alcançam milhares de visualizações, mas não mantivemos uma meta consolidada de engajamento; por isso, este case não atribui conversões ou percentuais não verificáveis. O resultado mais relevante é a proporção entre presença digital e comunidade local: uma igreja com 13 membros e cerca de 20 congregados passou a manter um canal informativo e editorial com alcance muito além do núcleo inicial.',
          'O projeto ampliou minha compreensão de liderança criativa. Manter consistência significa definir princípios claros, distribuir responsabilidades, permitir que diferentes pessoas proponham soluções e intervir quando a direção coletiva precisa ser preservada. Ao combinar branding, gestão de conteúdo e produção audiovisual, passei a tratar a identidade como uma infraestrutura viva, construída pela repetição coerente de decisões.',
        ],
      },
    ],
  },
  {
    id: 'este-portfolio',
    indexLabel: '05 / 05',
    shortTitle: 'Este Portfólio',
    categoryTag: 'ESTUDO DE CASO · UX/UI DESIGN E DESIGN SYSTEMS',
    title: 'Projetando um portfólio autoral como sistema de experiência',
    introParagraphs: [
      'Este portfólio começou como uma proposta visual autoral, construída com a metáfora de uma apresentação que sai de um envelope e de projetos organizados como uma pilha de cartas. O desafio foi transformar essa linguagem em uma experiência clara para recrutadores, capaz de comunicar rapidamente meu perfil e sustentar estudos de caso aprofundados.',
      'Conduzi auditoria competitiva, defini personas de recrutadores, revisei a identidade, estruturei a arquitetura da informação e desenvolvi no Figma um sistema de componentes, variantes, modais e interações. Também reuni evidências e redigi os cases com atenção à precisão das responsabilidades e dos resultados.',
      'Usei IA como assistência para acelerar análise, documentação, prototipação, automação e QA. O processo permaneceu sob minha direção: propostas que contrariavam a intenção do projeto foram avaliadas, rejeitadas e refeitas.',
    ],
    bannerType: 'portfolio',
    bannerTitle: 'Portfólio Kris Ribeiro',
    bannerSubtitle: 'Pesquisa, sistema e prototipação.',
    navLinks: [
      { number: '01', label: 'Contexto e desafio', targetId: 'case-sec-01' },
      { number: '02', label: 'Pesquisa, estratégia e identidade', targetId: 'case-sec-02' },
      { number: '03', label: 'Sistema, prototipação e IA assistiva', targetId: 'case-sec-03' },
      { number: '04', label: 'Resultado e próximos passos', targetId: 'case-sec-04' },
    ],
    summaryRow1: [
      {
        label: 'PAPEL',
        value: 'UX/UI Designer, pesquisador e responsável pelo sistema completo',
      },
      {
        label: 'EQUIPE',
        value: 'Projeto autoral com IA como assistência de análise, documentação e prototipação',
      },
      {
        label: 'PERÍODO',
        value: '2026 — projeto em evolução',
      },
    ],
    summaryRow2: [
      {
        label: 'ESCOPO',
        value:
          'Pesquisa, estratégia de conteúdo, identidade visual, arquitetura da informação, design system, prototipação, interação, movimento, acessibilidade planejada, curadoria e redação dos cases',
      },
      {
        label: 'FERRAMENTAS',
        value: 'Figma e ferramentas de IA para análise, documentação, automação e QA',
      },
      {
        label: 'CONTEXTO',
        value:
          'Portfólio profissional para oportunidades em UX/UI, design de produto e desenvolvimento front-end',
      },
    ],
    sections: [
      {
        id: 'case-sec-01',
        heading: '01 / Contexto e desafio',
        paragraphs: [
          'O projeto partiu de um portfólio visualmente reconhecível, mas ainda incompleto como experiência profissional. Havia uma identidade baseada em laranja, marfim e marrom, um hero com vídeo e a metáfora de cartas empilhadas. Faltavam estudos de caso estruturados, estados de interação claros, modais, conteúdo verificável e uma especificação capaz de orientar a futura implementação.',
          'O principal público são recrutadores e profissionais de produto e tecnologia. Esse público precisa identificar rapidamente minhas competências, mas também deve conseguir aprofundar-se no processo quando a vaga exigir pesquisa, design systems, prototipação, colaboração ou execução técnica.',
          'O desafio foi equilibrar leitura rápida, profundidade e autoria sem permitir que as metáforas visuais ou o movimento dificultassem a seleção dos cases e a leitura.',
        ],
      },
      {
        id: 'case-sec-02',
        heading: '02 / Liderança e construção da marca',
        paragraphs: [
          'Comecei com uma auditoria competitiva de portfólios e referências de interação. Observei como outros profissionais organizavam apresentação, navegação, estudos de caso e chamadas para ação. A partir disso, defini personas e necessidades de recrutadores, considerando tanto a leitura rápida quanto a avaliação detalhada de processo e resultados.',
          'Consolidei um sistema baseado no laranja mandarim #EB6637, no marfim #FEFCF7 e no marrom #2B1406. A Montserrat tornou-se a tipografia operacional, e a estrutura espacial utiliza uma base de 8 px com ajustes ópticos.',
          'A arquitetura foi organizada em duas camadas: a página principal apresenta identidade, perfil e seleção dos projetos; cada projeto abre um case com resumo, responsabilidades, processo, solução, evidências e aprendizados.',
        ],
      },
      {
        id: 'case-sec-03',
        heading: '03 / Sistema editorial e produção audiovisual',
        paragraphs: [
          'No Figma, transformei a seção de projetos em um conjunto de componentes e variantes. A lista controla uma pilha de cartas com hierarquia fixa: ao avançar, cartas superiores desaparecem e o projeto revelado ocupa a posição principal; ao retornar, as cartas reaparecem em ordem. Também foi planejado um estado de movimento reduzido.',
          'Cada projeto recebeu capa e banner próprios. O modal foi construído como template reutilizável, com cabeçalho persistente, rolagem interna, campos parametrizados, galeria de evidências e índice com links para as seções.',
          'A IA atuou como assistência para analisar o arquivo, documentar decisões, organizar evidências, redigir versões iniciais e automatizar tarefas repetitivas. Quando uma proposta aplicou fundos brancos indevidos às cartas, criou um CTA com aparência de botão ou interpretou incorretamente a hierarquia da animação, corrigi o direcionamento e reconstruí a solução.',
        ],
        compactGallery: {
          kind: 'compact-5',
          main: {
            src: '/assets/port-ev-1-antes.png',
            caption: 'Seleção interativa dos projetos',
          },
          secondary: [
            { src: '/assets/port-ev-2-sistema.png', caption: 'Portfólio antes da revisão' },
            { src: '/assets/port-ev-3-selecao.png', caption: 'Template reutilizável dos cases' },
            { src: '/assets/port-ev-4-template.png', caption: 'Sistema visual inicial' },
            { src: '/assets/port-ev-5-indice.png', caption: 'Índice e leitura longa' },
          ],
        },
      },
      {
        id: 'case-sec-04',
        heading: '04 / Resultado, aprendizados e próximos passos',
        paragraphs: [
          'O protótipo desktop passou a reunir cinco projetos, capas próprias, seleção interativa, estados suaves e reduzidos, modal reutilizável, galerias de evidências e índices internos. Os cases anteriores foram construídos por entrevistas, documentação, seleção de materiais e redação orientada ao que recrutadores precisam compreender sobre processo, responsabilidade e resultado.',
          'O principal aprendizado foi perceber que um portfólio também é um produto: possui públicos, tarefas, hierarquia, estados, restrições e critérios de qualidade. A expressão visual cria reconhecimento, mas a clareza da informação e a coerência das interações determinam se essa identidade ajuda alguém a avaliar meu trabalho.',
          'O projeto ainda não possui testes com recrutadores, métricas de conversão ou uma versão publicada em código. As próximas etapas são finalizar fades e transições, criar comportamentos responsivos, implementar semântica e gerenciamento de foco, testar teclado e redução de movimento e desenvolver a versão front-end.',
        ],
      },
    ],
  },
];

export const ROTATING_WORDS = ['designer', 'parceiro', 'colega', 'analista'] as const;
export const CURRICULO_URL =
  'https://drive.google.com/file/d/1WFQ0rubxB9a-nbbVy4gOoNHzP-8fs75z/view?usp=sharing';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kristhianribeiro';
