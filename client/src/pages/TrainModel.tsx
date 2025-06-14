import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Square, Settings } from 'lucide-react';

export default function TrainModel() {
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
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model-type" className="text-gray-300">Model Type</Label>
                <Select>
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
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Play size={16} className="mr-2" />
                Start Training
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300">
                <Settings size={16} className="mr-2" />
                Advanced Settings
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
                  <h4 className="text-white font-medium">ResNet-50 Classification</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Pause size={14} />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Square size={14} />
                    </Button>
                  </div>
                </div>
                <Progress value={67} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Epoch 67/100</span>
                  <span>ETA: 2h 15m</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
