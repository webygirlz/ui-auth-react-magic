import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
const AuthForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const {
    login,
    signup,
    isLoading
  } = useAuth();
  const {
    toast
  } = useToast();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(loginData.email, loginData.password);
    if (success) {
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in."
      });
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signup(signupData.name, signupData.email, signupData.password);
    if (success) {
      toast({
        title: "Account created!",
        description: "Your account has been created successfully."
      });
    } else {
      toast({
        title: "Signup failed",
        description: "Please check your information and try again.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">hello</CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="transition-all">Login</TabsTrigger>
              <TabsTrigger value="signup" className="transition-all">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="login-email" type="email" placeholder="Enter your email" value={loginData.email} onChange={e => setLoginData({
                    ...loginData,
                    email: e.target.value
                  })} className="pl-10 transition-all focus:ring-2 focus:ring-blue-500" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="login-password" type="password" placeholder="Enter your password" value={loginData.password} onChange={e => setLoginData({
                    ...loginData,
                    password: e.target.value
                  })} className="pl-10 transition-all focus:ring-2 focus:ring-blue-500" required />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" disabled={isLoading}>
                  {isLoading ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </> : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="signup-name" type="text" placeholder="Enter your full name" value={signupData.name} onChange={e => setSignupData({
                    ...signupData,
                    name: e.target.value
                  })} className="pl-10 transition-all focus:ring-2 focus:ring-purple-500" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="signup-email" type="email" placeholder="Enter your email" value={signupData.email} onChange={e => setSignupData({
                    ...signupData,
                    email: e.target.value
                  })} className="pl-10 transition-all focus:ring-2 focus:ring-purple-500" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="signup-password" type="password" placeholder="Create a password" value={signupData.password} onChange={e => setSignupData({
                    ...signupData,
                    password: e.target.value
                  })} className="pl-10 transition-all focus:ring-2 focus:ring-purple-500" required />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105" disabled={isLoading}>
                  {isLoading ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </> : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>;
};
export default AuthForm;