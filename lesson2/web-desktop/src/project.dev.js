require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"table.js":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4c05dQjq2xIoJtH//PFrBbi', 'table.js');
// javsscript/table.js.js

cc.Class({
    'extends': cc.Component,
    properties: {
        ball1: {
            'default': null,
            type: cc.Sprite
        },
        ball2: {
            'default': null,
            type: cc.Sprite
        },
        ball3: {
            'default': null,
            type: cc.Sprite
        },
        ball4: {
            'default': null,
            type: cc.Sprite
        },
        ball5: {
            'default': null,
            type: cc.Sprite
        }
    },

    ctor: function ctor() {
        // this._super();
        this.space = null;
        this.size = 5;
        this.balls = [];
        this.sprites = [];
        this.initPhysics();
        this.update();
        return this;
    },
    setupDebugNode: function setupDebugNode() {
        this.debugNode = cc.PhysicsDebugNode.create(this.space);
        this.debugNode.visible = true;

        var parent = this.node;
        this.debugNode.setPosition(0, 0);
        parent._sgNode.addChild(this.debugNode, 100);
    },
    initPhysics: function initPhysics() {
        var winSize = cc.director.getWinSize();
        var space = this.space = new cp.Space();

        this.space.gravity = cp.v(0, 0);
        this.space.damping = 0.9;
        var staticBody = this.space.staticBody;
        var lb = cp.v(0, 0),
            rb = cp.v(winSize.width, 0),
            lt = cp.v(0, winSize.height),
            rt = cp.v(winSize.width, winSize.height);
        var walls = [new cp.SegmentShape(staticBody, lb, rb, 0), new cp.SegmentShape(staticBody, rb, rt, 0), new cp.SegmentShape(staticBody, rt, lt, 0), new cp.SegmentShape(staticBody, lt, lb, 0)];
        walls.forEach(function (wall) {
            wall.setElasticity(1);
            wall.setFriction(1);
            space.addStaticShape(wall);
        });
    },

    // use this for initialization
    onLoad: function onLoad() {
        // this.setupDebugNode();
        // cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);
        var balls = this.balls;
        var space = this.space;
        var sprites = this.sprites;
        var that = this;
        var t_ball;
        window.main = this;
        for (var i = this.size; i > 0; i--) {
            t_ball = that['ball' + i];
            balls.push(t_ball);
        }

        this.balls.forEach(function (ball) {

            var body = new cp.Body(1, cp.momentForCircle(1, 0, ball.node.width / 2, cp.v(0, 0)));
            var shape = new cp.CircleShape(body, ball.node.width / 2, cp.v(0, 0));
            body.setPos(ball.node.getPosition());
            body.damping = 0.2;
            // body.setLinearDamping(1);
            // cc.log(body.setLinearDamping)
            shape.setFriction(0.2);
            shape.setElasticity(0.3);
            space.addShape(shape);
            space.addBody(body);
            ball.body = body;
            ball.node.on('mousedown', function (e) {
                that.target = ball;
            });
        });
        this.node.on('mouseup', function (e) {
            if (!that.target) {
                return;
            }
            var l = e.getLocation();
            l = cp.v(l.x, l.y);
            var p = that.target.node.getPosition();
            p = cp.v(p.x, p.y);
            var direction = p.sub(l);
            var nor = cp.v.normalize(direction);
            var len = cp.v.len(direction);
            len = len > 1000 ? 1000 : len;
            var v = nor.mult(len);
            that.target.body.setVel(v);
            that.target = null;
        });
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var timeStep = 0.03;
        this.space.step(timeStep);
        this.balls.forEach(function (ball) {
            var p = ball.body.p;
            ball.node.x = p.x;
            ball.node.y = p.y;
        });
    }
});

