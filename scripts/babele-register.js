Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'Coc7-ko',
			lang: 'ko',
			dir: 'compendium'
		});
    }
});