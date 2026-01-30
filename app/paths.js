export function assetSourceLocal() {
	return (process.env.NODE_ENV == 'production' ? '/wp-faceless-next' : '');
}

export function assetSourceWP() {
	return (process.env.NODE_ENV == 'production' ? 'https://wordpress-dev-appsvc.azurewebsites.net' : process.env.NEXT_PUBLIC_WP_URL);
}