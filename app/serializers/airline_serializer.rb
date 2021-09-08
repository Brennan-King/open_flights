# frozen_string_literal: true

class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :slug

  has_many :reviews
end
