import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Activity, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 border-b border-border">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-primary" />
            <span className="text-xl font-semibold text-foreground">Organ Donation System</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/auth")}>
            Sign In / Register
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Connecting Lives Through Organ Donation
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A platform connecting patients, donors, and healthcare professionals to save lives.
          </p>
          <Button size="lg" onClick={() => navigate("/auth")}>
            Get Started
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="bg-secondary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">For Patients</CardTitle>
              <CardDescription>
                Register your organ requirements and connect with donors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Add organ requirements</li>
                <li>• Browse available donors</li>
                <li>• Direct contact with donors</li>
                <li>• Track requirement status</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-secondary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">For Donors</CardTitle>
              <CardDescription>
                Help save lives by registering as an organ donor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Search for patients in need</li>
                <li>• View detailed requirements</li>
                <li>• Contact patients directly</li>
                <li>• Make a difference</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-secondary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">For Doctors</CardTitle>
              <CardDescription>
                Oversee and manage the donation process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• View all patients and donors</li>
                <li>• Track active requirements</li>
                <li>• Access comprehensive data</li>
                <li>• Facilitate matching</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center border border-border rounded-lg p-8 max-w-2xl mx-auto bg-card">
          <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Secure & Professional</h2>
          <p className="text-muted-foreground text-sm">
            Our platform ensures data privacy and security while providing a seamless experience for all users.
          </p>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Organ Donation System
        </p>
      </footer>
    </div>
  );
};

export default Index;
