var DrawLayer = cc.Layer.extend({
	ctor: function(){
		this._super();

		var winSize = cc.winSize;
        // var draw = new cc.DrawNode();
        // this.addChild(draw, 10);

        // for( var i=0; i < 10; i++) {
        //     draw.drawDot( cc.p(winSize.width/2, winSize.height/2), 10*(10-i), 
        //     			  cc.color( Math.random()*255, Math.random()*255, Math.random()*255, 255) );
        // }

        // var points = [ cc.p(winSize.height/4,0), cc.p(winSize.width,winSize.height/5), cc.p(winSize.width/3*2,winSize.height) ];
        // draw.drawPoly(points, cc.color(255,0,0,128),50,cc.color(255,255,0,255) );

        // draw.drawDot(cc.p(100,100),50,cc.color(255,255,0,255));
        // draw.drawPoly([cc.p(100,200),cc.p(200,250),cc.p(100,300),cc.p(200,450)],cc.color(255,255,0,255),1,cc.color(255,255,0,255));
	
        // draw.drawSegment( cc.p(20,winSize.height), cc.p(20,winSize.height/2), 10, cc.color(0, 255, 0, 255) );
        // draw.drawSegment( cc.p(10,winSize.height/2), cc.p(winSize.width/2, winSize.height/2), 40, cc.color(255, 0, 255, 128) );
	
        // draw.drawSegment(cc.p(100,100),cc.p(300,300),1,cc.color(255,255,0,255));
        // var draw = new cc.DrawNode();
        // this.addChild(draw);
        // draw.drawDot(cc.p(200,200),50,cc.color(255,255,0));

        // draw.drawPoly([cc.p(100,100),cc.p(100,50),cc.p(50,50)],cc.color(255,255,100),10,cc.color(100,100,100));

        // draw.drawSegment(cc.p(600,600),cc.p(500,900),1,cc.color(30,130,110));
	}
});

var DrawScene = cc.Scene.extend({
	onEnter: function(){
		this._super();

		var layer = new DrawLayer();
		this.addChild(layer);
	}
});