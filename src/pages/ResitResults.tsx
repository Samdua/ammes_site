import { FileDown, AlertCircle, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ResitResults() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Help Desk
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about certain procedures
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Resit Procedures */}
          <Card className="animate-fade-in border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-primary" />
                Resit Examination Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Check Eligibility</h3>
                    <p className="text-muted-foreground">
                      Students who scored between 40-49% in any course are eligible for resit examinations. Confirm your eligibility by checking your official results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Complete Application Form</h3>
                    <p className="text-muted-foreground">
                      Download and complete the official resit application form. Ensure all sections are filled accurately with your current information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Pay Resit Fees</h3>
                    <p className="text-muted-foreground">
                      Submit payment of the resit examination fee at the Finance Office. Keep the receipt as proof of payment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Submit Documents</h3>
                    <p className="text-muted-foreground">
                      Submit your completed application form and payment receipt to the Academic Affairs Office before the deadline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Confirmation</h3>
                    <p className="text-muted-foreground">
                      You will receive confirmation of your resit registration via email. Check the examination timetable for your scheduled resit date.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-3 mt-6">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-card-foreground">Application Deadline</p>
                  <p className="text-sm text-muted-foreground">
                    All resit applications must be submitted two weeks before the examination date. Late applications will not be accepted.
                  </p>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <FileDown className="h-4 w-4 mr-2" />
                Download Resit Application Form
              </Button>
            </CardContent>
          </Card>

          {/* Results Queries */}
          <Card className="animate-fade-in border-l-4 border-l-secondary" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertCircle className="h-6 w-6 text-secondary" />
                Results Query Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you believe there is an error in your examination results, follow these steps:
              </p>

              <div className="space-y-3">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Step 1: Verify Your Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Double-check your results on the student portal to ensure the discrepancy is genuine and not a misunderstanding.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Step 2: Contact Your Course Lecturer</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out to the course lecturer first to discuss the issue. Many queries can be resolved at this level.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Step 3: Submit Formal Query</h3>
                  <p className="text-sm text-muted-foreground">
                    If unresolved, submit a formal results query to the Academic Affairs Office with supporting evidence within 14 days of results publication.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Step 4: Await Review</h3>
                  <p className="text-sm text-muted-foreground">
                    The Examination Board will review your query within 21 working days. You will be notified of the outcome via email.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-6">
                <h3 className="font-semibold text-card-foreground mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-semibold">Email:</span> academicaffairs@rmu.edu.gh</p>
                  <p><span className="font-semibold">Phone:</span> +233 59 401 6404</p>
                  <p><span className="font-semibold">Office Hours:</span> Monday - Friday, 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ResitResults;
