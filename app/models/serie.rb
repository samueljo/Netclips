class Serie < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/temp_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
