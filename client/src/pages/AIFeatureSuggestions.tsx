import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Star, TrendingUp, Zap, Check, X } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function AIFeatureSuggestions() {
  const [dismissedSuggestions, setDismissedSuggestions] = useState<string[]>([]);
  const [appliedSuggestions, setAppliedSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const suggestions = [
    {
      id: 'attention',
      title: 'Implement Attention Mechanism',
      description: 'Adding attention layers could improve model performance by 15-20% based on similar architectures.',
      category: 'High Priority',
      categoryColor: 'bg-blue-600',
      impact: '15-20% improvement',
    },
    {
      id: 'learning-rate',
      title: 'Optimize Learning Rate Schedule',
      description: 'Using cosine annealing could reduce training time by 30% while maintaining accuracy.',
      category: 'Performance',
      categoryColor: 'bg-green-600',
      impact: '30% faster training',
    },
    {
      id: 'data-augmentation',
      title: 'Add Data Augmentation',
      description: 'Random rotation and scaling could improve model generalization by 8-12%.',
      category: 'Optimization',
      categoryColor: 'bg-purple-600',
      impact: '8-12% better generalization',
    },
    {
      id: 'batch-norm',
      title: 'Add Batch Normalization',
      description: 'Batch normalization can stabilize training and improve convergence speed.',
      category: 'Performance',
      categoryColor: 'bg-green-600',
      impact: 'Faster convergence',
    },
    {
      id: 'dropout',
      title: 'Implement Dropout Regularization',
      description: 'Adding dropout layers can reduce overfitting and improve model robustness.',
      category: 'Optimization',
      categoryColor: 'bg-purple-600',
      impact: 'Reduced overfitting',
    },
  ];

  const activeSuggestions = suggestions.filter(
    s => !dismissedSuggestions.includes(s.id) && !appliedSuggestions.includes(s.id)
  );

  const handleDismiss = (suggestionId: string, title: string) => {
    setDismissedSuggestions(prev => [...prev, suggestionId]);
    toast({
      title: "Suggestion Dismissed",
      description: `"${title}" has been dismissed`,
    });
  };

  const handleApply = (suggestionId: string, title: string) => {
    setAppliedSuggestions(prev => [...prev, suggestionId]);
    toast({
      title: "Suggestion Applied",
      description: `"${title}" has been applied to your model`,
    });
  };

  const getCategoryCounts = () => {
    const counts = {
      'High Priority': 0,
      'Performance': 0,
      'Optimization': 0,
      'New Ideas': 0,
    };
    
    activeSuggestions.forEach(s => {
      if (counts[s.category as keyof typeof counts] !== undefined) {
        counts[s.category as keyof typeof counts]++;
      }
    });
    
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  return (
    <Layout title="AI Feature Suggestions" subtitle="Intelligent recommendations for model improvements">
      <div className="space-y-6">
        {/* Suggestion Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Lightbulb size={32} className="text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">New Ideas</h3>
              <p className="text-gray-400">{categoryCounts['New Ideas']} suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Star size={32} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">High Priority</h3>
              <p className="text-gray-400">{categoryCounts['High Priority']} suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp size={32} className="text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Performance</h3>
              <p className="text-gray-400">{categoryCounts['Performance']} suggestions</p>
            </CardContent>
          </Card>
          
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-6 text-center">
              <Zap size={32} className="text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Optimization</h3>
              <p className="text-gray-400">{categoryCounts['Optimization']} suggestions</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Suggestions */}
        {activeSuggestions.length > 0 && (
          <Card className="dark-100 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Active Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeSuggestions.map(suggestion => (
                  <div key={suggestion.id} className="p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className={`${suggestion.categoryColor} text-white`}>
                          {suggestion.category}
                        </Badge>
                        <h4 className="text-white font-medium">{suggestion.title}</h4>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDismiss(suggestion.id, suggestion.title)}
                        >
                          <X size={14} className="mr-1" />
                          Dismiss
                        </Button>
                        <Button 
                          size="sm" 
                          className={`${suggestion.categoryColor} hover:opacity-80`}
                          onClick={() => handleApply(suggestion.id, suggestion.title)}
                        >
                          <Check size={14} className="mr-1" />
                          Apply
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{suggestion.description}</p>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Expected: {suggestion.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Applied Suggestions */}
        {appliedSuggestions.length > 0 && (
          <Card className="dark-100 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Applied Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {appliedSuggestions.map(suggestionId => {
                  const suggestion = suggestions.find(s => s.id === suggestionId);
                  return (
                    <div key={suggestionId} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-white">{suggestion?.title}</span>
                      <Badge variant="secondary" className="bg-green-600 text-white">
                        <Check size={12} className="mr-1" />
                        Applied
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {activeSuggestions.length === 0 && appliedSuggestions.length === 0 && (
          <Card className="dark-100 border-gray-700">
            <CardContent className="p-12 text-center">
              <Lightbulb size={48} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">No Active Suggestions</h3>
              <p className="text-gray-400">All suggestions have been processed. Check back later for new recommendations.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}
