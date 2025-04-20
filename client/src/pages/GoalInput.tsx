import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Challenge form schema
const challengeSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters long" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
  goal: z.string().min(5, { message: "Goal must be at least 5 characters long" }),
});

type ChallengeForm = z.infer<typeof challengeSchema>;

export default function GoalInput() {
  const [step, setStep] = useState<"challenge" | "success">("challenge");
  const { toast } = useToast();
  
  const form = useForm<ChallengeForm>({
    resolver: zodResolver(challengeSchema),
    defaultValues: {
      title: "",
      description: "",
      goal: "",
    },
  });
  
  const createChallenge = useMutation({
    mutationFn: async (data: ChallengeForm) => {
      const response = await apiRequest("POST", "/api/challenges", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/challenges"] });
      setStep("success");
    },
    onError: (error) => {
      toast({
        title: "Error creating challenge",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: ChallengeForm) {
    createChallenge.mutate(data);
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {step === "challenge" ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">What challenge are you solving today?</CardTitle>
                <CardDescription>
                  Define the problem your team is working to solve and track your progress toward resolution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Challenge Title</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Reduce customer wait times" 
                              {...field} 
                              className="focus:ring-2 focus:ring-[#0F766E]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the challenge in more detail..." 
                              rows={3}
                              className="focus:ring-2 focus:ring-[#0F766E]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Success Criteria</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Reduce wait times by 25%" 
                              {...field} 
                              className="focus:ring-2 focus:ring-[#0F766E]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                        disabled={createChallenge.isPending}
                      >
                        {createChallenge.isPending ? "Submitting..." : "Start Tracking"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-600">Challenge Created Successfully!</CardTitle>
                <CardDescription>
                  Your challenge has been created and your team can now start working on it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">
                  We'll track employee satisfaction as your team works through this challenge. This will help identify 
                  friction points and opportunities for improvement.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep("challenge")}
                  >
                    Create Another Challenge
                  </Button>
                  
                  <Button
                    className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                    onClick={() => window.location.href = "/app/survey"}
                  >
                    Continue to Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
