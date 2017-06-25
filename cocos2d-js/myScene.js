var MySceneLayer = cc.Layer.extend({
	ctor: function(){
		this._super();

		var size = cc.winSize;
		var bg = new cc.LayerColor(cc.color(255,255,0));
		this.addChild(bg);
		bg.setPosition(cc.p(size.width/4,size.height/4));
		bg.setContentSize(size.width/2,size.height/2);

		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan
		},this);
	},
	onTouchBegan: function(touch,event){
		var target = event.getCurrentTarget();

		target.runMyScene();
	},
	runMyScene: function(){
		var size = cc.winSize;
		var scene = new cc.Scene();
		var layer = new cc.LayerColor(cc.color(128, 128, 255));
		cc.log(layer.getAnchorPoint());
		layer.setPosition(cc.p(size.width/4,size.height/4));
		layer.setContentSize(size.width/2,size.height/2);
		scene.addChild(layer);

		// cc.director.runScene(scene);
		cc.director.runScene(new cc.TransitionShrinkGrow(1,scene));
	}
});

var MyScene = cc.Scene.extend({
	onEnter: function(){
		this._super();

		var layer = new MySceneLayer();
		this.addChild(layer);
	}
});