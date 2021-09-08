# frozen_string_literal: true

class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  # get average score value for airline
  def avg_score
    reviews.average(:score).round(2).to_f
  end
end
