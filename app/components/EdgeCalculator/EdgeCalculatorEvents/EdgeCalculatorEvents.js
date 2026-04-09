'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { assetSourceLocal } from "@/app/paths"

export const EdgeCalculatorEvents = ({}) => {
	const pathname = usePathname()
	const basePathLocal = assetSourceLocal()

	useEffect(() => {

		const avgTransAmt = document.getElementById('avg_trans_amt')
		const monthlyProcessVol = document.getElementById('monthly_process_vol')

		avgTransAmt.addEventListener('input', calculateEverything)
		avgTransAmt.addEventListener('change', calculateEverything)
		monthlyProcessVol.addEventListener('input', calculateEverything)
		monthlyProcessVol.addEventListener('change', calculateEverything)

		function calculateEverything(){
			switch(this.id) {
				case 'avg_trans_amt':
					const avgTransField = document.querySelectorAll('.data-output.avg-trans')
					if(this.value != '' && this.value > 0){
						const ratio = this.value / 100
						const charge = 4.99 * ratio
						avgTransField[0].innerHTML = '$' + charge.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
					} 
					if(this.value === '' || this.value < 1) {
						avgTransField[0].innerHTML = '$0.00'
					}
					break
				case 'monthly_process_vol':
					const monthlyCashbackField = document.querySelectorAll('.data-output.monthly-cashback')
					const quarterlyCashbackField = document.querySelectorAll('.data-output.quarterly-cashback')
					const annualCashbackField = document.querySelectorAll('.data-output.annual-cashback')

					if(this.value != '' && this.value > 0){
						const ratio = this.value / 10000
						const monthly = 40 * ratio
						const quarterly = monthly * 3
						const yearly = monthly * 12

						monthlyCashbackField[0].innerHTML = '$' + monthly.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
						quarterlyCashbackField[0].innerHTML = '$' + quarterly.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
						annualCashbackField[0].innerHTML = '$' + yearly.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
					} 
					if(this.value === '' || this.value < 1) {
						monthlyCashbackField[0].innerHTML = '$0.00'
						quarterlyCashbackField[0].innerHTML = '$0.00'
						annualCashbackField[0].innerHTML = '$0.00'
					}
					break
			}
		}

		const toolTips = document.querySelectorAll('.edge-calculator .tool-tip')
		Array.from(toolTips).forEach(element => {
			element.addEventListener('mouseenter', (event) => {
				const rect = element.getBoundingClientRect()
				const desc = element.querySelectorAll('.tool-tip-desc')
				console.log('ELEMENT DESC: ', element.querySelectorAll('.tool-tip-desc')[0])
				if(rect.x > (window.innerWidth / 2)){
					Object.assign(desc[0].style, {left: 'auto', right: '10px'})
				} else {
					Object.assign(desc[0].style, {left: '10px', right: 'auto'})
				}
			})
		})

	}, [pathname])

	return null
}