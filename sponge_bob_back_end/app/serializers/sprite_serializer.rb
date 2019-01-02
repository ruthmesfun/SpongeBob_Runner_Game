class SpriteSerializer < ActiveModel::Serializer
  has_many :assets
  attributes :id, :item, :assets
end
