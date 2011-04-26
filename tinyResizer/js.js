$('textarea').live('keyup', function(){
	var t = $(this);
	//setting height of textarea to 0 to get it height after
	t.css('height', 0);
	//comparing scrollHeight and outerHeight
	if(t[0].scrollHeight != t.outerHeight()){
		//getting height = scrollHeight + vertical padding and 15 pix to fix scrollbar appearance 
		t.css('height', t[0].scrollHeight + t.outerHeight() - t.height() + 15);
	}
});

//TODO: need to fix scrollbar
//TODO: need to fix height changing in the beggining
//TODO: check again under all browsers