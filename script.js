document.addEventListener('mouseover', (event) => {

	if (event.target.attributes['my-tooltip']) {
		const targetElement = event.target;
		const tooltipText = event.target.attributes['my-tooltip'].textContent;

		let tool = document.createElement('div');
		tool.textContent = tooltipText;
		targetElement.style.position = "relative";
		tool.style.position = "absolute";
		tool.className = 'tool';
		tool.style.top = "20px";
		tool.style.left = "20px";
		tool.style.border = "1px solid black";
		targetElement.append(tool);
		/*
		Необходимо создать через js новый html элемент,
		расположить его рядом с targetElement (через position: absolute).
		*/
	}
});

document.addEventListener('mouseout', (event) => {
	if (event.target.attributes['my-tooltip']) {
		const targetElement = event.target;
		document.querySelector('.tool').remove();
		/*
		После того как пользователь уберет мышку с targetElement, надо удалить созданный до этого tooltip.
		*/
	}
});

