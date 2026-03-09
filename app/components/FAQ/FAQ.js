'use client'
import { useState } from 'react'
import "@/styles/blocks/faq.css"

function textToParagraphs(text) {
  // Split the text by single or double newlines to separate paragraphs
  const paragraphs = text.split(/(\r\n|\n){2,}/g); 

  return paragraphs.map((paragraph, index) => {
    // Trim each paragraph to remove leading/trailing whitespace
    const trimmedParagraph = paragraph.trim();

    // Only create a paragraph tag if the content is not empty after trimming
    if (trimmedParagraph) {
      return <p key={index}>{trimmedParagraph}</p>;
    }
    // Handle cases where a split resulted in an empty string (e.g., if text started/ended with newlines)
    return null; 
  });
}

export const FAQ = ({block}) => {
	const bgColour = block.full_width_with_background == 'Yes' ? 'full-width-bg' : '';
	const FAQcount = block.faq_body - 1;
	let count = 0;
	const [list, setList] = useState([]);
	let FAQs = [];

	while(count <= FAQcount){

		let openedLabel = `faq_body_${count}_opened`
		let questionLabel = `faq_body_${count}_question`
		let answerLabel = `faq_body_${count}_answer`
		let opened = block[openedLabel] == 'Yes' ? 'preopened-item' : ''
		let contentString = '';
		const paragraphs = block[answerLabel].split(/(\r\n|\n){2,}/g)
		console.log("PARAGRAPHS: ", paragraphs)

		paragraphs.map((string, index) => (
			string != '\r\n' && (
				contentString += '<p>' + string + '</p>'
			)
		))

		console.log("contentString: ", contentString)

		let FAQ = {
			opened: opened,
			question: block[questionLabel],
			answer: contentString,
		}

		FAQs.push(FAQ);
			
		count++;
	}

	console.log("FAQs array: ", FAQs);

	return (
		<section className={`sk-block sk-faq block--c content-block-holder ${bgColour} ${block.section_classes}`}>
			<div className='container'>
				<div className='faq-block content-block'>
					{block.faq_title_heading_text && (
						<h2>{block.faq_title_heading_text}</h2>
					)}

					{block.faq_content && (
						<div class='faq-content'>{block.faq_content}</div>
					)}

					{FAQcount >= 0 && (
						<div className='faq-questions-wrap' itemScope itemType='https://schema.org/FAQPage'>
							{FAQs.map((singleFAQ, index) => (
								<div key={index} className={`faq-question ${singleFAQ.opened}`} itemScope itemProp='mainEntity' itemType='https://schema.org/Question'>
									<h3 className='faq-question-title' itemProp='name'>{singleFAQ.question} <button className='dropdown-arrow-btn js-faq-dropdown-btn'></button></h3>
									<div className='dropdown-content-wrap' itemScope itemProp='acceptedAnswer' itemType='https://schema.org/Answer'>
										<div className='dropdown-content' itemProp='text' style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{__html: singleFAQ.answer}}></div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}