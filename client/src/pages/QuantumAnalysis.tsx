import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Atom, Zap, Activity, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function QuantumAnalysis() {
  const [runningAlgorithms, setRunningAlgorithms] = useState<string[]>([]);
  const [completedAlgorithms, setCompletedAlgorithms] = useState<string[]>([]);
  const [algorithmProgress, setAlgorithmProgress] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  const algorithms = [
    { id: 'shor', name: "Shor's Algorithm", description: 'Prime factorization', complexity: 'High' },
    { id: 'grover', name: "Grover's Algorithm", description: 'Database search', complexity: 'Medium' },
    { id: 'qft', name: "Quantum Fourier Transform", description: 'Signal processing', complexity: 'Medium' },
    { id: 'qaoa', name: "QAOA", description: 'Optimization problems', complexity: 'High' },
  ];

  const executeAlgorithm = (algorithmId: string, algorithmName: string) => {
    if (runningAlgorithms.includes(algorithmId)) {
      toast({
        title: "Algorithm Running",
        description: `${algorithmName} is already executing`,
        variant: "destructive",
      });
      return;
    }

    setRunningAlgorithms(prev => [...prev, algorithmId]);
    setAlgorithmProgress(prev => ({ ...prev, [algorithmId]: 0 }));

    toast({
      title: "Algorithm Started",
      description: `${algorithmName} execution initiated`,
    });

    // Simulate algorithm execution
    const interval = setInterval(() => {
      setAlgorithmProgress(prev => {
        const currentProgress = prev[algorithmId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setRunningAlgorithms(current => current.filter(id => id !== algorithmId));
          setCompletedAlgorithms(current => [...current, algorithmId]);
          toast({
            title: "Algorithm Complete",
            description: `${algorithmName} executed successfully`,
          });
          return prev;
        }
        return { ...prev, [algorithmId]: currentProgress + Math.random() * 10 };
      });
    }, 500);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'bg-red-600';
      case 'Medium': return 'bg-orange-600';
      case 'Low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Quantum Analysis Initialized", 
        description: "Advanced quantum computing algorithms are now active.",
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="Quantum Analysis" subtitle="Advanced quantum computing algorithms">
      <div className="space-y-6">
        {/* Quantum Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Atom size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Quantum State</h3>
              <Badge variant="secondary" className="bg-green-600 text-white">Coherent</Badge>
            </CardContent>
          </Card>

          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Qubits</h3>
              <p className="text-gray-400">128 Active</p>
            </CardContent>
          </Card>

          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Activity size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Entanglement</h3>
              <p className="text-gray-400">95% Fidelity</p>
            </CardContent>
          </Card>
        </div>

        {/* Running Algorithms */}
        {runningAlgorithms.length > 0 && (
          <Card className="dark-100 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Running Algorithms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {runningAlgorithms.map(algorithmId => {
                  const algorithm = algorithms.find(a => a.id === algorithmId);
                  const progress = algorithmProgress[algorithmId] || 0;
                  return (
                    <div key={algorithmId} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white font-medium">{algorithm?.name}</h4>
                        <Badge className={getComplexityColor(algorithm?.complexity || '')}>
                          {algorithm?.complexity}
                        </Badge>
                      </div>
                      <Progress value={progress} className="mb-2" />
                      <p className="text-gray-400 text-sm">{Math.round(progress)}% complete</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Available Quantum Algorithms */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Available Quantum Algorithms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {algorithms.map(algorithm => {
                const isRunning = runningAlgorithms.includes(algorithm.id);
                const isCompleted = completedAlgorithms.includes(algorithm.id);

                return (
                  <div key={algorithm.id} className="p-4 bg-gray-800 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{algorithm.name}</h4>
                      <Badge className={getComplexityColor(algorithm.complexity)}>
                        {algorithm.complexity}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{algorithm.description}</p>
                    {isCompleted && (
                      <Badge variant="secondary" className="bg-green-600 text-white mb-2">
                        Completed
                      </Badge>
                    )}
                    <Button 
                      size="sm" 
                      onClick={() => executeAlgorithm(algorithm.id, algorithm.name)}
                      disabled={isRunning}
                      className={`${isRunning ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} w-full`}
                    >
                      {isRunning ? 'Running...' : 'Execute'}
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Completed Algorithms */}
        {completedAlgorithms.length > 0 && (
          <Card className="dark-100 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Completed Executions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {completedAlgorithms.map(algorithmId => {
                  const algorithm = algorithms.find(a => a.id === algorithmId);
                  return (
                    <div key={algorithmId} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-white">{algorithm?.name}</span>
                      <Badge variant="secondary" className="bg-green-600 text-white">
                        Success
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}