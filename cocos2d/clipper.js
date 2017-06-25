var MyClipper = cc.Layer.extend({
	ctor: function(){
		this._super();
		this.clipper3();
	},

	clipper1: function(){
		var clipper = new cc.ClippingNode();
		clipper.tag = 0;
		clipper.width = 200;
	    clipper.height = 200;
        clipper.anchorX = 0.5;
        clipper.anchorY = 0.5;
        clipper.x = this.width / 2;
        clipper.y = this.height / 2;
		// clipper.runAction(cc.rotateBy(1, 45).repeatForever());
		this.addChild(clipper);
		
		

		var stencil = new cc.DrawNode();
        var rectangle = [cc.p(0, 0),cc.p(clipper.width, 0),
        cc.p(clipper.width, clipper.height),
        cc.p(0, clipper.height)];

        var white = cc.color(255, 255, 255, 255);
        stencil.drawPoly(rectangle, white, 1, white);
        clipper.stencil = stencil;

		var content = new cc.Sprite(res.node512_png);
		content.tag = 1;
        content.anchorX = 0.5;
        content.anchorY = 0.5;
        content.x = clipper.width / 2;
	    content.y = clipper.height / 2;
        clipper.addChild(content);

        this._scrolling = false;
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: function (touches, event) {
                if (!touches || touches.length == 0)
                    return;
	            var target = event.getCurrentTarget();

                var touch = touches[0];
                var clipper = target.getChildByTag(0);
                var point = clipper.convertToNodeSpace(touch.getLocation());
                var rect = cc.rect(0, 0, clipper.width, clipper.height);
                target._scrolling = cc.rectContainsPoint(rect, point);
                target._lastPoint = point;
            },

            onTouchesMoved: function (touches, event) {
                var target = event.getCurrentTarget();
                if (!target._scrolling)
                    return;

                if (!touches || touches.length == 0)
                    return;
                var touch = touches[0];
                var clipper = target.getChildByTag(0);
                var point = clipper.convertToNodeSpace(touch.getLocation());
                var diff = cc.pSub(point, target._lastPoint);
                var content = clipper.getChildByTag(1);
                content.setPosition(cc.pAdd(content.getPosition(), diff));
                target._lastPoint = point;
            },

            onTouchesEnded: function (touches, event) {
                var target = event.getCurrentTarget();
                if (!target._scrolling) return;
                target._scrolling = false;
            }
        }), this);
	},

	clipper2: function(){
		var clipper = new cc.ClippingNode();
		clipper.tag = 0;
		clipper.width = 200;
	    clipper.height = 200;
        clipper.anchorX = 0.5;
        clipper.anchorY = 0.5;
        clipper.x = this.width / 2;
        clipper.y = this.height / 2;
		this.addChild(clipper);
		
		

		var stencil = new cc.Sprite(res.node128_png);
        // var rectangle = [cc.p(0, 0),cc.p(clipper.width, 0),
        // cc.p(clipper.width, clipper.height),
        // cc.p(0, clipper.height)];
        stencil.setAnchorPoint(1,1);
        stencil.runAction(cc.rotateBy(3, 45).repeatForever());

        // var white = cc.color(255, 255, 255, 255);
        // stencil.drawPoly(rectangle, white, 1, white);
        clipper.stencil = stencil;

		var content = new cc.Sprite(res.node512_png);
		content.tag = 1;
        content.anchorX = 0.5;
        content.anchorY = 0.5;
        content.x = clipper.width / 2;
	    content.y = clipper.height / 2;
	    content.runAction(cc.rotateBy(1, 45).repeatForever());
        clipper.addChild(content);
	},

    clipper3: function(){
        var clipper = new cc.ClippingNode();
        clipper.setPosition(500,500);
        this.addChild(clipper);
        clipper.setInverted(true);

        var stencil = new cc.Sprite(res.node64_png);
        clipper.stencil = stencil;

        var sprite = new cc.Sprite(res.node512_png);
        clipper.addChild(sprite);
    }
});


var MyClipperScene = cc.Scene.extend({
	onEnter: function(){
		this._super();

		var layer = new MyClipper();
		this.addChild(layer);
	}
});