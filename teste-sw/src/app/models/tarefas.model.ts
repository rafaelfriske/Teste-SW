export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string | Date;
  status: 'pending' | 'completed'; // Definido como union type específico
  createdAt: Date; // Removido o ? para tornar obrigatório
}