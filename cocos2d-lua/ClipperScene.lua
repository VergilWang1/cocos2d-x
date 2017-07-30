local ClipperScene = class("ClipperScene",cc.load("mvc").ViewBase)

function ClipperScene:onEnter()
	local clipper = cc.ClippingNode:create()
	local stencil = cc.Sprite:create("node_128.png")
	local con = cc.Sprite:create("node_256.png")
	self:addChild(clipper)
	clipper:setStencil(stencil) 
		   :addChild(con)
		   :setPosition(cc.p(500,500))
		   :setInverted(true)
	
end

return ClipperScene