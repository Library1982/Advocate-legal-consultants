"use client";
import {useEffect,useState} from 'react';

/** Tracks completion of essential assets, with a bounded wait for slow networks. */
export default function BrandLoader({ar}:{ar:boolean}){
 const [progress,setProgress]=useState(0),[phase,setPhase]=useState<'loading'|'leaving'|'done'>('loading'),[dark,setDark]=useState(false);
 useEffect(()=>{
  setDark(localStorage.getItem('firm-theme')==='dark');
  let disposed=false,completed=0,value=0,leavingTimer:ReturnType<typeof setTimeout>|undefined,doneTimer:ReturnType<typeof setTimeout>|undefined;
  const started=performance.now(),controller=new AbortController();
  const content=document.getElementById('websiteContent');
  content?.setAttribute('inert','');content?.setAttribute('aria-busy','true');
  const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const imageTasks=['/images/dubai.jpg','/images/office.jpg','/images/architecture.jpg','/images/meeting.jpg','/logo-symbol-mask.svg'];
  const tasks=imageTasks.map(src=>fetch(src,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('Asset unavailable');return r.blob()}));
  tasks.push(document.fonts.load('400 16px Dubai').then(()=>document.fonts.load('700 16px Dubai')).then(()=>undefined) as Promise<any>);
  const total=tasks.length;
  tasks.forEach(task=>task.catch(()=>undefined).finally(()=>{if(!disposed)completed++}));
  const finish=()=>{setPhase('leaving');doneTimer=setTimeout(()=>{if(!disposed){setPhase('done');document.body.style.overflow=previousOverflow;content?.removeAttribute('inert');content?.removeAttribute('aria-busy')}},450)};
  const timer=setInterval(()=>{
   if(disposed)return;
   const elapsed=performance.now()-started,ready=completed===total||elapsed>8000;
   // 100% means the initial load has settled; failed requests never block entry.
   const target=ready&&elapsed>=4000?100:Math.min(95,Math.round(completed/total*95),Math.floor(elapsed/4000*100));
   value=Math.min(target,value+Math.max(1,Math.ceil((target-value)/7)));setProgress(value);
   if(value===100){clearInterval(timer);leavingTimer=setTimeout(finish,220)}
  },40);
  return()=>{disposed=true;controller.abort();clearInterval(timer);clearTimeout(leavingTimer);clearTimeout(doneTimer);document.body.style.overflow=previousOverflow;content?.removeAttribute('inert');content?.removeAttribute('aria-busy')};
 },[]);
 if(phase==='done')return null;
 return <div className={`brandLoader ${dark?'loaderDark':''} ${phase==='leaving'?'loaderLeaving':''}`} dir={ar?'rtl':'ltr'} aria-label={ar?'جارٍ تحميل الموقع':'Website loading'}>
  <div className="loaderInner loaderMinimal"><div className="loaderEmblem"><div className="loaderOrbit" aria-hidden="true"/><span className="firmLogo loaderSymbol" role="img" aria-label="Dr. Ibrahim Al Mulla logo symbol"/></div>
  <div className="loaderPercent" dir="ltr" role="progressbar" aria-label={ar?'تقدم التحميل':'Loading progress'} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>{String(progress).padStart(2,'0')}<small>%</small></div></div>
 </div>
}
