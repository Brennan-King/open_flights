# frozen_string_literal: true

class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :airline_id
end
