const query = `
	query pageLang($uri: String!) {
		nodeByUri(uri: $uri) {
			... on Page {
				id
				skLanguage {
					language
					englishTranslationUrl {
						url
					}
					spanishTranslationUrl {
						url
					}
					frenchTranslationUrl {
						url
					}
				}
			}
			... on Casestudy {
				id
				skLanguage {
					language
					englishTranslationUrl {
						url
					}
					frenchTranslationUrl {
						url
					}
					spanishTranslationUrl {
						url
					}
				}
			}
		}
	}
`;

export const getLangByUri = async (slug) => {

	let theSlug = slug

	if(theSlug.includes('/resources/case-studies/')){
		theSlug = theSlug.replace('/resources', '')
	} else if (theSlug.includes('/es/recursos/estudios-de-caso/')){
		theSlug = theSlug.replace('/es/recursos/estudios-de-caso/', 'case-studies/')
	}

	const queryVariables = {
		uri: theSlug,
	}
	const res = await fetch("https://wordpress-dev-appsvc.azurewebsites.net/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
			variables: queryVariables,
    }),
  })
  const { data } = await res.json()

	if(data.nodeByUri){
		return data.nodeByUri
	} else {
		return null
	}
}