class RemoveNullFromReviewBody < ActiveRecord::Migration
  def change
    change_column :reviews, :body, :text, null: false
  end
end
