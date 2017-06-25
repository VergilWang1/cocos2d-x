var ScrollViewLayer = cc.Layer.extend({
    ctor: function(){
        this._super();

    },
    onEnter: function(){
        this._super();
        this.scrollView3();
    },
    scrollView1: function(){
        // var bg = new cc.Sprite(res.node512_png);
        // bg.setNormalizedPosition(0.5,0.5);
        // bg.setScale(2);
        // this.addChild(bg);
        var scrollView = new ccui.ScrollView();
        scrollView.setBackGroundImage(res.node512_png);
        scrollView.setTouchEnabled(true);
        scrollView.setContentSize(cc.size(300, 150));
        scrollView.setNormalizedPosition(0.5,0.5);
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        scrollView.setBounceEnabled(true);
        scrollView.setVisible(true);
        this.addChild(scrollView,1);
        scrollView.setInnerContainerSize(cc.size(300, 600));

        for(var i=0;i<4;i++){
            var sprite = new cc.Sprite(res.node64_png);
            sprite.setPosition(150,i*140);
            sprite.setAnchorPoint(0.5,0);
            scrollView.addChild(sprite);
        }
    },
    scrollView2: function(){
        var size = cc.winSize;
        var scroll = new ccui.ScrollView();
        scroll.setContentSize(cc.size(300, 200));
        scroll.setBackGroundImage(res.node64_png);
        scroll.setDirection(ccui.ScrollView.DIR_VERTICAL);
        scroll.setPosition(size.width/2,size.height/2);
        scroll.setAnchorPoint(0.5,0.5);
        scroll.setBounceEnabled(true);
        this.addChild(scroll);

        var sprite = new cc.Sprite(res.skill_png);
        scroll.addChild(sprite);
        sprite.setAnchorPoint(0.5,0.5);
        sprite.setPosition(150,250);

        scroll.setInnerContainerSize(cc.size(300,500));
    },
    scrollView3: function(){
        var size = cc.winSize;
        var sprite = new cc.Sprite(res.node152_png);
        // cc.log();
        var spsize = sprite.getContentSize()
        this.addChild(sprite);
        sprite.setNormalizedPosition(0.5,0.5);

        var scroll = new ccui.ScrollView();
        scroll.setPosition(spsize.width/2,spsize.height/2);
        // scroll.setBackGroundImage(res.node152_png);
        scroll.setContentSize(cc.size(spsize.width,spsize.height));
        scroll.setBounceEnabled(true);
        scroll.setAnchorPoint(0.5,0.5);
        scroll.setDirection(ccui.ScrollView.DIR_VERTICAL);
        sprite.addChild(scroll);

        scroll.setInnerContainerSize(cc.size(500,500));
        // var ssize = scroll.getContentSize();

        var sprite1 = new cc.Sprite(res.node512_png);
        scroll.addChild(sprite1);
        sprite1.setPosition(spsize.width/2,500);
        sprite1.setAnchorPoint(0.5,1);
        cc.log(sprite1.getAnchorPoint());
        // cc.log(sprite.getPosition());
        // cc.log(scroll.convertToNodeSpaceAR(sprite.getPosition()));
        
    }
});
var ScrollViewScene = cc.Scene.extend({
    onEnter: function(){
        this._super();

        var layer = new ScrollViewLayer();
        this.addChild(layer);
    }
});