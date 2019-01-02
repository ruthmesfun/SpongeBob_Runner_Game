# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sponge_bob_move = Sprite.new(name:"sponge_bob_move", type:"player")
sponge_bob_moving_1 = Asset.new(url: 'app/assets/images/sponge_bob/moving/moving spongebob-1 (dragged).tiff', )