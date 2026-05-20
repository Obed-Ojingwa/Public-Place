// ============================================================================
// FILE 2: Admin Leads Management Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\leads\page.tsx
 
'use client';
 
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Edit2, Trash2, Mail, Phone, Filter } from 'lucide-react';
 
interface Lead {
  id: string;
  company_name: string;
  contact_email: string;
  contact_name: string;
  phone: string;
  industry: string;
  lead_score: number;
  status: string;
  created_at: string;
}
 
export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
 
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads?limit=100`);
        const data = await response.json();
        setLeads(data);
        setFilteredLeads(data);
      } catch (error) {
        console.error('Failed to fetch leads:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchLeads();
  }, []);
 
  useEffect(() => {
    if (statusFilter === 'all') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter((lead) => lead.status === statusFilter));
    }
  }, [statusFilter, leads]);
 
  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
 
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads/${id}`, {
        method: 'DELETE',
      });
      setLeads(leads.filter((l) => l.id !== id));
    } catch (error) {
      console.error('Failed to delete lead:', error);
    }
  };
 
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
 
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Leads</h1>
          <p className="text-slate-600">Manage and qualify your leads</p>
        </motion.div>
 
        {/* FILTERS */}
        <motion.div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-slate-600" />
            {['all', 'new', 'qualified', 'contacted', 'converted'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  statusFilter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status === 'all' ? 'All Leads' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
 
        {/* LEADS TABLE */}
        <motion.div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Company</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Contact</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Industry</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Score</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-4 px-6">
                      <p className="font-semibold text-slate-900">{lead.company_name}</p>
                      <p className="text-sm text-slate-600">{new Date(lead.created_at).toLocaleDateString()}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <p className="text-slate-900">{lead.contact_name}</p>
                        <a href={`mailto:${lead.contact_email}`} className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {lead.contact_email}
                        </a>
                        {lead.phone && (
                          <a href={`tel:${lead.phone}`} className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {lead.phone}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{lead.industry || '—'}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-32 bg-slate-200 rounded-full">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${Math.min(lead.lead_score, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">{lead.lead_score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lead.status === 'converted' ? 'bg-green-100 text-green-700' :
                        lead.status === 'qualified' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4 text-slate-600" />
                        </button>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </main>
  );
}