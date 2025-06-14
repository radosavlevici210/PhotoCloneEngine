import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Square, Settings } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function TrainModel() {
  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(67);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { toast } = useToast();

  const handleStartTraining = () => {
    if (!modelName || !modelType) {
      toast({
        title: "Validation Error",
        description: "Please enter model name and select model type",
        variant: "destructive",
      });
      return;
    }

    setIsTraining(true);
    toast({
      title: "Training Started",
      description: `${modelName} training has been initiated`,
    });

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          toast({
            title: "Training Complete",
            description: `${modelName} training completed successfully`,
          });
          return 100;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handlePauseTraining = () => {
    setIsTraining(false);
    toast({
      title: "Training Paused",
      description: "Training has been paused",
    });
  };

  const handleStopTraining = () => {
    setIsTraining(false);
    setTrainingProgress(0);
    toast({
      title: "Training Stopped",
      description: "Training has been stopped and reset",
    });
  };

  return (
    <Layout title="Train Model" subtitle="Configure and manage model training">
      <div className="space-y-6">
        {/* Training Configuration */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Training Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="model-name" className="text-gray-300">Model Name</Label>
                <Input 
                  id="model-name" 
                  placeholder="Enter model name" 
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model-type" className="text-gray-300">Model Type</Label>
                <Select value={modelType} onValueChange={setModelType}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cnn">CNN</SelectItem>
                    <SelectItem value="rnn">RNN</SelectItem>
                    <SelectItem value="transformer">Transformer</SelectItem>
                    <SelectItem value="resnet">ResNet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg">
                <div className="space-y-2">
                  <Label className="text-gray-300">Learning Rate</Label>
                  <Input defaultValue="0.001" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Batch Size</Label>
                  <Input defaultValue="32" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Epochs</Label>
                  <Input defaultValue="100" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
            )}
            
            <div className="flex space-x-4">
              <Button 
                onClick={handleStartTraining}
                disabled={isTraining}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <Play size={16} className="mr-2" />
                {isTraining ? 'Training...' : 'Start Training'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="border-gray-600 text-gray-300"
              >
                <Settings size={16} className="mr-2" />
                {showAdvanced ? 'Hide' : 'Show'} Advanced Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Training Jobs */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Active Training Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">
                    {modelName || 'ResNet-50'} Classification
                  </h4>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={handlePauseTraining}
                      disabled={!isTraining}
                    >
                      <Pause size={14} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={handleStopTraining}
                    >
                      <Square size={14} />
                    </Button>
                  </div>
                </div>
                <Progress value={trainingProgress} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Epoch {Math.floor(trainingProgress)}/100</span>
                  <span>
                    {isTraining ? 'Running...' : trainingProgress === 100 ? 'Complete' : 'Paused'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
