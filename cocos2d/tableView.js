//tableview的用法;
var TableViewLayer = cc.Layer.extend({
    ctor: function(){
        this._super();
        var size = cc.winSize;
        this.init();
        this.editBox();
        this.blankSpriteWithSize(size);
    },
    init:function () {
        var winSize = cc.winSize;

        var tableView = new cc.TableView(this, cc.size(600, 60));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
        tableView.x = 20;
        tableView.y = winSize.height / 2 - 150;
        tableView.setDelegate(this);
        this.addChild(tableView);
        tableView.reloadData();

        tableView = new cc.TableView(this, cc.size(60, 350));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        tableView.x = winSize.width - 150;
        tableView.y = winSize.height / 2 - 150;
        tableView.setDelegate(this);
        tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN);
        this.addChild(tableView);
        tableView.reloadData();

        return true;
    },

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    },

    tableCellTouched:function (table, cell) {
        cc.log("cell touched at index: " + cell.getIdx());
    },
    tableCellTouched2:function () {
        cc.log("cell touched at index: ");
    },

    tableCellSizeForIndex:function (table, idx) {
        return cc.size(60, 60);
    },

    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.cellAtIndex(idx);
        var label;
        if (!cell) {
           cell = new cc.TableViewCell();



            var sprite = new cc.Sprite(res.node64_png);
            sprite.anchorX = 0;
            sprite.anchorY = 0;
            sprite.x = 0;
            sprite.y = 0;
            cell.addChild(sprite);

            label = new cc.LabelTTF(strValue, "Helvetica", 20.0);
            label.x = 0;
            label.y = 0;
            label.anchorX = 0;
            label.anchorY = 0;
            label.tag = 123;
            cell.addChild(label);
        } else {
            label = cell.getChildByTag(123);
            label.setString(strValue);
        }

        return cell;
    },

    numberOfCellsInTableView:function (table) {
        return 25;
    },

    editBox: function(){
        var edit = new cc.EditBox(cc.size(300,50),new cc.Scale9Sprite(res.node64_png));
        this.addChild(edit);
        edit.setPosition(200,500);
        edit.setPlaceHolder("EditBox输入框");
        edit.setMaxLength(28);
        edit.setFontSize(45);
        edit.setInputMode(6);
        edit.setReturnType(1);
    },
    blankSpriteWithSize : function(size) {
        var sprite = new cc.Sprite(res.node64_png);
        this.addChild(sprite);
        sprite.setPosition(300,600);
        sprite.setVisible(true);
        // sprite.setVisible(fasle);
    }
});
var TableViewScene = cc.Scene.extend({
    onEnter: function(){
        this._super();

        var layer = new TableViewLayer();
        this.addChild(layer);
    }
});