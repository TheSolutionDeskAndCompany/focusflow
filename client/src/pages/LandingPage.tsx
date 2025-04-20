import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, BarChart4, Target, Clock, PenTool, Zap, ClipboardList, Calendar, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-slate-100 pt-10 md:pt-20 pb-16 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
                Improve customer satisfaction by focusing on your team
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-2xl">
                FocusFlow helps you track employee experience to deliver better customer results. When your team finds work easier, your customers enjoy better service.
              </p>
              <div className="mt-8 space-x-4">
                <Link href="/app/goal-input">
                  <Button size="lg" className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white px-6 py-3 rounded-md font-medium shadow-sm transition duration-150">
                    Get Started Free
                  </Button>
                </Link>
                <Button variant="link" className="text-[#0F766E] hover:text-[#0E6C6C] font-medium px-6 py-3">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-slate-500">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                No credit card required · 14-day free trial · Cancel anytime
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
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
                  <div className="h-32 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
                    <BarChart4 className="h-16 w-16 text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">Trusted by innovative teams</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center">
            {/* Company logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={`h-8 text-slate-400 ${index > 3 ? 'hidden lg:block' : ''}`}>
                <svg className="h-full" viewBox="0 0 100 30" fill="currentColor">
                  <rect width="80" height="10" rx="2" x="10" y="10" />
                  <circle cx="20" cy="15" r="5" fill="white" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Focused on what matters most</h2>
            <p className="mt-4 text-xl text-slate-600">Our features are designed to improve the employee experience, which directly impacts customer satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ClipboardList className="h-6 w-6 text-[#0F766E]" />,
                title: "Goal Definition",
                description: "Easily define what challenges your team is solving and track progress toward resolution."
              },
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
              },
              {
                icon: <Calendar className="h-6 w-6 text-[#0F766E]" />,
                title: "Action Planning",
                description: "Turn insights into action with structured improvement plans that prioritize the most impactful changes."
              },
              {
                icon: <Zap className="h-6 w-6 text-[#0F766E]" />,
                title: "Real-Time Feedback",
                description: "Collect feedback at the moment of experience to get authentic insights that drive meaningful improvements."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-50 p-8 shadow-sm hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">How FocusFlow works</h2>
            <p className="mt-4 text-xl text-slate-600">A simple three-step process to improve both employee and customer satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: 1,
                title: "Define Your Challenge",
                description: "Start by identifying the specific challenge your team is working to solve.",
                icon: <Target className="h-16 w-16 text-slate-300" />
              },
              {
                step: 2,
                title: "Collect Feedback",
                description: "Gather real-time ease-of-use ratings from your employees as they work.",
                icon: <Users className="h-16 w-16 text-slate-300" />
              },
              {
                step: 3,
                title: "Track & Improve",
                description: "Monitor KPIs and satisfaction scores to identify and implement targeted improvements.",
                icon: <BarChart4 className="h-16 w-16 text-slate-300" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <Card className="bg-white p-8 pt-10 text-center shadow-md">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                  <div className="mt-6 flex items-center justify-center h-48">
                    {step.icon}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">See FocusFlow in action</h2>
              <p className="mt-4 text-xl text-slate-600">Take a closer look at our core features.</p>
            </div>
            
            <Card className="shadow-xl rounded-xl overflow-hidden border border-slate-200">
              <Tabs defaultValue="goal-input">
                <div className="flex border-b border-slate-200">
                  <TabsList className="bg-transparent h-auto">
                    <TabsTrigger 
                      value="goal-input" 
                      className="px-6 py-3 data-[state=active]:text-[#0F766E] data-[state=active]:border-b-2 data-[state=active]:border-[#0F766E] rounded-none"
                    >
                      Goal Input
                    </TabsTrigger>
                    <TabsTrigger 
                      value="feedback" 
                      className="px-6 py-3 data-[state=active]:text-[#0F766E] data-[state=active]:border-b-2 data-[state=active]:border-[#0F766E] rounded-none"
                    >
                      Satisfaction Survey
                    </TabsTrigger>
                    <TabsTrigger 
                      value="dashboard" 
                      className="px-6 py-3 data-[state=active]:text-[#0F766E] data-[state=active]:border-b-2 data-[state=active]:border-[#0F766E] rounded-none"
                    >
                      Dashboard
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="bg-slate-50">
                  <TabsContent value="goal-input" className="p-6 mt-0">
                    <Card className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">What challenge are you solving today?</h3>
                      <div className="mb-6">
                        <label htmlFor="challenge-title" className="block text-sm font-medium text-slate-700 mb-1">Challenge Title</label>
                        <input
                          type="text"
                          id="challenge-title"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
                          placeholder="e.g., Reduce customer wait times"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="challenge-description" className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                        <textarea
                          id="challenge-description"
                          rows={3}
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
                          placeholder="Describe the challenge in more detail..."
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="challenge-goal" className="block text-sm font-medium text-slate-700 mb-1">Success Criteria</label>
                        <input
                          type="text"
                          id="challenge-goal"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
                          placeholder="e.g., Reduce wait times by 25%"
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button
                          className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                        >
                          Start Tracking
                        </Button>
                      </div>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="feedback" className="p-6 mt-0">
                    <Card className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">How easy was that last step?</h3>
                      <p className="text-slate-600 mb-6">Your feedback helps us improve the experience for everyone.</p>
                      
                      <div className="flex justify-between items-center mb-8">
                        {['😫', '😕', '😐', '🙂', '😃'].map((emoji, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <button className="text-4xl mb-2 hover:transform hover:scale-110 transition duration-150">
                              {emoji}
                            </button>
                            <span className="text-sm text-slate-600">
                              {index === 0 ? 'Very Difficult' : 
                               index === 1 ? 'Difficult' :
                               index === 2 ? 'Neutral' :
                               index === 3 ? 'Easy' : 'Very Easy'}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="feedback-comments" className="block text-sm font-medium text-slate-700 mb-1">Additional Comments (Optional)</label>
                        <textarea
                          id="feedback-comments"
                          rows={2}
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
                          placeholder="Share any specific thoughts about your experience..."
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button
                          className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                        >
                          Submit Feedback
                        </Button>
                      </div>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="dashboard" className="p-6 mt-0">
                    <Card className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                        <h3 className="text-lg font-semibold text-slate-800">Process Performance Dashboard</h3>
                        <div className="mt-2 md:mt-0">
                          <select className="px-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent text-sm">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last quarter</option>
                            <option>Year to date</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                          {
                            title: "Employee Satisfaction",
                            value: "4.2",
                            change: "+0.3",
                            details: "out of 5 | 84% positive"
                          },
                          {
                            title: "Customer Satisfaction",
                            value: "92%",
                            change: "+4%",
                            details: "based on 312 responses"
                          },
                          {
                            title: "Process Efficiency",
                            value: "87%",
                            change: "+2%",
                            details: "completion rate"
                          },
                          {
                            title: "Active Challenges",
                            value: "5",
                            info: "2 nearing completion",
                            details: "3 on track | 2 at risk"
                          }
                        ].map((kpi, index) => (
                          <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-sm text-slate-500 mb-1">{kpi.title}</p>
                            <div className="flex items-end">
                              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
                              {kpi.change && <span className="text-sm text-green-600 ml-2">{kpi.change}</span>}
                              {kpi.info && <span className="text-sm text-slate-500 ml-2">{kpi.info}</span>}
                            </div>
                            <div className="mt-2 flex items-center text-xs">
                              <span>{kpi.details}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <h4 className="text-sm font-medium text-slate-700 mb-4">Employee vs Customer Satisfaction</h4>
                          <div className="h-64 w-full bg-slate-100 rounded flex items-center justify-center">
                            <BarChart4 className="h-16 w-16 text-slate-300" />
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <h4 className="text-sm font-medium text-slate-700 mb-4">Feedback by Department</h4>
                          <div className="h-64 w-full bg-slate-100 rounded flex items-center justify-center">
                            <BarChart4 className="h-16 w-16 text-slate-300" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">What our customers say</h2>
            <p className="mt-4 text-xl text-slate-600">See how FocusFlow is transforming employee and customer experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                text: "FocusFlow has completely transformed how we think about customer experience. By focusing on our employees first, we've seen a 28% increase in customer satisfaction scores.",
                name: "Sarah Johnson",
                role: "Customer Experience Director, Acme Inc."
              },
              {
                rating: 5,
                text: "The real-time feedback feature has been a game-changer. We can immediately identify where employees are struggling and make quick adjustments to improve their experience.",
                name: "Michael Chen",
                role: "Operations Manager, TechFlow Solutions"
              },
              {
                rating: 5,
                text: "Within just 3 months of using FocusFlow, we reduced employee frustration by 40% and saw our NPS score jump by 15 points. The correlation was undeniable.",
                name: "Amanda Rodriguez",
                role: "VP of Customer Success, Global Retail"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-slate-600">Choose the plan that works best for your team size and needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                description: "For small teams getting started",
                price: "$29",
                featured: false,
                features: [
                  "Up to 5 team members",
                  "3 active challenges",
                  "Basic satisfaction surveys",
                  "7-day data history"
                ],
                buttonText: "Get Started"
              },
              {
                name: "Professional",
                description: "For growing teams and departments",
                price: "$79",
                featured: true,
                features: [
                  "Up to 20 team members",
                  "10 active challenges",
                  "Advanced satisfaction surveys",
                  "30-day data history",
                  "Process mapping tool"
                ],
                buttonText: "Get Started"
              },
              {
                name: "Enterprise",
                description: "For large organizations and companies",
                price: "$199",
                featured: false,
                features: [
                  "Unlimited team members",
                  "Unlimited active challenges",
                  "Custom satisfaction surveys",
                  "1-year data history",
                  "Advanced analytics and reporting",
                  "Dedicated account manager"
                ],
                buttonText: "Contact Sales",
                outline: true
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`
                  ${plan.featured 
                    ? 'bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#0F766E] transform md:-translate-y-4 z-10' 
                    : 'bg-slate-50 rounded-lg shadow-md overflow-hidden border border-slate-200'
                  }
                `}
              >
                {plan.featured && (
                  <div className="bg-[#0F766E] text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    <span className="text-slate-600 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Link href="/app/goal-input">
                    <Button 
                      className={`
                        w-full 
                        ${plan.outline 
                          ? 'bg-white border border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white' 
                          : 'bg-[#0F766E] hover:bg-[#0E6C6C] text-white'
                        }
                      `}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F766E] to-[#4338CA] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to transform your employee and customer experience?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Join hundreds of companies that are improving customer satisfaction by focusing on their employee experience.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/app/goal-input">
              <Button className="bg-white text-[#0F766E] hover:bg-slate-100 px-6 py-6 h-auto rounded-md font-medium shadow-md transition duration-150">
                Get Started Free
              </Button>
            </Link>
            <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-6 h-auto rounded-md font-medium transition duration-150">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
