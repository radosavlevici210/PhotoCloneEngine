import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Database, Zap } from 'lucide-react';

export default function About() {
  return (
    <Layout title="About" subtitle="System information and specifications">
      <div className="space-y-6">
        {/* System Overview */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">AI/ML Model Management Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-300">
                A comprehensive platform for managing AI and Machine Learning models, 
                providing advanced tools for training, deployment, and monitoring.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Version Information</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Platform Version:</span>
                      <Badge variant="secondary">v2.1.0</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">API Version:</span>
                      <Badge variant="secondary">v1.5.2</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Build:</span>
                      <Badge variant="secondary">#2024.1</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">System Specifications</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">CPU Cores:</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Memory:</span>
                      <span className="text-white">64 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">GPU:</span>
                      <span className="text-white">NVIDIA A100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Brain size={24} className="text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Advanced AI Models</h4>
                  <p className="text-gray-400 text-sm">Support for state-of-the-art neural networks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Code size={24} className="text-green-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Custom Algorithms</h4>
                  <p className="text-gray-400 text-sm">Build and deploy custom ML algorithms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Database size={24} className="text-purple-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Data Management</h4>
                  <p className="text-gray-400 text-sm">Comprehensive data pipeline management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap size={24} className="text-orange-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">High Performance</h4>
                  <p className="text-gray-400 text-sm">Optimized for speed and scalability</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* License Information */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">License Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-xs font-bold text-gray-400">PERMANENT COPY</p>
              <p className="text-xs text-gray-500">Radosavlevici (ervin210@icloud.com) - ALL RIGHTS RESERVED</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs font-bold text-blue-400">PROPRIETARY SYSTEM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
