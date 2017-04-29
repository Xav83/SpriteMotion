# SpriteMotion

## Format

To format the files easily, just use the command `make format` at the root of the repository.

### HTML

All HTML files are formatted using [Tidy](http://tidy.sourceforge.net/) before being commited.
The config file is `.tidy` file.
If any error occurs during the formating, check the `.tidy_errors.txt` file.

### CSS

All the CSS files are formatted using [CSSTidy](http://csstidy.sourceforge.net/) before being commited.
All parameter are the default ones, except for `--sort_properties` which is enabled.
