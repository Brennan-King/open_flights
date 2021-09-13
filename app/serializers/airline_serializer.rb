# frozen_string_literal: true

class AirlineSerializer < ActiveModel::Serializer
  attributes :name, :image_url, :slug

  has_many :reviews
end
