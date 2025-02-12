import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Dashboard |  Portfolio",
  description: "Welcome to your dashboard, where you can manage your portfolio",
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="text-center text-red-500 text-lg">
        Please log in to view the dashboard.
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* User Info Section */}
        <Card className="mb-8 dark:bg-my-bg dark:text-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={user?.image || "https://github.com/shadcn.png"}
                  alt={user?.name || "User"}
                />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user?.name}</CardTitle>
                <CardDescription className="text-my-light dark:text-my-dark">
                  {user?.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-my-light dark:text-my-dark">
              Welcome back to your dashboard! Here’s a quick overview of your
              account.
            </p>
          </CardContent>
        </Card>

        {/* Additional User Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Account Status */}
          <Card className=" dark:bg-my-bg">
            <CardHeader>
              <CardTitle className="text-lg">Account Status</CardTitle>
              <CardDescription>
                Your account is active and in good standing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 font-semibold">Active</p>
            </CardContent>
          </Card>

          {/* Card 2: Joined Date */}
          <Card className="dark:bg-my-bg">
            <CardHeader>
              <CardTitle className="text-lg">Joined Date</CardTitle>
              <CardDescription>Member since</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-my-light dark:text-my-dark">January 1, 2023</p>
            </CardContent>
          </Card>

          {/* Card 3: Usage Statistics */}
          <Card className=" dark:bg-my-bg">
            <CardHeader>
              <CardTitle className="text-lg">Usage Statistics</CardTitle>
              <CardDescription>Your activity this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-my-light dark:text-my-dark">
                  Logged in: 12 times
                </p>
                <p className="text-my-light dark:text-my-dark">
                  Tasks completed: 8
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
