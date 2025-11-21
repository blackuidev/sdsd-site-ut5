import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/hooks/use-toast';
import { getUserProfile, updateUserProfile } from '@/services/userService';
import { User } from '@/types/user';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (err) {
        setError('Failed to fetch user profile.');
        console.error(err);
        toast({
          title: 'Error',
          description: 'Failed to load profile data.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => (prevUser ? { ...prevUser, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSaving(true);
    setError(null);
    try {
      const updatedUser = await updateUserProfile(user);
      setUser(updatedUser);
      toast({
        title: 'Success',
        description: 'Your profile has been updated.',
        variant: 'default',
      });
    } catch (err: any) {
      setError('Failed to update profile: ' + err.message);
      console.error(err);
      toast({
        title: 'Error',
        description: 'Failed to update profile data: ' + err.message,
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>No user data found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">User Profile</CardTitle>
          <CardDescription>Manage your account information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={isSaving}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled={isSaving}
              />
            </div>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
