import {execFileSync} from 'node:child_process';
import {mkdirSync,unlinkSync,writeFileSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const blogs=[
['outsourced-service-returned-work-reentry','Control Returned Work Reentry in an Outsourced Service Queue'],['outsourced-service-client-approval-expiry','Track Expiring Client Approvals in Outsourced Service Work'],['outsourced-service-evidence-access-failure','Handle Evidence Access Failures in Outsourced Service Reviews'],['outsourced-service-automation-owner-handoff','Hand Off Ownership of Outsourced Service Automations'],['outsourced-service-sla-clock-dispute','Resolve Service-Level Clock Disputes with Event Evidence'],['outsourced-service-sensitive-case-redaction','Prepare Sensitive Case Redactions for Outsourced Service Review'],['outsourced-service-bulk-update-preview','Preview Bulk Updates before an Outsourced Service Release'],['outsourced-service-customer-promise-register','Maintain a Customer Promise Register across Outsourced Teams'],['outsourced-service-quality-appeal-route','Create a Quality Finding Appeal Route for Outsourced Service Teams'],['outsourced-service-queue-merge-control','Control Queue Mergers during Outsourced Service Changes'],['outsourced-service-third-party-outage-log','Keep a Third-Party Outage Log for Outsourced Service Delivery'],['outsourced-service-end-of-day-reconciliation','Run an End-of-Day Reconciliation for Outsourced Service Queues']];
const research=[['outsourced-service-reopen-cause-stability-study','Test the Stability of Reopen Causes in Outsourced Service Queues'],['outsourced-service-handoff-acknowledgement-lag','Measure Handoff Acknowledgement Lag in Outsourced Service Delivery'],['outsourced-service-approval-expiry-risk-study','Study Operational Risk after Outsourced Service Approvals Expire'],['outsourced-service-automation-exception-observability','Evaluate Exception Observability in Outsourced Service Automations'],['outsourced-service-redaction-review-agreement','Measure Reviewer Agreement on Outsourced Service Redactions']];
const make=(tuple,system)=>({system,slug:tuple[0],title:tuple[1],date:'2026-10-12',source:'app/oct12-content.ts',route:`/${system.toLowerCase()}/${tuple[0]}`,thumbnail:`/oct12/${tuple[0]}.${system==='Blog'?'png':'webp'}`,thumbnailTitle:tuple[1]});
const items=[...blogs.map(x=>make(x,'Blog')),...research.map(x=>make(x,'Research'))];
const dir=resolve(root,'publishing/2026-10-12');mkdirSync(dir,{recursive:true});
writeFileSync(resolve(dir,'items.json'),JSON.stringify(items,null,2)+'\n');
execFileSync('python3',[resolve(root,'scripts/generate-october-12-thumbnails.py'),resolve(dir,'items.json')],{stdio:'inherit'});
unlinkSync(resolve(dir,'items.json'));
const manifest={date:'2026-10-12',site:'OutsourcedService.com',blogCount:12,researchCount:5,blogRegistry:'app/data.ts',researchRegistry:'app/fleet-content.ts',blogIndex:'app/blog/blog-listing.tsx',researchIndex:'app/research/page.tsx',blogRoute:'app/blog/[slug]/page.tsx',researchRoute:'app/research/[slug]/page.tsx',items};
writeFileSync(resolve(dir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Wrote October 12 manifest');
