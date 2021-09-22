# frozen_string_literal: true

# Public: Serializer for review model
class ReviewSerializer < ActiveModel::Serializer
  attributes :title, :description, :score, :airline_id, :id
end
