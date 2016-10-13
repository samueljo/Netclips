# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161013014217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "current_watchings", force: :cascade do |t|
    t.integer  "episode_id", null: false
    t.integer  "user_id",    null: false
    t.integer  "serie_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "current_watchings", ["serie_id"], name: "index_current_watchings_on_serie_id", using: :btree
  add_index "current_watchings", ["user_id"], name: "index_current_watchings_on_user_id", using: :btree

  create_table "episodes", force: :cascade do |t|
    t.integer  "serie_id",                       null: false
    t.string   "title",                          null: false
    t.text     "summary",                        null: false
    t.string   "video_url",                      null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "episode_number",     default: 1
  end

  add_index "episodes", ["serie_id"], name: "index_episodes_on_serie_id", using: :btree
  add_index "episodes", ["title"], name: "index_episodes_on_title", using: :btree

  create_table "favorites", force: :cascade do |t|
    t.integer  "serie_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["serie_id"], name: "index_favorites_on_serie_id", using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "genres", ["name"], name: "index_genres_on_name", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "serie_id",               null: false
    t.integer  "user_id",                null: false
    t.integer  "rating",     default: 0
    t.text     "body"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "reviews", ["serie_id"], name: "index_reviews_on_serie_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "serie_genres", force: :cascade do |t|
    t.integer  "serie_id",   null: false
    t.integer  "genre_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "serie_genres", ["genre_id"], name: "index_serie_genres_on_genre_id", using: :btree
  add_index "serie_genres", ["serie_id"], name: "index_serie_genres_on_serie_id", using: :btree

  create_table "series", force: :cascade do |t|
    t.string   "title",                          null: false
    t.text     "description",                    null: false
    t.integer  "year",                           null: false
    t.integer  "avg_rating",         default: 0
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "series", ["title"], name: "index_series_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.boolean  "admin",           default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "username",                        null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
