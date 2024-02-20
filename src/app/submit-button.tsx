'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button>{pending ? 'Creating Todo...' : 'Create Todo'}</Button>;
}
