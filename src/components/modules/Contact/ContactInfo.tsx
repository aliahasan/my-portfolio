"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const ContactInfo = () => {
  const contactDetails = {
    email: "aanabin18@gmail.com",
    phone: "01316251022 | 01611534845",
    address: "Kishoreganj, Dhaka , Bangladesh",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ali-ahasan-nabin-47861122a",
        icon: <Linkedin className="h-5 w-5" />,
        color: "bg-blue-600 hover:bg-blue-700",
      },
      {
        name: "GitHub",
        url: "https://github.com/aliahasan",
        icon: <Github className="h-5 w-5" />,
        color: "bg-gray-800 hover:bg-gray-900",
      },
      {
        name: "Twitter",
        url: "https://x.com/ahasan_nabin",
        icon: <Twitter className="h-5 w-5" />,
        color: "bg-sky-500 hover:bg-sky-600",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/aliahasan.nabin",
        icon: <Facebook className="h-5 w-5" />,
        color: "bg-pink-600 hover:bg-pink-700",
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <Card className="overflow-hidden border-none shadow-sm">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Get In Touch
          </CardTitle>
          <p className="text-blue-100">
            Feel free to reach out through any of these channels
          </p>
        </CardHeader>
        <CardContent className="p-6 bg-[#F3F4F6] dark:bg-my-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-my-light dark:text-my-dark">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <a
                      href={`tel:${contactDetails.phone.replace(/\D/g, "")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        contactDetails.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {contactDetails.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-my-light dark:text-my-dark">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {contactDetails.social.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Button
                      className={`w-full ${platform.color} text-white transition-all duration-300 transform hover:scale-105`}
                      variant="default"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {platform.icon}
                        <span>{platform.name}</span>
                      </div>
                    </Button>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-gray-50 p-4 border border-gray-100">
                <p className="text-sm text-gray-600">
                  I&lsquo;m always open to discussing new projects,
                  opportunities, or partnerships.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ContactInfo;
