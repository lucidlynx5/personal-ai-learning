// Pure data logic shared by the browser and data checks.
export const DAY = 86400000;
export function localDate(now = new Date(), timezone = 'UTC') {
  return new Intl.DateTimeFormat('en-CA', {timeZone: timezone || 'UTC', year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
}
export function passed(deadline, now = new Date(), timezone) {
  if (!deadline) return false;
  if (deadline.length === 10) return deadline < localDate(now, timezone);
  return new Date(deadline).getTime() < now.getTime();
}
export function stateOf(item, now = new Date()) {
  if (passed(item.submissionDeadline, now, item.timezone)) return 'archived';
  if (passed(item.registrationDeadline, now, item.timezone)) return 'registered';
  if (item.registrationOpens && !passed(item.registrationOpens, now, item.timezone) && item.registrationOpens.slice(0,10) !== localDate(now,item.timezone)) return 'upcoming';
  if (item.entryStatus === 'unknown' || (!item.registrationDeadline && !item.submissionDeadline)) return 'uncertain';
  return 'open';
}
export function nextDeadline(item, now = new Date()) {
  const state = stateOf(item, now);
  if (state !== 'archived' && state !== 'registered' && item.registrationDeadline) return {value:item.registrationDeadline, kind:'registrationDeadline'};
  return {value:item.submissionDeadline, kind:'submissionDeadline'};
}
export function daysUntil(value, now = new Date(), timezone) {
  if (!value) return null;
  return Math.round((Date.parse(value.slice(0,10)) - Date.parse(localDate(now,timezone))) / DAY);
}
export function filterItems(items, filters, saved = new Set(), now = new Date()) {
  const query = (filters.search || '').trim().toLocaleLowerCase();
  const filtered = items.filter(item => {
    const state = stateOf(item, now);
    return (!filters.category || filters.category === 'all' || item.category === filters.category)
      && (!filters.region || filters.region === 'all' || item.region === filters.region)
      && (!filters.eligibility || filters.eligibility === 'all' || item.eligibilityTags.includes(filters.eligibility))
      && (!filters.fee || filters.fee === 'all' || item.fee === filters.fee)
      && (!filters.status || filters.status === 'all' || (filters.status === 'active' ? state !== 'archived' : state === filters.status))
      && (!filters.verified || item.verification === 'official')
      && (!filters.saved || saved.has(item.id))
      && (!query || [item.title.zh,item.title.en,item.originalTitle,item.location.zh,item.location.en,item.summary.zh,item.summary.en,item.eligibility.zh,item.eligibility.en].join(' ').toLocaleLowerCase().includes(query));
  });
  return filtered.sort((a,b) => filters.sort === 'newest'
    ? b.firstSeen.localeCompare(a.firstSeen) || a.id.localeCompare(b.id)
    : (nextDeadline(a,now).value || '9999').localeCompare(nextDeadline(b,now).value || '9999') || a.id.localeCompare(b.id));
}
export function escapeHTML(value) {return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
export function safeURL(url) {try {const parsed = new URL(url);return ['http:','https:'].includes(parsed.protocol) ? parsed.href : '#';}catch{return '#';}}
