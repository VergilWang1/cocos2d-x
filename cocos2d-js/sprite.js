var SpriteTestLayer = cc.Layer.extend({
	ctor: function(){
		this._super();	

		this.spriteCaozuo();
	},
	spriteTest: function(){
		var sprite = new cc.Sprite(res.node64_png);
		sprite.attr({
			x: 300,
			y: 300
		});
		var parent = new cc.Sprite(res.node152_png);
		parent.attr({
			x: 100,
			y: 600
		});
		sprite.setName("sprite");
		sprite.setTag(0);
		parent.setName("parent");
		parent.setTag(1);
		this.addChild(parent);
		this.addChild(sprite);
		userData = {
			name: "a",
			age: 18
		}

		sprite.setUserData(userData);

		cc.log("sprite.getParent().getName():   " + sprite.getParent().getName());
		sprite.setParent(parent);
		cc.log("sprite.getParent().getName():   " + sprite.getParent().getName());
		cc.log("this.getChildren():  " + this.getChildren());
		cc.log("this.getChildrenCount():    " + this.getChildrenCount());
		cc.log("parent.getChildByTag(0):   " + parent.getChildByTag(0));
		// cc.log(sprite.getUserData());

		// cc.log("node.getVertexZ() : ", sprite.getVertexZ());

  //       cc.log("node.getShaderProgram() : ", sprite.getShaderProgram());
  //       sprite.setShaderProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));
  //       cc.log("node.getShaderProgram() : ", sprite.getShaderProgram());
	},
	spriteTest2: function(){
		var size = cc.winSize;
		var node1 = new cc.Node();
		node1.attr({
			width: 500,
			height: 500,
			x: size.width/2,
			y: size.height/2
		});
		this.addChild(node1);

		var node2 = new cc.Sprite(res.node64_png);
		node1.addChild(node2);

		// node2.runAction(cc.jumpTo(1,cc.p(100,100),50,2));
		
		// cc.log(node2.getActionManager()._arrayTargets);

		// node1.setActionManager(node2.getActionManager());

		cc.log(node2.getPosition());
		cc.log(node2.getBoundingBox());
		// cc.log(node1.convertToNodeSpace(node2.getPosition()));
		cc.log(node1.convertToWorldSpace(node2.getPosition()));
	},
	spriteTest3: function(){
		var size = cc.winSize;
		var self = this;
		var node = new cc.Sprite(res.node64_png);
		node.setNormalizedPosition(0.5,0.5);
		this.addChild(node);
		var num = 0;
		function numS(){
			node.runAction(cc.sequence(cc.jumpTo(0.5,cc.p(size.width/2,size.height/2),50,1)));
			cc.log(++num);
		}
		self.schedule(numS,0.5);
		// node.runAction(cc.sequence(cc.jumpTo(0.5,cc.p(size.width/2,size.height/2),50,1)).repeatForever());
		var isPause = true;
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: function(touch,event){
				if(isPause){
					// node.pause();
					self.unschedule(numS);
				}else{
					// node.resume();
					self.schedule(numS,1);
				}
				isPause = !isPause;
			}
		},this);
	},
	spriteTest4: function(){
		var size = cc.winSize;
		var label = new cc.LabelTTF("精灵操作","Arail",40);
		label.setPosition(cc.p(size.width/2,size.height-50));
		this.addChild(label);
		//颜色精灵  （无法绘制。。。）
		// var colorSprite = new cc.Sprite();
  //       // not setContentSize
  //       colorSprite.setTextureRect(cc.rect(0, 0, 128, 128));
  //       colorSprite.setColor(cc.color(255, 128, 128));
  //       colorSprite.setPosition(size.width/2,size.height/2);
  //       this.addChild(colorSprite);
  //       cc.log(colorSprite.getPosition());
  		//普通精灵
  		// var sprite = new cc.Sprite(res.node64_png);
  		// sprite.setNormalizedPosition(0.5,0.5);
  		// this.addChild(sprite);
  		//纹理绘制
  		// var texture = cc.textureCache.addImage(res.node64_png);
  		// var sprite = new cc.Sprite(texture);
  		// sprite.setNormalizedPosition(0.5,0.5);
  		// this.addChild(sprite);
  		//plist加载
  		// cc.spriteFrameCache.addSpriteFrames(res.skill_plist);
  		// var frame = cc.spriteFrameCache.getSpriteFrame("skill_10.png");
    //     var frameSprite = new cc.Sprite(frame);
    //     frameSprite.setNormalizedPosition(0.5, 0.5);
    //     this.addChild(frameSprite);
    // 	//scale9Sprite 9宫格精灵
    // 	var sprite = new cc.Scale9Sprite(res.scale9_png);
    // 	sprite.setContentSize(500,500);
    // 	sprite.setNormalizedPosition(0.5,0.5);
  		// this.addChild(sprite);
  		//batchNode优化
  		var texture = cc.textureCache.addImage(res.node64_png);
  		var batch = new cc.SpriteBatchNode(texture);
  		this.addChild(batch);

  		for(var i=0;i<50;i++){
  			var sprite = new cc.Sprite(batch.texture);
  			batch.addChild(sprite);
  			sprite.setPosition(Math.random()*size.width,Math.random()*size.height);
  		}
  		cc.log(batch.getContentSize());
  		cc.log(batch.getPosition());
	},
	spriteCaozuo: function(){
		var size = cc.winSize;
		var lb = new cc.LabelTTF("精灵操作","Arail",50);
		lb.setPosition(size.width/2,size.height-50);
		this.addChild(lb);

		cc.spriteFrameCache.addSpriteFrames(res.skill_plist);
		var frameSprite = cc.spriteFrameCache.getSpriteFrame("skill_1.png");
		var sprite = new cc.Sprite(frameSprite);
		sprite.setNormalizedPosition(0.5,0.5);
		this.addChild(sprite);

		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: function(touch,event){
				var pos = touch.getLocation();
				var rect = sprite.getBoundingBox();
				if(cc.rectContainsPoint(rect,pos)){
					// sprite.setTexture(res.node152_png);//换纹理
					// sprite.setSpriteFrame("skill_10.png");//换帧
				}
			}
		},this);
		var frameArr = [];
		for(var i=1;i<=14;i++){
			var frame = cc.spriteFrameCache.getSpriteFrame("skill_" + i + ".png");
			frameArr.push(frame);
		}
		var action = cc.animate(new cc.Animation(frameArr,0.1));
		sprite.runAction(action);
	}
});

var SpriteTestScene = cc.Scene.extend({
	onEnter: function(){
		this._super();
		var layer = new SpriteTestLayer();
		this.addChild(layer);
	}
});