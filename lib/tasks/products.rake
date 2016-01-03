namespace :products do
  desc "generate default values"
  task generate_default: :environment do
    departments = ['Кухня', 'Гостиная', 'Спальня', 'Ванная',
                   'Детская', 'Рабочее место', 'Садовая мебель']

    sections = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5',
                'section 6', 'section 7', 'section 8', 'section 9', 'section 10']

    # Product.all.destroy_all
    # Section.all.destroy_all
    # Department.all.destroy_all

    departments.each do |department|
      _department = Department.create(name: department)

      sections.each do |section|
        _section = _department.sections.create(name: section)

        (1..8).each do |_product|
          product = _product.to_s
          _section.products.create(title: 'title ' + product,
                         short_description: 'short description for product ' + product,
                         description: ('Full description for product ' + product) * 8,
                         image: 'product.JPG'
          )
        end
      end
    end
  end
end

