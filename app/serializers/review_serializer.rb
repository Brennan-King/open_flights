# frozen_string_literal: true

class ReviewSerializer < ActiveModel::Serializer
  attributes :title, :description, :score, :airline_id, :id
end
