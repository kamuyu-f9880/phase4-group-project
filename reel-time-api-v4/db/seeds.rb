require 'faker'

# Create 10 directors with fake data
puts "Creating directors..."
10.times do
  Director.create(
    name: Faker::Name.name,
  )
end

# Create 20 actors with fake data
puts "Creating actors..."
20.times do
  Actor.create(
    name: Faker::Name.name,
  )
end

# Create 10 movies with fake data
puts "Creating movies..."
10.times do
  movie = Movie.create(
    title: Faker::Movie.title,
    description: Faker::Lorem.paragraph,
    director_id: Director.all.sample.id,
    actor_id: Actor.all.sample.id
    
  )
puts "actor id stuff"
  # Assign 1 to 5 actors to each movie
  actor_ids = Actor.all.sample(rand(1..5)).map(&:id)
  movie.actor_ids = actor_ids

  # Create 1 to 10 reviews for each movie
  puts "Creating reviews..."
  rand(1..10).times do
    Review.create(
      movie: movie,
      user_id: rand(1..10),
      comment: Faker::Lorem.paragraph,
      rating: rand(1..5)
    )
  end
end
