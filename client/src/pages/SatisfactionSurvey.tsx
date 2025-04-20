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
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "wouter";

// Satisfaction rating schema
const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  comments: z.string().optional(),
});

type RatingForm = z.infer<typeof ratingSchema>;

export default function SatisfactionSurvey() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [step, setStep] = useState<"survey" | "success">("survey");
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<RatingForm>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      rating: 0,
      comments: "",
    },
  });
  
  const submitRating = useMutation({
    mutationFn: async (data: RatingForm) => {
      const response = await apiRequest("POST", "/api/ratings", {
        ...data,
        challengeId: 1, // This would usually come from context/state in a real app
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ratings"] });
      setStep("success");
    },
    onError: (error) => {
      toast({
        title: "Error submitting feedback",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  function handleRatingClick(rating: number) {
    setSelectedRating(rating);
    form.setValue("rating", rating);
  }
  
  function onSubmit(data: RatingForm) {
    submitRating.mutate(data);
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {step === "survey" ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">How easy was that last step?</CardTitle>
                <CardDescription>
                  Your feedback helps us improve the experience for everyone. Rate how easy or difficult that task was to complete.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex justify-between items-center mb-8">
                      {[
                        { emoji: "😫", label: "Very Difficult", value: 1 },
                        { emoji: "😕", label: "Difficult", value: 2 },
                        { emoji: "😐", label: "Neutral", value: 3 },
                        { emoji: "🙂", label: "Easy", value: 4 },
                        { emoji: "😃", label: "Very Easy", value: 5 },
                      ].map((option) => (
                        <div key={option.value} className="flex flex-col items-center">
                          <button
                            type="button"
                            className={`text-4xl mb-2 hover:transform hover:scale-110 transition duration-150 ${
                              selectedRating === option.value ? "transform scale-125" : ""
                            }`}
                            onClick={() => handleRatingClick(option.value)}
                          >
                            {option.emoji}
                          </button>
                          <span className="text-sm text-slate-600">{option.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {selectedRating !== null && (
                      <FormField
                        control={form.control}
                        name="comments"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Comments (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share any specific thoughts about your experience..."
                                rows={3}
                                className="focus:ring-2 focus:ring-[#0F766E]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                        disabled={submitRating.isPending || selectedRating === null}
                      >
                        {submitRating.isPending ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-600">Thank You for Your Feedback!</CardTitle>
                <CardDescription>
                  Your input helps us improve the experience for all team members, which ultimately leads to better customer outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">
                  We'll use this feedback to improve our processes and tools. Your insight is essential for creating a 
                  better work environment that leads to higher customer satisfaction.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep("survey")}
                  >
                    Provide More Feedback
                  </Button>
                  
                  <Button
                    className="bg-[#0F766E] hover:bg-[#0E6C6C] text-white"
                    onClick={() => setLocation("/app/dashboard")}
                  >
                    View Dashboard
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
