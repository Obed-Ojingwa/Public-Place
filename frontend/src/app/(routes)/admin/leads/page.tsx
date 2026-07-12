// ============================================================================
// FILE 2: Admin Leads Management Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\leads\page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trash2, Mail, Filter, CheckCircle } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  is_contacted: boolean;
  created_at: string;
  updated_at: string | null;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [contactFilter, setContactFilter] = useState<'all' | 'contacted' | 'uncontacted'>('all');

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
    if (contactFilter === 'all') {
      setFilteredLeads(leads);
    } else if (contactFilter === 'contacted') {
      setFilteredLeads(leads.filter(lead => lead.is_contacted));
    } else if (contactFilter === 'uncontacted') {
      setFilteredLeads(leads.filter(lead => !lead.is_contacted));
    }
  }, [contactFilter, leads]);

  const toggleContacted = async (id: number, currentStatus: boolean) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_contacted: !currentStatus }),
      });
      setLeads(leads.map(lead =>
        lead.id === id ? { ...lead, is_contacted: !currentStatus } : lead
      ));
    } catch (error) {
      console.error('Failed to update lead contact status:', error);
    }
  };

  const deleteLead = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads/${id}`, {
        method: 'DELETE',
      });
      setLeads(leads.filter(l => l.id !== id));
    } catch (error) {
      console.error('Failed to delete lead:', error);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */ }
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Leads</h1>
          <p className="text-slate-600">Manage and qualify your leads</p>
        </motion.div>

        {/* FILTERS */ }
        <motion.div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-slate-600" />
            {['all', 'contacted', 'uncontacted'].map((filterValue) => (
              <button
                key={filterValue}
                onClick={() => setContactFilter(filterValue as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  contactFilter === filterValue
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filterValue === 'all' ? 'All Leads' :
                 filterValue === 'contacted' ? 'Contacted' : 'Not Contacted'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* LEADS TABLE */ }
        <motion.div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Email</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Company</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Phone</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Contacted</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td className="py-8 text-center text-slate-500" colSpan={7}>
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <p className="font-semibold text-slate-900">{lead.name}</p>
                      </td>
                      <td className="py-4 px-6">
                        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-700">
                          {lead.email}
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        {lead.company || <span className="text-slate-500 italic">—</span>}
                      </td>
                      <td className="py-4 px-6">
                        {lead.phone || <span className="text-slate-500 italic">—</span>}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          {lead.is_contacted ? (
                            <CheckCircle className="w-5 h-5 text-green-500" onClick={() => toggleContacted(lead.id, true)} />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-slate-400" onClick={() => toggleContacted(lead.id, false)} />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-slate-600">{new Date(lead.created_at).toLocaleDateString()}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => {
                              // In a real app, this would open a modal to view the message
                              alert(`Message from ${lead.name}:\n\n${lead.message}`);
                            }}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <Mail className="w-4 h-4 text-blue-600" />
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </main>
  );
}