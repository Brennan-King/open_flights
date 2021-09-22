# frozen_string_literal: true

# Public: Model representing an airline
class Airline < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates_presence_of :name
  validates_presence_of :image_url

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  # Public: Get average score value for airline
  #
  # Returns the average score
  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end
end
