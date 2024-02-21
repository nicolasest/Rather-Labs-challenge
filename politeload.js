function init() {
	Enabler.isPageLoaded() ? politeInit() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit)
}

function politeInit() {
	var t = document.createElement("script");
	t.setAttribute("type", "text/javascript"), t.setAttribute("src", Enabler.getUrl("script.js")), document.getElementsByTagName("head")[0].appendChild(t)
}! function(t) {
	t(window).load((function() {
		
	}))
}(jQuery), Enabler.isInitialized() ? init() : Enabler.addEventListener(studio.events.StudioEvent.INIT, init);