import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gauge, TrendingUp, Zap, Settings } from 'lucide-react';

export default function HyperOptimization() {
  return (
    <Layout title="Hyper Optimization" subtitle="Advanced hyperparameter tuning">
      <div className="space-y-6">
        {/* Optimization Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Gauge size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Learning Rate</h3>
              <p className="text-gray-400">0.0001</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Batch Size</h3>
              <p className="text-gray-400">128</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Dropout</h3>
              <p className="text-gray-400">0.2</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Settings size={32} className="text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Epochs</h3>
              <p className="text-gray-400">100</p>
            </CardContent>
          </Card>
        </div>

        {/* Optimization History */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Optimization History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Bayesian Optimization</h4>
                  <p className="text-gray-400 text-sm">Completed - Best score: 0.947</p>
                </div>
                <Button variant="outline" size="sm">View Results</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Grid Search</h4>
                  <p className="text-gray-400 text-sm">Completed - Best score: 0.923</p>
                </div>
                <Button variant="outline" size="sm">View Results</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Random Search</h4>
                  <p className="text-gray-400 text-sm">Running - Current best: 0.891</p>
                </div>
                <Button variant="outline" size="sm">Monitor</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
