'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { AlertTriangle, Users, DollarSign } from "lucide-react";
import { useActiveUsers } from "../../lib/hooks/useActiveUsers";
import { useRevenue } from "../../lib/hooks/useRevenue";

interface DashboardPageProps {
  className?: string;
  "data-testid"?: string;
}

export function DashboardPage({ className, "data-testid": dataTestId }: DashboardPageProps) {
  const { data: activeUsersData, loading: activeUsersLoading, error: activeUsersError } = useActiveUsers();
  const { data: revenueData, loading: revenueLoading, error: revenueError } = useRevenue();

  return (
    <div className={className} data-testid={dataTestId}>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-10">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Users Card */}
          {activeUsersError ? (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Failed to load active users data: {activeUsersError.message}
              </AlertDescription>
            </Alert>
          ) : activeUsersLoading || !activeUsersData ? (
            <Skeleton className="h-[200px]" />
          ) : (
            <Card data-testid={`dashboard-card-${activeUsersData.id}`}>
              <CardHeader>
                <CardTitle>{activeUsersData.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Users size={32} className="mb-4" />
                <div className="text-2xl font-semibold">
                  {activeUsersData.value}
                </div>
                <div className="text-sm text-gray-500 mt-2">Daily Total</div>
              </CardContent>
            </Card>
          )}

          {/* Revenue Card */}
          {revenueError ? (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Failed to load revenue data: {revenueError.message}
              </AlertDescription>
            </Alert>
          ) : revenueLoading || !revenueData ? (
            <Skeleton className="h-[200px]" />
          ) : (
            <Card data-testid={`dashboard-card-${revenueData.id}`} className="overflow-hidden">
              <div className="bg-green-100 px-6 py-2">
                <CardTitle className="text-lg">{revenueData.title}</CardTitle>
              </div>
              <CardContent className="flex flex-row items-center justify-between pt-6">
                <div className="text-3xl font-extrabold text-gray-900">
                  {revenueData.value}
                </div>
                <div className="p-3 border border-green-200 rounded-full">
                  <DollarSign size={32} className="text-green-600" />
                </div>
              </CardContent>
              <div className="border-t text-center py-2 text-sm text-gray-500">
                Monthly Total
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage; 