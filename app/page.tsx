import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">User Management System</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/create">Create User</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/users">View All Users</Link>
        </Button>
      </div>
    </div>
  );
}