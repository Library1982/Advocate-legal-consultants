import React from 'react';
export default function BrandIdentity({ar=false,compact=false}:{ar?:boolean;compact?:boolean}){
 return <span className={'premiumBrand'+(compact?' premiumBrandCompact':'')} aria-label={ar?'د. إبراهيم الملا للمحاماة والاستشارات القانونية':'Dr. Ibrahim Al Mulla Advocates and Legal Consultants'}>
  <span className="premiumBrandSymbol" aria-hidden="true"/>
  {!compact&&<span className="premiumBrandCopy"><strong>{ar?'د. إبراهيم الملا':'DR. IBRAHIM AL MULLA'}</strong><small>{ar?'للمحاماة والاستشارات القانونية':'ADVOCATES & LEGAL CONSULTANTS'}</small></span>}
 </span>
}