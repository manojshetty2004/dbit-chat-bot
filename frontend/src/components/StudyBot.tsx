import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  BookOpen, 
  Brain, 
  FileText, 
  Sparkles,
  Upload,
  Clock,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-study-bot.jpg";

interface Subject {
  name: string;
  noteCount: number;
  lastUpdated: string;
  color: string;
}

const StudyBot = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const subjects: Subject[] = [
    { name: "Database Management", noteCount: 12, lastUpdated: "2 days ago", color: "primary" },
    { name: "Engineering Mathematics", noteCount: 8, lastUpdated: "1 day ago", color: "secondary" },
    { name: "Data Structures", noteCount: 15, lastUpdated: "3 hours ago", color: "accent" },
    { name: "Operating Systems", noteCount: 6, lastUpdated: "1 week ago", color: "success" },
  ];

  const recentNotes = [
    { title: "DBMS Unit 2 - Normalization", subject: "Database Management", time: "3 hours ago" },
    { title: "Calculus Integration Formulas", subject: "Engineering Mathematics", time: "1 day ago" },
    { title: "Binary Trees Implementation", subject: "Data Structures", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered Study Companion</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Your College Notes Bot
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Store, organize, and instantly retrieve your study notes with AI-powered search. 
                Your friendly academic companion that makes studying enjoyable and stress-free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg">
                  <Plus className="mr-2 h-5 w-5" />
                  Upload Notes
                </Button>
                <Button variant="outline" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Search Notes
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-xl" />
              <img 
                src={heroImage} 
                alt="AI Study Bot with floating notes and books" 
                className="relative rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AI-Powered Search</h3>
                <p className="text-muted-foreground">Ask naturally: "Show me DBMS Unit 2 notes" or "Find formulas from Math"</p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search your notes naturally... (e.g., 'Show me all formulas from calculus')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 focus:border-primary/50 focus:ring-primary/25"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dashboard */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subjects Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Your Subjects
              </h2>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Subject
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {subject.name}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={`${
                          subject.color === 'primary' ? 'bg-primary/10 text-primary' :
                          subject.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                          subject.color === 'accent' ? 'bg-accent/10 text-accent' :
                          'bg-success/10 text-success'
                        }`}
                      >
                        {subject.noteCount} notes
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      Updated {subject.lastUpdated}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentNotes.map((note, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                    <p className="font-medium text-sm">{note.title}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">{note.subject}</span>
                      <span className="text-xs text-muted-foreground">{note.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Study Stats */}
            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Study Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Notes</span>
                    <span className="font-bold">41</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subjects</span>
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span className="font-bold">+7 notes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Upload */}
            <Card className="border-dashed border-2 border-accent/30 bg-accent/5 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <Upload className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-accent">Quick Upload</p>
                <p className="text-sm text-muted-foreground mt-1">Drop files or click to upload</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyBot;