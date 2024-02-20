import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { prisma } from '../../prisma/client';
import { createTodoAction } from './actions';
import { CreateTodoForm } from './create-todo-form';

export function TodoForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Keep Track of Your Daily Tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <CreateTodoForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
