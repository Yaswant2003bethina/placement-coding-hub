
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Shield, 
  Users, 
  FileText, 
  Plus, 
  Search, 
  BarChart3,
  Settings,
  LogOut,
  Code,
  Trophy,
  Clock,
  Target,
  Edit,
  Trash2,
  UserPlus,
  Upload
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const stats = [
    { label: 'Total Students', value: '124', icon: <Users className="h-5 w-5" />, color: 'text-blue-600' },
    { label: 'Total Problems', value: '87', icon: <Code className="h-5 w-5" />, color: 'text-green-600' },
    { label: 'Total Submissions', value: '1,243', icon: <FileText className="h-5 w-5" />, color: 'text-purple-600' },
    { label: 'Active Users', value: '89', icon: <Target className="h-5 w-5" />, color: 'text-orange-600' }
  ];

  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Array', submissions: 89, success: '67%', created: '2024-01-15' },
    { id: 2, title: 'Binary Search', difficulty: 'Easy', category: 'Search', submissions: 76, success: '82%', created: '2024-01-14' },
    { id: 3, title: 'Valid Parentheses', difficulty: 'Easy', category: 'Stack', submissions: 54, success: '71%', created: '2024-01-13' },
    { id: 4, title: 'Merge Sort', difficulty: 'Medium', category: 'Sorting', submissions: 43, success: '45%', created: '2024-01-12' },
    { id: 5, title: 'Longest Palindrome', difficulty: 'Hard', category: 'String', submissions: 23, success: '34%', created: '2024-01-11' }
  ];

  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', rollNumber: 'CS001', solved: 47, rank: 1, lastActive: '2 hours ago' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', rollNumber: 'CS002', solved: 42, rank: 2, lastActive: '5 hours ago' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', rollNumber: 'CS003', solved: 38, rank: 3, lastActive: '1 day ago' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', rollNumber: 'CS004', solved: 35, rank: 4, lastActive: '2 days ago' },
    { id: 5, name: 'Eve Brown', email: 'eve@example.com', rollNumber: 'CS005', solved: 32, rank: 5, lastActive: '3 days ago' }
  ];

  const documents = [
    { id: 1, title: 'Data Structures Guide', category: 'Study Material', uploads: 234, created: '2024-01-10' },
    { id: 2, title: 'Algorithm Complexity', category: 'Reference', uploads: 189, created: '2024-01-09' },
    { id: 3, title: 'Interview Questions', category: 'Practice', uploads: 567, created: '2024-01-08' },
    { id: 4, title: 'Coding Standards', category: 'Guidelines', uploads: 123, created: '2024-01-07' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddProblem = () => {
    toast({
      title: "Problem Added Successfully!",
      description: "The new coding problem has been added to the platform.",
    });
    setShowAddProblem(false);
  };

  const handleAddUser = () => {
    toast({
      title: "User Added Successfully!",
      description: "The new student account has been created.",
    });
    setShowAddUser(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 rounded-lg p-2">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CodePrep Admin</h1>
                <p className="text-xs text-gray-600">Platform Management</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Manage problems, users, and monitor platform activity.</p>
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="problems" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Problems</CardTitle>
                  <Button onClick={() => setShowAddProblem(!showAddProblem)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Problem
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showAddProblem && (
                  <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                    <h3 className="font-medium mb-4">Add New Problem</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="title">Problem Title</Label>
                        <Input id="title" placeholder="Enter problem title" />
                      </div>
                      <div>
                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" placeholder="e.g., Array, String, Graph" />
                      </div>
                      <div>
                        <Label htmlFor="timeLimit">Time Limit (seconds)</Label>
                        <Input id="timeLimit" type="number" placeholder="60" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="description">Problem Description</Label>
                      <Textarea id="description" placeholder="Enter problem description..." rows={4} />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleAddProblem}>Add Problem</Button>
                      <Button variant="outline" onClick={() => setShowAddProblem(false)}>Cancel</Button>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  {problems.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium text-gray-900">{problem.title}</h3>
                          <p className="text-sm text-gray-600">{problem.category} • {problem.submissions} submissions</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-600">{problem.success} success</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Users</CardTitle>
                  <Button onClick={() => setShowAddUser(!showAddUser)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showAddUser && (
                  <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                    <h3 className="font-medium mb-4">Add New Student</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="student@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="rollNumber">Roll Number</Label>
                        <Input id="rollNumber" placeholder="CS001" />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" placeholder="Computer Science" />
                      </div>
                      <div>
                        <Label htmlFor="year">Year</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleAddUser}>Add Student</Button>
                      <Button variant="outline" onClick={() => setShowAddUser(false)}>Cancel</Button>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">{student.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.email} • {student.rollNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{student.solved} solved</p>
                          <p className="text-xs text-gray-600">Rank #{student.rank}</p>
                        </div>
                        <Badge variant="outline">{student.lastActive}</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Document Management</CardTitle>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                </div>
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
                            <p className="text-xs text-gray-500 mt-1">{doc.uploads} downloads • {doc.created}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Submission Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Today</span>
                      <span className="font-medium">23 submissions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Week</span>
                      <span className="font-medium">167 submissions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-medium">1,243 submissions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Success Rate</span>
                      <span className="font-medium text-green-600">68.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5" />
                    <span>Top Performers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.slice(0, 3).map((student, index) => (
                      <div key={student.id} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-800' : 
                          index === 1 ? 'bg-gray-100 text-gray-800' : 
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{student.name}</p>
                          <p className="text-xs text-gray-600">{student.solved} problems solved</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
