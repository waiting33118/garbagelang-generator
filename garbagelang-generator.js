function randomChose(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

function generateGarbagelang(options) {
	const task = {
		engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
		designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
		entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
	}
	const phrase = [
		'很簡單',
		'很容易',
		'很快',
		'很正常',
		'自己可以搞定',
		'明天完成OK',
	]
	const storage = []

	//判定哪個職業 並 加入任務
	if (options.profession === 'engineer') {
		storage.push(...task.engineer)
	}
	if (options.profession === 'designer') {
		storage.push(...task.designer)
	}
	if (options.profession === 'entrepreneur') {
		storage.push(...task.entrepreneur)
	}

	//<防呆>沒選職業
	if (storage.length === 0) {
		return '還再混阿! 選個職業吧?'
	}

	//抽出隨機一組 任務 & 風涼話
	let sentence = `身為一個${options.profession}，${randomChose(
		storage
	)}，${randomChose(phrase)}吧!`

	return sentence
}

module.exports = generateGarbagelang
