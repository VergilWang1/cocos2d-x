local LabelScene = class("LabelScene", cc.load("mvc").ViewBase)

function LabelScene:ctor()
	--1
	local lb = cc.Label:createWithSystemFont("test","Arial", 100)
	lb:addTo(self)
	  :setPosition(cc.p(500,500))

	-- local label1 = cc.LabelBMFont:create("test2", "bitmapFontTest3.fnt")
 --    self:addChild(label1)
 --    label1:setPosition(cc.p(500,400))

    -- -- cc.LabelTTF
    local label2 = cc.LabelTTF:create("test3", "Arial", 100)
    self:addChild(label2, 0, 1)
    label2:setPosition(cc.p(500,300))

    -- -- cc.LabelAtlas
    -- local label3 = cc.LabelAtlas:create("test4", "fonts/tuffy_bold_italic-charmap.png", 48, 64,  string.byte(" "))
    -- self:addChild(label3, 0, 1)
    -- label3:setPosition(cc.p(500,200))


end

return LabelScene