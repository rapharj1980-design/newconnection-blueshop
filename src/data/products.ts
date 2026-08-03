export type Produto = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  categoria: string;
};

export const categorias = [
  "Fones de Ouvido",
  "Áudio & Som",
  "Carregadores & Energia",
  "Cabos & Adaptadores",
  "Suportes & Capas",
  "Informática & Gamer",
  "Casa & Utilidades",
  "JBL",
  "Relógios & Wearables",
] as const;

export const produtos: Produto[] = [
  {
    "id": 1,
    "nome": "Caixa de Som GOLD",
    "preco": "R$ 199,00",
    "descricao": "Tempo de carregamento: 3h. Potência de saída: 2x15W. Tempo de trabalho (volume médio): 8-10h. Capacidade de bateria: 4500mAh. Resposta de frequência: 30-18kHz. Suporte: BT, USB, TF, TWS, AUX. Formato de áudio: WAV/MP3. Capacidade máxima suportada: 64GB",
    "categoria": "Áudio & Som"
  },
  {
    "id": 2,
    "nome": "G SPEAKER Smart Station / Luminária / Caixa de Som / Carregador",
    "preco": "R$ 99,00",
    "descricao": "Peça multifuncional e moderna que une design e funcionalidade. Estilo minimalista e elegante. Carregamento por indução: basta colocar o smartphone na base e o carregamento inicia automaticamente. Equipada com caixa de som nítida e potente.",
    "categoria": "Áudio & Som"
  },
  {
    "id": 3,
    "nome": "Caixa de Som Portátil SM-38",
    "preco": "R$ 59,00",
    "descricao": "Som potente de 360°, fácil de transportar, IPX5 resistente à água. Carregamento tipo C, rádio FM, pen drive, cartão TF. Tempo de música: cerca de 3 a 6 horas (volume 80%)",
    "categoria": "Áudio & Som"
  },
  {
    "id": 4,
    "nome": "Cabo de Carga Turbo Tipo C CB145-3",
    "preco": "R$ 9,00",
    "descricao": "Cabo tipo C, modelo CB145-3. Comprimento 1m. Suporta carregamento turbo 20W",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 5,
    "nome": "Cabo de Dados PEINING PEI-J80",
    "preco": "R$ 14,90",
    "descricao": "Modelo PEI-J80. Comprimento 1 metro, saída máxima 65W",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 6,
    "nome": "Cabo de Dados PEINING PEI-J125-5",
    "preco": "R$ 16,90",
    "descricao": "Modelo PEI-J125-5. Comprimento 2m, saída máxima 60W",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 7,
    "nome": "Fone de Ouvido Multi-função",
    "preco": "R$ 9,90",
    "descricao": "Microfone multi-função (celular, MP3/MP4, Pad, microfone)",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 8,
    "nome": "Fone Wireless Neckband HWAVE",
    "preco": "R$ 65,00",
    "descricao": "Bateria do fone 50mAh. Estojo de recarga 500mAh. Carregamento USB Type-C / 5V / 1A",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 9,
    "nome": "Fones Bluetooth KIMASTER",
    "preco": "R$ 55,00",
    "descricao": "Versão BT 5.3. Sensibilidade do drive 107dB. Carregamento USB-C. Tempo de carga aprox. 1h30. Peso 46g. Atende chamadas telefônicas, microfone embutido, magnético",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 10,
    "nome": "Power Bank 10000mAh",
    "preco": "R$ 85,00",
    "descricao": "Carregador portátil de alta capacidade para manter seus aparelhos sempre com energia.",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 11,
    "nome": "Power Bank Compacto",
    "preco": "R$ 55,00",
    "descricao": "Carregador portátil compacto, ideal para o dia a dia.",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 12,
    "nome": "Ultra Power Carregador Portátil",
    "preco": "R$ 120,00",
    "descricao": "Carregador portátil de alta performance com múltiplas saídas.",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 13,
    "nome": "Kit Carregador (iOS)",
    "preco": "R$ 16,00",
    "descricao": "Entrada 110V-240V. Saída DC 5V=1A, 9V, 12V=2A, 30W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 14,
    "nome": "Kit Carregador + Cabo Type-C",
    "preco": "R$ 20,00",
    "descricao": "Entrada 100V-240V. Saída 5V - 3,1A máx",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 15,
    "nome": "Carregador Rápido Dual USB (PEINING)",
    "preco": "R$ 18,00",
    "descricao": "Potência 12W. Saída 2.4A. Entrada AC 100-240V. Comprimento 1m",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 16,
    "nome": "Fonte de Carregador (PEINING)",
    "preco": "R$ 16,90",
    "descricao": "Entrada 100-240V / 50-60Hz. Saída 5.0V = 3.1A. Potência 15W. Múltiplas proteções de circuito. Cabo com cabeça tipo C",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 17,
    "nome": "Kit Carregador Tipo-C (LEONG)",
    "preco": "R$ 22,00",
    "descricao": "Sistema de proteção inteligente. Carregamento rápido e seguro. Anti-interferência. Saída 3,1A máximo. Dual USB",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 18,
    "nome": "Kit Carregador LEONG V8",
    "preco": "R$ 16,90",
    "descricao": "Sistema de proteção inteligente. Carregamento rápido e seguro. Anti-interferência. Saída 3,1A máximo. Dual USB",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 19,
    "nome": "Cabo USB Dados C-C IT-BLUE",
    "preco": "R$ 22,00",
    "descricao": "60W. Marca IT-BLUE",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 20,
    "nome": "Cabo de Carga Turbo (PEINING)",
    "preco": "R$ 12,00",
    "descricao": "PD 20W. Comprimento 1 metro",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 21,
    "nome": "Cabo Metálico de Dados PEI-J121",
    "preco": "R$ 18,00",
    "descricao": "Marca PEINING, modelo PEI-J121. Comprimento 1 metro. Tipo C / i6. Suporta carregamento turbo 30W",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 22,
    "nome": "Fone de Ouvido de Silicone Tipo-C (Android)",
    "preco": "R$ 15,00",
    "descricao": "Alta fidelidade de som. Design ergonômico. Conector tipo-C",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 23,
    "nome": "Cabo de Carregamento Múltiplo 3 em 1 H'MASTON",
    "preco": "R$ 14,00",
    "descricao": "Potência máxima 3.1A. Cabo universal três em um rápido. Marca H'MASTON, modelo EJ-121. Comprimento 1.2m",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 24,
    "nome": "Leitor de Cartão de Memória (PEINING)",
    "preco": "R$ 16,00",
    "descricao": "Sistemas suportados: Windows 7/8/10/Vista/XP/2000, Mac OS 9.0 ou superior. Transferência de dados rápida. Leitor de cartão Micro SD",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 25,
    "nome": "Cabo Tipo C para Tipo C (H'MASTON)",
    "preco": "R$ 18,00",
    "descricao": "Cabo de dados e carregamento super rápido de 60W. Marca H'MASTON. Comprimento 1 metro",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 26,
    "nome": "Fones de Ouvido P2 (KIMASTER)",
    "preco": "R$ 14,00",
    "descricao": "P2. Atende chamadas telefônicas. Microfone embutido. Controle de volume. Som de alta definição",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 27,
    "nome": "Adaptador Lightning Dual (IT-BLUE)",
    "preco": "R$ 28,00",
    "descricao": "Ouça música e carregue seu aparelho ao mesmo tempo!",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 28,
    "nome": "Adaptador Lightning para P2 (LEONG)",
    "preco": "R$ 18,00",
    "descricao": "Marca LEONG, modelo L-80. Áudio auxiliar com mudança automática",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 29,
    "nome": "Cabo Tipo C para Tipo C (PEINING)",
    "preco": "R$ 18,00",
    "descricao": "Carregamento rápido. Potência 60W. Marca PEINING",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 30,
    "nome": "Cabo USB para Tipo C (IT-BLUE)",
    "preco": "R$ 12,00",
    "descricao": "Comprimento 1 metro. Marca IT-BLUE. Dados rápidos e carregamento",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 31,
    "nome": "Carregador Rápido de Parede Tipo C (KIMASTER)",
    "preco": "R$ 28,00",
    "descricao": "Tipo C + USB. Entrada 100-240V. Saída USB 5V. Saída Type-C 5V. Potência máxima 20W. Sinalizador em LED",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 32,
    "nome": "Carregador Rápido de Parede Dual USB (KIMASTER)",
    "preco": "R$ 22,00",
    "descricao": "Dual USB. Entrada 100-240V. Saída 5V. Sinalizador em LED. Carregamento rápido",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 33,
    "nome": "Carregador Rápido Duas Saídas USB Y38-1 (IT-BLUE)",
    "preco": "R$ 18,00",
    "descricao": "Saída 5V = 3.1A máx. Bivolt automático 100-240V. Modelo Y38-1",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 34,
    "nome": "Carregador Rápido Duas Saídas USB Y38-2 (IT-BLUE)",
    "preco": "R$ 18,00",
    "descricao": "Saída 5V = 3.1A máx. Bivolt automático 100-240V. Modelo Y38-2",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 35,
    "nome": "Carregador de Bateria Universal (IT-BLUE)",
    "preco": "R$ 14,00",
    "descricao": "Bivolt automático. Compatível com qualquer bateria de celular. Indicador de carga, tela LCD, parada automática quando totalmente carregado",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 36,
    "nome": "Carregador Turbo Tipo C (KAPBOM)",
    "preco": "R$ 29,90",
    "descricao": "Marca KAPBOM, modelo KA-5003. Tipo-C. Entrada 100V-240V. Saída turbo 5V. Potência 20W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 37,
    "nome": "Carregador Veicular Ultra Rápido (PEINING)",
    "preco": "R$ 38,00",
    "descricao": "Saídas Type-C / USB. Compatível com diversos dispositivos. Tensão de saída 12V-24V. Carregamento rápido de 38W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 38,
    "nome": "Cabo Áudio P2 1,8m (IT-BLUE)",
    "preco": "R$ 12,00",
    "descricao": "Conector P2. Cabo reforçado de silicone",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 39,
    "nome": "Máquina de Corte M3 (TOMATE)",
    "preco": "R$ 39,90",
    "descricao": "Lâmina ultra afiada. Design ergonômico. Acessórios completos: pentes de corte, escova de limpeza e cabo tipo C. Bateria de longa duração",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 40,
    "nome": "Mini Processador de Alimentos Elétrico (IT-BLUE)",
    "preco": "R$ 35,00",
    "descricao": "Facilitador na cozinha! Capacidade 250ml. Recarregável. Tensão 3.7V. Potência 45W. Lâminas de aço inoxidável",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 41,
    "nome": "Fone de Ouvido EXBOM",
    "preco": "R$ 15,00",
    "descricao": "Marca EXBOM. Diâmetro do alto-falante 10mm. Frequência 20-20.000Hz. Plugue 3,5mm P2. Cabo 1,2m. Atende chamadas",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 42,
    "nome": "Suporte Veicular Retrátil",
    "preco": "R$ 28,00",
    "descricao": "Rotação 360°, multi-ângulo. Fixação em painel, vidro ou saída de ar. Material resistente ABS. Ventosa de silicone gel. Regulagem de largura e altura",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 43,
    "nome": "Fone Via Bluetooth TWS (KIMASTER)",
    "preco": "R$ 68,00",
    "descricao": "Resistente à água e suor. TWS - fones independentes. Sensor de toque. Carregamento via USB-C. Autonomia até 20 horas. Atende chamadas",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 44,
    "nome": "Lâmpada Caixa de Som (TOMATE)",
    "preco": "R$ 39,90",
    "descricao": "Marca TOMATE. Entrada 100V-240V. Resposta de frequência 135Hz-15kHz. Diversas cores. Acompanha controle remoto. Conecte via Bluetooth",
    "categoria": "Áudio & Som"
  },
  {
    "id": 45,
    "nome": "Kit Garrafa Térmica de Café",
    "preco": "R$ 80,00",
    "descricao": "Acompanha 2 xícaras de 280ml. Garrafa com 900ml. Aço inoxidável. Tampa com vedação em silicone. Bebidas quentes ou geladas",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 46,
    "nome": "Fone de Ouvido P2 (ALTOMEX)",
    "preco": "R$ 12,00",
    "descricao": "Conector P2. Compatível com celulares, computadores, tablets e dispositivos com saída P2. Atende chamadas",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 47,
    "nome": "Fonte de Carregador de Parede Ultra Rápido (PEINING)",
    "preco": "R$ 30,00",
    "descricao": "Tipo-C e USB, duas saídas. Bivolt automático 100V-240V. Potência máxima turbo 30W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 48,
    "nome": "Carregador Sem Fio por Indução (PEINING)",
    "preco": "R$ 48,00",
    "descricao": "Saída máxima 15W. Fast charge padrão QI. Compatível com dispositivos com carregamento sem fio. Acompanha cabo tipo C",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 49,
    "nome": "Fones de Ouvido Via Bluetooth (LEONG)",
    "preco": "R$ 48,00",
    "descricao": "Versão Bluetooth 5.3. Tempo de carregamento aprox. 1.5h. Autonomia até 4-5 horas. Entrada tipo C. Sensor de toque. Áudio em alta definição",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 50,
    "nome": "Caixinha de Som Portátil S215 (TOMATE)",
    "preco": "R$ 38,00",
    "descricao": "Marca TOMATE, modelo S215. Conexão Bluetooth. Entradas USB, cartão TF e rádio FM. Resistente e compacta. Acompanha cabo de carregamento",
    "categoria": "Áudio & Som"
  },
  {
    "id": 51,
    "nome": "Cabo de Carregamento Tipo C / Type C PEI-J125 (PEINING)",
    "preco": "R$ 14,00",
    "descricao": "Modelo PEI-J125. Comprimento 1 metro. Suporta carregamento turbo de 60W. Cabo de tecido reforçado",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 52,
    "nome": "Máquina Dragon DR-1 para Corte e Barba",
    "preco": "R$ 35,00",
    "descricao": "Acompanha 4 pentes de corte, pincel de limpeza, óleo lubrificante e carregador. Bateria recarregável. Corpo em metal. Lâminas de aço inoxidável",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 53,
    "nome": "Suporte Veicular para Celular PEI-350 (PEINING)",
    "preco": "R$ 22,00",
    "descricao": "Modelo PEI-350. Fixação na saída de ar. Rotação 360°. Trava automática ao encaixar o celular. Compatível com diversos tamanhos",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 54,
    "nome": "Fones de Ouvido Headset Via Bluetooth (IT-BLUE)",
    "preco": "R$ 65,00",
    "descricao": "Conexão Bluetooth, entrada auxiliar P2, rádio FM e cartão de memória. Carregamento tipo-C. Almofadas confortáveis e haste regulável. Bateria de longa duração",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 55,
    "nome": "Mini Ventilador Portátil de Mão/Mesa",
    "preco": "R$ 25,00",
    "descricao": "Recarregável via USB. Níveis de velocidade. Acompanha base para mesa e cabo de carregamento. Silencioso e leve",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 56,
    "nome": "Cabo Tipo C para Lightning (iOS) PEINING",
    "preco": "R$ 16,00",
    "descricao": "Suporta carregamento turbo PD 20W. Comprimento 1 metro. Revestido em material durável trançado. Dados e carregamento de alta velocidade",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 57,
    "nome": "Cabo HDMI 2.0 4K (IT-BLUE)",
    "preco": "R$ 18,00",
    "descricao": "Comprimento 1,8 metros. Resolução até 4K Ultra HD. Conectores banhados a ouro. Áudio e vídeo de alta qualidade",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 58,
    "nome": "Lâmpada LED de Emergência Recarregável",
    "preco": "R$ 28,00",
    "descricao": "Potência 20W. Recarregável via USB. Acompanha gancho. Modos alta, baixa e piscante (SOS). Ideal para acampamentos e emergências",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 59,
    "nome": "Fone de Ouvido P2 com Microfone (PEINING)",
    "preco": "R$ 12,00",
    "descricao": "Plugue P2 3.5mm. Atende chamadas telefônicas. Microfone integrado. Som estéreo de alta qualidade",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 60,
    "nome": "Repetidor e Amplificador de Sinal Wi-Fi",
    "preco": "R$ 49,90",
    "descricao": "Aumenta o alcance da sua rede Wi-Fi. Fácil configuração. Bivolt automático (110V-220V). Até 300Mbps. Compatível com qualquer roteador",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 61,
    "nome": "Carregador de Bateria de Carro e Moto 12V",
    "preco": "R$ 89,00",
    "descricao": "Carregador e mantenedor inteligente. Tela digital com indicador de tensão e carga. Proteção contra curto-circuito e inversão de polaridade. Desligamento automático",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 62,
    "nome": "Kit Ferramentas para Manutenção de Celular",
    "preco": "R$ 38,00",
    "descricao": "Conjunto com diversas ponteiras de precisão. Acompanha pinça, espátulas e ventosa. Ideal para celulares, tablets, óculos e eletrônicos",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 63,
    "nome": "Microfone de Lapela Bluetooth Tipo-C (KAPBOM)",
    "preco": "R$ 39,90",
    "descricao": "Plug and play. Receptor tipo-C. Bateria recarregável de longa duração. Redução inteligente de ruído. Ideal para vídeos, lives e aulas",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 64,
    "nome": "Microfone de Lapela Bluetooth Lightning (KAPBOM)",
    "preco": "R$ 45,00",
    "descricao": "Plug and play para dispositivos iOS (iPhone/iPad). Bateria recarregável de longa duração. Redução inteligente de ruído. Captação 360 graus",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 65,
    "nome": "Suporte de Mesa para Celular e Tablet",
    "preco": "R$ 15,00",
    "descricao": "Totalmente dobrável e portátil. Ângulo regulável. Base antiderrapante. Compatível com diversos tamanhos",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 66,
    "nome": "Controle Remoto Universal para TV Smart",
    "preco": "R$ 22,00",
    "descricao": "Fácil programação. Compatível com as principais marcas. Funciona com 2 pilhas AAA. Alcance de até 10 metros",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 67,
    "nome": "Mouse Sem Fio Bluetooth Recarregável (PEINING)",
    "preco": "R$ 35,00",
    "descricao": "Conexão dual: Bluetooth e receptor USB 2.4G. Bateria recarregável via tipo-C. Clique silencioso e design ergonômico. DPI ajustável (800/1200/1600)",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 68,
    "nome": "Teclado e Mouse Sem Fio Slim (IT-BLUE)",
    "preco": "R$ 75,00",
    "descricao": "Conexão sem fio via receptor USB único. Teclas macias e silenciosas. Padrão ABNT2. Design slim. Compatível com PC, notebook e smart TV",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 69,
    "nome": "Hub USB 3.0 com 4 Portas (PEINING)",
    "preco": "R$ 28,00",
    "descricao": "Multiplica 1 porta USB em 4 portas USB 3.0. Até 5Gbps. Chave liga/desliga individual com LED. Plug and play",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 70,
    "nome": "Cabo Extensão USB 3.0 de 1,5m",
    "preco": "R$ 15,00",
    "descricao": "Comprimento 1,5 metros. Padrão USB 3.0 de alta velocidade. Ideal para estender mouse, teclado, pendrive e eletrônicos",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 71,
    "nome": "Adaptador OTG Tipo-C para USB 3.0 (PEINING)",
    "preco": "R$ 12,00",
    "descricao": "Conecte pendrives, mouse e teclados em celulares com entrada tipo-C. Corpo compacto em alumínio. Transmissão rápida. Plug and play",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 72,
    "nome": "Adaptador OTG Lightning para USB (IT-BLUE)",
    "preco": "R$ 18,00",
    "descricao": "Conecte pendrive, teclado ou câmera em dispositivos iOS. Transmissão de fotos, vídeos e arquivos. Corpo compacto e resistente",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 73,
    "nome": "Mesa Digitalizadora Compacta",
    "preco": "R$ 89,00",
    "descricao": "Acompanha caneta sensível à pressão. Ideal para aulas online, desenhos digitais e assinaturas eletrônicas. Compatível com Windows, Mac e Android",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 74,
    "nome": "Webcam Full HD 1080p com Microfone",
    "preco": "R$ 65,00",
    "descricao": "Resolução Full HD 1080p. Microfone com redução de ruído. Clipe de fixação para monitor e notebook. Plug and play via USB",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 75,
    "nome": "Ring Light de Mesa 10\" com Tripé",
    "preco": "R$ 48,00",
    "descricao": "Iluminação LED com 3 tonalidades (branco frio, quente e misto). Controle de intensidade. Suporte articulado para celular. Alimentação via USB",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 76,
    "nome": "Tripé Profissional para Celular e Câmera 1,20m",
    "preco": "R$ 38,00",
    "descricao": "Altura máxima 1,20 metros. Acompanha suporte para celular. Cabeça articulada com nível de bolha. Pernas em alumínio",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 77,
    "nome": "Capa Impermeável para Celular",
    "preco": "R$ 10,00",
    "descricao": "Proteção contra água, poeira e areia. Tela sensível ao toque. Acompanha cordão de segurança. Compatível com celulares de até 6.7 polegadas",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 78,
    "nome": "Cartão de Memória Micro SD 32GB Classe 10",
    "preco": "R$ 28,00",
    "descricao": "Capacidade 32GB. Classe 10 - alta velocidade. Acompanha adaptador SD. Compatível com celulares, câmeras e caixas de som",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 79,
    "nome": "Cartão de Memória Micro SD 64GB Classe 10",
    "preco": "R$ 38,00",
    "descricao": "Capacidade 64GB. Classe 10 - alta velocidade. Acompanha adaptador SD. Compatível com celulares, câmeras e gravadores",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 80,
    "nome": "Pendrive 32GB USB 2.0 (MULTILASER)",
    "preco": "R$ 28,00",
    "descricao": "Capacidade 32GB. Leitura rápida de dados. Design compacto e resistente. Compatível com computadores, TVs e som automotivo",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 81,
    "nome": "Pendrive 64GB USB 3.0 (SANDISK)",
    "preco": "R$ 48,00",
    "descricao": "Capacidade 64GB. Conexão USB 3.0 de alta velocidade. Design retrátil sem tampa. Compatível com Windows e Mac",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 82,
    "nome": "Fone de Ouvido Gamer com LED e Microfone",
    "preco": "R$ 78,00",
    "descricao": "Iluminação LED RGB. Conector P2 + USB para os LEDs. Almofadas auriculares macias. Microfone com cancelamento de ruído",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 83,
    "nome": "Mouse Gamer RGB 3200 DPI",
    "preco": "R$ 32,00",
    "descricao": "Iluminação RGB com efeitos de cores. Botões laterais de atalho. Resolução ajustável até 3200 DPI. Cabo trançado de alta resistência",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 84,
    "nome": "Mousepad Gamer Extra Grande 70x30cm",
    "preco": "R$ 35,00",
    "descricao": "Tamanho 70cm x 30cm. Superfície speed em tecido suave. Base emborrachada antiderrapante. Borda costurada",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 85,
    "nome": "Suporte para Notebook com Cooler",
    "preco": "R$ 58,00",
    "descricao": "Ajuste de inclinação ergonômico. Cooler silencioso com iluminação LED. Conexão via USB. Compatível com notebooks de até 17 polegadas",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 86,
    "nome": "Alarme e Sensor de Presença Sem Fio",
    "preco": "R$ 35,00",
    "descricao": "Fácil instalação sem fio. Alcance de detecção de até 8 metros. Sonora alta para segurança residencial ou comercial. Alimentação por pilhas",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 87,
    "nome": "Caminha para Pets de Pequeno Porte",
    "preco": "R$ 42,00",
    "descricao": "Material lavável e resistente. Macio e confortável para cães e gatos. Proporciona aconchego ao seu pet",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 88,
    "nome": "Máquina de Tosa para Pets Recarregável",
    "preco": "R$ 48,00",
    "descricao": "Acompanha 4 pentes de altura, pincel e lubrificante. Bateria recarregável de longa duração. Motor silencioso. Lâmina em cerâmica e inox",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 89,
    "nome": "Balança Digital de Cozinha 10kg",
    "preco": "R$ 22,00",
    "descricao": "Capacidade máxima de 10kg. Precisão de 1g. Função tara. Desligamento automático. Alimentação por pilhas AA",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 90,
    "nome": "Balança Digital Corporal de Banheiro",
    "preco": "R$ 45,00",
    "descricao": "Capacidade máxima 180kg. Vidro temperado de alta resistência. Visor digital de fácil leitura. Liga e desliga automaticamente",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 91,
    "nome": "Lanterna Tática LED de Alta Potência",
    "preco": "R$ 38,00",
    "descricao": "Corpo em alumínio aeroespacial. Foco regulável com sistema zoom. Recarregável via USB. Acompanha bateria recarregável e cordão de pulso",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 92,
    "nome": "Kit de Chaves de Precisão Fenda e Philips",
    "preco": "R$ 18,00",
    "descricao": "Estojo com diversos tamanhos. Ponteiras magnéticas em aço CR-V. Ideal para reparos em óculos, relógios e eletrônicos",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 93,
    "nome": "Cabo de Força para Fonte de PC e TV",
    "preco": "R$ 12,00",
    "descricao": "Comprimento 1,2 metros. Padrão brasileiro de 3 pinos. Compatível com computadores, impressoras e monitores. Material reforçado",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 94,
    "nome": "Fones SOUNDWAVE K8",
    "preco": "R$ 110,00",
    "descricao": "Conexão sem fio e rádio FM. Alças ajustáveis com espumas ergonômicas e confortáveis. Bateria de lítio recarregável, entrada USB-C. Microfone embutido com função de chamadas",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 95,
    "nome": "Fone Wireless B-MAX",
    "preco": "R$ 35,00",
    "descricao": "Bluetooth 5.3 com alcance de até 10 metros. Até 12 horas de reprodução contínua e carga completa em 2 horas via USB-C. Entrada para cartão SD e conector P2 3.5mm. Design ergonômico e controles integrados. Compatível com iOS e Android",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 96,
    "nome": "Headphone Wireless K9",
    "preco": "R$ 99,00",
    "descricao": "Conexão sem fio, rádio FM e controle de volume. Alças ajustáveis com espumas ergonômicas. Bateria de lítio recarregável. Entrada auxiliar P2 e slot para cartão microSD. Microfone embutido",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 97,
    "nome": "Fones de Ouvido Sem Fio Wireless 40mm",
    "preco": "R$ 149,00",
    "descricao": "Bluetooth 5.0, alcance de 10m. Alto-falante de 40mm. Suporta cartão TF de 128MB a 32GB. Até 45h de música e conversa. Carregamento em 1,5h. Rádio FM 87.5-108MHz. Bateria de lítio de 400mAh",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 98,
    "nome": "Cabo de Dados PEI-J113-5 (PEINING)",
    "preco": "R$ 12,50",
    "descricao": "Modelo PEI-J113-5. Comprimento 1 metro. Saída máxima de 60W. Sincronização de dados e carregamento rápido",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 99,
    "nome": "Cabo Micro USB Turbo 1m",
    "preco": "R$ 9,90",
    "descricao": "Comprimento 1 metro. Carregamento turbo, 5x mais resistente. Sincronização de dados e carregamento",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 100,
    "nome": "Cabo Lightning Turbo 1m",
    "preco": "R$ 9,90",
    "descricao": "Comprimento 1 metro. Carregamento turbo, 5x mais resistente. Sincronização de dados e carregamento para dispositivos iOS",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 101,
    "nome": "Cabo Micro USB CB715 1m",
    "preco": "R$ 5,00",
    "descricao": "Modelo CB715. Comprimento 1 metro. Cabo micro USB para carregamento e transferência de dados",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 102,
    "nome": "Luminária Decorativa de Mesa",
    "preco": "R$ 35,00",
    "descricao": "Luminária decorativa de mesa. Luz ambiente para quarto, sala ou escritório. Design moderno e compacto",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 103,
    "nome": "Garrafa Térmica 1,5L",
    "preco": "R$ 50,00",
    "descricao": "Capacidade de 1,5 litro. Mantém a temperatura de bebidas quentes ou geladas por horas. Ideal para casa, trabalho e viagens",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 104,
    "nome": "Aparador de Pelos do Nariz e Contorno 2 em 1",
    "preco": "R$ 39,90",
    "descricao": "Material ABS. Potência 2W. Bateria de 350mAh recarregável via USB. Duas funções: aparador de pelos do nariz e acabamento de contorno",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 105,
    "nome": "JBL FLIP 7",
    "preco": "R$ 750,00",
    "descricao": "Caixa de som Bluetooth portátil JBL FLIP 7 com som JBL Pro Sound, graves potentes e resistência à água e poeira.",
    "categoria": "JBL"
  },
  {
    "id": 106,
    "nome": "JBL CLIP 5",
    "preco": "R$ 399,00",
    "descricao": "Caixa de som compacta JBL CLIP 5 com mosquetão integrado, som potente e resistência à água. Perfeita para levar a qualquer lugar.",
    "categoria": "JBL"
  },
  {
    "id": 107,
    "nome": "JBL CHARGE 6",
    "preco": "R$ 999,00",
    "descricao": "Caixa de som JBL CHARGE 6 com bateria de longa duração, powerbank integrado e som JBL Pro Sound de alta potência.",
    "categoria": "JBL"
  },
  {
    "id": 108,
    "nome": "Caixa de Som Portátil Series Mode",
    "preco": "R$ 99,00",
    "descricao": "Series Mode , potencia de saida , recurso de alarme, monitoramento de temperatura. modelo SM-55 15W alta potencia, radio FM, pen drive resistente a água, cartão TF.",
    "categoria": "Áudio & Som"
  },
  {
    "id": 109,
    "nome": "Localizador iTag Bluetooth",
    "preco": "R$ 39,00",
    "descricao": "Localizador iTag Bluetooth",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 110,
    "nome": "Mini Smart Watch RL-33",
    "preco": "R$ 199,00",
    "descricao": "Mini Smart Watch RL-33",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 111,
    "nome": "Alexa Echo Show 5",
    "preco": "R$ 770,00",
    "descricao": "Alexa Echo Show 5",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 112,
    "nome": "Caixa de Som 80W",
    "preco": "R$ 429,90",
    "descricao": "Caixa de Som 80W",
    "categoria": "Áudio & Som"
  },
  {
    "id": 113,
    "nome": "Tripé Profissional para Smartphone com Controle Remoto",
    "preco": "R$ 149,00",
    "descricao": "ALÇA DE BALANCEAMENTO EXPANDA A BRAÇADEIRA DUPLA CONTROLE REMOTO ROTAÇÃO DE 360 QUADRAPÉ ESTAVEL LIGA DE ALUMÍNIO",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 114,
    "nome": "Copo Beer Pints 360ml",
    "preco": "Sob consulta",
    "descricao": "Copo da beer pints de 360ml",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 115,
    "nome": "Chaleira Elétrica com Base de Energia",
    "preco": "R$ 79,00",
    "descricao": "Chaleira Elétrica com Base de Energia",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 116,
    "nome": "Bomba de Ar Inteligente Sem Fio",
    "preco": "R$ 130,00",
    "descricao": "CARRO MOTOCICLETAS BICICLETAS BOLA DE FUTEBOL",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 117,
    "nome": "Fone KAIDI TWS Gamer com Cancelamento de Ruído",
    "preco": "R$ 79,00",
    "descricao": "Fone KAIDI TWS Gamer com Cancelamento de Ruído",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 118,
    "nome": "JBL GO 5",
    "preco": "R$ 359,00",
    "descricao": "JBL GO 5",
    "categoria": "JBL"
  },
  {
    "id": 119,
    "nome": "Caixa de Som Master Som IPX6",
    "preco": "R$ 115,00",
    "descricao": "Master som, microfone, atende chamada telefonicas , wireless, IPX6 resitente a água, ate 10 horas, entrada micro SD, entrada USB, RADIO FM. 1",
    "categoria": "Áudio & Som"
  },
  {
    "id": 120,
    "nome": "Caixa de Som HREBOS PREMIUM 40W",
    "preco": "R$ 145,00",
    "descricao": "Potência de saída: 40W Capacidade de bateria:3600mAh versão bluetooth: V5.3 Duração da Bateria: 3-4H Classificação à prova d´água: IPX4 1",
    "categoria": "Áudio & Som"
  },
  {
    "id": 121,
    "nome": "Capa iPhone 15",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 122,
    "nome": "Massage Gun - Massageador de Terapia Percussiva",
    "preco": "R$ 59,90",
    "descricao": "MASSAGE GUN E UM DISPOSITIVO DE TERAPIA PERCUSSIVA. ELA USA VIBRAÇÕES RAPIDAS PARA SOLTAR MÚSCULOS TENSOS,MELHORAR O FLUXO DE SANGUE E ACELERAR A RECUPERAÇÃO APÓS EXERCICIOS FISICOS. CONTEM;4 PONTEIRAS DIFERENTES PARA ATINGIR PARTES ESPECIFICAS DO CORPO! PONTEIRA REDONDA: IDEAL PARA GRANDES GRUPOS MUSCULARES(COMO COXAS E GLÚTEOS) PONTEIRA PLANA: IDEAL PARA ÁREAS PLANAS E RELAXAMENTO GERAL. PONTEIRAS BALA(FORMATO DE ÁRVORE):IDEAL PARA PONTOS DE GATILHO PROFUNDOS E NÓS MUSCULARES. PONTO EM ''U'' ARCO: IDEAL PARA A COLUNA,PESCOÇO E TENDÃO E AQUILES.",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 123,
    "nome": "Massageador Portátil",
    "preco": "R$ 79,00",
    "descricao": "Massageador Portátil",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 124,
    "nome": "Suporte para Tablet Dobrável Multifunções",
    "preco": "R$ 79,00",
    "descricao": "ROTAÇÃO DE 360 AJUSTE DE 180 TABLETS TELEFONES CELULARES DENTRO DE 12 POLEGADAS",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 125,
    "nome": "Mouse Sem Fio",
    "preco": "R$ 25,00",
    "descricao": "Mouse Sem Fio",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 126,
    "nome": "Fone de Ouvido Sem Fio KAIDI",
    "preco": "R$ 59,00",
    "descricao": "Fone de Ouvido Sem Fio KAIDI",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 127,
    "nome": "Microfone Duplo de Lapela",
    "preco": "R$ 99,00",
    "descricao": "Microfone Duplo de Lapela",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 128,
    "nome": "Fonte de Alimentação 15W",
    "preco": "R$ 15,00",
    "descricao": "PROTEÇÃO DE SOBRECORRENTE PROTEÇÃO CONTRA CURTO-CIRCUITO PROTEÇÃO SOBRE TENSÃO PROTEÇÃO DE TEMPERATURA",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 129,
    "nome": "Processador de Alimentos Manual",
    "preco": "R$ 14,90",
    "descricao": "VEGETAIS CARNES ALHO PIMENTAS",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 130,
    "nome": "Caixa de Som Karaokê 10W RMS",
    "preco": "R$ 89,00",
    "descricao": "Conexão , blueconnect 5.3 potencia máxima 10W RMS bateria caixa de som 1.200mah bateria de microfone 500mah tamanho; 143x68x87mm. peso 405g ,funções-blueconnect, microfone , radio FM ,USB,cartão TF e aux,modo USB e TF ate 32gb.",
    "categoria": "Áudio & Som"
  },
  {
    "id": 131,
    "nome": "Capa iPhone 15 Pro Max",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 132,
    "nome": "Suporte para Laptop",
    "preco": "R$ 25,00",
    "descricao": "MATERIA DO PRODUTO;liga, metalica+ silicone , peso do produto; 361g, cor do produto; preto , e prata!",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 133,
    "nome": "Cortador de Cabelos Sem Fio",
    "preco": "R$ 59,00",
    "descricao": "Material; abs+metal, potencia; 5w, velocidade de motor:6000-6500 rpm, voltagem:5v-1A bateria:1200mah , tempo de carregamento: tipo-C 2HORAS, TEMPO DE USO:150 MINUTOS.",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 134,
    "nome": "Carregador Veicular Turbo PD+QC Auto ID 38W",
    "preco": "R$ 25,00",
    "descricao": "TURBO 38W POTÊNCIA TIPO LIGHTNING",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 135,
    "nome": "Kit de Gravação 4 em 1",
    "preco": "R$ 49,00",
    "descricao": "CONTEM; soquete de microfone de 3,5 mm, sapata com parafuso de de 1/4 , interface principal, apoio de Mao, LED 49R controle remoto!",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 136,
    "nome": "Smart Watch RL-11",
    "preco": "R$ 189,00",
    "descricao": "Smart Watch RL-11",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 137,
    "nome": "Fonte de Alimentação 25W",
    "preco": "R$ 25,90",
    "descricao": "Fonte de Alimentação 25W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 138,
    "nome": "Balança Digital Personalizada",
    "preco": "R$ 79,00",
    "descricao": "ALTA PRECISÃO PELO SISTEMA DE SENSOR VIDRO TEMPERADO:6MM CAPACIDADE 2,5-180Kg DISPLAY:4 DIGITOS LCD POT~ENCIA:1,5 2AAA BATERIA DESLIGAMENTO DEPOIS DE 10 SEGUNDOS",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 139,
    "nome": "Capa iPhone 17 Pro Max (PEINING)",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 140,
    "nome": "Suporte de Celular para Carro",
    "preco": "R$ 19,90",
    "descricao": "Suporte de Celular para Carro",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 141,
    "nome": "Capa iPhone 16 Pro Max",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 142,
    "nome": "Smart Watch RL-13",
    "preco": "R$ 189,00",
    "descricao": "Smart Watch RL-13",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 143,
    "nome": "Smart Watch RL-34",
    "preco": "R$ 149,00",
    "descricao": "Smart Watch RL-34",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 144,
    "nome": "Ultra Power Carregador Portátil 10000mAh",
    "preco": "R$ 95,00",
    "descricao": "Ultra Power Carregador Portátil 10000mAh",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 145,
    "nome": "Smart Watch RL-10",
    "preco": "R$ 199,00",
    "descricao": "Smart Watch RL-10",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 146,
    "nome": "Capas Coloridas para Celular",
    "preco": "R$ 15,00",
    "descricao": "IPHONES14,15,16,17 SAMSUNG A06 5G A07 A16 A17 A25 A36 A37 A56 A57 A54 A56 S26 26PRO S23,S3 ULTRA S26 ULTRA S25 FE MOTORO LA G05 G34 G35 M26a EDGE 50 EDGE 60PRO EDGE 70 FUSION G67,77 G",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 147,
    "nome": "Capas Transparentes para Celular",
    "preco": "R$ 10,00",
    "descricao": "IPHONES 15,16,17 E 17 PRO MAX S26 ULTRA, A17, M17, A26 5G,A36,A37 5G , A57 5G ,",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 148,
    "nome": "Mixer Portátil 3 Velocidades",
    "preco": "R$ 49,00",
    "descricao": "RESISTENCIA LONGA, AJUSTE DE 3 VELOCIDADES MOLA PRA ESPUMA",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 149,
    "nome": "Fone LEHMOX E-Sports Auricular Gamer",
    "preco": "R$ 69,00",
    "descricao": "Fone LEHMOX E-Sports Auricular Gamer",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 150,
    "nome": "Kit Carregador Veicular Tipo-C 60W",
    "preco": "R$ 25,00",
    "descricao": "ENTRADA: DC12-24V SAIDA: DC5V=5.1A 60W",
    "categoria": "Carregadores & Energia"
  },
  {
    "id": 151,
    "nome": "Fone de Ouvido de Capacete Bluetooth",
    "preco": "R$ 99,00",
    "descricao": "Fone de Ouvido de Capacete Bluetooth",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 152,
    "nome": "Garrafa Térmica 1000ml BM-P1530",
    "preco": "R$ 49,00",
    "descricao": "1000 ML BM-P1530",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 153,
    "nome": "Capa iPhone 16",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 154,
    "nome": "Moedor de Café Portátil Recarregável",
    "preco": "R$ 99,00",
    "descricao": "COM BATERIA RECARREGAVELO COM CHAVE DE OPERAÇÃO COM BOTÃO ANTIRUIDO FORTE DURAÇÃO DE BATERIA",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 155,
    "nome": "Cabo de Dados 2 em 1 CB113",
    "preco": "R$ 15,00",
    "descricao": "MODELO; CB113 , COMPRIMENTO;1 METRO FUNÇÃO; SUPORTA CARREGAMENTO TURBO 30W/60W (MAX)",
    "categoria": "Cabos & Adaptadores"
  },
  {
    "id": 156,
    "nome": "Copo Stainless Steel",
    "preco": "R$ 39,90",
    "descricao": "Copo Stainless Steel",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 157,
    "nome": "Temporizador com Indução por Gravidade",
    "preco": "R$ 69,00",
    "descricao": "Temporizador com Indução por Gravidade",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 158,
    "nome": "Bolsa Térmica",
    "preco": "R$ 39,00",
    "descricao": "Bolsa Térmica",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 159,
    "nome": "Capas Pretas para Celular",
    "preco": "R$ 15,00",
    "descricao": "IPONES 14,15,16,17 SAMSUNG A06 5G A07 A16 A17 A25 A36 A37 A56 A57 A54 A56 S26 26PRO S26 ULTRA S25 FE MOTOROLA G05 G34 G35 M26a EDGE 50 EDGE 60PRO EDGE 70 FUSION G67,77 G",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 160,
    "nome": "Copo Stainless 1200ml Inoxidável",
    "preco": "Sob consulta",
    "descricao": "COPO DE 1200ML INOXIDAVEL DE QUALIDADE ALIMENTAR!",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 161,
    "nome": "Caixa de Som KIMASTER IPX6",
    "preco": "R$ 179,00",
    "descricao": "Microfone embutido Atende chamadas telefônicas Wireless IPX6 resistente á água até 10 horas entrada micro SD Entrada USB Rádio FM",
    "categoria": "Áudio & Som"
  },
  {
    "id": 162,
    "nome": "Fone de Ouvido Gamer",
    "preco": "R$ 65,00",
    "descricao": "Fone de Ouvido Gamer",
    "categoria": "Fones de Ouvido"
  },
  {
    "id": 163,
    "nome": "Suporte Veicular Magnético para Celular",
    "preco": "R$ 15,00",
    "descricao": "Suporte Veicular Magnético para Celular",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 164,
    "nome": "Capa iPhone 17",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 165,
    "nome": "Capa iPhone Pro",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 166,
    "nome": "Mini Smart Watch RL-12",
    "preco": "R$ 179,00",
    "descricao": "Mini Smart Watch RL-12",
    "categoria": "Relógios & Wearables"
  },
  {
    "id": 167,
    "nome": "Microfone de Lapela",
    "preco": "R$ 69,00",
    "descricao": "Microfone de Lapela",
    "categoria": "Informática & Gamer"
  },
  {
    "id": 168,
    "nome": "Capa iPhone 17 Pro",
    "preco": "R$ 39,00",
    "descricao": "CORES AZUL MARINHO,BEGE,PRETO,CINZA,LARANJA E MARRON",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 169,
    "nome": "Barbeador e Aparador 3 em 1",
    "preco": "R$ 79,00",
    "descricao": "APARADOR DE PELOS DO NARIZ E CONTORNO E CABELO/ LAMINA DE BARBEAR 3 EM 1, MOTOR DE ALTA POTENCIA 6800RPM, 3D SISTEMA INDENPENDENTE DE FECHAMENTO FRONTAL DE 360 GRAUS, BATERIA 500MAH!",
    "categoria": "Casa & Utilidades"
  },
  {
    "id": 170,
    "nome": "Suporte de Celular Projetado para o Carro",
    "preco": "R$ 19,00",
    "descricao": "Suporte de Celular Projetado para o Carro",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 171,
    "nome": "Suporte para Celular",
    "preco": "R$ 25,90",
    "descricao": "Suporte para Celular",
    "categoria": "Suportes & Capas"
  },
  {
    "id": 172,
    "nome": "Power Bank (PEINING)",
    "preco": "R$ 70,00",
    "descricao": "Power Bank (PEINING)",
    "categoria": "Carregadores & Energia"
  }
];
