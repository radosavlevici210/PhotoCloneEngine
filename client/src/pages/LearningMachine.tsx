import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, Zap, Activity, TrendingUp } from 'lucide-react';

export default function LearningMachine() {
  return (
    <Layout title="Learning Machine" subtitle="Manage autonomous learning systems">
      <div className="space-y-6">
        {/* Machine Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Bot size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-white font-semibold">Learning Engine</h3>
                  <Badge variant="secondary" className="bg-green-600 text-white">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Zap size={24} className="text-yellow-400" />
                <div>
                  <h3 className="text-white font-semibold">Processing Power</h3>
                  <p className="text-gray-400">87% Utilized</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <TrendingUp size={24} className="text-green-400" />
                <div>
                  <h3 className="text-white font-semibold">Learning Rate</h3>
                  <p className="text-gray-400">0.001</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Progress */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Pattern Recognition</span>
                <span className="text-white">94%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Neural Network Optimization</span>
                <span className="text-white">78%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Knowledge Integration</span>
                <span className="text-white">65%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
