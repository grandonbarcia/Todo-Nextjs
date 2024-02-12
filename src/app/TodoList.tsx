import { Button } from '@/components/ui/button';
import { prisma } from '../../prisma/client';
import { getAllTodos } from './data-access/todos';

export default async function TodoList() {
  const todos = await getAllTodos();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.content}</li>
            <form>
              <Button>Delete</Button>
            </form>
          </>
        ))}
      </ul>
    </>
  );
}
