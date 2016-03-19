# Compass configuration
# See compass-style.org/help/documentation/configuration-reference

environment = :development # :production or :development
encoding = "utf-8"

css_dir = "dist/stylesheet/"
sass_dir = "src/stylesheet"
preferred_syntax = ":scss"
relative_assets = true

sourcemap = (environment == :production) ? false : true
output_style = (environment == :production) ? :compressed : :expanded # One of: :nested, :expanded, :compact, or :compressed.
