# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

# Create 10 directors with fake data
puts "Creating directors..."
10.times do
  Director.create(
    name: Faker::Name.name,
    bio: Faker::Lorem.paragraph,
    image: Faker::LoremFlickr.image
  )
end

# Create 20 actors with fake data
puts "Creating actors..."
20.times do
  Actor.create(
    name: Faker::Name.name,
    bio: Faker::Lorem.paragraph,
    image: Faker::LoremFlickr.image
  )
end

# Create 5 admin users with fake data

5.times do
  Admin.create(
    email: Faker::Internet.email,
    username: Faker::Internet.username,
    password: Faker::Internet.password
  )
end

# Create 50 movies with fake data
puts "Creating movies..."
50.times do
  movie = Movie.create(
    title: Faker::Movie.title,
    description: Faker::Lorem.paragraph,
    release_date: Faker::Date.between(from: '1990-01-01', to: '2023-03-29'),
    image: Faker::LoremFlickr.image,
    price: Faker::Commerce.price(range: 0..50.0)
  )
  
  # Assign 1 to 5 directors to each movie
  movie.directors << Director.order("RANDOM()").limit(rand(1..5))
  
  # Assign 1 to 10 actors to each movie
  movie.actors << Actor.order("RANDOM()").limit(rand(1..10))
  
  # Create 1 to 10 reviews for each movie
  puts "Creating reviews..."
  rand(1..10).times do
    Review.create(
      movie: movie,
      user_name: Faker::Name.name,
      comment: Faker::Lorem.paragraph,
      rating: rand(1..5)
    )
  end
end

