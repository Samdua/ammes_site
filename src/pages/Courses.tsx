import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Courses = () => {
  // Sample course data organized by semesters
  const degreeMarine = {
    "Semester 1 (Level 100)": [
      { code: "UCST 103", title: "Computer Studies I", credits: 3 },
      { code: "BEEE 101", title: "App. Electricity I", credits: 3 },
      { code: "UFRE 103", title: "French I", credits: 2 },
      { code: "BMAE 101", title: "Basic Mechanics", credits: 3 },
      { code: "BMAE 103", title: "Engineering Drawing I", credits: 3 },
      { code: "BMAE 105", title: "Workshop Tech. I", credits: 3 },
      { code: "BMAE 107", title: "Material Science", credits: 3 },
      { code: "BSMA 101", title: "Mathematics I (Algebra With Analysis)", credits: 3 }
    ],
    "Semester 2 (Level 100)": [
      { code: "UCST 104", title: "Computer Studies II (Intro. To Programming)", credits: 3 },
      { code: "BEEE 106", title: "Electronics I", credits: 3 },
      { code: "BEEE 102", title: "Circuit Theory I", credits: 2 },
      { code: "UCOM 102", title: "Comm. Skills II", credits: 2 },
      { code: "UFRE 104", title: "French II", credits: 2 },
      { code: "BMAE 102", title: "Engineering Drawing II", credits: 3 },
      { code: "BMAE 104", title: "Workshop Tech. II", credits: 3 },
      { code: "BSMA 102", title: "Mathematics II (Calculus)", credits: 3 }
      
    ],
    "Semester 3 (Level 200)": [
      { code: "BEEE 205", title: "Electrical Machines I", credits: 3 },
      { code: "BEEE 203", title: "Electronics II", credits: 3 },
      { code: "BMAE 201", title: "Engineering Drawing II", credits: 3 },
      { code: "BMAE 203", title: "Naval Architecture I", credits: 3 },
      { code: "BMAE 205", title: "Strength of Materials", credits: 3 },
      { code: "BMAE 207", title: "Thermodynamics I", credits: 3 },
      { code: "BSMA 201", title: "Mathematics III (Calculus With Differential Equations)", credits: 3 },
    
    ],
    "Semester 4 (Level 200)": [
      { code: "BEEE 206", title: "Electrical Machines II", credits: 3 },
      { code: "BMAE 202", title: "Mechanics of Mach. I", credits: 3 },
      { code: "BMAE 204", title: "Naval Architecture II", credits: 3 },
      { code: "BMAE 206", title: "Marine Eng. Systems I", credits: 3 },
      { code: "BMAE 208", title: "Thermodynamics II", credits: 3 },
      { code: "BMAE 210", title: "Fluid Mechanics", credits: 3 },
      { code: "BSMA 202", title: "Mathematics IV (Complex Mapping and Partial Differential Equations)", credits: 3 },
      
    ],
    "Semester 5 (Level 300)": [
      { code: "BMAE 301", title: "Mechanics of Mach. II", credits: 2 },
      { code: "BMAE 303", title: "Naval Architecture III", credits: 3 },
      { code: "BMAE 305", title: "Marine Eng. Systems II", credits: 3 },
      { code: "BMAE 307", title: "Instrumentation", credits: 3 },
      { code: "BMAE 309", title: "Power Plant I", credits: 3 },
      { code: "BMAE 311", title: "Ref. and Air Condition I", credits: 3 },
      { code: "BSMA 301", title: "Statistics", credits: 3 },
      { code: "BNAS 207", title: "Nautical Science", credits: 2 },
    ],
    "Semester 6 (Level 300)": [
      { code: "BMAE 308", title: "Machine Design", credits: 3 },
      { code: "BMAE 306", title: "Marine Eng. Systems III", credits: 3 },
      { code: "BMAE 310", title: "Hydraulics and Hydraulic Machinery", credits: 2 },
      { code: "BMAE 304", title: "Control Engineering I", credits: 3 },
      { code: "BMAE 302", title: "Power Plant II", credits: 3 },
      { code: "BMAE 312", title: "Ref. and Air Condition II", credits: 3 },
      { code: "BSMA 302", title: "Numerical Analysis", credits: 3 },
      { code: "BMAE 314", title: "Research Methods", credits: 2 },
      
    ],
    "Semester 7 (Level 400)": [
      { code: "BMAE 401", title: "Project I", credits: 3 },
      { code: "BMAE 409", title: "Naval Architecture IV", credits: 3 },
      { code: "BMAE 403", title: "Control Engineering II", credits: 3 },
      { code: "BMAE 405", title: "Power Plant III", credits: 3 },
      { code: "BMAE 407", title: "Computer Aided Design", credits: 2 },
      { code: "BPSA 301", title: "Management I", credits: 2 },
    ],
    "Semester 8 (Level 400)": [
      { code: "BMAE 402", title: "Project II", credits: 3 },
      { code: "BMAE 404", title: "Management of Marine Engineering Systems", credits: 2 },
      { code: "BPSA 204", title: "Law", credits: 2 },
      { code: "BPSA 206", title: "Marine Environmental Studies", credits: 2 },
      { code: "BPSA 412", title: "Entrpreneurship and Small Business Management", credits: 2 },
      { code: "BPSA 201", title: "Shipping Economics", credits: 2 },
    ]
  };

  const degreeMechanical = {
     "Semester 1 (Level 100)": [
      { code: "UCST 103", title: "Computer Studies I", credits: 3 },
      { code: "BEEE 101", title: "App. Electricity I", credits: 3 },
      { code: "UFRE 103", title: "French I", credits: 2 },
      { code: "BMAE 101", title: "Basic Mechanics", credits: 3 },
      { code: "BMAE 103", title: "Engineering Drawing I", credits: 3 },
      { code: "BMAE 105", title: "Workshop Tech. I", credits: 3 },
      { code: "BMAE 107", title: "Material Science", credits: 3 },
      { code: "BSMA 101", title: "Mathematics I (Algebra With Analysis)", credits: 3 }
    ],
    "Semester 2 (Level 100)": [
      { code: "UCST 104", title: "Computer Studies II (Intro. To Programming)", credits: 3 },
      { code: "BEEE 106", title: "Electronics I", credits: 3 },
      { code: "BEEE 102", title: "Circuit Theory I", credits: 2 },
      { code: "UCOM 102", title: "Comm. Skills II", credits: 2 },
      { code: "UFRE 104", title: "French II", credits: 2 },
      { code: "BMAE 102", title: "Engineering Drawing II", credits: 3 },
      { code: "BMAE 104", title: "Workshop Tech. II", credits: 3 },
      { code: "BSMA 102", title: "Mathematics II (Calculus)", credits: 3 }
      
    ],
    "Semester 3 (Level 200)": [
      { code: "BEEE 205", title: "Electrical Machines I", credits: 3 },
      { code: "BEEE 203", title: "Electronics II", credits: 3 },
      { code: "BMAE 201", title: "Engineering Drawing II", credits: 3 },
      { code: "BMAE 203", title: "Naval Architecture I", credits: 3 },
      { code: "BMAE 205", title: "Strength of Materials", credits: 3 },
      { code: "BMAE 207", title: "Thermodynamics I", credits: 3 },
      { code: "BSMA 201", title: "Mathematics III (Calculus With Differential Equations)", credits: 3 },
    
    ],
    "Semester 4 (Level 200)": [
      { code: "BEEE 206", title: "Electrical Machines II", credits: 3 },
      { code: "BMAE 202", title: "Mechanics of Mach. I", credits: 3 },
      { code: "BMAE 204", title: "Naval Architecture II", credits: 3 },
      { code: "BMAE 206", title: "Marine Eng. Systems I", credits: 3 },
      { code: "BMAE 208", title: "Thermodynamics II", credits: 3 },
      { code: "BMAE 210", title: "Fluid Mechanics", credits: 3 },
      { code: "BSMA 202", title: "Mathematics IV (Complex Mapping and Partial Differential Equations)", credits: 3 },
      
    ],
    "Semester 5 (Level 300)": [
      { code: "BMAE 301", title: "Mechanics of Mach. II", credits: 2 },
      { code: "BMAE 303", title: "Naval Architecture III", credits: 3 },
      { code: "BMAE 305", title: "Marine Eng. Systems II", credits: 3 },
      { code: "BMAE 307", title: "Instrumentation", credits: 3 },
      { code: "BMAE 309", title: "Power Plant I", credits: 3 },
      { code: "BMAE 311", title: "Ref. and Air Condition I", credits: 3 },
      { code: "BSMA 301", title: "Statistics", credits: 3 },
      { code: "BNAS 207", title: "Nautical Science", credits: 2 },
    ],
    "Semester 6 (Level 300)": [
      { code: "BMAE 308", title: "Machine Design", credits: 3 },
      { code: "BMAE 306", title: "Marine Eng. Systems III", credits: 3 },
      { code: "BMAE 310", title: "Hydraulics and Hydraulic Machinery", credits: 2 },
      { code: "BMAE 304", title: "Control Engineering I", credits: 3 },
      { code: "BMAE 302", title: "Power Plant II", credits: 3 },
      { code: "BMAE 312", title: "Ref. and Air Condition II", credits: 3 },
      { code: "BSMA 302", title: "Numerical Analysis", credits: 3 },
      { code: "BMAE 314", title: "Research Methods", credits: 2 },
      
    ],
    "Semester 7 (Level 400)": [
      { code: "BMAE 401", title: "Project I", credits: 3 },
      { code: "BMAE 409", title: "Naval Architecture IV", credits: 3 },
      { code: "BMAE 403", title: "Control Engineering II", credits: 3 },
      { code: "BMAE 405", title: "Power Plant III", credits: 3 },
      { code: "BMAE 407", title: "Computer Aided Design", credits: 2 },
      { code: "BPSA 301", title: "Management I", credits: 2 },
    ],
    "Semester 8 (Level 400)": [
      { code: "BMAE 402", title: "Project II", credits: 3 },
      { code: "BMAE 404", title: "Management of Marine Engineering Systems", credits: 2 },
      { code: "BPSA 204", title: "Law", credits: 2 },
      { code: "BPSA 206", title: "Marine Environmental Studies", credits: 2 },
      { code: "BPSA 412", title: "Entrpreneurship and Small Business Management", credits: 2 },
      { code: "BPSA 201", title: "Shipping Economics", credits: 2 },
    ]
   
  };

  const diplomaMarine = {
    "Semester 1 (Level 100)": [
      { code: "DMAE 101", title: "Engineering Drawing I", credits: 3 },
      { code: "DMAE 105", title: "Applied Mechanics", credits: 3 },
      { code: "DMAE 107", title: "Thermodynamics", credits: 3 },
      { code: "DMAE 109", title: "Basic Electronics", credits: 2 },
      { code: "DMAE 111", title: "Basic Navigation and Seamanship", credits: 2 },
      { code: "BMAE 105", title: "Mathematics I(Algebra With Analysis)", credits: 3 },
      { code: "UCST 101", title: "Computer Studies", credits: 2 },
      { code: "DMAE 103", title: "Workshop Technology I", credits: 2 }
    ],
    "Semester 2 (Level 100)": [
      { code: "DEEE 102", title: "Electrotechnology/Electronics", credits: 3 },
      { code: "DEEE 104", title: "Electrical Machines", credits: 3 },
      { code: "DMAE 102", title: "Engineering Drawing II", credits: 3 },
      { code: "DMAE 104", title: "Workshop Technology II", credits: 3 },
      { code: "DMAE 106", title: "Material Science", credits: 3 },
      { code: "DMAE 106", title: "Instrumentation", credits: 3 },
      { code: "DSMA 102", title: "Mathematics II(Calculus)", credits: 3 },
      { code: "UCST 102", title: "Computer Studies II (Introduction To Programming)", credits: 3 }
    ],
    "Semester 3 (Level 200)": [
      { code: "DMAE 201", title: "Fluid Mechanics", credits: 3 },
      { code: "DMAE 203", title: "Strength of Materials", credits: 3 },
      { code: "DMAE 205", title: "Instrumentation/Control Engineering", credits: 3 },
      { code: "DMAE 207", title: "Referigeration and Air-Conditioning", credits: 3 },
      { code: "DPSA 201", title: "Marine Environmental Studies", credits: 2 },
      { code: "DSMA 201", title: "Calculus With Differential Equations (Mathematics)", credits: 3 },
    
    
    ],
    "Semester 4 (Level 200)": [
      { code: "DMAE 202", title: "Marine Engine Systems", credits: 3 },
      { code: "DMAE 204", title: "Marine Power Plants", credits: 3 },
      { code: "DMAE 206", title: "Naval Architecture", credits: 3 },
      { code: "DMAE 212", title: "Project Work", credits: 6 },
      { code: "DMAE 214", title: "Marine Plant Operations and Maintenance", credits: 3 },
      
    ],
  };

  

  

  const gradingSystem = [
    { grade: "A", range: "80-100", interpretation: "Outstanding", points: "4.00" },
    { grade: "A-", range: "75-79", interpretation: "Excellent", points: "3.85" },
    { grade: "B+", range: "70-74", interpretation: "Very Good", points: "3.50" },
    { grade: "B", range: "65-69", interpretation: "Good", points: "3.00" },
    { grade: "C+", range: "60-64", interpretation: "Above Average", points: "2.50" },
    { grade: "C", range: "55-59", interpretation: "Average", points: "2.00" },
    { grade: "D", range: "50-54", interpretation: "Pass", points: "1.50" },
    { grade: "E", range: "45-49", interpretation: "Weak Pass", points: "1.00" },
    { grade: "F", range: "0-44", interpretation: "Fail", points: "0.0" }
  ];

  const SemesterCourses = ({ semesters }: { semesters: Record<string, Array<{ code: string; title: string; credits: number }>> }) => (
    <div className="space-y-6">
      {Object.entries(semesters).map(([semester, courses]) => (
        <div key={semester} className="border rounded-lg p-4 bg-card">
          <h3 className="text-lg font-semibold mb-3 text-primary">{semester}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Course Code</TableHead>
                <TableHead className="font-bold">Course Title</TableHead>
                <TableHead className="font-bold">Credit Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{course.code}</TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Courses & Grading System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive course listings and academic grading criteria
          </p>
        </div>

        {/* Course Listings */}
        <Card className="max-w-6xl mx-auto mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Course Catalog</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="degree-marine" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6">
                <TabsTrigger value="degree-marine">Degree (Marine)</TabsTrigger>
                <TabsTrigger value="degree-mechanical">Degree (Mech)</TabsTrigger>
                <TabsTrigger value="diploma-marine">Diploma (Marine)</TabsTrigger>
                
              </TabsList>

              <TabsContent value="degree-marine">
                <SemesterCourses semesters={degreeMarine} />
              </TabsContent>

              <TabsContent value="degree-mechanical">
                <SemesterCourses semesters={degreeMechanical} />
              </TabsContent>

              <TabsContent value="diploma-marine">
                <SemesterCourses semesters={diplomaMarine} />
              </TabsContent>


              
            </Tabs>
          </CardContent>
        </Card>

        {/* Grading System */}
        <Card className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="text-2xl">Grading System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-center">Grade</TableHead>
                    <TableHead className="font-bold text-center">Score Range</TableHead>
                    <TableHead className="font-bold text-center">Interpretation</TableHead>
                    <TableHead className="font-bold text-center">Grade Point</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gradingSystem.map((item, index) => (
                    <TableRow
                      key={index}
                      className={`hover:bg-muted/50 ${
                        item.grade === "A"
                          ? "bg-primary/5"
                          : item.grade === "F"
                          ? "bg-destructive/5"
                          : ""
                      }`}
                    >
                      <TableCell className="font-bold text-center text-lg">{item.grade}</TableCell>
                      <TableCell className="text-center">{item.range}</TableCell>
                      <TableCell className="text-center">{item.interpretation}</TableCell>
                      <TableCell className="font-semibold text-center">{item.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Note:</span> The GPA is calculated based on the grade points earned in each course, weighted by the credit hours. A minimum CGPA of 1.5 is required for graduation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
