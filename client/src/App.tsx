import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Dashboard from "@/pages/Dashboard";
import TrainModel from "@/pages/TrainModel";
import LearningMachine from "@/pages/LearningMachine";
import AdvancedML from "@/pages/AdvancedML";
import TrainingCenter from "@/pages/TrainingCenter";
import SecuritySystem from "@/pages/SecuritySystem";
import About from "@/pages/About";
import QuantumAnalysis from "@/pages/QuantumAnalysis";
import NeuralAugmentation from "@/pages/NeuralAugmentation";
import HyperOptimization from "@/pages/HyperOptimization";
import AIFeatureSuggestions from "@/pages/AIFeatureSuggestions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/train-model" component={TrainModel} />
      <Route path="/learning-machine" component={LearningMachine} />
      <Route path="/advanced-ml" component={AdvancedML} />
      <Route path="/training-center" component={TrainingCenter} />
      <Route path="/security-system" component={SecuritySystem} />
      <Route path="/about" component={About} />
      <Route path="/quantum-analysis" component={QuantumAnalysis} />
      <Route path="/neural-augmentation" component={NeuralAugmentation} />
      <Route path="/hyper-optimization" component={HyperOptimization} />
      <Route path="/ai-feature-suggestions" component={AIFeatureSuggestions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
