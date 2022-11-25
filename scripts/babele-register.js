Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'CoC7kr',
			lang: 'ko',
			dir: 'compendium'
		});
    }
})