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

export function TodoForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Keep Track of Your Daily Tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="TodoForm" action={createTodoAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Todo</Label>
              <Input id="name" name="content" placeholder="Name of your Todo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Complete</Label>
              <Select name="complete">
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="Yes">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="TodoForm">Add</Button>
      </CardFooter>
    </Card>
  );
}
