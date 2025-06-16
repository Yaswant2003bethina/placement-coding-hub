
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Trophy, 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  LogOut, 
  User,
  Search,
  Filter,
  Play,
  CheckCircle,
  XCircle,
  FileText
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Problems Solved', value: '47', icon: <CheckCircle className="h-5 w-5" />, color: 'text-green-600' },
    { label: 'Success Rate', value: '78%', icon: <Target className="h-5 w-5" />, color: 'text-blue-600' },
    { label: 'Current Streak', value: '12', icon: <TrendingUp className="h-5 w-5" />, color: 'text-orange-600' },
    { label: 'Rank', value: '#23', icon: <Trophy className="h-5 w-5" />, color: 'text-purple-600' }
  ];

  const recentProblems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', status: 'Solved', time: '2 hours ago', category: 'Array' },
    { id: 2, title: 'Binary Search', difficulty: 'Easy', status: 'Solved', time: '1 day ago', category: 'Search' },
    { id: 3, title: 'Valid Parentheses', difficulty: 'Easy', status: 'Attempted', time: '2 days ago', category: 'Stack' },
    { id: 4, title: 'Merge Two Sorted Lists', difficulty: 'Easy', status: 'Solved', time: '3 days ago', category: 'Linked List' },
    { id: 5, title: 'Maximum Subarray', difficulty: 'Medium', status: 'Attempted', time: '1 week ago', category: 'Dynamic Programming' }
  ];

  const problemsList = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptance: '49.2%', category: 'Array', solved: true },
    { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: '36.4%', category: 'Linked List', solved: false },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: '33.8%', category: 'String', solved: false },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: '35.2%', category: 'Array', solved: false },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: '32.1%', category: 'String', solved: false },
    { id: 6, title: 'Zigzag Conversion', difficulty: 'Medium', acceptance: '42.3%', category: 'String', solved: false },
    { id: 7, title: 'Reverse Integer', difficulty: 'Medium', acceptance: '27.8%', category: 'Math', solved: true },
    { id: 8, title: 'String to Integer (atoi)', difficulty: 'Medium', acceptance: '16.9%', category: 'String', solved: false }
  ];

  const documents = [
    { id: 1, title: 'Data Structures Cheat Sheet', category: 'Study Material', downloads: 234 },
    { id: 2, title: 'Algorithm Time Complexity Guide', category: 'Reference', downloads: 189 },
    { id: 3, title: 'Interview Preparation Checklist', category: 'Preparation', downloads: 567 },
    { id: 4, title: 'Company-wise Questions', category: 'Practice', downloads: 892 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Solved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Attempted': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Play className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-2">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CodePrep</h1>
                <p className="text-xs text-gray-600">Student Dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Student!</h2>
          <p className="text-gray-600">Continue your coding journey and track your progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Overall Progress</span>
                  <span>47/100 problems</span>
                </div>
                <Progress value={47} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Easy Problems</span>
                  <span>25/40 solved</span>
                </div>
                <Progress value={62.5} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Medium Problems</span>
                  <span>18/45 solved</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Hard Problems</span>
                  <span>4/15 solved</span>
                </div>
                <Progress value={26.7} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="problems" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Practice Problems</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search problems..."
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {problemsList.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${problem.solved ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {problem.solved ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{problem.title}</h3>
                          <p className="text-sm text-gray-600">{problem.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-600">{problem.acceptance}</span>
                        <Button 
                          size="sm" 
                          onClick={() => navigate(`/student/problem/${problem.id}`)}
                        >
                          {problem.solved ? 'Review' : 'Solve'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>Your latest problem-solving sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProblems.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(problem.status)}
                        <div>
                          <h3 className="font-medium text-gray-900">{problem.title}</h3>
                          <p className="text-sm text-gray-600">{problem.category} • {problem.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                        <Badge variant={problem.status === 'Solved' ? 'default' : 'secondary'}>
                          {problem.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Study Resources</span>
                </CardTitle>
                <CardDescription>Download study materials and preparation guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 text-gray-400 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-900">{doc.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{doc.category}</p>
                            <p className="text-xs text-gray-500 mt-1">{doc.downloads} downloads</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
