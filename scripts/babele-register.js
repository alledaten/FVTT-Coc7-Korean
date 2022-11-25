Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'coc7-ko',
			lang: 'ko',
			dir: 'compendium'
		});
    }
});