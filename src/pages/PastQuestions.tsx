import { useState } from "react";
import { Search, Download, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Question {
  id: number;
  program: string;
  department: string;
  level: string;
  courseCode: string;
  courseTitle: string;
  year: string;
  semester: string;
  downloadLink?: string;
}

const PastQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Sample data - easily replaceable
  const questions: Question[] = [
    {
      id: 1,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BMAE 206",
      courseTitle: "Marine Engine Systems 1 Midsem",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/MES1Midsem.pdf"
    },
    {
      id: 2,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BMAE 210",
      courseTitle: "Fluid Mechanics",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/ElectricalMachines2MidsSem.pdf"
    },
    {
      id: 3,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BSMA 202",
      courseTitle: "Mathematics IV",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/Math4.pdf"
    },
    {
      id: 4,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BMAE 204",
      courseTitle: "Naval Architecture II",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/NavalArch2.pdf"
    },
    {
      id: 5,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BMAE 202",
      courseTitle: "Mechanics of Machines I A",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/Mom1.pdf"
    },
    {
      id: 6,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BMAE 202",
      courseTitle: "Mechanics of Machines I B",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/Mom12.pdf"
    },
    {
      id: 7,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BEEE 206",
      courseTitle: "Electrical Machines II Midsem",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/ElectricalMachines2MidsSem.pdf"
    },
    {
      id: 8,
      program: "Degree",
      department: "Marine",
      level: "200",
      courseCode: "BEEE 206",
      courseTitle: "Electrical Machines II Exam",
      year: "2025",
      semester: "Second",
      downloadLink: "/books/ElectricalMachineExam.pdf"
    },
  ];

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.courseTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === "all" || q.program === selectedProgram;
    const matchesDepartment = selectedDepartment === "all" || q.department === selectedDepartment;

    return matchesSearch && matchesProgram && matchesDepartment;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Past Questions Database
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access previous examination papers to enhance your study preparation
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by course code or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedProgram} onValueChange={setSelectedProgram}>
            <SelectTrigger>
              <SelectValue placeholder="Select Program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programs</SelectItem>
              <SelectItem value="Degree">Degree</SelectItem>
              <SelectItem value="Diploma">Diploma</SelectItem>
              <SelectItem value="Top-Up">Top-Up</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Marine">Marine Engineering</SelectItem>
              <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Questions List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, index) => (
              <Card
                key={q.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <FileText className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-bold text-lg text-card-foreground mb-1">
                            {q.courseCode}: {q.courseTitle}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">Program:</span> {q.program}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">Dept:</span> {q.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">Level:</span> {q.level}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">Year:</span> {q.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="font-semibold">Semester:</span> {q.semester}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(q.downloadLink, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No questions found matching your criteria.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastQuestions;
