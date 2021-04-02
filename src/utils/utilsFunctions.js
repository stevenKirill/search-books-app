export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
export const generateYears = () => Array.from({length: 100}, (_,i) => 1910 + i);
export const generatePages = () => Array.from({length: 500}, (_,i) => ++i);