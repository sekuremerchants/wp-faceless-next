import { Button } from '@/components/Button'

export const Survey = async ({postID, block}) => {
	//console.log('SURVEY BLOCK DATA: ', block)

	const popupDataQuery = `
		query SurveyData {
			survey(id: "30125", idType: DATABASE_ID) {
				title
				cptSurveys {
					questions {
						choices {
							choice
							dynamicChoice
							tooltip
						}
						confirmationQuestion
						dynamicQuestion
						multipleSelections
						question
						variableQuestion
						variableQuestions {
							choices {
								choice
								tooltip
							}
							multiplePreviousSelections
							multipleSelections
							previousChoiceSelected
							previousMultipleSelections {
								selection
							}
							question
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
	`;

	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: popupDataQuery,
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

	const surveyQuestions = data.survey.cptSurveys.questions
	const surveyResults = data.survey.cptSurveys.results

	//console.log('SURVEY DATA: ', surveyQuestions[0])

	return (
		<section id={block.section_id} className={`page-block-holder sk-page-block sk-page-survey block--psk8 sk-block ${surveyType} ov-hidden prel op-0 ${block.section_classes}`}>

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
							<h2 className='text-white'>Survey - {block.survey}</h2>

							<div className='submission-header d-none'>
								<h2 className={txtCol}>Possible solutions for you</h2>
                <h3 className="fw-600">Based on what you shared, these can be good options for your business:</h3>
							</div>

							<div className='survey-wrap prel mt-5'>
								<div className='survey-progress' data-max_questions=''><span></span></div>

								<div className='survey-questions'>
									{surveyQuestions.map((question, index) => (
										<div key={index} className={index == 0 ? 'question current' : 'question'}>
											{question.variableQuestion == false && (
												<>
													<h3 className='question-title ff-libre c-blue-1 fw-600 mb-5'>{question.question}</h3>
													<p className='question-type fw-600 c-blue-1'>Select as many options that apply.</p>

													<div className='choices'>
														{question.choices && question.choices.map((choice, index) => (
															<div key={index} className={question.multipleSelections ? 'choice prel mb-4 multiple' : 'choice prel mb-4'}>
																<input type={question.multipleSelections ? 'checkbox' : 'radio'} value={choice.choice} id={choice.choice} name={choice.choice} className='c-white-1' />
																<label>{choice.choice}</label>
															</div>
														))}
													</div>
												</>
											)}
										</div>
									))}
								</div>

								<div className='survey-result'></div>

								<div className='survey-footer'>
									<p className='error-msg fw-600 c-red-2'>Please make a selection</p>
									<div className='survey-actions d-flex'>
										<button type='button' className='survey-action prev d-none'><svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg>Previous</button>
                		<button type='button' className='survey-action next'>Next<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg></button>

										<button type='button' class='survey-action submit btn-default size-18-txt ltr-spc-neg-0_2 section-color-white c-blue-1 btn-green-1 btn-offset-3 d-none' data-survey-id={block.survey}>
											<span class='btn-bg-el'></span>
											<span class='btn-txt'>Submit<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg></span>
										</button>
									</div>
								</div>

								<div className='survey-reset mt-5 d-none'>
									<p className='mb-5'>Still unsure? That's why we're here! Our <a href='/meet-your-payment-expert'>Payment Experts</a> will take time to consider all the details for you with your best interests in mind!</p>

									<button type='button' class='c-blue-1 prel query-button-next d-flex gap-10'>
                    <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_310_1611)'><path fillRule='evenodd' clipRule='evenodd' d='M9.00981 1.42894L15.3738 7.7929C15.7643 8.18343 15.7643 8.81659 15.3738 9.20712L9.00981 15.5711C8.61929 15.9616 7.98612 15.9616 7.5956 15.5711C7.20507 15.1806 7.20507 14.5474 7.5956 14.1569L12.2525 9.50001H0V7.50001H12.2525L7.5956 2.84315C7.20507 2.45263 7.20507 1.81947 7.5956 1.42894C7.98612 1.03842 8.61929 1.03842 9.00981 1.42894Z' fill='#002EA6'/></g><defs><clipPath id='clip0_310_1611'><rect width='16' height='16' fill='white' transform='translate(0 0.5)'/></clipPath></defs></svg>
                    <span class='btn-txt'>Start over</span>
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