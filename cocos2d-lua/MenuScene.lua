local MenuScene = class("MenuScene", cc.load("mvc").ViewBase)

local class = MenuScene
function class:onCreate()
	local normalSp = cc.Sprite:create("node_128.png")
	local selectedSp = cc.Sprite:create("node_152.png")
	local item = cc.MenuItemSprite:create(normalSp, selectedSp)
	item:registerScriptTapHandler(function() 
		local sp = cc.Sprite:create("node_256.png")
		sp:addTo(self)
		  :setPosition(cc.p(100,100))
		sp:runAction(cc.Sequence:create(cc.FadeTo:create(1,50),cc.CallFunc:create(function() sp:removeFromParent() end)))
	end)

	local  menu = cc.Menu:create()
	menu:addChild(item)
	menu:addTo(self)

end


return MenuScene