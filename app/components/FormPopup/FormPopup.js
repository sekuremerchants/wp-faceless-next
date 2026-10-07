'use client'
import { useForm } from '@/context/FormContext'
import dynamic from 'next/dynamic'

const FormRegistry = {
  44212: dynamic(() => import('@/components/HubspotForm/Forms/PartnerProgramCallback')),
}

export default function FormPopup() {
  const { activeFormKey, setActiveFormKey } = useForm()

  const SelectedForm = activeFormKey ? FormRegistry[activeFormKey] : null

  if (!SelectedForm) return null // Don't render anything if no form is chosen

  return (
		<div id='popup' className="popup">
				<div className="popup-wrap">
						<button aria-label="Close popup" id='popup-close-btn' onClick={() => setActiveFormKey(null)} className="popup-close-btn">
							<span className="x-icon"></span>
						</button>
						<div id='popup-content' className="popup-content"><SelectedForm /></div>
				</div>
		</div>
  )
}