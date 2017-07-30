local SpriteScene = class("SpriteScene", cc.load("mvc").ViewBase)
local class = SpriteScene

function SpriteScene:onCreate()
    --加载plist文件
    cc.SpriteFrameCache:getInstance():addSpriteFrames("skill.plist")

    self:initLayer()
end

function class:initLayer()
    --普通精灵创建
    local sp = cc.Sprite:create("node_128.png")
    self:addChild(sp)
    sp:setPosition(cc.p(300,300))
    --背景图片的创建
    display.newSprite("node_128.png")
           :move(display.center)
           :addTo(self)

    --创建精灵帧
    local spFram = cc.Sprite:createWithSpriteFrameName("skill_1.png") 
    spFram:addTo(self)
         :setPosition(cc.p(500,100))

    --将精灵帧里的所有动作集合
    local arr = {}
    for i = 1,13 do
        local str = string.format("skill_%d.png", i)
        local fram = cc.SpriteFrameCache:getInstance():getSpriteFrame(str)
        arr[i] = fram
    end

    local animation = cc.Animation:createWithSpriteFrames(arr, 0.1)
    spFram:runAction(cc.RepeatForever:create(cc.Animate:create(animation)))

    local act = cc.Sequence:create(cc.FadeTo:create(2,50))
    sp:runAction(act)

end



return SpriteScene
