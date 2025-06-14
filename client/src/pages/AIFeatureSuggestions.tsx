import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Star, TrendingUp, Zap } from 'lucide-react';

export default function AIFeatureSuggestions() {
  return (
    <Layout title="AI Feature Suggestions" subtitle="Intelligent recommendations for model improvements">
      <div className="space-y-6">
        {/* Suggestion Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Lightbulb size={32} className="text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">New Ideas</h3>
              <p className="text-gray-400">12 suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Star size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">High Priority</h3>
              <p className="text-gray-400">5 suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Performance</h3>
              <p className="text-gray-400">8 suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Optimization</h3>
              <p className="text-gray-400">6 suggestions</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Suggestions */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Active Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-blue-600 text-white">High Priority</Badge>
                    <h4 className="text-white font-medium">Implement Attention Mechanism</h4>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Apply</Button>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Adding attention layers could improve model performance by 15-20% based on similar architectures.
                </p>
              </div>
              
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-green-600 text-white">Performance</Badge>
                    <h4 className="text-white font-medium">Optimize Learning Rate Schedule</h4>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Apply</Button>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Using cosine annealing could reduce training time by 30% while maintaining accuracy.
                </p>
              </div>
              
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-purple-600 text-white">Optimization</Badge>
                    <h4 className="text-white font-medium">Add Data Augmentation</h4>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Apply</Button>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Random rotation and scaling could improve model generalization by 8-12%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
