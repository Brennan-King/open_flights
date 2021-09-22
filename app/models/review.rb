# frozen_string_literal: true

# Public: Model representing an airline review
class Review < ApplicationRecord
  belongs_to :airline
  validates_presence_of :title
  validates_presence_of :description
  validates_presence_of :score
  validates_inclusion_of :score, in: 1..5
end
