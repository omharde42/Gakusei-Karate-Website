
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a 10-digit number";
    }
    
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (parseInt(formData.age) < 4 || parseInt(formData.age) > 100) {
      newErrors.age = "Age must be between 4 and 100";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const message = `Hello Sensei Rizwan,%0AMy name is ${formData.name}. I am ${formData.age} years old and interested in joining The Karate Gakusei Dojo.%0AHere are my details:%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ALooking forward to learning Shotokan Karate!`;
      const whatsappURL = `https://wa.me/917620238222?text=${message}`;
      
      toast({
        title: "Form submitted successfully!",
        description: "You'll be redirected to WhatsApp to complete your registration.",
      });
      
      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
      });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-gradient-karate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-8">
          Contact Us
        </h2>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-karate-dark mb-6">
              Fill out the form below to inquire about classes. You will be redirected to WhatsApp to complete your registration:
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Student Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="4"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  className={errors.age ? "border-red-500" : ""}
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-karate-red hover:bg-red-700 text-white">
                Submit via WhatsApp
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="font-bold text-karate-dark">
            Sensei Rizwan Shaikh (Nidan Black Belt)<br />
            Phone: <a href="tel:+917620238222" className="text-karate-red hover:underline">+91 76202 38222</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
