class CreateMailTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :mail_templates do |t|
      t.string :name
      t.string :subject

      t.timestamps
    end
  end
end
