'use client';
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

import { createTodoAction } from './actions';
import { SubmitButton } from './submit-button';
import { z } from 'zod';

const TodoSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, {
      message: 'Todo Content must be at least 1 character long',
    })
    .max(10, {
      message: 'Todo Content must be at most 100 character long',
    }),
  complete: z.boolean(),
});

export function CreateTodoForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const newTodo = {
          // content: formData.get('content'),
          // complete: formData.get('complete'),
        };

        const result = TodoSchema.safeParse(newTodo);

        if (!result.success) {
          let errorMessage = '';
          console.log(result.error.issues);
          result.error.issues.forEach((issue) => {
            errorMessage =
              errorMessage + issue.path[0] + ': ' + issue.message + '. ';
          });
        }

        // createTodoAction(formData).then(() => {
        //   form.reset;
        // });
      }}
    >
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
        <SubmitButton />
      </div>
    </form>
  );
}
