import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, BookOpen, Video, Award, Zap, Brain, Cpu } from 'lucide-react';

export default function TrainingCenter() {
  return (
    <Layout title="Training Center" subtitle="Educational resources and courses">
      <div className="space-y-6">
        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <GraduationCap size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Fundamentals</h3>
              <p className="text-gray-400 text-sm">12 courses</p>
            </CardContent>
          </Card>

          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <BookOpen size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Advanced Topics</h3>
              <p className="text-gray-400 text-sm">8 courses</p>
            </CardContent>
          </Card>

          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Video size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Video Tutorials</h3>
              <p className="text-gray-400 text-sm">24 videos</p>
            </CardContent>
          </Card>

          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Award size={32} className="text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Certifications</h3>
              <p className="text-gray-400 text-sm">6 available</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Progress */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-medium">Machine Learning Fundamentals</h4>
                  <span className="text-gray-400">75%</span>
                </div>
                <Progress value={75} className="mb-2" />
                <p className="text-gray-400 text-sm">3 of 4 modules completed</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-medium">Deep Learning Specialization</h4>
                  <span className="text-gray-400">45%</span>
                </div>
                <Progress value={45} className="mb-2" />
                <p className="text-gray-400 text-sm">2 of 5 modules completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Courses */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recommended Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h4 className="text-white font-medium mb-2">Neural Network Architecture</h4>
                <p className="text-gray-400 text-sm mb-3">Learn advanced neural network designs</p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Start Course</Button>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg">
                <h4 className="text-white font-medium mb-2">Computer Vision</h4>
                <p className="text-gray-400 text-sm mb-3">Master image processing techniques</p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Start Course</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Advanced Training Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Model Accuracy</span>
                <span className="text-white">94.2%</span>
              </div>
              <Progress value={94} className="h-2" />

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Training Speed</span>
                <span className="text-white">1,250 ops/sec</span>
              </div>
              <Progress value={78} className="h-2" />

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Learning Rate Adaptation</span>
                <span className="text-white">Optimal</span>
              </div>
              <Progress value={96} className="h-2" />

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Knowledge Retention</span>
                <span className="text-white">97.8%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div></CardContent>
        </Card>

        {/* Advanced Learning Analytics */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Learning Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">847</div>
                <div className="text-sm text-gray-400">Epochs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">125K</div>
                <div className="text-sm text-gray-400">Data Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">98.7%</div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">15</div>
                <div className="text-sm text-gray-400">Network Depth</div>
              </div>
            </div></CardContent>
        </Card>

        {/* Adaptive Learning System */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Adaptive Learning System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Auto-Optimization</span>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-sm">Active</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Neural Plasticity</span>
                <span className="text-blue-400">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Quantum Enhancement</span>
                <span className="text-purple-400">87.3%</span>
              </div>
            </div></CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card className="dark-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Performance Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                <Zap className="mr-2 h-4 w-4" />
                Optimize Learning Rate
              </Button>
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600" variant="outline">
                <Brain className="mr-2 h-4 w-4" />
                Enhance Neural Networks
              </Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600" variant="outline">
                <Cpu className="mr-2 h-4 w-4" />
                Quantum Acceleration
              </Button>
            </div></CardContent>
        </Card>
      </div>
    </Layout>
  );
}