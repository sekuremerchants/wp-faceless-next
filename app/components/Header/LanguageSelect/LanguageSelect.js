import Link from 'next/link'
 
export const LanguageSelect = async ({current, translated}) => {

  return (
    <div id='lang-wrap' className='lang-wrap prel'>
			<Link href='#' id='lang-current' className='lang-current' style={{ textTransform: 'uppercase' }}>{current}</Link>
			<ul id='lang_toggle' className='ul-reset prel'>
				{current == 'es' && translated && (
					<li><Link href={translated} className='block c-white' lang='es'>EN</Link></li>
				)}
				{current == 'en' && translated && (
					<li><Link href={translated} className='block c-white' lang='es'>ES</Link></li>
				)}
			</ul>
		</div>
  )
}