# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

# Destroy all existing records before seeding
puts "Destroying old records..."
Movie.destroy_all
Director.destroy_all
Actor.destroy_all
Review.destroy_all
User.destroy_all

# Generate fake users
puts "Creating users..."
5.times do
  User.create!(
    username: Faker::Name.name,
    email: Faker::Internet.unique.email,
    password: "password",
  )
end

# Generate fake movies with associated directors and actors
puts "Generating fake movies..."
50.times do
  Movie.create!(
    title: Faker::Movie.unique.title,
    description: Faker::Lorem.paragraph,
  )
end

# Generate fake reviews with associated movies and users
puts "Generating fake reviews..."
200.times do
  Review.create!(
    comments: Faker::Lorem.paragraph,
    rating: rand(1..5),
    movie_id: Movie.all.sample,
    user_id: User.all.sample
  )
end

# Generate fake directors
puts "Generating fake directors..."
5.times do
  Director.create!(
    name: Faker::Name.unique.name,
  )
end

# Generate fake actors
puts "Generating fake actors..."
20.times do
  Actor.create!(
    name: Faker::Name.unique.name,
  )
end

puts "Seeding done!"

# Create 1 admin user with fake data


# Create 50 movies with fake data

  
  # Assign 1 to 5 directors to each movie
  # movie.director << Director.order("RANDOM()").limit(rand(1..5))
  
  # Assign 1 to 10 actors to each movie
  # movie.actor << Actor.order("RANDOM()").limit(rand(1..10))
  
  # Create 1 to 10 reviews for each movie


