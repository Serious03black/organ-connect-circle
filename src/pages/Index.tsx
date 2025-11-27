import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Activity, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">OrganConnect</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Connecting Lives Through Organ Donation
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            A secure platform that bridges patients, donors, and healthcare professionals to save lives through efficient organ matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/auth")}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">How We Help</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tailored features for every user in the organ donation ecosystem
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">For Patients</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Register your organ requirements and connect with compatible donors.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Add organ requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Browse available donors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Direct messaging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">For Donors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help save lives by registering as an organ donor.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Search for patients
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    View requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Contact patients
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">For Doctors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Oversee and manage the donation process efficiently.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Review all profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Approve donors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Facilitate matching
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="border-t border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">1000+</p>
              <p className="text-sm text-muted-foreground">Registered Users</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Successful Matches</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</p>
              <p className="text-sm text-muted-foreground">Partner Hospitals</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple steps to get started on your journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                1
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-sm text-muted-foreground">
                Create your account as a patient, donor, or healthcare professional.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                2
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Browse profiles, send messages, and find compatible matches.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                3
              </div>
              <h3 className="font-semibold mb-2">Save Lives</h3>
              <p className="text-sm text-muted-foreground">
                Work with medical professionals to complete the donation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our secure platform and be part of a life-saving community. Your data is protected with industry-standard security.
            </p>
            <Button size="lg" onClick={() => navigate("/auth")}>
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-semibold">OrganConnect</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 OrganConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