cc._RFpop();
},{}]},{},["table.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiamF2c3NjcmlwdC90YWJsZS5qcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGMwNWRRanEyeElvSnRILy9QRnJCYmknLCAndGFibGUuanMnKTtcbi8vIGphdnNzY3JpcHQvdGFibGUuanMuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFsbDE6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBiYWxsMjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIGJhbGwzOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgYmFsbDQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBiYWxsNToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zcGFjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgICAgIHRoaXMuYmFsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gW107XG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXR1cERlYnVnTm9kZTogZnVuY3Rpb24gc2V0dXBEZWJ1Z05vZGUoKSB7XG4gICAgICAgIHRoaXMuZGVidWdOb2RlID0gY2MuUGh5c2ljc0RlYnVnTm9kZS5jcmVhdGUodGhpcy5zcGFjZSk7XG4gICAgICAgIHRoaXMuZGVidWdOb2RlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuZGVidWdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICBwYXJlbnQuX3NnTm9kZS5hZGRDaGlsZCh0aGlzLmRlYnVnTm9kZSwgMTAwKTtcbiAgICB9LFxuICAgIGluaXRQaHlzaWNzOiBmdW5jdGlvbiBpbml0UGh5c2ljcygpIHtcbiAgICAgICAgdmFyIHdpblNpemUgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc3BhY2UgPSBuZXcgY3AuU3BhY2UoKTtcblxuICAgICAgICB0aGlzLnNwYWNlLmdyYXZpdHkgPSBjcC52KDAsIDApO1xuICAgICAgICB0aGlzLnNwYWNlLmRhbXBpbmcgPSAwLjk7XG4gICAgICAgIHZhciBzdGF0aWNCb2R5ID0gdGhpcy5zcGFjZS5zdGF0aWNCb2R5O1xuICAgICAgICB2YXIgbGIgPSBjcC52KDAsIDApLFxuICAgICAgICAgICAgcmIgPSBjcC52KHdpblNpemUud2lkdGgsIDApLFxuICAgICAgICAgICAgbHQgPSBjcC52KDAsIHdpblNpemUuaGVpZ2h0KSxcbiAgICAgICAgICAgIHJ0ID0gY3Audih3aW5TaXplLndpZHRoLCB3aW5TaXplLmhlaWdodCk7XG4gICAgICAgIHZhciB3YWxscyA9IFtuZXcgY3AuU2VnbWVudFNoYXBlKHN0YXRpY0JvZHksIGxiLCByYiwgMCksIG5ldyBjcC5TZWdtZW50U2hhcGUoc3RhdGljQm9keSwgcmIsIHJ0LCAwKSwgbmV3IGNwLlNlZ21lbnRTaGFwZShzdGF0aWNCb2R5LCBydCwgbHQsIDApLCBuZXcgY3AuU2VnbWVudFNoYXBlKHN0YXRpY0JvZHksIGx0LCBsYiwgMCldO1xuICAgICAgICB3YWxscy5mb3JFYWNoKGZ1bmN0aW9uICh3YWxsKSB7XG4gICAgICAgICAgICB3YWxsLnNldEVsYXN0aWNpdHkoMSk7XG4gICAgICAgICAgICB3YWxsLnNldEZyaWN0aW9uKDEpO1xuICAgICAgICAgICAgc3BhY2UuYWRkU3RhdGljU2hhcGUod2FsbCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5zZXR1cERlYnVnTm9kZSgpO1xuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDk2MCwgNjQwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcbiAgICAgICAgdmFyIGJhbGxzID0gdGhpcy5iYWxscztcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zcGFjZTtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZXM7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHRfYmFsbDtcbiAgICAgICAgd2luZG93Lm1haW4gPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5zaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0X2JhbGwgPSB0aGF0WydiYWxsJyArIGldO1xuICAgICAgICAgICAgYmFsbHMucHVzaCh0X2JhbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGZ1bmN0aW9uIChiYWxsKSB7XG5cbiAgICAgICAgICAgIHZhciBib2R5ID0gbmV3IGNwLkJvZHkoMSwgY3AubW9tZW50Rm9yQ2lyY2xlKDEsIDAsIGJhbGwubm9kZS53aWR0aCAvIDIsIGNwLnYoMCwgMCkpKTtcbiAgICAgICAgICAgIHZhciBzaGFwZSA9IG5ldyBjcC5DaXJjbGVTaGFwZShib2R5LCBiYWxsLm5vZGUud2lkdGggLyAyLCBjcC52KDAsIDApKTtcbiAgICAgICAgICAgIGJvZHkuc2V0UG9zKGJhbGwubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGJvZHkuZGFtcGluZyA9IDAuMjtcbiAgICAgICAgICAgIC8vIGJvZHkuc2V0TGluZWFyRGFtcGluZygxKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhib2R5LnNldExpbmVhckRhbXBpbmcpXG4gICAgICAgICAgICBzaGFwZS5zZXRGcmljdGlvbigwLjIpO1xuICAgICAgICAgICAgc2hhcGUuc2V0RWxhc3RpY2l0eSgwLjMpO1xuICAgICAgICAgICAgc3BhY2UuYWRkU2hhcGUoc2hhcGUpO1xuICAgICAgICAgICAgc3BhY2UuYWRkQm9keShib2R5KTtcbiAgICAgICAgICAgIGJhbGwuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICBiYWxsLm5vZGUub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhhdC50YXJnZXQgPSBiYWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUub24oJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCF0aGF0LnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gZS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgbCA9IGNwLnYobC54LCBsLnkpO1xuICAgICAgICAgICAgdmFyIHAgPSB0aGF0LnRhcmdldC5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBwID0gY3AudihwLngsIHAueSk7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gcC5zdWIobCk7XG4gICAgICAgICAgICB2YXIgbm9yID0gY3Audi5ub3JtYWxpemUoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBjcC52LmxlbihkaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGVuID0gbGVuID4gMTAwMCA/IDEwMDAgOiBsZW47XG4gICAgICAgICAgICB2YXIgdiA9IG5vci5tdWx0KGxlbik7XG4gICAgICAgICAgICB0aGF0LnRhcmdldC5ib2R5LnNldFZlbCh2KTtcbiAgICAgICAgICAgIHRoYXQudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdmFyIHRpbWVTdGVwID0gMC4wMztcbiAgICAgICAgdGhpcy5zcGFjZS5zdGVwKHRpbWVTdGVwKTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGZ1bmN0aW9uIChiYWxsKSB7XG4gICAgICAgICAgICB2YXIgcCA9IGJhbGwuYm9keS5wO1xuICAgICAgICAgICAgYmFsbC5ub2RlLnggPSBwLng7XG4gICAgICAgICAgICBiYWxsLm5vZGUueSA9IHAueTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
