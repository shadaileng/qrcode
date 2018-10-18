;(function(){
	function init() {
		Game = {
			tickLength: 16, 				// 20Hz
			lastTick: performance.now(),	// 最后更新时间
			stopKey: 0
		}
	}
	function updateBatch(tickNum) {
		for(let i = 0; i < tickNum; i++) {
			Game.lastTick = Game.lastTick + Game.tickLength
			update(Game.lastTick)
		}
	}
	function update(lastTick) {
		console.log('update: ' + lastTick)
	}
	function render(tFrame) {
		
	}
	function main(tFrame) {
		Game.stopKey = requestAnimationFrame(main)
		let nextTick = Game.lastTick + Game.tickLength
		let tickNum = 0
		/*
		console.log('tFrame: ' + tFrame)
		console.log('Game.lastTick: ' + Game.lastTick)
		console.log('nextTick: ' + nextTick)
		*/
		if (tFrame > nextTick) {
			let sinceTick = tFrame - Game.lastTick
			tickNum = Math.floor((tFrame - Game.lastTick) / Game.tickLength)
		}
		
//		console.log('tFrame: ' + tFrame)
//		console.log('now: ' + performance.now())
		
		updateBatch(tickNum)
		render(tFrame)
		Game.lastTick = tFrame
	}
	init()
	main()
})();
