# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Review, type: :model do
  it 'is valid with valid attributes' do
    expect(Review.new(title: 'test', description: 'test', score: 3, airline: Airline.new)).to be_valid
  end

  it 'is not valid without a title' do
    test_review = Review.new(title: nil, description: 'test', score: 3, airline: Airline.new)
    expect(test_review).to_not be_valid
  end

  it 'is not valid without a description' do
    test_review = Review.new(title: 'test', description: nil, score: 3, airline: Airline.new)
    expect(test_review).to_not be_valid
  end

  it 'is not valid without a score' do
    expect do
      Review.new(title: 'test', description: test, score: nil, airline: Airline.new)
    end.to raise_error(ArgumentError)
  end

  it 'is not valid with a score less than one' do
    test_review = Review.new(title: 'test', description: 'test', score: 0, airline: Airline.new)
    expect(test_review).to_not be_valid
  end

  it 'is not valid with a score greater than one' do
    test_review = Review.new(title: 'test', description: 'test', score: 6, airline: Airline.new)
    expect(test_review).to_not be_valid
  end

  it 'is not valid without being associated to an airline model' do
    test_review = Review.new(title: 'test', description: 'test', score: 3, airline: nil)
    expect(test_review).to_not be_valid
  end
end
