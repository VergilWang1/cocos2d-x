local class = class("class", cc.load("mvc").ViewBase)

function class:onCreate()
   	local scroll = cc.ScrollView:create()
    scroll:setViewSize(cc.size(500, 100))
    scroll:setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL)
    self:addChild(scroll)
    scroll:setPosition(300, 100)

    local sp = cc.Sprite:create("node_256.png")

    sp:setPosition(0, 500)

    scroll:setContainer(sp)
end

return class