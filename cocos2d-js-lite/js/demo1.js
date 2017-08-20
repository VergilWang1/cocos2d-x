window.onload = function(){
	cc.game.onStart = function(){
		var imgArr = ["img/node_64.png","img/node_128.png","img/Scale9.png"];
		cc.LoaderScene.preload(imgArr, function(){
			var MyLayer = cc.Layer.extend({
				ctor: function(){
					this._super();

					this.demo1();
				},
				demo1: function(){
					var sp = new cc.Sprite("img/node_64.png");
					sp.setPosition(cc.p(100,100));
					this.addChild(sp);
				}
			});
			var MyScene = cc.Scene.extend({
				onEnter: function(){
					this._super();

					var layer = new MyLayer();
					this.addChild(layer);
				}
			});
			cc.director.runScene(new MyScene());
		},this);
	}
	cc.game.run("canvas");
}