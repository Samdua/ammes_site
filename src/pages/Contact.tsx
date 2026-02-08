import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ammesLogo from "@/assets/ammes-logo.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting AMMES. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with AMMES - We're here to help
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <img src={ammesLogo} alt="AMMES Logo" className="h-16 w-auto" />
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground">AMMES</h2>
                    <p className="text-muted-foreground text-sm">Regional Maritime University</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Email</p>
                      <a href="mailto:rmuames@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        rmuames@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Phone</p>
                      <a href="tel:+233594016404" className="text-muted-foreground hover:text-primary transition-colors">
                        +233 594 016 404
          
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Office Address</p>
                      <p className="text-muted-foreground">
                        AMMES Office, Student Complex<br />
                        Regional Maritime University<br />
                        Nungua, Accra, Ghana
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="font-semibold text-card-foreground mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {/* <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a> */}
                    <a
                      href="https://www.instagram.com/ammesrmu/?utm_source=ig_web_button_share_sheet"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ammes-rmu-549aa1234"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-card-foreground mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
