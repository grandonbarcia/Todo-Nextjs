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