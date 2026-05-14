'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const  SurveyEvents = ({results}) => {
	const pathname = usePathname()

	useEffect(() => {

		const progress = document.getElementById('survey-progress')
		const progressRatio = parseInt(100 / progress.dataset.max_questions)
		progress.children[0].style.width = progressRatio + '%'

		const inputs = document.querySelectorAll('.choice-input')
		//const allLabels = document.querySelectorAll('.choice-label')

		const next = document.getElementById('survey-next')
		const prev = document.getElementById('survey-prev')
		const submit = document.getElementById('survey-submit')
		const reset = document.getElementById('survey-reset')

		document.addEventListener('click', (event) => {
			if(event.target.classList.contains('choice-input') && event.target.nextSibling.type == 'radio'){
				if(event.target.nextSibling.checked){
					event.target.nextSibling.checked = false
				} else {
					event.target.nextSibling.checked = true
				}
			}

			if(event.target.classList.contains('choice-label') && event.target.previousSibling.type == 'radio'){
				if(event.target.previousSibling.checked){
					event.target.previousSibling.checked = false
				} else {
					event.target.previousSibling.checked = true
				}
			}
		})

		/*
		Array.from(inputs).forEach(element => {
			element.addEventListener('click', (event) => {

			})
		})

		Array.from(allLabels).forEach(element => {
			element.addEventListener('click', (event) => {

			})
		})
		*/

		next.addEventListener('click', (event) => {
			document.getElementById('error-msg').classList.remove('show')

			const question = document.querySelectorAll('.question.current')
			const inputs = question[0].querySelectorAll('.choice-input')
			const inputsChecked = question[0].querySelectorAll('.choice-input:checked')

			if(inputsChecked.length){
				question[0].classList.remove('current')
				question[0].nextSibling.classList.add('current')
				prev.classList.remove('d-none')

				if(question[0].nextSibling.dataset.step == question[0].nextSibling.dataset.maxSteps) {
					next.classList.add('d-none')
					submit.classList.remove('d-none')
				}

				// variable question
				if(question[0].nextSibling.classList.contains('question-vary')){
					if(question[0].nextSibling.dataset.multiplePrevChoices == 'yes'){

					} else {
						const varyQuestions = document.querySelectorAll('.vary-question')
						Array.from(varyQuestions).forEach(element => {
							element.classList.remove('current')
							const nextQuestion = document.querySelectorAll('[data-prev-choice="' + inputsChecked[0].value + '"]')
							//console.log('NEXT QUESTION FOR PREVIOUS VARIABLE QUESTION: ', nextQuestion)
							if(nextQuestion.length){
								nextQuestion[0].classList.add('current')
							}
						})
					}
				}

				progress.children[0].style.width = parseInt(progress.children[0].style.width.replace('%', '')) + progressRatio + '%'
			} else {
				document.getElementById('error-msg').classList.add('show')
			}

			const surveyElement = document.getElementById('survey-wrap')

			if(surveyElement){
				const yOffset = -200
				const y = surveyElement.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}

			event.target.blur()
		})

		prev.addEventListener('click', (event) => {
			document.getElementById('error-msg').classList.remove('show')
			const question = document.querySelectorAll('.question.current')
			const currentInputs = question[0].querySelectorAll('.choice-input')
			Array.from(currentInputs).forEach((input) => {
				input.checked = false
			})
			question[0].classList.remove('current')
			question[0].previousSibling.classList.add('current')

			next.classList.remove('d-none')
			submit.classList.add('d-none')

			if(question[0].previousSibling.dataset.step == '1'){
				prev.classList.add('d-none')
			}

			progress.children[0].style.width = parseInt(progress.children[0].style.width.replace('%', '')) - progressRatio + '%'

			const surveyElement = document.getElementById('survey-wrap')

			if(surveyElement){
				const yOffset = -200
				const y = surveyElement.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}

			event.target.blur()
		})

		submit.addEventListener('click', (event) => {
			const question = document.querySelectorAll('.question.current')
			const inputsChecked = question[0].querySelectorAll('.choice-input:checked')
			const surveyElement = document.getElementById('survey-wrap')

			if(inputsChecked.length){
				document.getElementById('error-msg').classList.remove('show')

				let fullSubmission = []
				let userSelections = []

				const questions = document.querySelectorAll('.question')
				Array.from(questions).forEach(element => {
					let selection = {
						question : element.querySelectorAll('.question-title')[0].textContent,
						choices : [],
					}

					const selections = element.querySelectorAll('input:checked')
					Array.from(selections).forEach(element => {
						selection.choices.push(element.value)
					})

					fullSubmission.push(selection)

					if(element.classList.contains('question-confirmation')){
						if(element.classList.contains('multiple')){
							let multipleChoices = []
							const multipleSelections = element.querySelectorAll('input:checked')
							Array.from(multipleSelections).forEach(element => {
								multipleChoices.push(element.value)
							})
							userSelections.push(multipleChoices)
						} else {
							const selectedChoices = element.querySelectorAll('input:checked')
							Array.from(selectedChoices).forEach(element => {
								userSelections.push(element.value)
							})
						}
					}
				})

				//console.log('Survey Selections: ', JSON.stringify(userSelections))

				if(results){
					let finalResult = ''

					// retail survey
					if(surveyElement.dataset.survey_id == '30126' && userSelections[0] != 'iOS') {
						userSelections.splice(0, 1)
					}

					// healthcare, professional services surveys
					if(surveyElement.dataset.survey_id == '30129' || surveyElement.dataset.survey_id == '30131'){
						if(!userSelections[0].includes('None, I only want my POS to accept payments.')){
							userSelections.splice(0, 1)
						} else {
							userSelections[0] = 'None, I only want my POS to accept payments.'
						}
					}

					// wholesale survey
					if(surveyElement.dataset.survey_id == '30134'){
						if(!userSelections[0].includes('None, I just need my POS to process transactions.')){
							userSelections.splice(0, 1)
						} else {
							userSelections[0] = 'None, I just need my POS to process transactions.'
						}
					}

					Array.from(results).forEach(result => {
						if(result.selectedChoices != null) {
							let resultSelections = []
							Array.from(result.selectedChoices).forEach(element => {

								if(surveyElement.dataset.survey_id == '30126' && userSelections[0] != 'iOS' && element.selection == 'iOS' && element.selectionEqualTo == false) {

								} else {
									resultSelections.push(element.selection)
								}

								// wholesale, healthcare, professional services surveys
								if(surveyElement.dataset.survey_id == '30134' || surveyElement.dataset.survey_id == '30129' || surveyElement.dataset.survey_id == '30131'){
									if(userSelections.length == 2 && resultSelections.length == 2){
										const matches = userSelections.filter(value => resultSelections.includes(value))
										if(matches.length == 2){
											finalResult = result.result
										}
									}
									if(userSelections.length == 3 && resultSelections.length == 3){
										const matches = userSelections.filter(value => resultSelections.includes(value))
										if(matches.length == 3){
											finalResult = result.result
										}
									}
								}
								
								// retail survey
								if(resultSelections.length == 3 && surveyElement.dataset.survey_id == '30126' && userSelections[0] != 'iOS'){
									const matches = userSelections.filter(value => resultSelections.includes(value))
									if(matches.length == 3){
										finalResult = result.result
									}
								}

								// all surveys
								if(resultSelections.length == 4){
									const matches = userSelections.filter(value => resultSelections.includes(value))
									if(matches.length == 4){
										finalResult = result.result
									}
								}
							})
						}
					})

					if(finalResult != ''){
						const tempDiv = document.createElement('div')
						tempDiv.innerHTML = finalResult.replace(/\bc-white\b/g, '')
						document.getElementById('survey-questions').classList.add('d-none')
						document.getElementById('survey-footer').classList.add('d-none')
						document.getElementById('survey-result').append(tempDiv)
						document.getElementById('survey-result').classList.remove('d-none')
						document.getElementById('survey-reset').classList.remove('d-none')
					} else {
						const tempDiv = document.createElement('div')
						tempDiv.innerHTML = results[0].result.replace(/\bc-white\b/g, '')
						document.getElementById('survey-questions').classList.add('d-none')
						document.getElementById('survey-footer').classList.add('d-none')
						document.getElementById('survey-result').append(tempDiv)
						document.getElementById('survey-result').classList.remove('d-none')
						document.getElementById('survey-reset').classList.remove('d-none')
					}
				}
			}

			progress.children[0].style.width = '100%'

			if(surveyElement){
				const yOffset = -200
				const y = surveyElement.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}

			event.target.blur()
		})

		reset.addEventListener('click', (event) => {

			// uncheck all inputs
			Array.from(inputs).forEach((input) => {
				input.checked = false
			})

			// revert back to first question
			Array.from(document.querySelectorAll('.question')).forEach((question) => {
				question.classList.remove('current')
			})
			document.querySelectorAll('.question')[0].classList.add('current')

			//show/hide/empty proper elements
			next.classList.remove('d-none')
			submit.classList.add('d-none')
			document.getElementById('survey-result').classList.add('d-none')
			document.getElementById('survey-result').replaceChildren()
			document.getElementById('survey-questions').classList.remove('d-none')
			document.getElementById('survey-footer').classList.remove('d-none')
			document.getElementById('survey-reset').classList.add('d-none')

			progress.children[0].style.width = progressRatio + '%'

			const surveyElement = document.getElementById('survey-wrap')

			if(surveyElement){
				const yOffset = -200
				const y = surveyElement.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}

			event.target.blur()
		})

  }, [pathname])

  return null
}