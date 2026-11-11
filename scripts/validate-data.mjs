import fs from 'node:fs';
import assert from 'node:assert/strict';
const file=process.argv[2]||new URL('../data/competitions.json',import.meta.url);
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const time=value=>typeof value==='string'&&!Number.isNaN(Date.parse(value));
const bilingual=value=>value&&typeof value.zh==='string'&&value.zh.trim()&&typeof value.en==='string'&&value.en.trim();
const url=value=>{try{return ['https:','http:'].includes(new URL(value).protocol);}catch{return false;}};
assert.equal(data.schemaVersion,1);assert(time(data.updatedAt));assert.equal(data.updateIntervalDays,2);assert(bilingual(data.runSummary));
assert(['pending','enabled','paused','failed'].includes(data.automation.status));if(data.automation.nextRunAt)assert(time(data.automation.nextRunAt));
assert(Array.isArray(data.sources)&&data.sources.length>0);assert(Array.isArray(data.competitions));
const ids=new Set();
for(const s of data.sources){assert(s.name&&url(s.url));assert(['official','association','media'].includes(s.kind));assert(['checked','planned','blocked'].includes(s.status));if(s.lastChecked)assert(time(s.lastChecked));}
for(const item of data.competitions){assert(/^[a-z0-9-]+$/.test(item.id));assert(!ids.has(item.id),`Duplicate: ${item.id}`);ids.add(item.id);assert(['project','concept','award'].includes(item.category));assert(['domestic','international'].includes(item.region));for(const key of ['title','location','summary','eligibility','feeText','prize','notes'])assert(bilingual(item[key]),`${item.id}.${key} must be bilingual`);assert(typeof item.originalTitle==='string');assert(['official','partial','secondary'].includes(item.verification));assert(['free','paid','unknown'].includes(item.fee));assert(item.eligibilityTags.length>0);for(const tag of item.eligibilityTags)assert(['open','young','qualified','student','unknown'].includes(tag));for(const key of ['registrationDeadline','submissionDeadline','registrationOpens'])if(item[key])assert(time(item[key]),`${item.id}.${key}: invalid date`);for(const key of ['firstSeen','updatedAt','lastChecked']){assert(time(item[key]));assert(Date.parse(item[key])<=Date.now()+60000,`${item.id}.${key} is in the future`);}assert(Date.parse(item.firstSeen)<=Date.parse(item.updatedAt));assert(Date.parse(item.lastChecked)<=Date.parse(data.updatedAt));if(item.timezone)new Intl.DateTimeFormat('en',{timeZone:item.timezone});assert(item.sources.length>0);for(const s of item.sources)assert(s.name&&url(s.url)&&['official','association','media'].includes(s.kind));if(item.verification==='official')assert(item.sources.some(s=>s.kind==='official'),`${item.id}: official evidence required`);}
console.log(`Data valid: ${data.competitions.length} opportunities, ${data.sources.length} source channels.`);
