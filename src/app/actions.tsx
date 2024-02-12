'use server';

import { prisma } from '../../prisma/client';

export async function createTodoAction(formData: FormData) {
  const text = formData.get('content') as string;
  const complete = formData.get('complete') === 'Yes' ? true : false;
  await prisma.todo.create({
    data: {
      content: text,
      complete: complete,
    },
  });
}

export async function deleteTodoAction(formData: FormData) {
  const id = formData.get('todoId');
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
}
