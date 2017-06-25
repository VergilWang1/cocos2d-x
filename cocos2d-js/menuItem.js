var MenuLayer = cc.Layer.extend({
	ctor: function(){
		this._super();
 	
 		this.menu2();
	},

	menu1: function(){
		var itemArr = [];
		var item1 = new cc.MenuItemImage(res.back1_png,res.back2_png,callF,this);
		item1.setPosition(-400,0);
		itemArr.push(item1);

		var item2 = new cc.MenuItemImage(res.next1_png,res.next2_png,callF,this);
		item2.setPosition(400,0);
		itemArr.push(item2);

		var menu = new cc.Menu(itemArr);
		// menu.addChild(item);
		this.addChild(menu);
		

		function callF(){
			cc.log("menu");
		}
	},

	menu2: function(){//restart1
		var item,i,menu;
		var itemArr = [];
		this.a = 0;
		var lb = new cc.LabelTTF("menu?","Arail",30);
		lb.setPosition(cc.p(Math.random()*500,Math.random()*500));
		
		for(i=0;i<5;i++){

			var callF = function(i){
				return function(){
					
				}
			}(i);
			item = new cc.MenuItemImage(res.restart1_png,res.restart2_png,function(){
				this.addChild(lb);
			},this);
			item.setPosition(cc.p(i*100 - 200,0));
			itemArr.push(item);
		}
		var menu = new cc.Menu(itemArr);
		this.addChild(menu);
	}
});

var MenuScene = cc.Scene.extend({
	onEnter: function(){
		this._super();
		var layer = new MenuLayer();
		this.addChild(layer);
	}
});