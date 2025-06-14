import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function SecuritySystem() {
  return (
    <Layout title="Security System" subtitle="Monitor and protect your AI/ML infrastructure">
      <div className="space-y-6">
        {/* Security Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Shield size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">System Status</h3>
              <Badge variant="secondary" className="bg-green-600 text-white">Secure</Badge>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Lock size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Encryption</h3>
              <Badge variant="secondary" className="bg-blue-600 text-white">Active</Badge>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Eye size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Monitoring</h3>
              <Badge variant="secondary" className="bg-purple-600 text-white">24/7</Badge>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <AlertTriangle size={32} className="text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Threats</h3>
              <Badge variant="secondary" className="bg-gray-600 text-white">None</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Recent Security Events */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Security Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">System backup completed</p>
                    <p className="text-gray-400 text-sm">All data encrypted and stored securely</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">2 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Lock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Security scan completed</p>
                    <p className="text-gray-400 text-sm">No vulnerabilities detected</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">4 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                  <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">API Key Rotation</h4>
                  <p className="text-gray-400 text-sm">Automatically rotate API keys</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
