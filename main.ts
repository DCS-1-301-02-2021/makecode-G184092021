scene.setBackgroundColor(8)
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    1 1 1 . . . . . . . . . . . . .
    . 1 1 1 1 . . . . . . . . . . .
    2 1 1 1 f 1 . . . . . . . . . .
    2 5 1 1 f f 1 . . . . . . . . .
    2 5 1 1 1 1 1 1 . . . . . . . .
    2 5 1 1 1 1 1 . . . . . . . . .
    2 1 1 1 1 1 . . . . . . . . . .
    . 1 1 1 . . . . . . . . . . . .
    1 1 1 . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setStayInScreen(true)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function on_a_update() {
    let bogy = sprites.create(assets.image`bogy`, SpriteKind.Enemy)
    bogy.setVelocity(-100, randint(-30, 30))
    bogy.y = randint(0, scene.screenHeight())
    bogy.left = scene.screenWidth()
    bogy.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_crash(sprite: Sprite, othersprite: Sprite) {
    othersprite.destroy()
    info.changeLifeBy(-1)
})
