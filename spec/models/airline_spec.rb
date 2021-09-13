# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Airline, type: :model do
  it 'is valid with valid attributes' do
    expect(Airline.new(name: 'test', image_url: 'test/url')).to be_valid
  end

  it 'is not valid without a name' do
    test_airline = Airline.new(name: nil, image_url: 'test/url')
    expect(test_airline).to_not be_valid
  end

  it 'is not valid without an image_url' do
    test_airline = Airline.new(name: 'test', image_url: nil)
    expect(test_airline).to_not be_valid
  end

  it 'is should slugify the name' do
    test_airline = Airline.new(name: 'test/name/test/name', image_url: 'test/url')
    test_airline.slugify
    expect(test_airline.slug).to eq('test-name-test-name')
  end
end
