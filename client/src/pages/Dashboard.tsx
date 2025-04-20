import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowUp, BarChart4, PieChart } from "lucide-react";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("7days");

  const { data: stats, isLoading } = useQuery({
    queryKey: ["/api/dashboard/stats"],
  });

  // Color palette for charts
  const chartColors = {
    primary: '#0F766E',
    secondary: '#4338CA',
    accent: '#FB923C',
    green: '#22C55E',
    amber: '#F59E0B',
  };

  // Sample data for the employee vs customer satisfaction chart
  const satisfactionData = [
    { month: 'Jan', employee: 3.6, customer: 78 },
    { month: 'Feb', employee: 3.7, customer: 80 },
    { month: 'Mar', employee: 3.9, customer: 83 },
    { month: 'Apr', employee: 3.8, customer: 82 },
    { month: 'May', employee: 4.0, customer: 85 },
    { month: 'Jun', employee: 4.2, customer: 89 },
    { month: 'Jul', employee: 4.2, customer: 92 },
  ];

  // Sample data for feedback by department
  const departmentData = [
    { name: 'Sales', value: 4.2 },
    { name: 'Support', value: 3.8 },
    { name: 'Operations', value: 4.3 },
    { name: 'Finance', value: 3.7 },
    { name: 'Marketing', value: 4.0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-600">Track employee satisfaction and process performance</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="quarter">Last quarter</SelectItem>
                <SelectItem value="ytd">Year to date</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center">
              Export <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-slate-200 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Employee Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-800">{stats?.employeeSatisfaction?.average}</span>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {stats?.employeeSatisfaction?.change}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  out of 5 | {stats?.employeeSatisfaction?.positive} positive
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-800">{stats?.customerSatisfaction?.percentage}</span>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {stats?.customerSatisfaction?.change}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  based on {stats?.customerSatisfaction?.responses} responses
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Process Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-800">{stats?.processEfficiency?.percentage}</span>
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {stats?.processEfficiency?.change}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  completion rate
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Active Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-800">{stats?.activeChallenges?.count}</span>
                  <span className="ml-2 text-sm text-slate-500">
                    {stats?.activeChallenges?.nearingCompletion} nearing completion
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  <span className="font-medium">{stats?.activeChallenges?.onTrack} on track</span>
                  <span className="inline-block ml-1 text-slate-400">|</span>
                  <span className="ml-1 text-amber-600">{stats?.activeChallenges?.atRisk} at risk</span>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Employee vs Customer Satisfaction</CardTitle>
              <CardDescription>Correlation between employee ease-of-use and customer satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={satisfactionData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" domain={[0, 5]} tickCount={6} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tickCount={6} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="employee" 
                      name="Employee Satisfaction" 
                      stroke={chartColors.primary} 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="customer" 
                      name="Customer Satisfaction (%)" 
                      stroke={chartColors.secondary}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Feedback by Department</CardTitle>
              <CardDescription>Average satisfaction ratings across teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 5]} tickCount={6} />
                    <Tooltip formatter={(value) => [`${value} / 5`, 'Rating']} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar 
                      dataKey="value" 
                      fill={chartColors.primary} 
                      name="Satisfaction Rating" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Challenges</CardTitle>
              <CardDescription>Latest challenges your team is working on</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Active Challenges</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  {isLoading ? (
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse flex items-center p-4 border rounded-md">
                          <div className="flex-1">
                            <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                          </div>
                          <div className="h-6 bg-slate-200 rounded w-24"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center p-4 border rounded-md hover:bg-slate-50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">Reduce customer wait times</h4>
                          <p className="text-sm text-slate-500">Goal: Reduce wait times by 25%</p>
                        </div>
                        <Link href="/app/goal-input">
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                      
                      <div className="flex items-center p-4 border rounded-md hover:bg-slate-50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">Improve onboarding process</h4>
                          <p className="text-sm text-slate-500">Goal: Reduce onboarding time by 30%</p>
                        </div>
                        <Link href="/app/goal-input">
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                      
                      <div className="flex items-center p-4 border rounded-md hover:bg-slate-50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">Enhance self-service options</h4>
                          <p className="text-sm text-slate-500">Goal: Increase self-service usage by 40%</p>
                        </div>
                        <Link href="/app/goal-input">
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border rounded-md hover:bg-slate-50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-800">Optimize checkout process</h4>
                        <p className="text-sm text-slate-500">Reduced checkout time by 35%</p>
                      </div>
                      <Button variant="outline" size="sm">View Report</Button>
                    </div>
                    
                    <div className="flex items-center p-4 border rounded-md hover:bg-slate-50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-800">Streamline approval workflow</h4>
                        <p className="text-sm text-slate-500">Improved approval time by 50%</p>
                      </div>
                      <Button variant="outline" size="sm">View Report</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
