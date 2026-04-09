import Link from 'next/link'
 
export const LanguageSelect = async ({langData}) => {
	//console.log(langData)
	const langCurrent = langData.skLanguage.language

  return (
    <div id='lang-wrap' className='lang-wrap prel'>
			<Link href='#' id='lang-current' className='lang-current' style={{ textTransform: 'uppercase' }}>{langCurrent}</Link>
			<ul id='lang_toggle' className='ul-reset prel'>
				{langData.skLanguage.englishTranslationUrl && (
					<li><Link href={langData.skLanguage.englishTranslationUrl.url} className='block c-white' lang='es'>EN</Link></li>
				)}
				{langData.skLanguage.spanishTranslationUrl && (
					<li><Link href={langData.skLanguage.spanishTranslationUrl.url} className='block c-white' lang='es'>ES</Link></li>
				)}
				{langData.skLanguage.frenchTranslationUrl && (
					<li><Link href={`https://sekuremerchants.ca${langData.skLanguage.frenchTranslationUrl.url}`} className='block c-white' lang='es'>FR</Link></li>
				)}
			</ul>
		</div>
  )
}