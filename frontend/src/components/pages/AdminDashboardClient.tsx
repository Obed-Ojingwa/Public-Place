
// FILE 1: Admin Dashboard Main Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\page.tsx
 
'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, Users, Zap, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
 
interface DashboardStats {
  total_leads: number;
  qualified_leads: number;
  total_audits: number;
  completed_audits: number;
  this_month_revenue: number;
  conversion_rate: number;
}
 
interface RecentLead {
  id: string;
  company_name: string;
  contact_email: string;
  lead_score: number;
  status: string;
  created_at: string;
}
 
export default function AdminDashboard() {
  const { isLoaded, userId, getToken } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Redirect if not authenticated
    if (isLoaded && !userId) {
      router.push('/');
    }
 
    // Fetch dashboard data
    const fetchDashboard = async () => {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/dashboard`, {
            headers: {
              Authorization: `Bearer ${await getToken()}`,
            },
          }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads?limit=5`, {
            headers: {
              Authorization: `Bearer ${await getToken()}`,
            },
          }),
        ]);
 
        const statsData = await statsRes.json();
        const leadsData = await leadsRes.json();
 
        setStats(statsData);
        setRecentLeads(leadsData);
      } catch (error) {
        console.error('Failed to fetch dashboard:', error);
      } finally {
        setLoading(false);
      }
    };
 
    if (userId) {
      fetchDashboard();
    }
  }, [userId, isLoaded]);
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
 
  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }
 
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
            <p className="text-slate-600">Welcome back! Here's what's happening with your business.</p>
          </motion.div>
        </motion.div>
 
        {/* STATS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Total Leads */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Total Leads</p>
                <p className="text-4xl font-bold text-slate-900">{stats?.total_leads || 0}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="text-green-600 font-semibold">
                {stats?.qualified_leads || 0}
              </span>{' '}
              qualified
            </p>
          </motion.div>
 
          {/* Conversion Rate */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Conversion Rate</p>
                <p className="text-4xl font-bold text-slate-900">
                  {stats?.conversion_rate.toFixed(1) || 0}%
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-slate-600">Month-over-month</p>
          </motion.div>
 
          {/* Monthly Revenue */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">This Month</p>
                <p className="text-4xl font-bold text-slate-900">
                  ${(stats?.this_month_revenue || 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-slate-600">From active retainers</p>
          </motion.div>
 
          {/* Completed Audits */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Audits Completed</p>
                <p className="text-4xl font-bold text-slate-900">{stats?.completed_audits || 0}</p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="text-slate-900 font-semibold">{stats?.total_audits || 0}</span> total
            </p>
          </motion.div>
 
          {/* Action Items */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Action Items</p>
                <p className="text-4xl font-bold text-slate-900">12</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                <Calendar className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-slate-600">Waiting for follow-up</p>
          </motion.div>
        </motion.div>
 
        {/* RECENT LEADS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-slate-200 p-8 mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Recent Leads</h2>
            <Link
              href="/admin/leads"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </motion.div>
 
          <motion.div variants={itemVariants} className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <Link href={`/admin/leads/${lead.id}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                        {lead.company_name}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{lead.contact_email}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          lead.status === 'qualified'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 flex-1 bg-slate-200 rounded-full max-w-xs">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${Math.min(lead.lead_score, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          {lead.lead_score}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-sm">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
 
        {/* QUICK ACTIONS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/admin/leads"
              className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Manage Leads</h3>
              <p className="text-slate-600 text-sm">View and qualify leads</p>
            </Link>
          </motion.div>
 
          <motion.div variants={itemVariants}>
            <Link
              href="/admin/audits"
              className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <Zap className="w-8 h-8 text-cyan-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">View Audits</h3>
              <p className="text-slate-600 text-sm">Check audit results</p>
            </Link>
          </motion.div>
 
          <motion.div variants={itemVariants}>
            <Link
              href="/admin/analytics"
              className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <BarChart3 className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Analytics</h3>
              <p className="text-slate-600 text-sm">View detailed metrics</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}