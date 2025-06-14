import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, BookOpen, Video, Award } from 'lucide-react';

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
      </div>
    </Layout>
  );
}
