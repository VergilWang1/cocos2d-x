//cocos2d-js不同层之间公用参数的传递
var ApplyLayer = cc.Layer.extend({
	ctor: function(num){
		this._super();

		s = new cc.Sprite(res.node64_png);
		s.setNormalizedPosition(0.5,0.5);
		this.addChild(s);
		// this.s = s;
		// cc.log(d);
		// this.d = d;
		// cc.log(d);
		// s.runAction(cc.jumpTo(1,cc.p(100,100),50,3));
		// this.s = s;
		// this.schedule(function(){
		// 	cc.log(1);
		// },1);
		++num;
		// cc.eventManager.addListener({
		// 	event: cc.EventListener.TOUCH_ONE_BY_ONE,
		// 	swallowTouches: true,
		// 	onTouchBegan: function(touch,event){
		// 		cc.log("touched");
		// 	}
		// },this);
		var flag1 = 0;
		var sender = this;
		runScene(flag1,sender,num);
		
	}
});
var ApplyLayer2 = cc.Layer.extend({
	ctor: function(num){
		this._super();


		++num;
		var flag1 = 1;
		var sender = this;
		runScene(flag1,sender,num);
	}
});
var runScene = function(flag1,sender,num){
	var item = new cc.MenuItemImage(res.back1_png,res.back2_png,function(){
		cc.log(num);
		var scene = new cc.Scene();
		if(flag1){
			var layer = new cc.LayerColor(cc.color(100,100,100));
			var app = new ApplyLayer(num);
		}else{
			var layer = new cc.LayerColor(cc.color(50,100,255));
			var app = new ApplyLayer2(num);
		}
		scene.addChild(layer);
		layer.addChild(app);

		cc.director.runScene(new cc.TransitionShrinkGrow(1,scene));
	},sender);
	var menu = new cc.Menu(item);
	menu.setPosition(100,500);
	sender.addChild(menu);
};

var ApplyScene = cc.Scene.extend({
	onEnter: function(){
		this._super();

		var num = 0;
		var layer = new ApplyLayer(num);
		this.addChild(layer);
	}
});