var DemoFire = cc.Layer.extend({
    onEnter:function () {
        this._super();

        this.particle3();
    },
    particle1: function(){
        var size = cc.winSize;
        var fire = new cc.ParticleRain();
        this.addChild(fire, 5);
        fire.x = size.width/2;
        fire.y = size.height;

        // var draw = new cc.DrawNode();
        // var spr = draw.drawDot(cc.p(size.witdh/2,size.height/2),50,cc.color(100,100,200));
        fire.texture = cc.textureCache.addImage(res.scale9_png);
        // fire.setPositionType(cc.ParticleSystem.TYPE_RELATIVE);

        // this.setEmitterPosition();
    },
    particle2: function(){
        var size = cc.winSize;
        var par = new cc.ParticleFire();
        par.setPosition(size.width/2,size.height/2);
        this.addChild(par);

        par.texture = cc.textureCache.addImage(res.scale9_png);
    },

    particle3: function(){
        this._emitter = new cc.ParticleSystem(50);

        this.addChild(this._emitter, 10);
        this._emitter.texture = cc.textureCache.addImage(res.scale9_png);
        this._emitter.shapeType = cc.ParticleSystem.STAR_SHAPE;

        this._emitter.duration = -1;

        // gravity
        this._emitter.gravity = cc.p(0, 0);

        // angle
        this._emitter.angle = 90;
        this._emitter.angleVar = 360;

        // speed of particles
        this._emitter.speed = 160;
        this._emitter.speedVar = 20;

        // radial
        this._emitter.radialAccel = -120;
        this._emitter.radialAccelVar = 0;

        // tangential
        this._emitter.tangentialAccel = 30;
        this._emitter.tangentialAccelVar = 0;

        // emitter position
        this._emitter.x = 160;
        this._emitter.y = 240;
        this._emitter.posVar = cc.p(0, 0);

        // life of particles
        this._emitter.life = 4;
        this._emitter.lifeVar = 1;

        // spin of particles
        this._emitter.startSpin = 0;
        this._emitter.startSizeVar = 0;
        this._emitter.endSpin = 0;
        this._emitter.endSpinVar = 0;

        // color of particles
        this._emitter.startColor = cc.color(128, 128, 128, 255);
        this._emitter.startColorVar = cc.color(128, 128, 128, 255);
        this._emitter.endColor = cc.color(26, 26, 26, 50);
        this._emitter.endColorVar = cc.color(26, 26, 26, 50);

        // size, in pixels
        this._emitter.startSize = 80.0;
        this._emitter.startSizeVar = 40.0;
        this._emitter.endSize = cc.ParticleSystem.START_SIZE_EQUAL_TO_END_SIZE;

        // emits per second
        this._emitter.emissionRate = this._emitter.totalParticles / this._emitter.life;

        // additive
        this._emitter.setBlendAdditive(true);
    }
});

var Partical = cc.Scene.extend({
    onEnter: function(){
        this._super();

        var layer = new DemoFire();
        this.addChild(layer);
    }
});