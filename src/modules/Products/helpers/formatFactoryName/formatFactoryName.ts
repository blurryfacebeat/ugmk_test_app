export const FACTORY_NAME: Record<number, string> = {
  1: 'А',
  2: 'Б',
};

export const formatFactoryName = (
  id: number,
  alternativeText: boolean = false,
) => `Фабрик${alternativeText ? 'и' : 'а'} ${FACTORY_NAME[id] || 'без имени'}`;
