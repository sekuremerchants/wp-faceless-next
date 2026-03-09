'use client'
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, gql, useQuery } from "@apollo/client";
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import Link from "next/link"
 
export const LanguageSelect = ({label}) => {
	const params = useParams();
	const slug = Object.keys(params).length != 0 ? params.slug : false;
	console.log('LANG SELECT SLUG: ', slug);

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
 
  return (
    <div className="lang-wrap prel">
			<Link href="#" onClick={toggleClass} className={isActive ? 'lang-current open' : 'lang-current'}>EN</Link>
			<ul id="lang_toggle" className="ul-reset prel" style={{height: isActive ? 'auto' : '0', visibility: isActive ? 'visible' : 'hidden'}}>
				<li><Link href="#" className="block c-white current" lang="en">EN</Link></li>
				<li><Link href="#" className="block c-white" lang="es">ES</Link></li>
				<li><Link href="#" className="block c-white" lang="fr">FR</Link></li>
			</ul>
		</div>
  )
}

export default LanguageSelect