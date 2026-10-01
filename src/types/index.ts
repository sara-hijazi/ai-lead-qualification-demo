export type Language = 'en' | 'ar';
export type Service = 'support' | 'sales' | 'operations' | 'other';
export type Budget = 'low' | 'starter' | 'growth' | 'enterprise';
export type Timeline = 'now' | 'month' | 'quarter' | 'exploring';
export interface Lead { name: string; company: string; service: Service; budget: Budget; timeline: Timeline; need: string }
export type Status = 'qualified' | 'nurturing' | 'unqualified';
export type Reason = 'supported' | 'unsupported' | 'clear' | 'unclear' | 'viable' | 'limited' | 'urgent' | 'later';
export interface Qualification { status: Status; priority: 'high' | 'medium' | 'low'; serviceFit: 'supported' | 'unsupported'; budgetFit: 'viable' | 'limited'; intent: 'urgent' | 'later'; reasons: Reason[]; action: 'sales' | 'scope' | 'referral' | 'budget' | 'nurture' }
