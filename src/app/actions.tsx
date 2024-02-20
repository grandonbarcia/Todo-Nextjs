'use server';

import { revalidatePath } from 'next/cache';
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
  revalidatePath('/');
}

export async function deleteTodoAction(id: number) {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath('/');
}
