export const FACTORY_NAME: Record<number, string> = {
  1: 'А',
  2: 'Б',
};

export const formatFactoryName = (id: number) =>
  `Фабрика ${FACTORY_NAME[id] || 'без имени'}`;
