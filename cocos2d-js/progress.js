var ProgressLayer = cc.Layer.extend({
	ctor: function(){
		this._super();

		this.progress3();
	},
	progress1: function(){
		var s = new cc.Sprite(res.node64_png);
		var pro = new cc.ProgressTimer(s);
		pro.type = cc.ProgressTimer.TYPE_RADIAL;
		this.addChild(pro);
		pro.attr({
			x: 500,
			y:300
		});
		pro.runAction(cc.progressFromTo(2, 0, 100).repeatForever());

		var x = new cc.Sprite(res.node64_png);

		var pro2 = new cc.ProgressTimer(x);
		
		this.addChild(pro2);
		pro2.type = cc.ProgressTimer.TYPE_RADIAL;
		pro2.setPosition(300,300);
		pro2.runAction(cc.progressFromTo(2,0,100));
		cc.log(pro2.getContentSize());
	},
	progress2: function(){
		var s = new cc.Sprite(res.node512_png);
		var pro = new cc.ProgressTimer(s);
		var to1 = cc.sequence(cc.progressTo(2, 100), cc.progressTo(0, 0));
		pro.type = cc.ProgressTimer.TYPE_BAR;
		pro.barChangeRate = cc.p(1, 0);
		pro.midPoint = cc.p(0, 1);
		pro.setPosition(500,500);
		this.addChild(pro);
		pro.runAction(to1.repeatForever());
	},
	progress3: function(){
		var s = new cc.Sprite(res.node512_png);
		var pro = new cc.ProgressTimer(s);
		to1 = cc.spawn(cc.progressFromTo(2,0,100),
			cc.fadeTo(2,50));
		pro.type = cc.ProgressTimer.TYPE_RADIAL;
		pro.setPosition(500,300);
		this.addChild(pro);
		pro.runAction(to1.repeatForever());
	}
});

var ProgressScene = cc.Scene.extend({
	onEnter: function(){
		this._super();

		var layer = new ProgressLayer();
		this.addChild(layer);
	}
});