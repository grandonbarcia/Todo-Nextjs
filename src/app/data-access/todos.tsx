import { prisma } from '../../../prisma/client';

export async function getAllTodos() {
  return await prisma.todo.findMany();
}
