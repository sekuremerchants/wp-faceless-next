'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { assetSourceLocal } from "@/app/paths"

export function GlobalEvents() {
	const pathname = usePathname();
	const basePathLocal = assetSourceLocal();

	useEffect(() => {

		window.onload = function() {
				window.scroll({
						top: 0, 
						left: 0, 
						behavior: 'smooth' 
				})
		}

	}, [pathname]);

	return null; // This component doesn't render anything
}