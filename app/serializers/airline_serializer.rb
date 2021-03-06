# frozen_string_literal: true

# Public: Serializer for airline model
class AirlineSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :avg_score

  has_many :reviews
end
