import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { getAllTodos } from './data-access/todos';
import { deleteTodoAction } from './actions';
import { unstable_noStore } from 'next/cache';

export default async function TodoList() {
  unstable_noStore();
  const todos = await getAllTodos();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center gap-2 w-[200px] mb-6"
          >
            <Checkbox checked={todo.complete} />
            <div>{todo.content}</div>
            <form action={deleteTodoAction.bind(null, todo.id)}>
              <Button>Delete</Button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
