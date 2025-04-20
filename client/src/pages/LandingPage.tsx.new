import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Check, BarChart4, Target, Users, PenTool } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-slate-100 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
                Improve customer satisfaction by focusing on your team
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                FocusFlow helps you track employee experience to deliver better customer results. When your team finds work easier, your customers enjoy better service.
              </p>
              <div className="mt-6 space-x-4">
                <Link href="/app/goal-input">
                  <span className="inline-block">
                    <Button size="lg" className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white px-6 py-3 rounded-md font-medium shadow-sm transition duration-150">
                      Get Started Free
                    </Button>
                  </span>
                </Link>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="text-[#0F766E] hover:text-[#0E6C6C] font-medium px-6 py-3">
                    Watch Demo
                  </Button>
                </a>
              </div>
              <div className="mt-4 flex items-center text-sm text-slate-500">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                No credit card required · 14-day free trial
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#4338CA] opacity-10 rounded-lg transform rotate-3"></div>
                <div className="relative rounded-lg shadow-xl max-w-full mx-auto bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Dashboard Preview</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-500 mb-1">Employee Satisfaction</p>
                      <div className="flex items-end">
                        <span className="text-2xl font-bold text-slate-800">4.2</span>
                        <span className="text-sm text-green-600 ml-2">+0.3</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-500 mb-1">Customer Satisfaction</p>
                      <div className="flex items-end">
                        <span className="text-2xl font-bold text-slate-800">92%</span>
                        <span className="text-sm text-green-600 ml-2">+4%</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-24 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
                    <BarChart4 className="h-12 w-12 text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-display">Core Benefits</h2>
            <p className="mt-2 text-lg text-slate-600">Our solution directly connects employee experience to customer outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6 text-[#0F766E]" />,
                title: "Employee Satisfaction Tracking",
                description: "Measure how easy your tools and processes are for employees to use with our simple feedback system."
              },
              {
                icon: <BarChart4 className="h-6 w-6 text-[#0F766E]" />,
                title: "KPI Dashboard",
                description: "Visualize process KPIs alongside satisfaction scores to see direct correlations between employee and customer experience."
              },
              {
                icon: <PenTool className="h-6 w-6 text-[#0F766E]" />,
                title: "Process Mapping",
                description: "Create visual maps of your processes and identify friction points that affect both employees and customers."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-50 p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-display">How FocusFlow works</h2>
            <p className="mt-2 text-lg text-slate-600">3 simple steps to improve satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                step: 1,
                title: "Define Challenge",
                description: "Identify specific process challenges",
                icon: <Target className="h-10 w-10 text-slate-400" />
              },
              {
                step: 2,
                title: "Collect Feedback",
                description: "Gather employee ease-of-use ratings",
                icon: <Users className="h-10 w-10 text-slate-400" />
              },
              {
                step: 3,
                title: "Improve",
                description: "Track KPIs and implement changes",
                icon: <BarChart4 className="h-10 w-10 text-slate-400" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white p-6 text-center shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{step.description}</p>
                  <div className="flex items-center justify-center">
                    {step.icon}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Solution */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-display">Sample Solution</h2>
              <p className="mt-2 text-lg text-slate-600">Try our methodology with this example</p>
            </div>
            
            <Card className="shadow-md rounded-lg">
              <CardHeader>
                <CardTitle>Call Center Wait Time Reduction</CardTitle>
                <CardDescription>Using employee feedback to improve customer experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium text-slate-800 mb-2">Challenge Identified</h3>
                  <p className="text-slate-600 text-sm">Customer complaints about long wait times in call center</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium text-slate-800 mb-2">Employee Feedback</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded">
                      <p className="text-sm text-slate-700">Difficult to find customer information quickly</p>
                      <div className="flex mt-1">
                        <span className="text-amber-500">Satisfaction: 2/5</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <p className="text-sm text-slate-700">Too many systems to navigate during calls</p>
                      <div className="flex mt-1">
                        <span className="text-amber-500">Satisfaction: 1/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">FocusFlow Solution</h3>
                  <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1 ml-2">
                    <li>Integrated customer information systems</li>
                    <li>Created unified agent dashboard</li>
                    <li>Implemented automatic customer recognition</li>
                  </ol>
                  
                  <div className="flex items-center justify-between mt-4 bg-slate-50 p-3 rounded">
                    <div>
                      <p className="text-sm text-slate-500">Results</p>
                      <p className="font-medium text-slate-800">Wait time reduced by 40%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Employee Satisfaction</p>
                      <p className="font-medium text-green-600">Increased to 4.5/5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#0F766E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your team's experience?</h2>
            <p className="text-lg text-white/80 mb-6">Start your 14-day free trial today. No credit card required.</p>
            
            <Link href="/app/goal-input">
              <span className="inline-block">
                <Button size="lg" className="bg-white text-[#0F766E] hover:bg-white/90 px-6 py-3 rounded-md font-bold shadow-md">
                  Get Started Free
                </Button>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}