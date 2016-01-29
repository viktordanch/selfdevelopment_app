class Product < ActiveRecord::Base
  belongs_to :category, foreign_key: :category_path, primary_key: 'category_path'
  has_many :product_images

  def self.open_spreadsheet(file)

    case File.extname(file.original_filename)
      when ".csv" then Roo::CSV.new(file.path, csv_options: {col_sep: "^", quote_char: '"' })
      when ".xls" then Excel.new(file.path, nil, :ignore)
      when ".xlsx" then Excelx.new(file.path, nil, :ignore)
      else raise "Unknown file type: #{file.original_filename}"
    end
  end

  def self.import_description(file)
    spreadsheet = open_spreadsheet(file)

    header = spreadsheet.row(1)
    rows_range = (2..spreadsheet.last_row)
    rows_range.each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]

      product = where(product_sku: row['product_sku']).first
      if product
        return { error_row: row } unless product.save
      end
    end

    { loaded_rows_count: rows_range.count }
  end

  def self.import(file)
    spreadsheet = open_spreadsheet(file)

    header = spreadsheet.row(1)
    rows_range = (2..spreadsheet.last_row)
    rows_range.each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]

      if where(row).blank?
        return { error_row: row } unless create(row)
      end
    end

    { loaded_rows_count: rows_range.count }
  end
end
