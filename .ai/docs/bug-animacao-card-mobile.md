# Bug Report: Animação do Card de Índice 2 em Telas Pequenas

## Descrição do Problema

Ao acessar o site em dispositivos com telas pequenas (ex: celulares), o card de índice 2 (ServicesCard) localizado em `#services-card-container` dentro do arquivo `components/layout/portfolio-layout.tsx` inicia sua animação de entrada mesmo quando não está visível na viewport.

## Causa Provável

O hook `useScrollListAnimation` está sendo utilizado para animar os cards conforme entram na tela. No entanto, em layouts responsivos (mobile), a altura da tela pode ser pequena o suficiente para que apenas o primeiro card esteja visível, mas todos os cards são renderizados no DOM. Se o hook não verifica corretamente a visibilidade real do elemento (por exemplo, usando Intersection Observer ou checando bounding rect), ele pode disparar a animação para todos os cards assim que a página carrega, independentemente de estarem visíveis.

## Possível Origem do Bug

- O hook pode estar disparando a animação baseado apenas no mount dos elementos, e não na real entrada na viewport.
- O cálculo de visibilidade pode não considerar corretamente o contexto de telas pequenas.
- O uso de stagger pode mascarar o problema em telas maiores, mas em telas pequenas todos os cards podem ser animados em sequência logo no carregamento.

## Evidências

- O card de índice 2 anima mesmo sem estar visível em mobile.
- O problema não ocorre em telas grandes, onde todos os cards estão visíveis ao carregar.

## Próximos Passos Sugeridos

- Investigar a implementação do hook `useScrollListAnimation`.
- Garantir que a animação só seja disparada quando o elemento realmente entrar na viewport (ex: Intersection Observer API).
- Testar o comportamento em diferentes tamanhos de tela após ajuste.

---

Arquivo analisado: `components/layout/portfolio-layout.tsx`
