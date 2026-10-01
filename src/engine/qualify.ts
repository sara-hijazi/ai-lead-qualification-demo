import type { Lead, Qualification } from '../types';
export function qualify(lead: Lead): Qualification {
  const supported = lead.service !== 'other';
  const clear = lead.need.trim().length >= 20 && lead.need.trim().split(/\s+/u).length >= 4;
  const viable = lead.budget !== 'low';
  const urgent = lead.timeline === 'now' || lead.timeline === 'month';
  const status = !supported || !clear ? 'unqualified' : viable && urgent ? 'qualified' : 'nurturing';
  return { status, priority: status === 'qualified' ? 'high' : status === 'nurturing' && viable ? 'medium' : 'low', serviceFit: supported ? 'supported' : 'unsupported', budgetFit: viable ? 'viable' : 'limited', intent: urgent ? 'urgent' : 'later', reasons: [supported ? 'supported' : 'unsupported', clear ? 'clear' : 'unclear', viable ? 'viable' : 'limited', urgent ? 'urgent' : 'later'], action: !supported ? 'referral' : !clear ? 'scope' : status === 'qualified' ? 'sales' : !viable ? 'budget' : 'nurture' };
}
