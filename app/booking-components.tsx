'use client';

/** Approved first-party source: https://stealthagents.com/. Portfolio provenance verified 2026-10-16. */
export const stealthAgentsReviews = [
  {id:'chad-sublet',name:'Chad Sublet',detail:'Business Owner',headline:'More room for strategic work',quote:'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.'},
  {id:'erika-giron',name:'Erika Giron',detail:'CEO, Horizon Pacific Staffing',headline:'Support that scaled with demand',quote:'We went from 300 hours a month to over 2,500 hours with Stealth Agents.'},
  {id:'alex-behrens',name:'Alex Behrens',detail:'Client since Oct 2024',headline:'A genuine part of the team',quote:'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.'},
  {id:'aisha-wonderfull',name:'Aisha Wonderfull',detail:'CEO, Publishing Startup',headline:'Time returned to sales',quote:'Gained time for sales and closed 3 clients within two days. Exceptional service.'},
  {id:'owen-hone',name:'Owen Hone',detail:'Multiple Hire Client',headline:'Fast placement and quality',quote:'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.'},
  {id:'sarah-jacoby',name:'Sarah Jacoby',detail:'Client',headline:'Proactive support',quote:'Great communication, efficient and proactive assistant, visible business growth.'},
  {id:'martine-cadet',name:'Martine Cadet',detail:'Client',headline:'A team that learned the brand',quote:'The team learned my brand and goals and transformed my business. My dream team.'},
  {id:'rich-cochran',name:'Rich Cochran',detail:'Client',headline:'Diligent, pleasant professionals',quote:'We especially appreciate how diligent and pleasant Evy is. True pros.'},
  {id:'george-assi',name:'George Assi',detail:'2-Year Partner',headline:'Reliable talent matches',quote:'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.'},
  {id:'lee-maasen',name:'Lee Maasen',detail:'Business Owner',headline:'An absolute asset',quote:'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.'},
  {id:'kevin-carabajal',name:'Kevin Carabajal',detail:'Client',headline:'Operations that restored focus',quote:'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.'},
  {id:'lynda-sunshine-west',name:'Lynda Sunshine West',detail:'Client',headline:'Quality work every time',quote:'Paolo is exceptional. Communicative, fast turnaround, quality work every time.'},
] as const;

export function TestimonialsRail({compact=false}:{compact?:boolean;contact?:boolean}){
  return <section className={`review-rail${compact?' review-rail-compact':''}`} aria-labelledby="stealthagents-reviews-heading">
    <div className="review-rail-heading"><p>Verified client perspective</p><h2 id="stealthagents-reviews-heading">StealthAgents reviews</h2></div>
    <div className="review-rail-viewport" tabIndex={0} aria-label="StealthAgents client reviews. Focus or hover to pause motion."><div className="review-rail-track">
      {stealthAgentsReviews.map(r=><article className="review-card" key={r.id} data-review-id={r.id}><div className="review-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div><h3>{r.headline}</h3><blockquote>“{r.quote}”</blockquote><p><strong>{r.name}</strong><span>{r.detail}</span></p></article>)}
    </div></div>
    <p className="review-source">Approved reviews sourced from the <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">official StealthAgents website</a>.</p>
  </section>;
}
