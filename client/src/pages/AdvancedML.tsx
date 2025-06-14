import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Network, Database, Zap } from 'lucide-react';

export default function AdvancedML() {
  return (
    <Layout title="Advanced Machine Learning" subtitle="High-performance ML tools and algorithms">
      <div className="space-y-6">
        {/* Advanced Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Cpu size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-400 text-sm">Advanced neural networks</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Network size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Neural Networks</h3>
              <p className="text-gray-400 text-sm">Complex pattern recognition</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Database size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Big Data ML</h3>
              <p className="text-gray-400 text-sm">Large-scale processing</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700 hover:border-orange-500 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">AutoML</h3>
              <p className="text-gray-400 text-sm">Automated model selection</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Experiments */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Active Experiments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Transformer Architecture Optimization</h4>
                  <p className="text-gray-400 text-sm">Running for 3 days</p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Reinforcement Learning Agent</h4>
                  <p className="text-gray-400 text-sm">Running for 1 day</p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
