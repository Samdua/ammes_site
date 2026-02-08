import { useState } from "react";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface DuesRecord {
  id: number;
  name: string;
  indexNumber: string;
  program: string;
  department: string;
  status: "PAID" | "NOT PAID";
}

const Dues = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data - easily replaceable
  const duesRecords: DuesRecord[] = [
    { id: 1, name: "Kwame Mensah", indexNumber: "RMU/MAE/21/001", program: "Degree", department: "Marine", status: "PAID" },
    { id: 2, name: "Ama Asante", indexNumber: "RMU/MEC/21/015", program: "Degree", department: "Mechanical", status: "PAID" },
    { id: 3, name: "John Boateng", indexNumber: "RMU/MAE/22/008", program: "Diploma", department: "Marine", status: "NOT PAID" },
    { id: 4, name: "Grace Owusu", indexNumber: "RMU/MEC/21/023", program: "Degree", department: "Mechanical", status: "PAID" },
    { id: 5, name: "Samuel Darko", indexNumber: "RMU/MAE/22/012", program: "Top-Up", department: "Marine", status: "NOT PAID" },
    { id: 6, name: "Abena Adjei", indexNumber: "RMU/MEC/22/019", program: "Diploma", department: "Mechanical", status: "PAID" },
    { id: 7, name: "Kofi Addo", indexNumber: "RMU/MAE/21/005", program: "Degree", department: "Marine", status: "PAID" },
    { id: 8, name: "Yaa Osei", indexNumber: "RMU/MEC/22/027", program: "Degree", department: "Mechanical", status: "NOT PAID" },
    { id: 9, name: "Kwesi Appiah", indexNumber: "RMU/MAE/22/014", program: "Diploma", department: "Marine", status: "PAID" },
    { id: 10, name: "Akua Frimpong", indexNumber: "RMU/MEC/21/031", program: "Top-Up", department: "Mechanical", status: "NOT PAID" }
  ];

  const filteredRecords = duesRecords.filter((record) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      record.name.toLowerCase().includes(searchLower) ||
      record.indexNumber.toLowerCase().includes(searchLower) ||
      record.program.toLowerCase().includes(searchLower) ||
      record.department.toLowerCase().includes(searchLower)
    );
  });

  const paidCount = duesRecords.filter(r => r.status === "PAID").length;
  const unpaidCount = duesRecords.filter(r => r.status === "NOT PAID").length;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dues Status
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check membership dues payment status for all AMMES members
          </p>
        </div>

        {/* Summary Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Members</p>
                  <p className="text-3xl font-bold text-foreground">{duesRecords.length}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Paid</p>
                  <p className="text-3xl font-bold text-green-600">{paidCount}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Not Paid</p>
                  <p className="text-3xl font-bold text-red-600">{unpaidCount}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="max-w-6xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, index number, program, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Dues Table */}
        <Card className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Index Number</TableHead>
                    <TableHead className="font-bold">Program</TableHead>
                    <TableHead className="font-bold">Department</TableHead>
                    <TableHead className="font-bold text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <TableRow key={record.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{record.name}</TableCell>
                        <TableCell>{record.indexNumber}</TableCell>
                        <TableCell>{record.program}</TableCell>
                        <TableCell>{record.department}</TableCell>
                        <TableCell className="text-center">
                          {record.status === "PAID" ? (
                            <Badge className="bg-green-500 hover:bg-green-600 text-white">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              PAID
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="h-3 w-3 mr-1" />
                              NOT PAID
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No records found matching your search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dues;
