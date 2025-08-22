import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Target, BarChart3, Users, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">MacroTracker</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  #1 Macro Tracking App
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-playfair)] leading-tight">
                  Track Your Macros, <span className="text-primary">Transform</span> Your Life
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Take control of your nutrition with precision macro tracking. Achieve your fitness goals faster with
                  personalized insights and easy-to-use tools.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started Today
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Meals Tracked</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center border border-border/50">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">MacroTracker</h3>
                    <p className="text-muted-foreground">Track your macros with precision and achieve your fitness goals</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Calories</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Macros</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make macro tracking simple, accurate, and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Goal Setting</CardTitle>
                <CardDescription>
                  Set personalized macro targets based on your goals, activity level, and body composition.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Visual Progress Tracking</CardTitle>
                <CardDescription>
                  Beautiful charts and graphs that show your progress over time with detailed analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Food Database</CardTitle>
                <CardDescription>
                  Access to over 1 million foods with accurate macro information and barcode scanning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Loved by Thousands
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users are saying about their transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "MacroTracker completely changed how I approach nutrition. I've lost 25 pounds and gained so much
                  muscle definition!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Fitness Enthusiast</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a personal trainer, I recommend MacroTracker to all my clients. The accuracy and ease of use is
                  unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mike R.</div>
                    <div className="text-sm text-muted-foreground">Personal Trainer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally reached my goal weight! The visual progress tracking kept me motivated throughout my entire
                  journey."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
                    EL
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Emma L.</div>
                    <div className="text-sm text-muted-foreground">Health Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who have transformed their health with MacroTracker.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Reach Their Goals</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15lbs</div>
              <div className="text-muted-foreground">Average Weight Loss</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <div className="text-muted-foreground">To See Results</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already achieved their fitness goals with MacroTracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Free Trial
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary font-[family-name:var(--font-playfair)]">MacroTracker</h3>
              <p className="text-muted-foreground">The ultimate macro tracking app for achieving your fitness goals.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  API
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Status
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MacroTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
