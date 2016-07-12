cc.Class({
    extends: cc.Component,
    properties: {
        ball1: {
            default: null,
            type: cc.Sprite
        },
        ball2: {
            default: null,
            type: cc.Sprite
        },
        ball3: {
            default: null,
            type: cc.Sprite
        },
        ball4: {
            default: null,
            type: cc.Sprite
        },
        ball5: {
            default: null,
            type: cc.Sprite
        }
    },

    ctor: function() {
        // this._super();
        this.space = null;
        this.size = 5;
        this.balls = [];
        this.sprites = [];
        this.initPhysics();
        this.update();
        return this;
    },
    setupDebugNode: function() {
        this.debugNode = cc.PhysicsDebugNode.create(this.space);
        this.debugNode.visible = true;

        var parent = this.node;
        this.debugNode.setPosition(0, 0);
        parent._sgNode.addChild(this.debugNode, 100);
    },
    initPhysics: function() {
        var winSize = cc.director.getWinSize();
        var space = this.space = new cp.Space();

        this.space.gravity = cp.v(0, 0);
        this.space.damping = 0.9;
        var staticBody = this.space.staticBody;
        var lb = cp.v(0, 0),
            rb = cp.v(winSize.width, 0),
            lt = cp.v(0, winSize.height),
            rt = cp.v(winSize.width, winSize.height);
        var walls = [new cp.SegmentShape(staticBody, lb, rb, 0),
            new cp.SegmentShape(staticBody, rb, rt, 0),
            new cp.SegmentShape(staticBody, rt, lt, 0),
            new cp.SegmentShape(staticBody, lt, lb, 0)
        ];
        walls.forEach(function(wall) {
            wall.setElasticity(1);
            wall.setFriction(1);
            space.addStaticShape(wall);
        });
    },

    // use this for initialization
    onLoad: function() {
        // this.setupDebugNode();
        // cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);
        var balls = this.balls;
        var space = this.space;
        var sprites = this.sprites;
        var that = this;
        var t_ball;
        window.main = this;
        for (var i = this.size; i > 0; i--) {
            t_ball = that['ball' + i]
            balls.push(t_ball);
        }

        this.balls.forEach(function(ball) {

            var body = new cp.Body(1, cp.momentForCircle(1, 0, ball.node.width / 2, cp.v(0, 0)));
            var shape = new cp.CircleShape(body, ball.node.width / 2, cp.v(0, 0));
            body.setPos(ball.node.getPosition());
            body.v_limit = 500
            // body.setLinearDamping(1);
            // cc.log(body.setLinearDamping)
            shape.setFriction(0.5);
            shape.setElasticity(0.3);
            space.addShape(shape);
            space.addBody(body);
            ball.body = body;
            ball.node.on('mousedown', function(e) {
                that.target = ball
            });
        });
        this.node.on('mouseup', function(e) {
            if (!that.target) {
                return;
            }
            var l = e.getLocation();
            l = cp.v(l.x, l.y);
            var p = that.target.node.getPosition();
            p = cp.v(p.x, p.y)
            var direction = p.sub(l)
            var nor = cp.v.normalize(direction)
            var len = cp.v.len(direction) * 10
            len = len > 5000 ? 5000 : len
            var v = nor.mult(len)
            that.target.body.setVel(v)
            that.target = null;
        })
    },

    // called every frame, uncomment this function to activate update callback
    update: function(dt) {
        var timeStep = 0.03
        this.space.step(timeStep);
        this.balls.forEach(function(ball) {
            var p = ball.body.p
            ball.node.x = p.x;
            ball.node.y = p.y;
        })
    },
});
