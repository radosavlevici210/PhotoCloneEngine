import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Network, Database, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Import Input component

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

        {/* Advanced Model Architecture */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Advanced Model Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm">Input Layers</label>
                  <Input defaultValue="512" className="mt-1" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm">Hidden Layers</label>
                  <Input defaultValue="1024" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm">Output Layers</label>
                  <Input defaultValue="256" className="mt-1" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm">Activation Function</label>
                  <select className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white">
                    <option>ReLU</option>
                    <option>Leaky ReLU</option>
                    <option>Swish</option>
                    <option>GELU</option>
                    <option>Sigmoid</option>
                    <option>Tanh</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm">Dropout Rate</label>
                  <Input defaultValue="0.2" className="mt-1" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm">Batch Normalization</label>
                  <select className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm">Learning Rate</label>
                  <Input defaultValue="0.001" className="mt-1" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm">Optimizer</label>
                  <select className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white">
                    <option>Adam</option>
                    <option>AdamW</option>
                    <option>SGD</option>
                    <option>RMSprop</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices Panel */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">ML Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Data Preprocessing Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Cross-Validation Enabled</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Regularization Applied</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Hyperparameter Tuning Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Early Stopping Monitoring</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}