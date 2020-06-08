


(function () {


    let MAP = [
        // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ];

    // 棒倒し法で迷路を自動生成
    function rand(n) {
        return Math.floor(Math.random() * (n + 1));
    }

    let col = 23; // 両方とも奇数になるようにする
    let row = 23;// 両方とも奇数になるようにする

    for (let x = 0; x < col; x++) { //ステージを作る
        MAP[x] = [];
        for (let y = 0; y < row; y++) { //ステージを作る
            MAP[x][y] = 0;
            if (x == 0 || x == col || y == 0 || y == row) {  //上と左にに壁を作る
                MAP[x][y] = 1;  //壁にするから値は[1]
            } if (x == col - 1 || x == col || y == row - 1 || y == row) { //下と右に壁を作る
                MAP[x][y] = 1;  //壁にするから値は[1]
            }
        }
    }

    for (let x = 2; x < col; x += 2) {    //縦横2マス目ごとに壁を配置
        for (let y = 2; y < row; y += 2) {  //縦横2マス目ごとに壁を配置
            MAP[x][y] = 1; //壁にするから値は[1]
        }
    };


    let points = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0] //左
    ];
    let ran;
    for (let x = 2; x < col - 1; x += 2) {
        for (let y = 2; y < row - 1; y += 2) {
            do {
                if (x === 1) {
                    // 上下左右に倒す
                    ran = points[rand(3)];
                } else {

                    ran = points[rand(2)];
                }
                // console.log(MAP);

                // console.log('x', x + ran[0]);
                // console.log('y', y + ran[1]);
                // console.log(MAP[x + ran[0]][y + ran[1]] === 1);

            } while (MAP[x + ran[0]][y + ran[1]] === 1);
            MAP[x + ran[0]][y + ran[1]] = 1;
        }
    }


    const PLAYER_MOVE_SPEED = 0.5;   //プレイヤーの動くスピード
    const PLAYER_ROTATION_SPEED = 2;   //プレイヤー回るスピード
    const MAP_BLOCK_SIZE = 10;        //マップに表示されるブロックの大きさ
    const stage_w = window.innerWidth;
    const stage_h = window.innerHeight;
    const BLOCK_SIZE = 100;

    enchant();
    // ゲーム本体を設定する
    let game = new Core(stage_w, stage_h);
    // 使用するアイテムをあらかじめ用意しておくg
    game.preload(["img/map01.png", "img/player01.png", 'img/land.jpg', 'img/wall.jpg', 'img/goal.png',
        'img/item.png', 'img/item02.png', 'img/door.png', 'img/clear.png', 'img/end.png', 'pad.png',
        'item.mp3', 'goal.mp3', 'zirai.mp3', 'timeup.mp3']);
    game.fps = 60; //1秒間の動画で見せる静止画の枚数（コマ数）
    game.onload = function () {


        // アナログパッド
        let pad = new Pad();
        pad.moveTo(stage_w - 140, stage_h - 120);
        game.rootScene.addChild(pad);


        let mapGroup = new Group();
        mapGroup.x = 10;    //マップを表示させる位置
        mapGroup.y = 10;    //マップを表示させる位置
        game.rootScene.addChild(mapGroup); //rootSceneに追加

        let Field = enchant.Class.create(enchant.Map, {
            initialize: function (image, loadData, collisionData) { //マップを初期化する
                enchant.Map.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE); //マップ大きさ
                this.image = image;  //画像
                this.tl.fadeOut(300);  //10秒後に消す  一秒間のフレーム数でカウント
                this.loadData(loadData);
                if (collisionData) this.collisionData = collisionData;
            }
        });

        let field = new Field(game.assets["img/map01.png"], MAP, MAP);  //画像を設定する
        mapGroup.addChild(field);  //mapgroupに追加


        let Player = enchant.Class.create(enchant.Sprite, {
            isMove: false,
            initialize: function (image, x, y) {    //プレイヤーを初期化する
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE);  //クラス呼び出し
                this.x = 10;  //プレイヤーのスタート位置
                this.y = 210;  //プレイヤーのスタート位置
                this.image = image; //画像
                this.rotation = -90;   //プレイヤースタート向き
                let moveX = 0;
                let moveY = 0;
                // 衝突判定
                this.addEventListener('enterframe', function () {
                    this.isMove = false;
                    //十字キーleft左に回る
                    if (game.input.left) {
                        this.rotation -= PLAYER_ROTATION_SPEED;
                    }
                    //十字キーright右に回る
                    if (game.input.right) {
                        this.rotation += PLAYER_ROTATION_SPEED;
                    }
                    //十字キー前に進む
                    if (game.input.up) {
                        moveX = Math.cos(this.rotation * Math.PI / 180) * PLAYER_MOVE_SPEED;
                        moveY = Math.sin(this.rotation * Math.PI / 180) * PLAYER_MOVE_SPEED;
                        this.isMove = true;
                    }
                    //十字キーdown後ろに下がる
                    if (game.input.down) {
                        moveX = Math.cos(this.rotation * Math.PI / 180) * -PLAYER_MOVE_SPEED;
                        moveY = Math.sin(this.rotation * Math.PI / 180) * -PLAYER_MOVE_SPEED;
                        this.isMove = true;
                    }
                    // 当たり判定
                    if (field.hitTest(this.x + moveX + 4, this.y + moveY + 4)) {
                        this.isMove = false;
                    } else if (field.hitTest(this.x + moveX + 6, this.y + moveY + 4)) {
                        this.isMove = false;
                    } else if (field.hitTest(this.x + moveX + 6, this.y + moveY + 6)) {
                        this.isMove = false;
                    } else if (field.hitTest(this.x + moveX + 4, this.y + moveY + 6)) {
                        this.isMove = false;
                    }
                    if (this.isMove) {
                        this.x += moveX;
                        this.y += moveY;

                    }
                })
            }
        });

        let player = new Player(game.assets["img/player01.png"])//画像を設定する
        mapGroup.addChild(player);  //mapgroupに追加


        //  制限時間を設定する
        let TimeCountDown = enchant.Class.create(enchant.Label, {
            initialize: function (sec) {//引数に分と秒を入れる
                enchant.Label.call(this);  //クラス呼び出し
                this.color = "white";
                this.font = '40px sans-serif';
                this.isTimeUp = false;
                let time = 0;
                let second = sec;

                this.addEventListener('enterframe', function () {
                    if (this.isTimeUp == true) {//タイムオーバーになっていればもう処理しない
                        return;
                    }
                    if (time++ >= game.fps) {//残り時間
                        time = 0;

                        // console.log(time);                      
                        if (--second < 0) {//タイムアップ
                            game.assets['timeup.mp3'].play();
                            game.pushScene(GameoverScene);
                        }

                    }
                    this.text = second //時間
                    console.log(second);
                });
            }
        })

        //残り時間表示
        let timer = new TimeCountDown(100);//分、秒で設定
        timer.moveTo(550, 40);
        game.rootScene.addChild(timer); //rootSceneに追加する

        // ゴール判定
        let Goal = enchant.Class.create(enchant.Sprite, {
            initialize: function (image, x, y) {    //プレイヤーを初期化する
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE);
                this.x = 210;
                this.y = 210;
                this.image = image; //画像
                this.addEventListener('enterframe', function () {
                    if (this.within(player, 10)) {  //当たり判定
                        game.pushScene(GameClear);
                        game.assets['goal.mp3'].play()
                    }
                })
            }
        });
        // 追加する
        let goal = new Goal(game.assets["img/goal.png"])//画像を設定する
        mapGroup.addChild(goal);

        // 地雷を作る
        let Enemy = enchant.Class.create(enchant.Sprite, {
            isMove: false,
            initialize: function () {
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE);
                this.x = 10;
                this.y = 10;
                this.addEventListener('enterframe', function () {
                    if (this.within(player, 10)) {  //当たり判定
                        game.pushScene(GameoverScene);
                        game.assets['zirai.mp3'].play();
                    }
                })
            }
        });

        let enemy = new Enemy();
        mapGroup.addChild(enemy);

        // 地雷
        let Enemy2 = enchant.Class.create(enchant.Sprite, {
            isMove: false,
            initialize: function () {
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE);
                this.x = 100;
                this.y = 180;
                this.addEventListener('enterframe', function () {
                    if (this.within(player, 10)) {  //当たり判定
                        game.pushScene(GameoverScene);
                        game.assets['zirai.mp3'].play();
                    }
                })
            }
        });

        let enemy2 = new Enemy2();
        mapGroup.addChild(enemy2);


        // アイテムを作る
        let Item = enchant.Class.create(enchant.Sprite, {
            initialize: function (image, x, y) {
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE)
                this.x = 210;
                this.y = 10;
                this.image = image;
                this.addEventListener('enterframe', function () {
                    if (this.within(player, 10)) {  //当たり判定
                        this.tl.fadeOut(60);  //アイテムを消す
                        field.tl.fadeIn(240); //マップを再表示させる
                        game.assets['item.mp3'].play();
                    }
                })
            }
        })
        let Item2 = enchant.Class.create(enchant.Sprite, {
            initialize: function (image, x, y) {
                enchant.Sprite.call(this, MAP_BLOCK_SIZE, MAP_BLOCK_SIZE)
                this.x = 110;
                this.y = 110;
                this.image = image;
                this.addEventListener('enterframe', function () {
                    if (this.within(player, 10)) {  //当たり判定
                        this.tl.fadeOut(60);  //アイテムを消す
                        field.tl.fadeIn(240); //マップを再表示させる
                        game.assets['item.mp3'].play();
                    }
                })
            }
        })
        // 追加する
        let item = new Item(game.assets['img/item.png'])
        mapGroup.addChild(item);
        let item2 = new Item2(game.assets['img/item.png'])
        mapGroup.addChild(item2);


        // ゲームクリアシーン作成
        let GameClear = new Scene(stage_w, stage_h);
        GameClear.backgroundColor = 'rgba(74, 74, 150, 0)'; //背景色

        // ゲームクリア画像
        let clear_img = new Sprite(450, 273);
        clear_img.image = game.assets['img/clear.png'];
        clear_img.moveTo(10, 30);
        GameClear.addChild(clear_img);

        let ranking = new Label("↑クリアタイム<br><br>タイムを覚えてね");
        ranking.moveTo(550, 100);
        ranking.color = "white";
        ranking.font = '30px sans-serif';
        GameClear.addChild(ranking);

        let toroku = new Button('登録画面')
        toroku.moveTo(640, 260)
        GameClear.addChild(toroku);;
        toroku.ontouchstart = function () {
            document.location = "ranking.html";
        };

        // リロード
        let ributton = new Button("面白いからもう一度遊ぶ")
        ributton.moveTo(480, 260);
        GameClear.addChild(ributton);;
        ributton.ontouchstart = function () {
            location.reload()
        };

        //ゲームオーバーscene作成
        let GameoverScene = new Scene(stage_w, stage_h);
        GameoverScene.backgroundColor = 'black';  //背景色
        //ゲームオーバー画像
        let gameover_img = new Sprite(271, 139);
        gameover_img.image = game.assets['img/end.png'];
        gameover_img.moveTo(70, 100);
        GameoverScene.addChild(gameover_img);

        // リロード
        let button = new Button("悔しいからもう一度プレイ");
        button.moveTo(500, 210);
        GameoverScene.addChild(button);;
        button.ontouchstart = function () {
            location.reload()
        };

        // three 3Dで表現
        let scene = new THREE.Scene();    //新しいシーン作成

        // 壁を作る
        let wallgeometry = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);    //表示するブロックの大きさ
        let walltexture = new THREE.ImageUtils.loadTexture("img/wall.jpg");   //画像をロードする
        let wallmaterial = new THREE.MeshStandardMaterial({ map: walltexture, bumpMap: walltexture, bumpScale: 0.2 });  //マテリアルを設定する
        for (i = 0, max = MAP.length; i < max; i = i + 1) {   //サイズを合わせる
            for (j = 0, max2 = MAP[i].length; j < max2; j = j + 1) {
                if (MAP[i][j] == 1) {
                    var box = new THREE.Mesh(wallgeometry, wallmaterial); //メッシュを作成
                    box.position.set(BLOCK_SIZE * j, BLOCK_SIZE / 2, BLOCK_SIZE * i);
                    scene.add(box); //sceneに追加
                }
            }
        }
        // 天井を作る
        // PlaneGeometry平面形状を作成する
        let ceilingGeometry = new THREE.PlaneGeometry(BLOCK_SIZE, BLOCK_SIZE);
        let ceilingTexture = new THREE.ImageUtils.loadTexture("img/wall.jpg");
        let ceilingMaterial = new THREE.MeshStandardMaterial({ map: ceilingTexture, side: THREE.DoubleSide, bumpMap: ceilingTexture, bumpScale: 0.2 });
        for (i = 0, max = MAP.length; i < max; i = i + 1) {
            for (j = 0, max2 = MAP[i].length; j < max2; j = j + 1) {
                if (MAP[i][j] == 0) {
                    let plane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
                    plane.position.set(BLOCK_SIZE * j, BLOCK_SIZE, BLOCK_SIZE * i);
                    plane.rotation.x = 90 * Math.PI / 180;
                    scene.add(plane);
                }
            }
        }
        // 地面を作る
        let landGeometry = new THREE.PlaneGeometry(BLOCK_SIZE, BLOCK_SIZE);
        let landTexture = new THREE.ImageUtils.loadTexture("img/land.jpg");
        let landMaterial = new THREE.MeshStandardMaterial({ map: landTexture, side: THREE.DoubleSide, bumpMap: landTexture, bumpScale: 0.2 });
        for (i = 0, max = MAP.length; i < max; i = i + 1) {
            for (j = 0, max2 = MAP[i].length; j < max2; j = j + 1) {
                if (MAP[i][j] == 0) {
                    var plane = new THREE.Mesh(landGeometry, landMaterial);
                    plane.position.set(BLOCK_SIZE * j, 0, BLOCK_SIZE * i);
                    plane.rotation.x = 90 * Math.PI / 180;
                    scene.add(plane);
                }
            }
        }

        // 出口を作る
        let exitgeometry = new THREE.CubeGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        let exittexture = new THREE.ImageUtils.loadTexture("img/door.png");
        let exitmaterial = new THREE.MeshPhongMaterial({
            map: exittexture,
            bumpMap: exittexture,
            bumpScale: 0.2
        });
        // メッシュする
        let cube = new THREE.Mesh(exitgeometry, exitmaterial);
        cube.position.set(BLOCK_SIZE * 21, BLOCK_SIZE / 2.3, BLOCK_SIZE * 21); //配置場所
        scene.add(cube); //シーンに追加

        // アイテムを作る
        let itemgeometry = new THREE.CubeGeometry(BLOCK_SIZE / 4, BLOCK_SIZE / 4, BLOCK_SIZE / 4);
        let itemtexture = new THREE.ImageUtils.loadTexture("img/item02.png");
        let itemmaterial = new THREE.MeshPhongMaterial({
            map: itemtexture,
            bumpMap: itemtexture,
            bumpScale: 0.2
        });
        // メッシュする
        let mesh = new THREE.Mesh(itemgeometry, itemmaterial);
        mesh.position.set(BLOCK_SIZE * 21, BLOCK_SIZE / 4, BLOCK_SIZE);
        scene.add(mesh);

        // アイテム2
        let item2geometry = new THREE.CubeGeometry(BLOCK_SIZE / 4, BLOCK_SIZE / 4, BLOCK_SIZE / 4);
        let item2texture = new THREE.ImageUtils.loadTexture("img/item02.png");
        let item2material = new THREE.MeshPhongMaterial({
            map: item2texture,
            bumpMap: item2texture,
            bumpScale: 0.2
        });
        // メッシュする
        let mesh2 = new THREE.Mesh(item2geometry, item2material);
        mesh.position.set(BLOCK_SIZE * 11, BLOCK_SIZE / 4, BLOCK_SIZE * 11);
        scene.add(mesh2);

        // ライト設定
        let light = new THREE.PointLight(0XF0FFFF, 1.5, 300);
        light.position.set(0, BLOCK_SIZE / 2, 0);
        scene.add(light);
        // 均等に明かりを照らす
        let ambient = new THREE.AmbientLight(0X00000);
        scene.add(ambient);
        // カメラ設定
        // PerspectiveCamera 人間が目でみているように映す
        let camera = new THREE.PerspectiveCamera(45, stage_w / stage_h, 1, 10000);
        camera.position.set(0, BLOCK_SIZE / 2, 0);
        // レンダリング設定
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(stage_w, stage_h);
        renderer.setClearColor(0x000000, 1);
        renderer.shadowMapEnabled = true;
        document.getElementById('stage').appendChild(renderer.domElement);

        // プレイヤーの向きとカメラの向きを合わせる
        game.rootScene.addEventListener(enchant.Event.ENTER_FRAME, function () {
            camera.rotation.y = -((player.rotation + 90) * Math.PI / 180);
            camera.position.z = player.y * (BLOCK_SIZE / MAP_BLOCK_SIZE);
            camera.position.x = player.x * (BLOCK_SIZE / MAP_BLOCK_SIZE);
            light.rotation.y = -((player.rotation + 90) * Math.PI / 180);
            light.position.z = player.y * (BLOCK_SIZE / MAP_BLOCK_SIZE);
            light.position.x = player.x * (BLOCK_SIZE / MAP_BLOCK_SIZE);
            renderer.render(scene, camera);
        });
    }
    game.start();
})();