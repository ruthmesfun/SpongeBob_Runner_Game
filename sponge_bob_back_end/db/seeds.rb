# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sponge_bob_move = Sprite.create(name:"sponge_bob_move", item:"player")
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-0.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-1.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-2.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-3.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-4.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-5.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-6.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-7.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-8.png' , sprite: sponge_bob_move)
Asset.create(url:'app/assets/images/sponge_bob/moving/moving_spongebob-9.png' , sprite: sponge_bob_move)

# sponge_bob_start = Sprite.new(name:"sponge_bob_start", type:"player")
# sponge_bob_won = Sprite.new(name:"sponge_bob_won", type:"player")
# sponge_bob_lost = Sprite.new(name:"sponge_bob_lost", type:"player")
