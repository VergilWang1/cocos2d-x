
local class = class("skeletonNode", cc.load("mvc").ViewBase)

function class:onCreate()
   local skeletonNode = sp.SkeletonAnimation:create("Spring_out/Spring.json","Spring_out/Spring.atlas")   
   skeletonNode:setAnimation(0, "Spring", true)
   skeletonNode:addTo(self)
               :setPosition(300,300)
    self:slap()
end

function class:slap()
    local lb = cc.Label:createWithSystemFont("", "Arial", 40)
        lb:move(display.cx, display.cy + 200)
        lb:addTo(self)
    local num = 0
    local skeletonNode = sp.SkeletonAnimation:create("slap_out/skeleton.json","slap_out/picture.atlas")
    skeletonNode:addTo(self)
                :setPosition(300,550)
    skeletonNode:registerSpineEventHandler(function(event) 
        if event.eventData.name == "sound" then
            num = num+1
            lb:setString(num)
        end
    end,sp.EventType.ANIMATION_EVENT)
    skeletonNode:setAnimation(0, "slap_attack", true)
end

return class