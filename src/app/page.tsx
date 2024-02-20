import { TodoForm } from '@/app/TodoForm';
import Image from 'next/image';
import TodoList from './TodoList';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-10 p-24">
      <TodoForm />
      <TodoList />
    </main>
  );
}
