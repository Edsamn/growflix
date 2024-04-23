const movies = [
  {
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
    title: "Growcast #00 - Conheça a Growdev",
    link: "aJ-HZuLcKeA",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
    title: "Growcast #01 - As profissões do futuro",
    link: "7OWT3lfHYvE",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
    title: "Growcast #02 - Como seguir a carreira internacional?",
    link: "ci1eQGPK89o",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
    title: "Growcast #03 - Superando os desafios da carreira de Dev!",
    link: "WM7pGG7OicQ",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
    title: "Growcast #04 - Agile Master: tudo sobre a profissão!",
    link: "2c8VOBZ160Y",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
    title: "Growcast #5 - Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "mxnEm03cYPc",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
    title: "Growcast #06 - Mulheres e inclusão na tecnologia",
    link: "m7DyR07KrOE",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
    title: "Growcast #07 - Desenvolvendo profissionais na área de TI",
    link: "vW8G9KPwRL0",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
    title: "Growcast #8 - A solução que está transformando o mercado de TI no Brasil",
    link: "_Ut2KqAqPyk",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
    title: "Growcast #9 - Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI",
    link: "dfDgs0Ive2Q",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "WKbLXuP9S-c",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "dJ6y1zMjVXU",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "8rdJsqUjsGg",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "C4p_7qBsECw",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "L1pKoMC6hWk",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "FiZMowbaiJA",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
    title: "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "cwqDu0ZzbYE",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
    title: "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "ZMZjQ9aRuIY",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
    title: "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "8sd3wuKTZMA",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
    title: "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "-26aqPtgoEY",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
    title: "Célula de talentos - Uma solução Growdev",
    link: "QsuhYgsSYQo",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
    title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "ouDn8z3PSqs",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
    title: "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "cQDQNX6NXYo",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    link: "nKGbolkirBM",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
    title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    link: "6sZPsqNjeek",
    category: "geral",
  },
];
