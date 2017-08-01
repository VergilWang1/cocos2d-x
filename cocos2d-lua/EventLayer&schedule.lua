
local class = class("EventLayer",cc.load("mvc").ViewBase)

function class:onCreate()
	local sp = cc.Sprite:create("res/node_128.png")
    sp:addTo(self)
      :setPosition(100,200)
      :setAnchorPoint(0,0)
      local lb = cc.Label:createWithSystemFont("", "Arial", 40)
      lb:addTo(self)
        :setPosition(cc.p(500,500))
    self.lb = lb
    self.sp = sp
        self:testOne()
end

function class:testOne()
    self.m_validRect = cc.rect(100,200,100,100)
    local listenner = cc.EventListenerTouchOneByOne:create()
    listenner:setSwallowTouches(true)
    listenner:registerScriptHandler(function(touch, event)
            local pos = self:convertToNodeSpace(touch:getLocation())
            if cc.rectContainsPoint(self.m_validRect, pos) then
                    self.lb:setString("Hello World")
                else
                    self:testTwo()
            end
        end,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = self:getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listenner, self)
end

function class:testTwo()
    self.sp:runAction(cc.Sequence:create(cc.FadeTo:create(1, 10),
                                            cc.CallFunc:create(function() 
                                                self:removeFromParent()
                                                end)))
end

return class