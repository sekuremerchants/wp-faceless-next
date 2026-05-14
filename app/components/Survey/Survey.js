import { Button } from '@/components/Button'
import { SurveyEvents } from './SurveyEvents'

export const Survey = async ({postID, block}) => {

	const surveyQuery = `
		query NewQuery($id: Int!) {
			surveys(where: {id: $id}) {
				nodes {
					id
					title
					uri
					cptSurveys {
						questions {
							confirmationQuestion
							dynamicQuestion
							multipleSelections
							question
							variableQuestion
							choices {
								choice
								dynamicChoice
								tooltip
							}
							variableQuestions {
								choices {
									choice
									tooltip
								}
								multiplePreviousSelections
								multipleSelections
								previousChoiceSelected
								question
								previousMultipleSelections {
									selection
								}
							}
						}
						results {
							name
							result
							selectedChoices {
								selection
								selectionEqualTo
							}
						}
					}
				}
			}
		}
	`

	const queryVariables = {
		id: block.survey,
	}
	
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: surveyQuery,
			variables: queryVariables,
		}),
	})
	const { data } = await res.json()

	function formatContent(content) {
		const formatted = content.split('\r\n').map(content => {
			const hasHTML = (str) => /<(?!(\/?(strong|span|a|b)\b))[^>]+>/i.test(str);
			if(content.includes('[sekure_icon ')){
				const shortcodeData = content.split(' ')
				const url = shortcodeData[1].replace('icon-url="', 'https://wordpress-dev-appsvc.azurewebsites.net').replace('"', '')
				const classes = shortcodeData.at(-1).replace("classes='", '').replace("']",'')
				return `<img src='${url}' alt='icon' height='50' width='50' class='${classes}'>`
			} else if(content != '' && !hasHTML(content)){
				return `<p>${content}</p>`
			} else {
				return content.trim()
			}
		}).join('')
		return formatted
	}

	const txtCol = postID == 582 ? 'c-blue-1 text-blue' : 'c-white text-white'
	const surveyType = postID == 582 ? 'inner-pages-quiz-section-type-2' : 'inner-pages-quiz-section'

	const surveyQuestions = data.surveys.nodes[0].cptSurveys.questions
	const surveyResults = data.surveys.nodes[0].cptSurveys.results

	return (
		<section id={block.section_id} className={`page-block-holder sk-page-block sk-page-survey block--psk8 sk-block ${surveyType} ov-hidden prel op-0 ${block.section_classes}`}>
			<SurveyEvents results={surveyResults} />

			<div className="background-flower-path-patterns fade-in-first">
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
				<svg viewBox="0 0 451.3 451.3" className="background-flower-path-svg">
						<path className="st0" d="M225.7 225.7c124.4 0 225.1 100.8 225.1 225.2-124.3-.1-225.1-100.9-225.1-225.2z"></path>
						<path className="st0" d="M450.8.5c0 124.4-100.8 225.2-225.1 225.2C225.7 101.3 326.5.5 450.8.5z"></path>
						<path className="st0" d="M225.7 225.7c0 124.4-100.8 225.2-225.2 225.2 0-124.4 100.8-225.2 225.2-225.2z"></path>
						<path className="st0" d="M.5.5c124.4 0 225.2 100.8 225.2 225.2C101.3 225.7.5 124.9.5.5z"></path>
				</svg>
			</div>

			<div className='container'>
				<div className='row'>
					{block.survey_heading && (
						<h2 className={`anim-heading ${txtCol}`} dangerouslySetInnerHTML={{__html:block.survey_heading}}></h2>
					)}

					{block.survey_subheading && (
						<div className={`mb-4 txt-wrap ${txtCol}`} dangerouslySetInnerHTML={{__html:formatContent(block.survey_subheading)}}></div>
					)}

					{block.choose_what_you_need_text && (
						<div className='txt-content'>
							<p className={`txt-sze-12 upper letter-spacing ${txtCol}`} dangerouslySetInnerHTML={{__html:block.choose_what_you_need_text}}></p>
						</div>
					)}

					{block.survey && (
						<div className='quiz-content-wrap equipment-form'>
							<div id='survey-wrap' className='survey-wrap prel' data-survey_id={block.survey}>
								<div id='survey-progress' className='survey-progress' data-max_questions={surveyQuestions.length}><span></span></div>

								<div id='survey-questions' className='survey-questions'>
									{surveyQuestions.map((question, index) => (
										<div key={index} className={(index == 0 ? 'question current' : 'question') + ' ' + (question.confirmationQuestion ? 'question-confirmation' : '') + ' ' + (question.variableQuestion ? 'question-vary' : '') + ' ' + (question.dynamicQuestion ? 'question-dynamic' : '') + ' ' + (question.multipleSelections && question.variableQuestion == false ? 'multiple' : '')} data-step={(index + 1)} data-max-steps={surveyQuestions.length}>
											{question.variableQuestion == false && (
												<>
													<h3 className='question-title ff-libre c-blue-1 fw-600 mb-5'>{question.question}</h3>
													<p className='question-type fw-600 c-blue-1'>{(question.multipleSelections && question.variableQuestion == false ? 'Select as many options that apply.' : 'Only one option can be selected.')}</p>

													<div className='choices'>
														{question.choices && question.choices.map((choice, index) => (
															<div key={index} className={question.multipleSelections ? 'choice prel mb-4 multiple' : 'choice prel mb-4'}>
																<input type={question.multipleSelections ? 'checkbox' : 'radio'} value={choice.choice} id={choice.choice} name={question.multipleSelections ? choice.choice : question.question} className='c-white-1 choice-input' />
																<label className='choice-label'>
																	{choice.choice}
																	{choice.tooltip && (
																		<span className='tool-tip' tabIndex='0'><svg width='15' height='15' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 0C1.79069 0 0 1.79069 0 4C0 6.20931 1.79069 8 4 8C6.20931 8 8 6.20931 8 4C8 1.79069 6.20931 0 4 0ZM3.58897 1.99621C3.69257 1.89261 3.81891 1.84039 3.96799 1.84039C4.11708 1.84039 4.24342 1.89261 4.34702 1.99621C4.45062 2.09981 4.50284 2.22615 4.50284 2.37524C4.50284 2.52432 4.45062 2.65066 4.34702 2.75426C4.24342 2.85786 4.11708 2.91009 3.96799 2.91009C3.81891 2.91009 3.69762 2.85702 3.59149 2.75174C3.48537 2.64645 3.43314 2.52095 3.43314 2.37524C3.43314 2.22952 3.48537 2.09981 3.58897 1.99621ZM4.66793 6.11329C4.62834 6.11329 4.51885 6.10318 4.3386 6.08381C4.2291 6.07202 4.1036 6.06612 3.9621 6.06612C3.89135 6.06612 3.78774 6.0737 3.65045 6.0897C3.51316 6.10571 3.41124 6.11329 3.3447 6.11329C3.23858 6.11329 3.15266 6.07707 3.08612 6.00463C3.01958 5.9322 2.98589 5.83955 2.98589 5.72584C2.98589 5.50263 3.08023 5.39061 3.26806 5.39061L3.42051 5.42598C3.43567 5.4302 3.44999 5.43188 3.46178 5.43188C3.53253 5.43188 3.56791 5.32238 3.56791 5.10255V4.15077C3.56791 3.92756 3.53422 3.81554 3.46768 3.81554C3.45589 3.81554 3.42051 3.82565 3.36155 3.84502C3.32196 3.8526 3.2908 3.85681 3.26721 3.85681C3.07939 3.85681 2.98505 3.74732 2.98505 3.52748C2.98505 3.40956 3.0179 3.31522 3.08528 3.24279C3.15182 3.17035 3.24026 3.13413 3.34976 3.13413C3.39271 3.13413 3.45589 3.14003 3.53759 3.15182C3.67488 3.17119 3.78438 3.1813 3.86692 3.1813C3.93346 3.1813 4.01937 3.17372 4.1255 3.15772C4.23163 3.14256 4.28974 3.13413 4.30154 3.13413C4.41103 3.13413 4.46578 3.21078 4.46578 3.36323V5.13287C4.46578 5.33249 4.50284 5.43272 4.57781 5.43272C4.59381 5.43272 4.6216 5.42767 4.66288 5.4184C4.70415 5.4083 4.73868 5.40409 4.76564 5.40409C4.92988 5.40409 5.01242 5.506 5.01242 5.70983C5.01242 5.98021 4.89703 6.11497 4.6654 6.11497L4.66793 6.11329Z' fill='#002EA6'/></svg><span className='tool-tip-desc'>{choice.tooltip}</span></span>
																	)}
																</label>
															</div>
														))}
													</div>
												</>
											) || question.variableQuestion == true && (
												<div className='choices vary-questions'>
													{question.variableQuestions && question.variableQuestions.map((question, index) => (
														<div key={index} className='vary-question' data-multiple-prev-choices={question.multiplePreviousSelections ? 'yes' : 'no'} data-prev-choice={question.multiplePreviousSelections ? question.previousMultipleSelections : question.previousChoiceSelected}>
															<h3 className='question-title ff-libre c-blue-1 fw-600 mb-5'>{question.question}</h3>
															<p className='question-type fw-600 c-blue-1'>{(question.multipleSelections && question.variableQuestion == false ? 'Select as many options that apply.' : 'Only one option can be selected.')}</p>

															<div className='vary-choices'>
																{question.choices && question.choices.map((choice, index) => (
																	<div key={index} className={question.multipleSelections ? 'choice prel mb-4 multiple' : 'choice prel mb-4'}>
																		<input type={question.multipleSelections ? 'checkbox' : 'radio'} value={choice.choice} id={choice.choice} name={question.multipleSelections ? choice.choice : question.question} className='c-white-1 choice-input' />
																		<label className='choice-label'>
																			{choice.choice}
																			{choice.tooltip && (
																				<span className='tool-tip' tabIndex='0'><svg width='15' height='15' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 0C1.79069 0 0 1.79069 0 4C0 6.20931 1.79069 8 4 8C6.20931 8 8 6.20931 8 4C8 1.79069 6.20931 0 4 0ZM3.58897 1.99621C3.69257 1.89261 3.81891 1.84039 3.96799 1.84039C4.11708 1.84039 4.24342 1.89261 4.34702 1.99621C4.45062 2.09981 4.50284 2.22615 4.50284 2.37524C4.50284 2.52432 4.45062 2.65066 4.34702 2.75426C4.24342 2.85786 4.11708 2.91009 3.96799 2.91009C3.81891 2.91009 3.69762 2.85702 3.59149 2.75174C3.48537 2.64645 3.43314 2.52095 3.43314 2.37524C3.43314 2.22952 3.48537 2.09981 3.58897 1.99621ZM4.66793 6.11329C4.62834 6.11329 4.51885 6.10318 4.3386 6.08381C4.2291 6.07202 4.1036 6.06612 3.9621 6.06612C3.89135 6.06612 3.78774 6.0737 3.65045 6.0897C3.51316 6.10571 3.41124 6.11329 3.3447 6.11329C3.23858 6.11329 3.15266 6.07707 3.08612 6.00463C3.01958 5.9322 2.98589 5.83955 2.98589 5.72584C2.98589 5.50263 3.08023 5.39061 3.26806 5.39061L3.42051 5.42598C3.43567 5.4302 3.44999 5.43188 3.46178 5.43188C3.53253 5.43188 3.56791 5.32238 3.56791 5.10255V4.15077C3.56791 3.92756 3.53422 3.81554 3.46768 3.81554C3.45589 3.81554 3.42051 3.82565 3.36155 3.84502C3.32196 3.8526 3.2908 3.85681 3.26721 3.85681C3.07939 3.85681 2.98505 3.74732 2.98505 3.52748C2.98505 3.40956 3.0179 3.31522 3.08528 3.24279C3.15182 3.17035 3.24026 3.13413 3.34976 3.13413C3.39271 3.13413 3.45589 3.14003 3.53759 3.15182C3.67488 3.17119 3.78438 3.1813 3.86692 3.1813C3.93346 3.1813 4.01937 3.17372 4.1255 3.15772C4.23163 3.14256 4.28974 3.13413 4.30154 3.13413C4.41103 3.13413 4.46578 3.21078 4.46578 3.36323V5.13287C4.46578 5.33249 4.50284 5.43272 4.57781 5.43272C4.59381 5.43272 4.6216 5.42767 4.66288 5.4184C4.70415 5.4083 4.73868 5.40409 4.76564 5.40409C4.92988 5.40409 5.01242 5.506 5.01242 5.70983C5.01242 5.98021 4.89703 6.11497 4.6654 6.11497L4.66793 6.11329Z' fill='#002EA6'/></svg><span className='tool-tip-desc'>{choice.tooltip}</span></span>
																			)}
																		</label>
																	</div>
																))}
															</div>
														</div>
													))}
												</div>
											)}
										</div>
									))}
								</div>

								<div id='survey-result' className='survey-result'></div>

								<div id='survey-footer' className='survey-footer'>
									<p id='error-msg' className='error-msg fw-600 c-red-2'>Please make a selection</p>
									<div className='survey-actions d-flex'>
										<button id='survey-prev' type='button' className='survey-action prev d-none'><svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg>Previous</button>
                		<button id='survey-next' type='button' className='survey-action next'>Next<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg></button>

										<button id='survey-submit' type='button' className='survey-action submit btn-default size-18-txt ltr-spc-neg-0_2 section-color-white c-blue-1 btn-green-1 btn-offset-3 d-none' data-survey-id={block.survey}>
											<span className='btn-bg-el'></span>
											<span className='btn-txt'>Submit<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg></span>
										</button>
									</div>
								</div>

								<div id='survey-reset' className='survey-reset mt-5 d-none'>
									<p className='mb-5'>Still unsure? That's why we're here! Our <a href='/meet-your-payment-expert'>Payment Experts</a> will take time to consider all the details for you with your best interests in mind!</p>

									<button id='survey-reset' type='button' className='c-blue-1 prel query-button-next d-flex gap-10'>
                    <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clipPath='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg>
                    <span className='btn-txt'>Start over</span>
                	</button>
								</div>
							</div>
						</div>
					)}

					<div className='side-menu-btns fade-in-last d-flex flex-column-1024 gap-30 justify-content-center mt-default'>
						<Button type='survey_call' text='Talk to us now' classes={txtCol}/>
						<Button type='survey_schedule_callback' text='Schedule a callback' classes={txtCol}/>
						<Button type='survey_download_guide' text='Download our guide' classes={txtCol}/>
					</div>
				</div>
			</div>
		</section>
	)
}