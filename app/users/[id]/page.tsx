'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function UserDetail({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: user, isLoading } = useQuery({
    queryKey: ['user', params.id],
    queryFn: async () => {
      const response = await fetch(`/api/users/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => router.push('/users')}
      >
        Back to Users
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Name</h3>
            <p>{user.name}</p>
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <p>{user.email}</p>
          </div>
          <div>
            <h3 className="font-medium">Phone Number</h3>
            <p>{user.phoneNumber}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}